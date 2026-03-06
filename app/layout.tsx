import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://magiaimaginacion.cl"),
  title: "La Magia de la Imaginación – Charlas para Empresas, Colegios y Fundaciones",
  description:
    "Charlas entretenidas y aplicables para empresas, colegios y fundaciones: foco, bienestar, clima y creatividad con Cristóbal Echevensko. Presencial u online.",
  keywords: [
    // Corporativo
    "charla corporativa",
    "charlas corporativas",
    "charla para empresas",
    "bienestar laboral",
    "clima laboral",
    "kickoff empresas",
    "liderazgo",
    "creatividad aplicada",
    // Educación / social
    "charlas para colegios",
    "charlas para estudiantes",
    "convivencia escolar",
    "bienestar escolar",
    "charlas para fundaciones",
    // Marca
    "Cristóbal Echevensko",
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
    title: "La Magia de la Imaginación – Charlas para Empresas, Colegios y Fundaciones",
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
        {/* Google tag (GA4) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BQ0940XD1E"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQ0940XD1E', { anonymize_ip: true });
          `}
        </Script>

        {/* JSON-LD: Organization + Service */}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "La Magia de la Imaginación",
                "url": "https://magiaimaginacion.cl",
                "logo": "https://magiaimaginacion.cl/images/og-cover.jpg",
                "founder": { "@type": "Person", "name": "Cristóbal Echevensko" },
                "contactPoint": [{
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "info@echevensko.com",
                  "telephone": "+56 9 2008 0031",
                  "areaServed": "CL",
                  "availableLanguage": ["es"]
                }],
                "sameAs": [
                  "https://www.linkedin.com/company/la-magia-de-la-imaginacion/",
                  "https://instagram.com/cristobalechevensko"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Charlas: La Magia de la Imaginación",
                "serviceType": "Charla / conferencia / taller",
                "provider": {
                  "@type": "Organization",
                  "name": "La Magia de la Imaginación",
                  "url": "https://magiaimaginacion.cl"
                },
                "areaServed": ["CL", "LATAM"],
                "availableChannel": [{
                  "@type": "ServiceChannel",
                  "serviceUrl": "https://magiaimaginacion.cl/#contacto",
                  "availableLanguage": ["es"]
                }],
                "audience": [
                  { "@type": "Audience", "audienceType": "Empresas" },
                  { "@type": "Audience", "audienceType": "Colegios" },
                  { "@type": "Audience", "audienceType": "Fundaciones" }
                ]
              }
            ]
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
