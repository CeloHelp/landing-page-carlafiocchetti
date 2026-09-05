import { Button } from "./Button";

export function FloatingWhatsApp() {
  return (
    <Button
      source="floating_whatsapp"
      className="fixed right-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-30 h-11 w-11 !min-h-11 rounded-full !px-0 shadow-[0_14px_30px_color-mix(in_srgb,var(--foreground)_20%,transparent)] [&>span]:hidden sm:right-4 sm:bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:h-auto sm:w-auto sm:!min-h-13 sm:!px-4 sm:[&>span]:inline lg:right-6 lg:bottom-6"
      ariaLabel="Agendar limpeza de pele pelo WhatsApp"
    >
      WhatsApp
    </Button>
  );
}
