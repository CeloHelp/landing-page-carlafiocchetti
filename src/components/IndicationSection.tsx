import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading, Lead } from "./Section";

export function IndicationSection() {
  return (
    <MotionSection aria-labelledby="care-title" className="py-14 md:py-[74px]">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-[color-mix(in_srgb,var(--surface)_78%,var(--background))] p-[clamp(28px,7vw,52px)] after:absolute after:top-[22px] after:right-[22px] after:h-px after:w-[72px] after:bg-accent">
          <div className="relative z-[1] grid gap-[18px]">
            <Eyebrow>Indicação</Eyebrow>
            <Heading id="care-title">
              Sua pele precisa de um cuidado mais profundo?
            </Heading>
            <Lead>
              A limpeza de pele é indicada para quem apresenta cravos, oleosidade, poros aparentes ou textura irregular. O atendimento é personalizado, respeitando as necessidades de cada pessoa.
            </Lead>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
