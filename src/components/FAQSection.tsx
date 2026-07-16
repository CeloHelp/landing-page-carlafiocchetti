import { MotionSection } from "./MotionSection";
import { Button } from "./Button";
import { Container, Eyebrow, Heading } from "./Section";

const faqs = [
  {
    question: "O que torna a limpeza de pele da clínica diferente?",
    answer: [
      "A limpeza de pele é conduzida como um cuidado completo, e não apenas como uma etapa de extração.",
      "O atendimento inclui análise da pele, preparação adequada, extração cuidadosa e finalização com recursos escolhidos para melhorar o conforto e a experiência durante o procedimento. Quando necessário, também podem ser associados LED ou Laser.",
    ],
  },
  {
    question: "A limpeza agride a pele ou deixa muitas marcas?",
    answer: [
      "O procedimento é realizado com técnicas que buscam reduzir agressões desnecessárias.",
      "Utilizamos dupla emoliência para facilitar a extração dos cravos e reduzir o trauma durante o procedimento. Pode ocorrer uma leve vermelhidão após a sessão, mas ela normalmente desaparece em poucas horas.",
    ],
  },
  {
    question: "A limpeza é personalizada para cada tipo de pele?",
    answer: [
      "Sim. Antes de iniciar o procedimento, são observadas características como oleosidade, sensibilidade, quantidade de comedões e condições gerais da pele.",
      "A partir dessa análise, são definidas as etapas, os recursos e os cuidados mais adequados para aquele atendimento. Por isso, a limpeza não segue exatamente o mesmo protocolo para todas as pessoas.",
    ],
  },
  {
    question: "Os produtos utilizados fazem diferença no resultado?",
    answer: [
      "Sim. A qualidade e a escolha correta dos cosméticos influenciam diretamente o conforto, a segurança e a resposta da pele ao procedimento.",
      "Trabalhamos com cosméticos profissionais de alta performance, como Adcos, Bioage e Ellementti, escolhidos de acordo com as necessidades de cada pele. Essa seleção contribui para um tratamento mais seguro, confortável e eficaz.",
    ],
  },
  {
    question: "Com que frequência devo fazer a limpeza de pele?",
    answer: [
      "Em geral, a limpeza de pele pode ser realizada a cada 30 a 60 dias.",
      "Essa frequência pode variar conforme a oleosidade, a quantidade de cravos, a rotina de cuidados, o uso de cosméticos e as necessidades individuais da pele. A orientação ideal é definida durante o atendimento.",
    ],
  },
  {
    question: "O que influencia a duração dos resultados da limpeza de pele?",
    answer: [
      "A manutenção dos resultados depende das características da pele, da rotina de cuidados em casa, dos cosméticos utilizados e da frequência dos atendimentos.",
      "Hábitos como higienização adequada, uso de produtos indicados para o tipo de pele e proteção solar ajudam a preservar por mais tempo a sensação de limpeza, maciez e equilíbrio da pele.",
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
            conheça melhor o procedimento e tenha mais tranquilidade antes do
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
              cuidado é mais indicado para você.
            </p>
          </div>
          <Button
            source="faq"
            variant="secondary"
            className="w-full md:w-auto"
            ariaLabel="Fale com nossa equipe pelo WhatsApp"
          >
            Fale com nossa equipe
          </Button>
        </aside>
      </Container>
    </MotionSection>
  );
}
