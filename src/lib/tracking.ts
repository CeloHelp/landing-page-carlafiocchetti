declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({
    event: "whatsapp_click",
    source,
    cta_source: source,
  });

  window.gtag?.("event", "whatsapp_click", {
    event_category: "conversion",
    event_label: source,
    cta_source: source,
  });
}

export {};
