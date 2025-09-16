// app/privacidad-condiciones/page.tsx
import Script from "next/script";
import { ShieldCheck, Instagram, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacidad y Condiciones | Echevensko",
  description:
    "Política de Privacidad y Condiciones de uso del sitio empresas.echevensko.com",
  robots: { index: true, follow: true },
};

export default function PrivacidadCondicionesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* Enviar evento a GTM al cargar esta página */}
      <Script id="view-privacidad-condiciones" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "view_privacidad_condiciones" });
        `}
      </Script>

      {/* HERO */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <ShieldCheck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Privacidad y Condiciones
          </h1>
          <p className="mt-3 text-neutral-700">
            Conoce cómo tratamos tus datos personales y las reglas de uso del
            sitio <strong>empresas.echevensko.com</strong>.
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            Última actualización: 15 Sep 2025
          </p>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 space-y-8 text-sm text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold">1. Responsable del tratamiento</h2>
          <p className="mt-2">
            Responsable: <strong>Echevensko</strong> (Chile). Correo:{" "}
            <a href="mailto:info@echevensko.com" className="underline">
              info@echevensko.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Datos que recopilamos</h2>
          <p className="mt-2">
            Al enviar el formulario de contacto, recopilamos: nombre, apellido,
            correo, empresa, ciudad/país y el mensaje enviado. También se
            registran datos técnicos básicos (IP, validación reCAPTCHA).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Finalidades</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Responder consultas y enviar propuestas comerciales.</li>
            <li>Prevenir fraude y spam mediante reCAPTCHA.</li>
            <li>Medición básica del uso del formulario (Zoho Analytics).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Condiciones de uso</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              El contenido del sitio es informativo y puede cambiar sin previo
              aviso.
            </li>
            <li>
              El uso indebido del sitio para actividades ilícitas queda
              prohibido.
            </li>
            <li>
              Los precios publicados están sujetos a confirmación formal en
              propuesta o contrato.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Derechos</h2>
          <p className="mt-2">
            Puedes solicitar acceso, rectificación, oposición o eliminación de
            tus datos escribiendo a{" "}
            <a href="mailto:info@echevensko.com" className="underline">
              info@echevensko.com
            </a>
            .
          </p>
        </section>

        {/* Botón Volver */}
        <div className="text-center pt-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-6 py-3 font-medium hover:bg-amber-700"
          >
            <ArrowLeft className="h-5 w-5" /> Volver al inicio
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Echevensko. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="/privacidad-condiciones" className="hover:text-neutral-800">
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
