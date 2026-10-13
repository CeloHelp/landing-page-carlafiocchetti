import { CookiePreferencesButton } from "./CookiePreferencesButton";
import { Container } from "./Section";
export function Footer() {
  return <footer id="localizacao" className="scroll-mt-6 bg-background py-8 pb-28 md:pb-8">
    <Container className="grid gap-3">
      <p className="font-serif text-2xl">Carla Fiocchetti</p>
      <address className="text-sm not-italic text-text-secondary">Estética facial personalizada<br />R. Maj. Carvalho Filho, 2307<br />Jardim Primavera · Araraquara – SP</address>
      <a className="w-fit text-sm underline underline-offset-4" href="https://www.google.com/maps/dir/?api=1&destination=Carla%20Fiocchetti%2C%20R.%20Maj.%20Carvalho%20Filho%2C%202307%2C%20Araraquara%20-%20SP" target="_blank" rel="noopener noreferrer">Ver rota ↗</a>
      <CookiePreferencesButton />
    </Container>
  </footer>;
}
