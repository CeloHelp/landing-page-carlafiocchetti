import path from "node:path";
import { pathToFileURL } from "node:url";

const playwrightUrl = pathToFileURL(
  path.join(process.env.CARLA_PLAYWRIGHT_PATH, "index.mjs"),
).href;
const { chromium } = await import(playwrightUrl);

const baseUrl = process.env.CARLA_BASE_URL ?? "http://127.0.0.1:3100/";
const expectedMessage =
  "Olá! Encontrei a página da Carla Fiocchetti sobre limpeza de pele em Araraquara e gostaria de saber mais sobre o atendimento.";
const expectedSources = [
  "hero_primary",
  "pricing_section",
  "authority_section",
  "faq",
  "final_cta",
  "floating_whatsapp",
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

function maskNumber(number) {
  if (number.length < 6) return "<invalid>";
  return `${number.slice(0, 4)}…${number.slice(-4)}`;
}

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CARLA_BROWSER_PATH,
  args: ["--disable-gpu", "--disable-software-rasterizer"],
});

const results = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      colorScheme: "light",
    });

    await context.addInitScript(() => {
      window.localStorage.setItem("carla_cookie_consent", "granted");
    });

    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 30_000 });
    await page.getByRole("heading", {
      level: 1,
      name: "Limpeza de Pele Profissional em Araraquara",
    }).waitFor();

    const whatsappLinks = page.locator('a[href^="https://wa.me/"]');
    const linkCount = await whatsappLinks.count();
    const ctas = [];

    for (let index = 0; index < linkCount; index += 1) {
      const link = whatsappLinks.nth(index);
      const href = await link.getAttribute("href");
      const ariaLabel = await link.getAttribute("aria-label");
      const visibleText = (await link.innerText()).trim();
      const url = new URL(href);
      const message = url.searchParams.get("text");

      await page.evaluate(() => {
        window.dataLayer = [];
        window.__validationGtagCalls = [];
        window.gtag = (...args) => window.__validationGtagCalls.push(args);
      });

      await link.evaluate((element) => {
        element.addEventListener(
          "click",
          (event) => event.preventDefault(),
          { once: true },
        );
      });
      await link.click();

      const tracking = await page.evaluate(() => ({
        dataLayer: window.dataLayer,
        gtagCalls: window.__validationGtagCalls,
      }));
      const dataLayerEvent = tracking.dataLayer.find(
        (entry) => entry.event === "whatsapp_click",
      );
      const gtagEvent = tracking.gtagCalls.find(
        (entry) => entry[0] === "event" && entry[1] === "whatsapp_click",
      );
      const source = dataLayerEvent?.cta_source;

      ctas.push({
        ariaLabel,
        visibleText,
        source,
        number: maskNumber(url.pathname.replaceAll("/", "")),
        validNumber: /^\/[1-9]\d{11,14}$/.test(url.pathname),
        messageMatches: message === expectedMessage,
        dataLayerEventCount: tracking.dataLayer.filter(
          (entry) => entry.event === "whatsapp_click",
        ).length,
        sourceMatchesInDataLayer:
          dataLayerEvent?.source === source && dataLayerEvent?.cta_source === source,
        gtagEventCount: tracking.gtagCalls.filter(
          (entry) => entry[0] === "event" && entry[1] === "whatsapp_click",
        ).length,
        sourceMatchesInGtag:
          gtagEvent?.[2]?.event_label === source &&
          gtagEvent?.[2]?.cta_source === source,
      });
    }

    const protocolLink = page.getByRole("link", {
      name: "Ver protocolos e valores",
      exact: true,
    });
    const anchorHref = await protocolLink.getAttribute("href");
    await protocolLink.click();
    await page.waitForURL(/#protocolos-valores$/);
    await page.waitForFunction(() => {
      const target = document.getElementById("protocolos-valores");
      if (!target) return false;

      const top = target.getBoundingClientRect().top;
      return top >= 0 && top <= 32;
    });
    const anchorState = await page.evaluate(() => {
      const target = document.getElementById("protocolos-valores");
      return {
        hash: window.location.hash,
        targetExists: Boolean(target),
        targetTop: target ? Math.round(target.getBoundingClientRect().top) : null,
        scrollY: Math.round(window.scrollY),
      };
    });

    const uniqueSources = [...new Set(ctas.map((cta) => cta.source))];
    results.push({
      viewport: viewport.name,
      dimensions: `${viewport.width}x${viewport.height}`,
      ctaCount: ctas.length,
      expectedSourcesPresent: expectedSources.every((source) =>
        uniqueSources.includes(source),
      ),
      duplicateSources: uniqueSources.length !== ctas.length,
      ctas,
      anchor: {
        href: anchorHref,
        ...anchorState,
        passed:
          anchorHref === "#protocolos-valores" &&
          anchorState.hash === "#protocolos-valores" &&
          anchorState.targetExists &&
          anchorState.scrollY > 0 &&
          anchorState.targetTop >= 0 &&
          anchorState.targetTop <= 32,
      },
    });

    await context.close();
  }
} finally {
  await browser.close();
}

const failures = results.flatMap((result) => {
  const issues = [];
  if (result.ctaCount !== expectedSources.length) issues.push("cta_count");
  if (!result.expectedSourcesPresent) issues.push("missing_source");
  if (result.duplicateSources) issues.push("duplicate_source");
  if (!result.anchor.passed) issues.push("anchor");
  for (const cta of result.ctas) {
    if (!cta.validNumber) issues.push(`${cta.source}:number`);
    if (!cta.messageMatches) issues.push(`${cta.source}:message`);
    if (cta.dataLayerEventCount !== 1) issues.push(`${cta.source}:dataLayer_count`);
    if (!cta.sourceMatchesInDataLayer) issues.push(`${cta.source}:dataLayer_source`);
    if (cta.gtagEventCount !== 1) issues.push(`${cta.source}:gtag_count`);
    if (!cta.sourceMatchesInGtag) issues.push(`${cta.source}:gtag_source`);
  }
  return issues.map((issue) => `${result.viewport}:${issue}`);
});

console.log(JSON.stringify({ passed: failures.length === 0, failures, results }, null, 2));
process.exitCode = failures.length === 0 ? 0 : 1;
