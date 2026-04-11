// app/privacidad-condiciones/page.tsx

import { ShieldCheck, Instagram, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacidad y Condiciones | La Magia de la Imaginación",
  description:
    "Política de privacidad y condiciones de uso del sitio magiaimaginacion.cl. Información sobre tratamiento de datos y uso del sitio.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://magiaimaginacion.cl/privacidad-condiciones",
  },
};

export default function PrivacidadCondicionesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <ShieldCheck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Privacidad y Condiciones
          </h1>

          <p className="mt-3 text-neutral-700">
            Información sobre el tratamiento de datos personales y condiciones
            de uso del sitio <strong>magiaimaginacion.cl</strong>.
          </p>

          <p className="mt-1 text-sm text-neutral-500">
            Última actualización: 6 marzo 2026
          </p>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 space-y-8 text-sm text-neutral-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold">
            1. Sobre este sitio
          </h2>

          <p className="mt-2">
            <strong>magiaimaginacion.cl</strong> es un sitio informativo y
            comercial destinado a presentar la charla{" "}
            <strong>“La Magia de la Imaginación”</strong>, orientada a
            organizaciones como empresas, colegios, fundaciones y equipos de
            trabajo.
          </p>

          <p className="mt-2">
            Este sitio tiene como objetivo facilitar el contacto y la solicitud
            de propuestas para presentaciones, charlas o actividades
            relacionadas.
          </p>

          <p className="mt-2">
            El sitio oficial del autor y conferencista es{" "}
            <a
              href="https://www.echevensko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              echevensko.com
            </a>
            , donde se publican reflexiones personales y fechas de
            presentaciones abiertas al público general.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            2. Responsable del tratamiento de datos
          </h2>

          <p className="mt-2">
            Responsable: <strong>Echevensko</strong>  
            Santiago, Chile.
          </p>

          <p className="mt-2">
            Contacto:
            <a href="mailto:info@magiaimaginacion.cl" className="underline ml-1">
              info@magiaimaginacion.cl
            </a>
          </p>

          <p className="mt-2">
            Los datos enviados a través de este sitio se utilizan únicamente
            para gestionar solicitudes de información o cotizaciones
            relacionadas con las charlas ofrecidas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            3. Datos que recopilamos
          </h2>

          <p className="mt-2">
            Cuando utilizas el formulario de contacto del sitio, podemos
            recopilar los siguientes datos:
          </p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nombre y apellido</li>
            <li>Correo electrónico</li>
            <li>Organización o empresa</li>
            <li>Teléfono (opcional)</li>
            <li>Ciudad o país (opcional)</li>
            <li>Tipo de organización</li>
            <li>Contenido del mensaje enviado</li>
          </ul>

          <p className="mt-3">
            Además, pueden registrarse datos técnicos básicos como dirección IP
            o parámetros de campaña (por ejemplo, origen de la visita desde
            buscadores o anuncios).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            4. Finalidad del uso de datos
          </h2>

          <p className="mt-2">
            Los datos recopilados se utilizan exclusivamente para:
          </p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Responder consultas enviadas a través del formulario.</li>
            <li>Preparar propuestas o cotizaciones.</li>
            <li>Coordinar charlas o presentaciones.</li>
            <li>Mejorar la experiencia del sitio.</li>
            <li>Prevenir spam o uso indebido del formulario.</li>
          </ul>

          <p className="mt-3">
            No vendemos ni compartimos datos personales con terceros con fines
            comerciales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            5. Uso de cookies y analítica
          </h2>

          <p className="mt-2">
            Este sitio puede utilizar herramientas de medición como{" "}
            <strong>Google Analytics 4</strong> o tecnologías equivalentes para
            comprender cómo los visitantes interactúan con el sitio.
          </p>

          <p className="mt-2">
            Estas herramientas recopilan información estadística de forma
            agregada, como páginas visitadas o tiempo de navegación, sin
            identificar directamente a las personas.
          </p>

          <p className="mt-2">
            También pueden registrarse parámetros técnicos asociados a campañas
            publicitarias (por ejemplo Google Ads).
          </p>

          <p className="mt-2">
            Puedes gestionar o eliminar cookies desde la configuración de tu
            navegador.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            6. Conservación de la información
          </h2>

          <p className="mt-2">
            La información enviada mediante formularios se conserva únicamente
            el tiempo necesario para responder la consulta o gestionar una
            posible contratación.
          </p>

          <p className="mt-2">
            Posteriormente puede eliminarse o mantenerse archivada únicamente
            con fines administrativos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            7. Derechos de los usuarios
          </h2>

          <p className="mt-2">
            Puedes solicitar en cualquier momento:
          </p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Acceso a los datos enviados.</li>
            <li>Rectificación de información incorrecta.</li>
            <li>Eliminación de datos personales.</li>
          </ul>

          <p className="mt-2">
            Para ejercer estos derechos puedes escribir a:
            <a href="mailto:info@echevensko.com" className="underline ml-1">
              info@magiaimaginacion.cl
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            8. Condiciones de uso del sitio
          </h2>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              El contenido del sitio es informativo y puede cambiar sin previo
              aviso.
            </li>

            <li>
              No está permitido utilizar el sitio para fines ilícitos o para el
              envío de información falsa o engañosa.
            </li>

            <li>
              Las condiciones finales de contratación se establecen mediante
              propuesta formal o contrato de servicios.
            </li>

            <li>
              El uso del formulario implica la aceptación de esta política.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            9. Cambios en esta política
          </h2>

          <p className="mt-2">
            Esta política puede actualizarse ocasionalmente para reflejar
            mejoras en el sitio, cambios legales o ajustes en los servicios
            ofrecidos.
          </p>

          <p className="mt-2">
            Se recomienda revisar esta página periódicamente.
          </p>
        </section>

        {/* BOTONES */}
        <div className="text-center pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-6 py-3 font-medium hover:bg-amber-700 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al inicio
          </a>

          <a
            href="https://wa.me/56985012300"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-600 text-amber-700 px-6 py-3 font-medium hover:bg-amber-50 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
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
            <a href="/privacidad-condiciones" className="hover:text-neutral-800">
              Privacidad y Condiciones
            </a>

            <a
              href="https://instagram.com/cristobalechevensko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-800 inline-flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" />
              @cristobalechevensko
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
