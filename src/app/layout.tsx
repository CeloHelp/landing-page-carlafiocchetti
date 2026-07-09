import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.carlafiocchetti.com.br",
  ),
  title: "Limpeza de Pele Profissional em Araraquara | Carla Fiocchetti",
  description:
    "Agende sua limpeza de pele profissional em Araraquara com Carla Fiocchetti. Estética facial personalizada, cuidado profissional e atendimento acolhedor.",
  openGraph: {
    title: "Limpeza de Pele Profissional em Araraquara | Carla Fiocchetti",
    description:
      "Estética facial personalizada com atendimento profissional, cuidado individual e agendamento pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
    siteName: "Carla Fiocchetti - Estética Facial Personalizada",
    images: [
      {
        url: "/assets/carla_limpeza_pele.jpg",
        width: 1200,
        height: 1500,
        alt: "Carla Fiocchetti realizando limpeza de pele profissional",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
