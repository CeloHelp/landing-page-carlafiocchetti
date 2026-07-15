import { Button } from "./Button";
import { MotionSection } from "./MotionSection";
import { Container, Heading } from "./Section";

export function FinalCTA() {
  return (
    <MotionSection aria-labelledby="final-cta-title" className="py-16">
      <Container>
        <div className="relative grid gap-5 overflow-hidden rounded-[18px] bg-foreground p-[clamp(30px,8vw,58px)] text-surface before:absolute before:top-[-70px] before:right-[-42px] before:h-60 before:w-60 before:rounded-full before:border before:border-accent before:opacity-45">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-24px] left-[clamp(24px,6vw,52px)] h-20 w-28 border-t border-l border-surface/20 opacity-70"
          />
          <Heading id="final-cta-title" className="relative z-[1]">
            Agende sua limpeza de pele em Araraquara
          </Heading>
          <p className="relative z-[1] max-w-[65ch] text-[color-mix(in_srgb,var(--surface)_82%,var(--foreground))]">
            Clique no botão abaixo e fale pelo WhatsApp para verificar horários disponíveis e tirar suas dúvidas.
          </p>
          <Button source="final_cta" variant="light" className="relative z-[1] w-fit">
            Quero agendar pelo WhatsApp
          </Button>
        </div>
      </Container>
    </MotionSection>
  );
}
