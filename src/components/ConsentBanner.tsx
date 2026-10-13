"use client";

import { useSyncExternalStore } from "react";
import {
  CONSENT_CHANGE_EVENT,
  getConsentPreference,
  setConsentPreference,
  type ConsentPreference,
} from "@/lib/consent";

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
}

export function ConsentBanner() {
  const isVisible = useSyncExternalStore(
    subscribeToConsent,
    () => getConsentPreference() === null,
    () => false,
  );

  if (!isVisible) return null;

  const choosePreference = (preference: ConsentPreference) => {
    setConsentPreference(preference);
  };

  return (
    <aside
      data-consent-banner
      aria-label="Preferências de privacidade"
      className="fixed right-4 bottom-4 left-4 z-40 mx-auto max-w-2xl rounded-brand border border-border bg-surface p-4 text-foreground shadow-soft sm:p-5 lg:bottom-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
          Usamos cookies e tecnologias semelhantes para medir o desempenho
          desta página e melhorar sua experiência.
        </p>
        <div className="grid shrink-0 grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => choosePreference("denied")}
            className="min-h-11 rounded-brand border border-foreground bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choosePreference("granted")}
            className="min-h-11 rounded-brand border border-foreground bg-foreground px-4 text-sm font-semibold text-surface transition-colors hover:bg-moss focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Aceitar
          </button>
        </div>
      </div>
    </aside>
  );
}
