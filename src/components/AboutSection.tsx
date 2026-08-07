import Image from "next/image";
import { Button } from "./Button";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

export function AboutSection() {
  return (
    <MotionSection
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-6 py-14 md:py-[74px]"
    >
      <Container className="grid items-center gap-6 md:grid-cols-[0.86fr_1fr]">
        <figure className="relative rounded-2xl border border-border bg-surface p-2.5 shadow-soft">
          <Image
            src="/assets/carla_institucional_2.jpg"
            alt="Retrato profissional de Carla Fiocchetti no ambiente de atendimento"
            width={900}
            height={1125}
            sizes="(min-width: 768px) 44vw, calc(100vw - 32px)"
            className="aspect-[4/5] w-full rounded-brand object-cover object-center md:aspect-[4/5.15]"
          />
        </figure>
        <div className="grid gap-[18px]">
          <Eyebrow>Quem vai cuidar da sua pele</Eyebrow>
          <Heading id="about-title">
            Atendimento feito por uma profissional presente em cada etapa
          </Heading>
          <p className="max-w-[65ch] text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
            Carla Fiocchetti é esteticista e graduanda em Biomedicina. Seu trabalho une avaliação individualizada, técnica e atenção aos detalhes para oferecer um cuidado adaptado às necessidades de cada pele.
          </p>
          <div className="grid gap-1.5 rounded-brand border border-border bg-surface px-4 py-3.5 shadow-card">
            <span className="text-xs font-bold uppercase leading-tight tracking-[0.08em] text-accent">
              Mais de 100 avaliações no Google
            </span>
            <strong className="font-serif text-xl font-semibold leading-[1.15]" aria-label="5 estrelas">
              <span aria-hidden="true">★★★★★</span> 5 estrelas
            </strong>
            <p className="text-sm text-text-secondary">
              Um atendimento reconhecido pelo cuidado, profissionalismo e atenção aos detalhes.
            </p>
          </div>
          <Button
            source="authority_section"
            className="w-full sm:w-fit"
            ariaLabel="Conversar com nossa equipe pelo WhatsApp"
          >
            Conversar com nossa equipe pelo WhatsApp
          </Button>
        </div>
      </Container>
    </MotionSection>
  );
}
