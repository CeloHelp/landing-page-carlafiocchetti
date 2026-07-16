import { MotionSection } from "./MotionSection";
import { Container, Eyebrow, Heading, Lead } from "./Section";

const mapsUrl =
  "https://www.google.com/maps/place/Carla+Fiocchetti+Est%C3%A9tica+Facial+Personalizada/@-21.771688,-48.180069,17z/data=!3m1!4b1!4m6!3m5!1s0x94b8f11764a78a21:0xe618fbeaec06a86a!8m2!3d-21.771688!4d-48.1774941!16s%2Fg%2F11fv7nlx3z";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.2214693498368!2d-48.180069023688965!3d-21.771687980070165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f11764a78a21%3A0xe618fbeaec06a86a!2sCarla%20Fiocchetti%20Est%C3%A9tica%20Facial%20Personalizada!5e0!3m2!1spt-BR!2sbr!4v1784166446056!5m2!1spt-BR!2sbr";

export function LocationSection() {
  return (
    <MotionSection aria-labelledby="location-title" className="py-14 md:py-[74px]">
      <Container className="grid gap-6 md:grid-cols-[0.82fr_1fr] md:items-center md:gap-10">
        <div className="grid gap-[18px]">
          <Eyebrow>Onde estamos</Eyebrow>
          <Heading id="location-title">Atendimento em Araraquara</Heading>
          <div className="grid gap-1.5">
            <Lead>
              A clínica está localizada em Araraquara, em um espaço dedicado ao
              atendimento estético facial personalizado.
            </Lead>

            <address className="relative rounded-brand border border-border bg-surface px-5 py-3.5 not-italic shadow-[0_8px_20px_color-mix(in_srgb,var(--foreground)_5%,transparent)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="absolute top-3.5 right-5 h-[17px] w-[17px] text-text-secondary"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <strong className="block pr-8 font-serif text-xl font-semibold leading-[1.15]">
                Carla Fiocchetti
              </strong>
              <span className="mt-1.5 block text-sm font-medium text-text-secondary">
                Estética Facial Personalizada
              </span>
              <span className="mt-3 block text-text-secondary">
                R. Maj. Carvalho Filho, 2307
              </span>
              <span className="block text-text-secondary">
                Jardim Primavera • Araraquara – SP
              </span>
            </address>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="-mt-2 inline-flex min-h-13 w-full items-center justify-center rounded-brand border border-foreground bg-foreground px-5 py-[15px] text-sm font-semibold leading-none tracking-[0.02em] text-surface no-underline shadow-[0_12px_28px_color-mix(in_srgb,var(--foreground)_18%,transparent)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-moss hover:shadow-[0_16px_34px_color-mix(in_srgb,var(--foreground)_22%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent sm:w-fit"
          >
            Ver rota no Google Maps
          </a>
        </div>

        <div className="aspect-[4/3] min-h-[260px] overflow-hidden rounded-2xl border border-border bg-surface p-2.5 shadow-soft">
          <iframe
            title="Localização da Carla Fiocchetti Estética Facial Personalizada"
            src={mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: 0 }}
            className="h-full w-full rounded-brand"
          />
        </div>
      </Container>
    </MotionSection>
  );
}
