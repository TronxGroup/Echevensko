// app/gracias/page.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL("https://www.magiaimaginacion.cl"),
  title: "¡Gracias! | La Magia de la Imaginación",
  description:
    "Gracias por tu interés. Te contactaremos a la brevedad con la propuesta.",
  alternates: {
    canonical: "https://www.magiaimaginacion.cl/gracias",
  },
  robots: {
    index: false, // evitar indexar la página de confirmación
    follow: false,
  },
  openGraph: {
    type: "website",
    url: "https://www.magiaimaginacion.cl/gracias",
    title: "¡Gracias! | La Magia de la Imaginación",
    siteName: "La Magia de la Imaginación",
    description:
      "Hemos recibido tu solicitud. Pronto nos pondremos en contacto.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "La Magia de la Imaginación",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "¡Gracias! | La Magia de la Imaginación",
    description:
      "Hemos recibido tu solicitud. Pronto nos pondremos en contacto.",
    images: ["/images/og-cover.jpg"],
  },
};

export default function GraciasPage() {
  return (
    <div className="min-h-[70vh] bg-neutral-50">
      {/* Header compacto para mantener la identidad */}
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" aria-hidden />
            <span className="font-semibold tracking-tight">
              La Magia de la Imaginación
            </span>
          </div>
          <Badge variant="secondary">Gracias</Badge>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="mx-auto max-w-3xl px-4 py-16">
        <Card className="rounded-3xl shadow-sm border-amber-100">
          <CardContent className="p-8 md:p-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              ¡Gracias! Hemos recibido tu solicitud
            </h1>
            <p className="mt-3 text-neutral-700">
              Te contactaremos en <strong>menos de 24&nbsp;h hábiles</strong> desde{" "}
              <strong>info@echevensko.com</strong> para coordinar los siguientes pasos.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild className="rounded-2xl">
                <Link href="/" aria-label="Volver al inicio">
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
                  Volver al inicio
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl"
              >
                <a
                  href="https://wa.me/56920080031?text=Hola%2C%20acabo%20de%20enviar%20el%20formulario%20en%20magiaimaginacion.cl%20y%20quiero%20coordinar%20una%20charla%20corporativa."
                  rel="noopener"
                  aria-label="Ir a WhatsApp"
                >
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              Si no ves nuestro correo en unos minutos, revisa tu carpeta de{" "}
              <em>Promociones</em> o <em>Spam</em>.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
