import Image from "next/image";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const testimonials = [
  {
    name: "Paty",
    quote:
      "A Carla nos transmitiu muita confiança e, aos poucos, fomos vendo o resultado que tanto queríamos. É um privilégio contar com profissionais competentes, cuidadosas e dedicadas.",
    image: "/assets/avaliacao_google_paty.jpg",
    alt: "Print da avaliação de Paty no Google sobre o atendimento da Carla Fiocchetti",
    caption: "Avaliação real no Google, preservada como prova de confiança.",
  },
  {
    name: "Franciele Garcia Baveloni",
    quote:
      "Minha experiência com a Carla foi extremamente boa. Atenciosa, dedicada e competente. A experiência é agradável e o resultado da pele fica lindo.",
    image: "/assets/avaliacao_google_franciele.jpg",
    alt: "Print da avaliação de Franciele Garcia Baveloni no Google sobre o atendimento da Carla Fiocchetti",
    caption: "Avaliação real no Google, usada como confirmação visual do depoimento.",
  },
];

export function Testimonials() {
  return (
    <MotionSection
      aria-labelledby="testimonials-title"
      className="border-y border-border bg-[color-mix(in_srgb,var(--surface)_42%,var(--background))] py-14 md:py-[74px]"
    >
      <Container>
        <div className="mb-[26px] grid gap-4">
          <Eyebrow>Recomendações</Eyebrow>
          <Heading id="testimonials-title">
            Quem já cuidou da pele com a Carla recomenda
          </Heading>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="grid gap-3.5">
              <div className="grid gap-3.5 rounded-brand border border-border bg-surface p-6 shadow-card">
                <div
                  aria-label="5 estrelas"
                  className="text-sm leading-none tracking-[0.1em] text-accent"
                >
                  ★★★★★
                </div>
                <blockquote className="m-0 font-serif text-[clamp(21px,5vw,28px)] leading-[1.25] tracking-[-0.012em]">
                  “{testimonial.quote}”
                </blockquote>
                <cite className="text-sm font-bold not-italic text-[color-mix(in_srgb,var(--foreground)_76%,var(--surface))]">
                  {testimonial.name}
                </cite>
              </div>
              <figure className="grid gap-2.5 rounded-brand border border-border bg-surface p-2.5 shadow-card">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={980}
                  height={520}
                  loading="eager"
                  sizes="(min-width: 768px) 50vw, calc(100vw - 52px)"
                  className="max-h-[260px] w-full rounded-[6px] border border-border bg-surface object-contain object-top"
                />
                <figcaption className="text-xs font-bold leading-[1.35] tracking-[0.02em] text-[color-mix(in_srgb,var(--foreground)_72%,var(--surface))]">
                  {testimonial.caption}
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
