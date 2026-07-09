import { Button } from "./Button";

export function FloatingWhatsApp() {
  return (
    <Button
      source="floating_whatsapp"
      className="fixed right-4 bottom-4 z-30 min-h-12.5 rounded-full px-4 shadow-[0_16px_36px_color-mix(in_srgb,var(--foreground)_22%,transparent)] lg:right-6 lg:bottom-6"
      ariaLabel="Agendar limpeza de pele pelo WhatsApp"
    >
      WhatsApp
    </Button>
  );
}
