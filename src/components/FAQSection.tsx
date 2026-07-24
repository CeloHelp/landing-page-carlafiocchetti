"use client";

import { useState } from "react";
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
            ariaLabel="Fale com nossa equipe pelo WhatsApp"
          >
            Fale com nossa equipe
          </Button>
        </aside>
      </Container>
    </MotionSection>
  );
}
