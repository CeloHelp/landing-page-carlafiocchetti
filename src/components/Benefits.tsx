import { Button } from "./Button";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const benefits = [
  {
    number: "01",
    title: "Avaliação da pele",
    text: "Cada pele é analisada de forma individual para receber o cuidado adequado.",
  },
  {
    number: "02",
    title: "Cuidado personalizado",
    text: "O protocolo é adaptado de acordo com as necessidades da sua pele.",
  },
  {
    number: "03",
    title: "Atendimento profissional",
    text: "Técnica, cuidado e experiência em cada etapa do atendimento.",
  },
  {
    number: "04",
    title: "Ambiente preparado",
    text: "Conforto, segurança e atenção aos detalhes para uma experiência tranquila.",
  },
];

export function Benefits() {
  return (
    <MotionSection aria-labelledby="benefits-title" className="py-14 md:py-[74px]">
      <Container>
        <div className="mb-[26px] grid gap-4">
          <Eyebrow>Diferenciais</Eyebrow>
          <Heading id="benefits-title">Muito além da extração de cravos</Heading>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="grid gap-3 rounded-brand border border-border bg-surface p-[22px] shadow-card lg:min-h-[212px]"
            >
              <span className="grid h-[34px] w-[34px] place-items-center rounded-full border border-border text-xs font-bold tracking-[0.08em] text-accent">
                {benefit.number}
              </span>
              <Heading level={3}>{benefit.title}</Heading>
              <p className="max-w-[65ch] text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
                {benefit.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-[22px]">
          <Button source="benefits">Quero agendar pelo WhatsApp</Button>
        </div>
      </Container>
    </MotionSection>
  );
}
