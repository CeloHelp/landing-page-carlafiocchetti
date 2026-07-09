import Image from "next/image";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const items = [
  "Ambiente limpo, acolhedor e preparado para o atendimento.",
  "Conduta profissional, clara e sem promessas exageradas.",
  "Orientações simples para manter a sensação de pele leve após o cuidado.",
];

export function ExperienceBlock() {
  return (
    <MotionSection aria-labelledby="experience-title" className="py-14 md:py-[74px]">
      <Container className="grid items-center gap-5 md:grid-cols-[1fr_0.86fr]">
        <figure className="rounded-2xl border border-border bg-surface p-2.5 shadow-card">
          <Image
            src="/assets/tratamento_2.jpeg"
            alt="Sala de atendimento preparada para cuidado facial personalizado"
            width={1000}
            height={800}
            loading="eager"
            sizes="(min-width: 768px) 52vw, calc(100vw - 32px)"
            className="aspect-[4/5] w-full rounded-brand object-cover object-center md:aspect-[5/4]"
          />
        </figure>
        <div className="grid gap-3.5">
          <Eyebrow>Experiência</Eyebrow>
          <Heading id="experience-title">
            Um atendimento pensado para você se sentir segura
          </Heading>
          <p className="max-w-[65ch] text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
            Da avaliação inicial ao cuidado final, a proposta é oferecer uma experiência tranquila, com atenção aos detalhes e respeito ao ritmo de cada pele.
          </p>
          <ul className="mt-1 grid list-none gap-2.5 p-0">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))] before:mt-[9px] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </MotionSection>
  );
}
