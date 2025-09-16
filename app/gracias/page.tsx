// app/gracias/page.tsx
"use client";

import { useEffect } from "react";
import { CheckCircle, Instagram } from "lucide-react";

export default function GraciasPage() {
  useEffect(() => {
    // Enviar evento a Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit_success", // 👈 nombre del evento en GTM
      formName: "Contacto Echevensko", // 👈 personaliza según el form
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* CONTENIDO */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-neutral-800">
            ¡Gracias por tu mensaje!
          </h1>
          <p className="mt-2 text-neutral-600">
            Hemos recibido tu solicitud correctamente.
            Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas hábiles.
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-xl bg-amber-600 text-white px-6 py-3 font-medium hover:bg-amber-700"
          >
            Volver al inicio
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Echevensko. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacidad-condiciones"
              className="hover:text-neutral-800"
            >
              Privacidad y Condiciones
            </a>
            <a
              href="https://instagram.com/cristobalechevensko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-800 inline-flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" aria-hidden /> @cristobalechevensko
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
