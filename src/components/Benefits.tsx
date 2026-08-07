import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const benefits = [
  {
    number: "01",
    title: "Cuidado planejado",
    text: "A avaliação da pele orienta um plano de cuidados adaptado às suas necessidades.",
  },
  {
    number: "02",
    title: "Extração mais confortável",
    text: "A dupla emoliência prepara a pele e facilita uma extração cuidadosa.",
  },
  {
    number: "03",
    title: "Equilíbrio da pele",
    text: "Cada etapa respeita a barreira cutânea para preservar conforto e proteção.",
  },
  {
    number: "04",
    title: "Ativos profissionais",
    text: "Cosméticos profissionais complementam o protocolo conforme a avaliação da pele.",
  },
  {
    number: "05",
    title: "Recursos complementares",
    text: "LED ou laser podem complementar o atendimento quando houver indicação profissional.",
  },
];

export function Benefits() {
  return (
    <MotionSection
      id="diferenciais"
      aria-labelledby="benefits-title"
      className="scroll-mt-6 py-14 md:py-[74px]"
    >
      <Container>
        <div className="mb-[26px] grid gap-4">
          <Eyebrow>Diferenciais</Eyebrow>
          <Heading id="benefits-title">Muito além da extração de cravos</Heading>
          <p className="max-w-[65ch] text-text-secondary">
            Não é uma limpeza de pele padronizada: o atendimento é individualizado, cuidadoso e adaptado às necessidades de cada pele.
          </p>
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

      </Container>
    </MotionSection>
  );
}
