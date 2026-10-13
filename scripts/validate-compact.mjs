import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
const { chromium } = await import(pathToFileURL(path.join(process.env.CARLA_PLAYWRIGHT_PATH, "index.mjs")).href);
const browser = await chromium.launch({headless:true, executablePath:process.env.CARLA_BROWSER_PATH});
const base = process.env.CARLA_BASE_URL || "http://127.0.0.1:3100";
const message = "Olá! Tenho interesse em fazer uma limpeza de pele. Gostaria de saber os valores e horários disponíveis.";
try {
 for (const width of [390, 320, 1440]) {
  const context = await browser.newContext({viewport:{width,height:844}});
  await context.route(/googletagmanager|google-analytics/, r=>r.abort());
  const page=await context.newPage();
  const errors=[];page.on("pageerror",e=>errors.push(e.message));
  await page.goto(base,{waitUntil:"networkidle"});
  await page.getByRole("heading",{name:"Limpeza de pele em Araraquara",exact:true}).waitFor();
  await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,"horizontal overflow");
  const hero=page.locator('[data-whatsapp-cta="hero_primary"]');
  assert.ok((await hero.boundingBox()).y+(await hero.boundingBox()).height<650,"early CTA");
  for (const link of await page.locator("[data-whatsapp-cta]").all()) {
   const url=new URL(await link.getAttribute("href"));
   assert.equal(url.hostname,"wa.me");
   assert.equal(url.pathname,"/5516992626844");
   assert.equal(url.searchParams.get("text"),message);
  }
  await page.getByRole("button",{name:"Recusar",exact:true}).click();
  assert.equal(await page.evaluate(()=>localStorage.getItem("carla_cookie_consent")),"denied");
  assert.equal(await page.locator("[data-whatsapp-bar]").count(),0);
  await page.locator("#protocolos-valores").scrollIntoViewIfNeeded();
  if(width<768) await page.locator("[data-whatsapp-bar]").waitFor({state:"visible"});
  else assert.equal(await page.locator("[data-whatsapp-bar]:visible").count(),0);
  await page.locator("summary").click();
  assert.equal(await page.locator("details").getAttribute("open"),"");
  await page.locator("summary").click();
  await page.locator('[data-whatsapp-cta="faq_final"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  assert.equal(await page.locator("[data-whatsapp-bar]:visible").count(),0,"hide when final CTA visible");
  await page.getByRole("button",{name:"Preferências de cookies"}).click();
  await page.locator("[data-consent-banner]").waitFor({state:"visible"});
  await page.locator("#protocolos-valores").scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  assert.equal(await page.locator("[data-whatsapp-bar]").count(),0,"cookies suppress sticky CTA");
  await page.getByRole("button",{name:"Aceitar",exact:true}).click();
  assert.equal(await page.evaluate(()=>localStorage.getItem("carla_cookie_consent")),"granted");
  // Exercise the React click handler without opening WhatsApp.
  await hero.evaluate(el=>{
   el.addEventListener("click",event=>event.preventDefault(),{once:true});
   el.dispatchEvent(new MouseEvent("click",{bubbles:true,cancelable:true}));
  });
  assert.equal(await page.evaluate(()=>window.dataLayer.filter(e=>e.event==="whatsapp_click"&&e.source==="hero_primary").length),1);
  await page.reload({waitUntil:"networkidle"});
  assert.equal(await page.locator("[data-consent-banner]").count(),0,"persist consent");
  await page.evaluate(()=>scrollTo({top:0,behavior:"instant"}));
  await page.waitForTimeout(200);
  await page.screenshot({path:path.join("screenshots",`compacta-${width}.png`),fullPage:true});
  assert.equal(errors.length,0,errors.join("\n"));
  console.log(`PASS ${width}px: content, links, CTA visibility, details, consent and event`);
  await context.close();
 }
} finally {await browser.close();}
