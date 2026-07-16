export const WHATSAPP_MESSAGE =
  "Olá! Encontrei a página da Carla Fiocchetti sobre limpeza de pele em Araraquara e gostaria de saber mais sobre o atendimento.";

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
