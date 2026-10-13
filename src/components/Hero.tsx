import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Section";
export function Hero() {
  return <section aria-labelledby="hero-title" className="pb-8 pt-5 md:pb-14 md:pt-6">
    <Container className="grid items-center gap-7 md:grid-cols-2 md:gap-16">
      <div className="grid gap-[18px]">
        <h1 id="hero-title" className="font-serif text-[42px] font-medium leading-[1.08] md:text-[64px]">Limpeza de pele<br />em Araraquara</h1>
        <p className="max-w-lg text-base text-text-secondary">Limpeza profunda com extração de cravos e protocolo adaptado à sua pele.</p>
        <div className="grid gap-1.5">
          <p className="text-lg font-semibold">Protocolos a partir de R$ 190</p>
          <p className="text-xs"><span aria-label="5 estrelas">★★★★★</span> +100 avaliações no Google</p>
          <p className="text-xs text-text-secondary">Jardim Primavera · Araraquara</p>
        </div>
        <Button source="hero_primary" className="w-full" ariaLabel="Falar pelo WhatsApp">Falar pelo WhatsApp</Button>
        <p className="text-xs text-text-secondary">Você não precisa escolher o protocolo agora.</p>
        <a href="#protocolos-valores" className="w-fit text-sm underline-offset-4 hover:underline">Ver protocolos e valores ↓</a>
      </div>
      <figure className="w-full max-w-[460px] justify-self-center rounded-[18px] border border-border bg-white p-2.5 shadow-soft">
        <Image src="/assets/carla_limpeza_pele.jpg" alt="Carla Fiocchetti realizando a extração de cravos durante um atendimento" width={930} height={1172} preload sizes="(min-width: 768px) 440px, calc(100vw - 68px)" className="h-auto w-full rounded-[9px]" />
      </figure>
    </Container>
  </section>;
}
