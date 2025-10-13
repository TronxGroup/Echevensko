// app/privacidad-condiciones/page.tsx
import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Instagram, Cookie, FileText, Mail } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL("https://www.magiaimaginacion.cl"),
  title: "Privacidad y Condiciones | La Magia de la Imaginación",
  description:
    "Política de Privacidad y Condiciones de uso del sitio www.magiaimaginacion.cl: qué datos recopilamos, para qué los usamos y cómo ejercer tus derechos.",
  alternates: { canonical: "https://www.magiaimaginacion.cl/privacidad-condiciones" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: "https://www.magiaimaginacion.cl/privacidad-condiciones",
    title: "Privacidad y Condiciones | La Magia de la Imaginación",
    siteName: "La Magia de la Imaginación",
    description:
      "Transparencia sobre el tratamiento de datos personales, cookies y términos de uso del sitio.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "La Magia de la Imaginación" }],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacidad y Condiciones | La Magia de la Imaginación",
    description:
      "Transparencia sobre el tratamiento de datos personales, cookies y términos de uso del sitio.",
    images: ["/images/og-cover.jpg"],
  },
};

export default function PrivacidadCondicionesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <ShieldCheck className="h-12 w-12 text-amber-600 mx-auto mb-4" aria-hidden />
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Privacidad y Condiciones
          </h1>
          <p className="mt-3 text-neutral-700">
            Conoce cómo tratamos tus datos personales y las reglas de uso del sitio{" "}
            <strong>www.magiaimaginacion.cl</strong>.
          </p>
          <p className="mt-1 text-sm text-neutral-500">Última actualización: 15 Sep 2025</p>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 space-y-10 text-[15px] text-neutral-800 leading-relaxed">
        {/* Índice */}
        <nav aria-label="Índice" className="rounded-2xl bg-white border p-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li><a className="hover:underline" href="#responsable">1. Responsable</a></li>
            <li><a className="hover:underline" href="#datos">2. Datos que recopilamos</a></li>
            <li><a className="hover:underline" href="#finalidades">3. Finalidades</a></li>
            <li><a className="hover:underline" href="#cookies">4. Cookies</a></li>
            <li><a className="hover:underline" href="#terceros">5. Proveedores/Terceros</a></li>
            <li><a className="hover:underline" href="#conservacion">6. Conservación</a></li>
            <li><a className="hover:underline" href="#derechos">7. Derechos</a></li>
            <li><a className="hover:underline" href="#condiciones">8. Condiciones de uso</a></li>
            <li><a className="hover:underline" href="#contacto">9. Contacto</a></li>
          </ul>
        </nav>

        <section id="responsable">
          <h2 className="text-xl font-semibold">1. Responsable del tratamiento</h2>
          <p className="mt-2">
            Responsable: <strong>Echevensko</strong> (Chile). Correo:{" "}
            <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>.
          </p>
          <p className="mt-1">
            Sitio: <strong>www.magiaimaginacion.cl</strong>. Ámbito: Chile y LATAM.
          </p>
        </section>

        <section id="datos">
          <h2 className="text-xl font-semibold">2. Datos que recopilamos</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Formulario de contacto</strong>: nombre, apellido, correo, empresa, ciudad/país y mensaje.
            </li>
            <li>
              <strong>Datos técnicos</strong>: dirección IP y validación anti-spam (reCAPTCHA).
            </li>
            <li>
              <strong>Métricas del formulario</strong>: conteos básicos de envíos (Zoho WebForm/Analytics).
            </li>
          </ul>
        </section>

        <section id="finalidades">
          <h2 className="text-xl font-semibold">3. Finalidades</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Responder consultas y enviar propuestas comerciales solicitadas.</li>
            <li>Prevenir fraude y spam (sistemas anti-bot/reCAPTCHA).</li>
            <li>Mejorar el servicio y la calidad del sitio mediante métricas no invasivas.</li>
          </ul>
        </section>

        <section id="cookies">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Cookie className="h-5 w-5 text-amber-600" aria-hidden /> 4. Uso de cookies
          </h2>
          <p className="mt-2">
            Este sitio utiliza principalmente <strong>cookies necesarias</strong> para el funcionamiento
            (seguridad, formularios y prevención de spam). No utilizamos cookies publicitarias ni de
            remarketing. Puedes gestionar cookies desde la configuración de tu navegador.
          </p>
        </section>

        <section id="terceros">
          <h2 className="text-xl font-semibold">5. Proveedores y tratamiento por terceros</h2>
          <div className="mt-2 space-y-2">
            <p className="flex items-start gap-2">
              <FileText className="h-5 w-5 mt-0.5 text-amber-600" aria-hidden />
              <span>
                <strong>Zoho CRM (WebToLead)</strong>: recepción y gestión de formularios de contacto.
                Se transmiten los campos que ingresas, junto con metadatos técnicos básicos.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <FileText className="h-5 w-5 mt-0.5 text-amber-600" aria-hidden />
              <span>
                <strong>reCAPTCHA</strong>: servicio anti-spam que analiza interacciones para evitar envíos automatizados.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <FileText className="h-5 w-5 mt-0.5 text-amber-600" aria-hidden />
              <span>
                <strong>Hosting</strong>: el sitio se sirve desde proveedores de infraestructura con medidas estándar
                de seguridad y registros de acceso (logs) para operar la plataforma.
              </span>
            </p>
          </div>
        </section>

        <section id="conservacion">
          <h2 className="text-xl font-semibold">6. Plazo de conservación</h2>
          <p className="mt-2">
            Conservamos los datos de contacto <strong>mientras gestionamos tu solicitud</strong> y por el tiempo
            necesario para fines administrativos o legales asociados a la relación comercial. Puedes pedir la
            eliminación antes de ese plazo (ver Derechos).
          </p>
        </section>

        <section id="derechos">
          <h2 className="text-xl font-semibold">7. Derechos de las personas</h2>
          <p className="mt-2">
            Puedes ejercer tus derechos de <strong>acceso, rectificación, oposición y eliminación</strong> escribiendo a{" "}
            <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>. Para tramitar tu
            solicitud, podremos pedir antecedentes que acrediten tu identidad.
          </p>
        </section>

        <section id="condiciones">
          <h2 className="text-xl font-semibold">8. Condiciones de uso del sitio</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>El contenido del sitio es informativo y puede actualizarse sin previo aviso.</li>
            <li>Está prohibido el uso del sitio para actividades ilícitas o que atenten contra terceros.</li>
            <li>
              Los precios publicados (p. ej., valores de referencia) <strong>deben ser confirmados</strong> formalmente
              por propuesta y/o contrato.
            </li>
            <li>
              Enlaces a sitios externos son de conveniencia; no nos responsabilizamos por sus contenidos o políticas.
            </li>
          </ul>
        </section>

        {/* CTA inferior */}
        <section id="contacto" className="text-center pt-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 text-white px-6 py-3 font-medium hover:bg-amber-700"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden /> Volver al inicio
            </Link>
            <a
              href="mailto:info@echevensko.com"
              className="inline-flex items-center gap-2 rounded-2xl border px-6 py-3 font-medium hover:bg-neutral-50"
            >
              <Mail className="h-5 w-5" aria-hidden /> Escribir a info@echevensko.com
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER (coherente con el resto del sitio) */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Echevensko. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad-condiciones" className="hover:text-neutral-800">
              Privacidad y Condiciones
            </Link>
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
