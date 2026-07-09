export const WHATSAPP_MESSAGE =
  "Olá, Carla. Quero agendar uma limpeza de pele profissional em Araraquara.";

// Inserir o número real antes do deploy, no formato DDI + DDD + número.
// Exemplo: NEXT_PUBLIC_WHATSAPP_NUMBER=5516999999999
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  const encodedMessage = encodeURIComponent(message);

  if (!WHATSAPP_NUMBER) {
    return `https://wa.me/?text=${encodedMessage}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
