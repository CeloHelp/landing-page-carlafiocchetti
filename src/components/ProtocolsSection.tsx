import { Button } from "./Button";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const protocols = [
  {
    name: "Gold",
    positioning: "Essencial",
    description: "Ideal para manutenção da pele.",
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
    description: "Além da limpeza, já entrega tratamento, viço e luminosidade na primeira sessão.",
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
    description: "Indicada para quem deseja ir além da limpeza e incluir um cuidado complementar voltado à aparência de firmeza e rejuvenescimento da pele.",
    inclusion: "Inclui tudo da Diamond + criofrequência",
    price: "R$ 320",
    items: [
      "Criofrequência como recurso complementar voltado ao efeito tensor e à aparência da flacidez.",
    ],
    accent: "border-foreground/45 bg-[color-mix(in_srgb,var(--surface)_94%,var(--foreground))]",
  },
];

export function ProtocolsSection() {
  return (
    <MotionSection
      id="protocolos-valores"
      aria-labelledby="protocols-title"
      className="scroll-mt-6 border-y border-border bg-[color-mix(in_srgb,var(--surface)_42%,var(--background))] py-14 md:py-[74px]"
    >
      <Container>
        <div className="mb-8 grid gap-4">
          <Eyebrow>Protocolos e valores</Eyebrow>
          <Heading id="protocols-title">Protocolos de limpeza de pele</Heading>
          <p className="max-w-[65ch] text-[clamp(17px,4vw,21px)] leading-[1.55] text-text-secondary">
            Conheça os protocolos disponíveis, o que cada um inclui e seus respectivos valores.
          </p>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-2 md:items-end lg:grid-cols-3 xl:grid-cols-[minmax(0,30fr)_minmax(0,36fr)_minmax(0,30fr)]">
          {protocols.map((protocol) => (
            <article
              key={protocol.name}
              className={`flex w-full min-w-0 flex-col rounded-2xl border p-6 shadow-card ${protocol.accent}`}
            >
              <div className="mb-5 flex min-h-8 items-start justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">
                  {protocol.positioning ?? "Protocolo"}
                </span>
                {protocol.badge ? (
                  <span className="rounded-full bg-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-surface">
                    {protocol.badge}
                  </span>
                ) : null}
              </div>

              <Heading level={3}>{protocol.name}</Heading>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {protocol.description}
              </p>
              {protocol.inclusion ? (
                <p className="mt-4 rounded-brand border border-border bg-surface/75 px-3 py-2 text-sm font-bold text-foreground">
                  {protocol.inclusion}
                </p>
              ) : null}

              <p className="mt-5 border-t border-border pt-5 font-serif text-[32px] font-semibold leading-none tracking-[-0.02em] text-foreground">
                {protocol.price}
              </p>

              <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--foreground)_82%,var(--surface))]">
                {protocol.items.map((item) => (
                  <li key={item} className="grid grid-cols-[12px_1fr] gap-2.5">
                    <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </article>
          ))}
        </div>

        <div className="mt-7 grid justify-items-start gap-5 rounded-brand border border-border bg-surface p-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <p className="max-w-[70ch] text-sm leading-relaxed text-text-secondary">
            Todos os protocolos incluem limpeza profunda e extração. A indicação do protocolo e dos recursos complementares é definida após avaliação da pele.
          </p>
          <Button
            source="pricing_section"
            className="w-full md:w-auto"
            ariaLabel="Descobrir qual protocolo é ideal pelo WhatsApp"
          >
            Quero saber qual protocolo é ideal para mim
          </Button>
        </div>
      </Container>
    </MotionSection>
  );
}
