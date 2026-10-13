import { Container } from "./Section";

const protocols = [
  {
    name: "Gold",
    positioning: "Essencial",
    description: "Cuidado essencial com extração de cravos.",
    price: "R$ 190",
    items: [
      "Higienização profunda",
      "Emoliência e extração",
      "Alta frequência, com ação bactericida e cicatrizante",
      "Máscara calmante e finalização",
    ],
    accent: "border-[#b89a61]/55 bg-[color-mix(in_srgb,var(--surface)_92%,#b89a61)]",
  },
  {
    name: "Diamond",
    badge: "A mais escolhida",
    description: "Limpeza com cuidados adicionais de hidratação e luminosidade.",
    price: "R$ 247",
    items: [
      "Higienização profunda, análise personalizada, emoliência e extração",
      "Alta frequência, com ação bactericida e cicatrizante + fototerapia com LED ou laser, quando indicada",
      "Peeling iluminador + infusão dérmica de ácido hialurônico e ativos personalizados",
      "Massagem com Iced Globes + máscara finalizadora e proteção",
    ],
    accent: "border-moss bg-[color-mix(in_srgb,var(--surface)_86%,var(--background))] shadow-soft ring-1 ring-moss/20",
  },
  {
    name: "Signature",
    positioning: "Tratamento premium",
    description: "Protocolo mais completo, com cuidado complementar para firmeza.",
    inclusion: "Inclui tudo da Diamond + criofrequência",
    price: "R$ 320",
    items: [
      "Criofrequência como recurso complementar voltado ao efeito tensor e à aparência da flacidez.",
    ],
    accent: "border-foreground/45 bg-[color-mix(in_srgb,var(--surface)_94%,var(--foreground))]",
  },
];


export function ProtocolsSection() {
  return <section id="protocolos-valores" aria-labelledby="protocols-title" className="scroll-mt-6 py-8 md:py-12">
    <Container>
      <h2 id="protocols-title" className="font-serif text-[30px] font-medium md:text-[40px]">Opções de cuidado</h2>
      <p className="mb-5 mt-3 text-sm text-text-secondary">Todos os protocolos incluem limpeza profunda e extração. A indicação é feita de acordo com a avaliação da sua pele.</p>
      <div className="grid gap-3 md:grid-cols-3">
        {protocols.map(protocol => <article key={protocol.name} className="rounded-lg border border-border p-4">
          <h3 className="!font-sans text-base font-semibold">{protocol.name} · {protocol.price}</h3>
          <p className="mt-2 text-sm text-text-secondary">{protocol.description}</p>
        </article>)}
      </div>
      <details className="group mt-5">
        <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 text-sm [&::-webkit-details-marker]:hidden">
          Ver o que está incluído <span aria-hidden="true" className="group-open:hidden">+</span><span aria-hidden="true" className="hidden group-open:inline">−</span>
        </summary>
        <div className="mt-3 grid gap-5 rounded-lg border border-border p-5 md:grid-cols-3">
          {protocols.map(protocol => <div key={protocol.name}>
            <h3 className="!font-sans text-sm font-semibold">{protocol.name}</h3>
            {"inclusion" in protocol && <p className="mt-2 text-sm">{protocol.inclusion}</p>}
            <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-text-secondary">{protocol.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>)}
        </div>
      </details>
    </Container>
  </section>;
}
