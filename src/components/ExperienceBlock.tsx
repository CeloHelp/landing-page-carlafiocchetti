import Image from "next/image";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const items = [
  {
    title: "Atenção desde o primeiro contato",
    text: "O atendimento começa em um espaço acolhedor e preparado, com tempo para compreender suas queixas e o que você busca para a sua pele.",
  },
  {
    title: "Clareza durante o procedimento",
    text: "A Carla conduz cada etapa com calma, transparência e explicações claras. A atenção aos detalhes e o cuidado na execução ajudam a transmitir confiança, inclusive para quem possui pele sensível.",
  },
  {
    title: "Orientações para os próximos cuidados",
    text: "Ao final da limpeza, você recebe orientações para os dias seguintes e entende quais cuidados podem ajudar a manter a pele limpa, hidratada e equilibrada.",
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
            loading="eager"
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
            Desde a chegada, o atendimento é conduzido para que você se sinta à vontade, compreenda cada etapa e tenha tranquilidade durante o procedimento.
          </p>
          <ul className="mt-2 grid list-none divide-y divide-border/70 p-0">
            {items.map((item) => (
              <li
                key={item.title}
                className="py-3 first:pt-0 last:pb-0"
              >
                <h3 className="text-[15px] font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </MotionSection>
  );
}
