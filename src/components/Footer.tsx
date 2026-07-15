import Image from "next/image";
import { Container } from "./Section";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground py-8 pt-[34px] text-surface after:pointer-events-none after:absolute after:right-[-34px] after:bottom-[-48px] after:h-[180px] after:w-[180px] after:border after:border-surface/10 after:opacity-70 after:content-['']">
      <Container className="relative z-[1] grid gap-[18px] md:grid-cols-[auto_1fr] md:items-center">
       <Image
          src="/assets/simbolo_cf_claro.png"
          alt="Carla Fiocchetti Estética Facial Personalizada"
          width={200}
          height={200}
          className="h-auto w-[100px]"
        />
        <div className="grid gap-1">
          <strong className="font-serif text-[22px] font-semibold leading-[1.15] tracking-[-0.01em]">
            Carla Fiocchetti
          </strong>
          <span className="text-sm font-semibold text-[color-mix(in_srgb,var(--surface)_74%,var(--foreground))]">
            Estética Facial Personalizada
          </span>
        </div>
      </Container>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-1px] left-[clamp(24px,6vw,68px)] h-12 w-20 border-t border-r border-surface/15 opacity-70"
      />
    </footer>
  );
}
