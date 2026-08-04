"use client";

import { useState } from "react";
import { MotionSection } from "./MotionSection";
import { Button } from "./Button";
import { Container, Eyebrow, Heading } from "./Section";

const faqs = [
  {
    question: "A limpeza de pele inclui extração de cravos?",
    answer: [
      "Sim. Todos os protocolos incluem higienização profunda e extração cuidadosa de cravos, adaptada às condições e sensibilidades observadas na avaliação da pele.",
    ],
  },
  {
    question: "O procedimento dói?",
    answer: [
      "A sensibilidade varia de pessoa para pessoa e conforme a região da pele. A preparação e a extração são realizadas com cuidado para favorecer o conforto, respeitando áreas mais sensíveis.",
    ],
  },
  {
    question: "A pele fica vermelha depois?",
    answer: [
      "Pode ocorrer vermelhidão temporária após a extração. A intensidade e a recuperação variam conforme a sensibilidade e as necessidades de cada pele, por isso as orientações finais são individualizadas.",
    ],
  },
  {
    question: "A limpeza de pele é indicada para pele oleosa ou sensível?",
    answer: [
      "O atendimento pode ser adaptado para diferentes características de pele. Antes do procedimento, a avaliação considera oleosidade, sensibilidade e outras necessidades para orientar os cuidados mais adequados.",
    ],
  },
  {
    question: "Quanto tempo dura o atendimento?",
    answer: [
      "A duração depende do protocolo e das necessidades identificadas na avaliação. Converse com nossa equipe para confirmar a estimativa do atendimento escolhido.",
    ],
  },
  {
    question: "Com que frequência devo fazer a limpeza de pele?",
    answer: [
      "A frequência é individual e pode variar conforme oleosidade, presença de cravos, rotina de cuidados e resposta da pele. A orientação mais adequada é definida após avaliação profissional.",
    ],
  },
];

export function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

        <div className="border-y border-border">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const buttonId = `faq-question-${index}`;
            const panelId = `faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className="border-b border-border last:border-b-0"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left font-serif text-[clamp(19px,4vw,22px)] font-semibold leading-[1.2] tracking-[-0.01em] text-foreground outline-none transition-colors duration-200 hover:text-moss focus-visible:rounded-brand focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <span className="min-w-0">{faq.question}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className={`size-4 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <path
                        d="m3 6 5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!isOpen}
                  aria-labelledby={buttonId}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-3 pb-5 text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
                      {faq.answer.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-6 grid gap-4 rounded-brand border border-border bg-[color-mix(in_srgb,var(--surface)_78%,var(--background))] p-6 shadow-card md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div className="grid gap-2">
            <Heading level={3}>Ainda ficou com alguma dúvida?</Heading>
            <p className="max-w-[62ch] text-[color-mix(in_srgb,var(--foreground)_78%,var(--surface))]">
              Cada pele possui necessidades diferentes. Converse com nossa equipe
              pelo WhatsApp para esclarecer suas dúvidas e entender qual cuidado
              pode ser mais indicado para você.
            </p>
          </div>
          <Button
            source="faq"
            variant="secondary"
            className="w-full md:w-auto"
            ariaLabel="Conversar com nossa equipe pelo WhatsApp"
          >
            Conversar com nossa equipe
          </Button>
        </aside>
      </Container>
    </MotionSection>
  );
}
