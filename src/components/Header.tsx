import Image from "next/image";
import { Container } from "./Section";

export function Header() {
  return (
    <header className="relative z-10 py-[18px] pb-2.5">
      <Container className="flex items-center justify-center">
        <a
          href="#inicio"
          aria-label="Carla Fiocchetti - início"
          className="inline-flex min-h-11 items-center"
        >
          <Image
            src="/assets/logo_horizontal_transparente.png"
            alt="Carla Fiocchetti Estética Facial Personalizada"
            width={380}
            height={132}
            priority
            className="mx-auto h-auto w-[min(280px,82vw)] sm:w-[300px] lg:w-[340px]"
          />
        </a>
      </Container>
    </header>
  );
}
