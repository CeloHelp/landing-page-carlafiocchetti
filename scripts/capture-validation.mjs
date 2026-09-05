import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const playwrightUrl = pathToFileURL(
  path.join(process.env.CARLA_PLAYWRIGHT_PATH, "index.mjs"),
).href;
const { chromium } = await import(playwrightUrl);

const dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = "http://127.0.0.1:3100/";
const outputDir = path.resolve(dirname, "..", "screenshots");

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CARLA_BROWSER_PATH,
  args: ["--disable-gpu", "--disable-software-rasterizer"],
});

try {
  for (const viewport of viewports) {
    for (const section of ["hero", "protocolos"]) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
        colorScheme: "light",
      });
      await context.addInitScript(() => {
        window.localStorage.setItem("carla_cookie_consent", "denied");
      });

      const page = await context.newPage();
      const url = section === "hero" ? baseUrl : `${baseUrl}#protocolos-valores`;
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
      await page.locator("#hero-title").waitFor({ state: "visible" });

      if (section === "hero") {
        await page.waitForFunction(() => {
          const image = document.querySelector("figure img");
          return image?.complete && image.naturalWidth > 0;
        });
      }
      await page.waitForTimeout(600);

      if (section === "hero") {
        await page.screenshot({
          path: path.join(outputDir, `validation-v2-${viewport.name}-hero.png`),
        });
      } else {
        const protocols = page.locator("#protocolos-valores");
        await protocols.scrollIntoViewIfNeeded();
        await page.waitForTimeout(600);
        await protocols.screenshot({
          path: path.join(outputDir, `validation-v2-${viewport.name}-protocolos.png`),
        });
      }

      await context.close();
    }
  }
} finally {
  await browser.close();
}
