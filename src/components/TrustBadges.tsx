import { MotionSection } from "./MotionSection";
import { Container } from "./Section";

const badges = [
  { title: "+8 anos", text: "de atuação em estética facial" },
  { title: "Cuidado individual", text: "atendimento personalizado" },
  { title: "5 estrelas", text: "avaliação no Google" },
];

export function TrustBadges() {
  return (
    <MotionSection aria-label="Credibilidade" className="py-14 md:py-[74px]">
      <Container className="grid gap-3 md:grid-cols-3">
        {badges.map((badge) => (
          <article
            key={badge.title}
            className="rounded-brand border border-border bg-surface p-5 shadow-card"
          >
            <strong className="block font-serif text-[28px] font-semibold leading-[1.1] tracking-[-0.015em]">
              {badge.title}
            </strong>
            <span className="mt-1.5 block text-sm font-semibold text-[color-mix(in_srgb,var(--foreground)_76%,var(--surface))]">
              {badge.text}
            </span>
          </article>
        ))}
      </Container>
    </MotionSection>
  );
}
