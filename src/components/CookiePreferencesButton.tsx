"use client";

import { reopenConsentPreferences } from "@/lib/consent";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={reopenConsentPreferences}
      className="w-fit text-left text-sm text-text-secondary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      Preferências de cookies
    </button>
  );
}
