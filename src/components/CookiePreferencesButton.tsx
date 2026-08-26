"use client";

import { reopenConsentPreferences } from "@/lib/consent";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={reopenConsentPreferences}
      className="w-fit text-left text-sm font-semibold text-[color-mix(in_srgb,var(--surface)_74%,var(--foreground))] underline decoration-surface/35 underline-offset-4 transition-colors hover:text-surface focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-surface"
    >
      Preferências de cookies
    </button>
  );
}
