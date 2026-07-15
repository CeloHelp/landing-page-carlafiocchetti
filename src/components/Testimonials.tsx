import Image from "next/image";
import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading } from "./Section";

const testimonials = [
  {
    image: "/assets/avaliacao_google_paty.jpg",
    alt: "Print da avaliação de Paty no Google sobre o atendimento da Carla Fiocchetti",
  },
  {
    image: "/assets/avaliacao_google_franciele.jpg",
    alt: "Print da avaliação de Franciele Garcia Baveloni no Google sobre o atendimento da Carla Fiocchetti",
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
          <p className="max-w-[65ch] text-text-secondary">
            Confira algumas avaliações reais publicadas por pacientes no Google.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.image}
              className="rounded-brand border border-border bg-surface p-2.5 shadow-card"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={980}
                height={520}
                loading="eager"
                sizes="(min-width: 768px) 50vw, calc(100vw - 52px)"
                className="max-h-[260px] w-full rounded-[6px] border border-border bg-surface object-contain object-top"
              />
            </figure>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
