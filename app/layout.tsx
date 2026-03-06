// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://magiaimaginacion.cl"),
  title: "La Magia de la Imaginación – Charlas para Empresas, Colegios y Fundaciones",
  description:
    "Charlas entretenidas y aplicables para empresas, colegios y fundaciones: foco, bienestar, clima y creatividad con Cristóbal Echevensko. Presencial u online.",
  alternates: {
    canonical: "/",
    languages: { "es-CL": "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "La Magia de la Imaginación",
    title: "La Magia de la Imaginación – Charlas",
    description:
      "Presencial u online. Formato profesional, participativo y con herramientas aplicables para equipos y organizaciones.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "La Magia de la Imaginación – Charlas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Magia de la Imaginación – Charlas",
    description:
      "Charlas para empresas, colegios y fundaciones. Bienestar, foco y creatividad con Cristóbal Echevensko.",
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-neutral-900">
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17760996045"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17760996045');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
