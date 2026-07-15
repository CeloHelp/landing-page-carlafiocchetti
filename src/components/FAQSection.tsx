import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const faqs = [
  {
    question: "O que torna a limpeza de pele da Carla diferente?",
    answer: [
      "Nossa limpeza de pele vai muito além da extração. Cada atendimento é personalizado após uma avaliação da pele e pode associar LED/Laser e ativos cosméticos de alta performance para potencializar os resultados, sempre respeitando as necessidades individuais de cada paciente.",
    ],
  },
  {
    question: "A limpeza agride a pele?",
    answer: [
      "Não. Todo o protocolo é realizado respeitando a barreira cutânea, promovendo uma limpeza profunda sem agressões desnecessárias. O objetivo é preservar a saúde da pele enquanto removemos impurezas e comedões de forma segura.",
    ],
  },
  {
    question: "A pele fica muito marcada depois da limpeza?",
    answer: [
      "Utilizamos um protocolo com dupla emoliência, que facilita a extração dos cravos e reduz o trauma durante o procedimento.",
      "É normal ocorrer uma leve vermelhidão logo após a sessão, mas ela costuma desaparecer em poucas horas, proporcionando uma recuperação mais confortável.",
    ],
  },
  {
    question: "A limpeza é igual para todo mundo?",
    answer: [
      "Não. Cada pele possui características, necessidades e objetivos diferentes.",
      "Por isso, todos os atendimentos são personalizados após uma análise detalhada da pele, garantindo um protocolo adequado para cada paciente.",
    ],
  },
  {
    question: "Com que frequência devo fazer a limpeza de pele?",
    answer: [
      "Em geral, recomenda-se realizar uma sessão a cada 30 a 60 dias, mas a frequência ideal depende das características da sua pele e será definida durante a avaliação.",
    ],
  },
  {
    question: "Quem realiza o procedimento?",
    answer: [
      "O atendimento é realizado por Carla Fiocchetti, esteticista e graduanda em Biomedicina, com formação contínua em tratamentos faciais e protocolos personalizados, sempre priorizando segurança, técnica e cuidado individualizado.",
    ],
  },
  {
    question: "Como saber qual protocolo é ideal para mim?",
    answer: [
      "Tudo começa com uma avaliação profissional.",
      "Antes do procedimento, analisamos cuidadosamente sua pele para definir o protocolo mais indicado e oferecer um tratamento personalizado, respeitando suas necessidades e objetivos.",
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
          <Heading id="faq-title">
            Perguntas frequentes
          </Heading>
          <p className="max-w-[65ch] text-[clamp(17px,4vw,21px)] leading-[1.55] text-[color-mix(in_srgb,var(--foreground)_82%,var(--surface))]">
            Ainda ficou com alguma dúvida? Selecionamos as perguntas mais
            comuns sobre nossa limpeza de pele para que você conheça melhor o
            procedimento antes da sua avaliação.
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
      </Container>
    </MotionSection>
  );
}
