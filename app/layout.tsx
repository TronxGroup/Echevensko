// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://magiaimaginacion.cl"),
  title: "La Magia de la Imaginación – Charla Corporativa",
  description:
    "Charla-espectáculo motivacional para empresas, colegios y fundaciones. Bienestar, foco y creatividad con Cristóbal Echevensko.",
  keywords: [
    "charlas motivacionales",
    "charlas corporativas",
    "bienestar laboral",
    "liderazgo",
    "creatividad",
    "Echevensko",
    "La Magia de la Imaginación",
  ],
  alternates: {
    canonical: "/",
    languages: { "es-CL": "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "La Magia de la Imaginación",
    title: "La Magia de la Imaginación – Charla Corporativa",
    description:
      "Bienestar, foco y creatividad con Cristóbal Echevensko. Presencial u online para equipos y organizaciones.",
    images: [
      {
        url: "/images/og-cover.jpg", // se resolverá con metadataBase
        width: 1200,
        height: 630,
        alt: "La Magia de la Imaginación – Charla Corporativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Magia de la Imaginación – Charla Corporativa",
    description:
      "Charla motivacional con Cristóbal Echevensko. Bienestar, foco y creatividad para equipos.",
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="author" content="Cristóbal Echevensko" />
      </head>
      <body className="antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
