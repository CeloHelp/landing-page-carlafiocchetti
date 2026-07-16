import Image from "next/image";
import { Button } from "./Button";
import { Container, Eyebrow, Heading, Lead } from "./Section";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative py-7 pb-[58px] before:pointer-events-none before:absolute before:right-[-64px] before:bottom-6 before:h-[220px] before:w-[220px] before:rounded-full before:border before:border-border before:opacity-80 md:pt-[42px]"
    >
      <Container className="grid items-center gap-[34px] md:grid-cols-[1fr_0.86fr] lg:grid-cols-[minmax(0,1.03fr)_minmax(420px,0.8fr)] lg:gap-[58px]">
        <div className="relative z-[2] grid gap-[22px]">
          <Eyebrow>Estética facial personalizada</Eyebrow>
          <Heading id="hero-title" level={1}>
            Limpeza de Pele Profissional em Araraquara
          </Heading>
          <Lead>
            Um cuidado personalizado para remover impurezas, melhorar a textura e devolver à sua pele limpeza, frescor e renovação.
          </Lead>
          <div className="grid justify-items-start gap-3">
            <Button source="hero" ariaLabel="Agendar limpeza de pele pelo WhatsApp">
              Agendar pelo WhatsApp
            </Button>
            <p className="text-[13px] font-semibold tracking-[0.01em] text-[color-mix(in_srgb,var(--foreground)_76%,var(--surface))]">
              Atendimento personalizado • Mais de 8 anos de experiência • Avaliação 5 estrelas
            </p>
          </div>
        </div>

        <figure className="relative rounded-[18px] border border-border bg-surface p-2.5 shadow-soft">
          <Image
            src="/assets/carla_limpeza_pele.jpg"
            alt="Carla Fiocchetti realizando limpeza de pele profissional em ambiente de estética"
            width={960}
            height={1200}
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 44vw, calc(100vw - 32px)"
            className="aspect-[4/5] w-full rounded-brand object-cover object-center md:aspect-[4/5.15]"
          />
          <figcaption className="absolute right-[22px] bottom-[22px] left-[22px] rounded-brand border border-border bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-4 py-3.5 text-[13px] font-bold tracking-[0.01em] text-foreground">
            Cuidado real, próximo e adaptado à sua pele.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
