import { Button } from "./Button";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const benefits = [
  {
    number: "01",
    title: "Avaliação individual da pele",
    text: "Cada pele é analisada antes do procedimento para definir o cuidado mais adequado.",
  },
  {
    number: "02",
    title: "Protocolo personalizado",
    text: "O atendimento é adaptado às necessidades da sua pele, sem seguir um modelo único para todos.",
  },
  {
    number: "03",
    title: "Dupla emoliência",
    text: "Técnica utilizada para facilitar a extração e tornar o processo mais confortável.",
  },
  {
    number: "04",
    title: "Respeito à barreira cutânea",
    text: "A limpeza é feita com cuidado para preservar a saúde e o equilíbrio da pele.",
  },
  {
    number: "05",
    title: "Ativos de alta performance",
    text: "Uso de ativos selecionados para complementar o protocolo com segurança e qualidade.",
  },
  {
    number: "06",
    title: "LED/Laser quando indicado",
    text: "Tecnologias podem ser associadas ao atendimento conforme a avaliação profissional.",
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

        <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="grid gap-3 rounded-brand border border-border bg-surface p-[22px] shadow-card lg:min-h-[236px]"
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
