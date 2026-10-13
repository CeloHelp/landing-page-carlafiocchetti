"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { CONSENT_CHANGE_EVENT, getConsentPreference } from "@/lib/consent";
import { Button } from "./Button";

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
}

export function FloatingWhatsApp() {
  const [showAfterScroll, setShowAfterScroll] = useState(false);
  const consentPending = useSyncExternalStore(subscribe, () => getConsentPreference() === null, () => true);

  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll<HTMLElement>("[data-whatsapp-cta]:not([data-whatsapp-cta='floating_whatsapp'])"));
    const hero = buttons.find(button => button.dataset.whatsappCta === "hero_primary");
    if (!hero) return;
    const update = () => {
      const anyVisible = buttons.some(button => {
        const rect = button.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      });
      setShowAfterScroll(hero.getBoundingClientRect().bottom <= 0 && !anyVisible);
    };
    const observer = new IntersectionObserver(update, { threshold: [0, 1] });
    buttons.forEach(button => observer.observe(button));
    update();
    return () => observer.disconnect();
  }, []);

  if (!showAfterScroll || consentPending) return null;
  return <div data-whatsapp-bar className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-muted px-6 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-soft md:hidden">
    <Button source="floating_whatsapp" className="w-full" ariaLabel="Falar pelo WhatsApp">Falar pelo WhatsApp</Button>
  </div>;
}
