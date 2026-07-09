import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

/*
  ATENÇÃO — Respostas provisórias

  As respostas abaixo são placeholder (Lorem ipsum) e devem ser substituídas
  após validação com a cliente Carla Fiocchetti.

  Regras para substituição:
  - Não adicionar recomendações médicas, promessas de resultado
    ou orientações técnicas definitivas sem respaldo da profissional.
  - Manter tom acolhedor e informativo, coerente com o restante da landing.
  - Validar cada resposta com a cliente antes de publicar.
*/

const faqs = [
  {
    question: "Para quem a limpeza de pele é indicada?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "A limpeza de pele dói?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "De quanto em quanto tempo devo fazer?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Posso fazer se tenho acne ou pele sensível?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "O que devo evitar após a limpeza de pele?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
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
            Perguntas comuns antes de agendar
          </Heading>
          <p className="max-w-[65ch] text-[clamp(17px,4vw,21px)] leading-[1.55] text-[color-mix(in_srgb,var(--foreground)_82%,var(--surface))]">
            Selecionamos as perguntas mais frequentes para ajudar na sua
            decisão. As respostas serão complementadas em breve com a
            orientação da Carla.
          </p>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="grid gap-3 rounded-brand border border-border bg-surface p-6 shadow-card"
            >
              <Heading level={3}>{faq.question}</Heading>
              <p className="text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
