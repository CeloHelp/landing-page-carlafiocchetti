import { Button } from "./Button";
const faqs = [
  ["A limpeza inclui extração de cravos?", "Sim. Todos os protocolos incluem limpeza profunda e extração de cravos."],
  ["A pele fica vermelha depois?", "Pode ocorrer vermelhidão temporária. A intensidade varia conforme a sensibilidade da pele."],
  ["Quanto tempo dura o atendimento?", "Varia conforme o protocolo e a sua pele. Confirme a estimativa pelo WhatsApp."],
];
export function FAQSection() {
  return <section id="duvidas" aria-labelledby="faq-title" className="relative scroll-mt-6">
    <span id="faq" aria-hidden="true" className="absolute top-0 scroll-mt-6" />
    <h2 id="faq-title" className="mb-4 font-serif text-[30px] font-medium leading-tight">Antes de conversar</h2>
    <dl className="grid gap-3">
      {faqs.map(([question, answer]) => <div key={question} className="rounded-lg border border-border p-4"><dt className="text-sm font-medium">{question}</dt><dd className="mt-2 text-sm text-text-secondary">{answer}</dd></div>)}
    </dl>
    <Button source="faq_final" className="mt-4 w-full" ariaLabel="Consultar horários no WhatsApp">Consultar horários no WhatsApp</Button>
  </section>;
}
