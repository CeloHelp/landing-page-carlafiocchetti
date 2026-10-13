export const WHATSAPP_MESSAGE =
  "Olá! Tenho interesse em fazer uma limpeza de pele. Gostaria de saber os valores e horários disponíveis.";

const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
export const WHATSAPP_NUMBER = configuredNumber.replace(/\D/g, "");
const isValidWhatsAppNumber = /^[1-9]\d{11,14}$/.test(WHATSAPP_NUMBER);

if (!isValidWhatsAppNumber && process.env.NODE_ENV === "development") {
  console.warn(
    "NEXT_PUBLIC_WHATSAPP_NUMBER não foi configurada com um número válido (DDI + DDD + número).",
  );
}

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  if (!isValidWhatsAppNumber) return null;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
