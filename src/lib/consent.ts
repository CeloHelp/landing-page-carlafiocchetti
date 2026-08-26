export const CONSENT_STORAGE_KEY = "carla_cookie_consent";
export const CONSENT_CHANGE_EVENT = "carla:cookie-consent-change";

export type ConsentPreference = "granted" | "denied";

let currentPreference: ConsentPreference | null | undefined;

const consentEvents: Record<ConsentPreference, string> = {
  granted: "consent_granted",
  denied: "consent_denied",
};

export const CONSENT_BOOTSTRAP_SCRIPT = `
try {
  var consentPreference = localStorage.getItem("${CONSENT_STORAGE_KEY}");
  if (consentPreference === "granted" || consentPreference === "denied") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "consent_" + consentPreference });
  }
} catch (error) {}
`;

export function getConsentPreference(): ConsentPreference | null {
  if (currentPreference !== undefined) return currentPreference;

  try {
    const preference = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    currentPreference = preference === "granted" || preference === "denied"
      ? preference
      : null;
  } catch {
    currentPreference = null;
  }

  return currentPreference;
}

export function setConsentPreference(preference: ConsentPreference): void {
  currentPreference = preference;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, preference);
  } catch {}

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: consentEvents[preference] });
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function reopenConsentPreferences(): void {
  currentPreference = null;

  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {}

  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}
