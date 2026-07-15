import { MotionSection } from "./MotionSection";
import { Button } from "./Button";
import { Container, Eyebrow, Heading } from "./Section";

const faqs = [
  {
    question: "O que torna a limpeza de pele da clínica diferente?",
    answer: [
      "Nossa limpeza de pele vai muito além da extração. Cada atendimento começa com uma análise individual da pele e recebe um protocolo personalizado, que pode associar LED/Laser e ativos cosméticos de alta performance quando indicado.",
      "O objetivo é proporcionar uma limpeza eficaz, confortável e alinhada às necessidades de cada pele.",
    ],
  },
  {
    question: "A limpeza agride a pele ou deixa muitas marcas?",
    answer: [
      "O protocolo é realizado respeitando a barreira cutânea e evitando agressões desnecessárias.",
      "Utilizamos dupla emoliência para facilitar a extração dos cravos e reduzir o trauma durante o procedimento. Pode ocorrer uma leve vermelhidão após a sessão, mas ela normalmente desaparece em poucas horas.",
    ],
  },
  {
    question: "A limpeza é personalizada para cada tipo de pele?",
    answer: [
      "Sim. Cada pele possui características, sensibilidades e necessidades diferentes.",
      "Antes do procedimento, é realizada uma análise para definir as técnicas, os cosméticos e os cuidados mais adequados para cada pessoa. Por isso, o protocolo não é igual para todos os atendimentos.",
    ],
  },
  {
    question: "Os produtos utilizados fazem diferença no resultado?",
    answer: [
      "Sim. Além da técnica utilizada, a qualidade dos cosméticos influencia a segurança, o conforto e os resultados do procedimento.",
      "Trabalhamos com cosméticos profissionais de alta performance, como Adcos, Bioage e Ellementti, escolhidos de acordo com as necessidades de cada pele. Essa seleção faz parte do nosso protocolo personalizado e contribui para um tratamento mais seguro, confortável e eficaz.",
    ],
  },
  {
    question: "Com que frequência devo fazer a limpeza de pele?",
    answer: [
      "Em geral, a limpeza de pele pode ser realizada a cada 30 a 60 dias.",
      "No entanto, a frequência ideal depende do tipo de pele, da quantidade de comedões, da oleosidade, da rotina de cuidados e dos objetivos de cada pessoa. A recomendação é definida após a avaliação.",
    ],
  },
  {
    question: "Quem realiza o procedimento?",
    answer: [
      "O atendimento é realizado por Carla Fiocchetti, esteticista e graduanda em Biomedicina, com formação contínua em tratamentos faciais e protocolos personalizados.",
      "Cada atendimento é conduzido com atenção individual, técnica e foco na saúde da pele.",
    ],
  },
];

export function FAQSection() {
  return (
    <MotionSection
      aria-labelledby="faq-title"
      className="py-14 md:py-[74px]"
    >
      <Container>
        <div className="mb-[26px] grid gap-4">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <Heading id="faq-title">Perguntas Frequentes</Heading>
          <p className="max-w-[65ch] text-[clamp(17px,4vw,21px)] leading-[1.55] text-[color-mix(in_srgb,var(--foreground)_82%,var(--surface))]">
            Reunimos as principais dúvidas sobre a limpeza de pele para que você
            conheça melhor o procedimento e se sinta mais segura antes do
            atendimento.
          </p>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="grid gap-3 rounded-brand border border-border bg-surface p-6 shadow-card"
            >
              <Heading level={3}>{faq.question}</Heading>
              <div className="grid gap-3 text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-6 grid gap-4 rounded-brand border border-border bg-[color-mix(in_srgb,var(--surface)_78%,var(--background))] p-6 shadow-card md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div className="grid gap-2">
            <Heading level={3}>Ainda ficou com alguma dúvida?</Heading>
            <p className="max-w-[62ch] text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
              Cada pele possui necessidades diferentes. Converse diretamente com
              a Carla pelo WhatsApp para esclarecer suas dúvidas e descobrir qual
              protocolo é mais indicado para você.
            </p>
          </div>
          <Button
            source="faq"
            variant="secondary"
            className="w-full md:w-auto"
            ariaLabel="Falar com a Carla pelo WhatsApp"
          >
            Falar com a Carla pelo WhatsApp
          </Button>
        </aside>
      </Container>
    </MotionSection>
  );
}
