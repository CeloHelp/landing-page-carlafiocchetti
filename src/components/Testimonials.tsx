import Image from "next/image";
export function Testimonials() {
  return <section id="avaliacoes" aria-labelledby="testimonials-title" className="scroll-mt-6">
    <h2 id="testimonials-title" className="mb-4 font-serif text-[28px] font-medium leading-tight">Quem se cuida, recomenda.</h2>
    <figure className="rounded-xl border border-border bg-white p-2.5 shadow-card">
      <Image src="/assets/avaliacao_google_paty.jpg" alt="Avaliação de Paty no Google, com cinco estrelas: a Carla nos transmitiu tanta confiança" width={930} height={728} sizes="(min-width: 768px) 500px, calc(100vw - 68px)" className="h-auto w-full rounded-md" />
    </figure>
  </section>;
}
