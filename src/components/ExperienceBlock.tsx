import Image from "next/image";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const items = [
  {
    number: "01",
    title: "Avaliação individualizada",
    text: "Antes do procedimento, a pele é observada para entender necessidades, sensibilidades e cuidados mais adequados.",
  },
  {
    number: "02",
    title: "Higienização e preparação",
    text: "A pele passa por uma limpeza inicial e por uma preparação cuidadosa para facilitar as próximas etapas.",
  },
  {
    number: "03",
    title: "Extração personalizada",
    text: "A extração é realizada de acordo com as condições da pele, respeitando áreas mais sensíveis e evitando um protocolo engessado.",
  },
  {
    number: "04",
    title: "Cuidados finais",
    text: "São aplicados os produtos e recursos indicados para acalmar, proteger e finalizar o procedimento.",
  },
  {
    number: "05",
    title: "Orientações pós-procedimento",
    text: "Ao final, a cliente recebe orientações para manter os cuidados com a pele em casa.",
  },
];

export function ExperienceBlock() {
  return (
    <MotionSection aria-labelledby="experience-title" className="py-14 md:py-[74px]">
      <Container className="grid items-start gap-5 md:grid-cols-[1fr_0.86fr]">
        <figure className="rounded-2xl border border-border bg-surface p-2.5 shadow-card md:translate-y-1">
          <Image
            src="/assets/tratamento_2.jpeg"
            alt="Sala de atendimento preparada para cuidado facial personalizado"
            width={1000}
            height={800}
            sizes="(min-width: 768px) 52vw, calc(100vw - 32px)"
            className="aspect-[4/5] w-full rounded-brand object-cover object-center md:aspect-[5/4]"
          />
        </figure>
        <div className="grid gap-3.5">
          <Eyebrow>EXPERIÊNCIA</Eyebrow>
          <Heading id="experience-title">
            Uma experiência cuidadosa do início ao fim
          </Heading>
          <p className="max-w-[65ch] text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
            Conheça as etapas de um atendimento personalizado, da avaliação às orientações para os cuidados em casa.
          </p>
          <ul className="mt-2 grid list-none divide-y divide-border/70 p-0">
            {items.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[34px_1fr] gap-3 py-3 first:pt-0 last:pb-0"
              >
                <span className="mt-0.5 grid h-[30px] w-[30px] place-items-center rounded-full border border-border text-[11px] font-bold tracking-[0.08em] text-accent">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </MotionSection>
  );
}
