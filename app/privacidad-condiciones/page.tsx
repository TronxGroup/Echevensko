// app/privacidad-condiciones/page.tsx
import { ShieldCheck, Instagram, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacidad y Condiciones | La Magia de la Imaginación",
  description:
    "Política de Privacidad y Condiciones de uso del sitio magiaimaginacion.cl",
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
            Conoce cómo tratamos tus datos personales y las reglas de uso del
            sitio <strong>magiaimaginacion.cl</strong>.
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            Última actualización: 13 Oct 2025
          </p>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 space-y-8 text-sm text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold">1. Responsable del tratamiento</h2>
          <p className="mt-2">
            Responsable: <strong>La Magia de la Imaginación – Echevensko</strong> (Chile).  
            Correo:{" "}
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
            correo electrónico, empresa u organización, ciudad/país y el mensaje
            enviado. También se registran datos técnicos básicos (IP, validación
            reCAPTCHA y origen del sitio).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Finalidades del tratamiento</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Responder consultas y enviar propuestas comerciales.</li>
            <li>Prevenir spam y fraude mediante reCAPTCHA.</li>
            <li>Realizar métricas de rendimiento del sitio (Analytics).</li>
            <li>Enviar comunicaciones relevantes sobre servicios solicitados.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Condiciones de uso del sitio</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              El contenido de este sitio tiene fines informativos y puede
              cambiar sin previo aviso.
            </li>
            <li>
              Está prohibido el uso del sitio para actividades ilícitas o no
              autorizadas.
            </li>
            <li>
              Los valores publicados son referenciales y se confirman mediante
              propuesta o contrato formal.
            </li>
            <li>
              El envío de formularios implica la aceptación de estos términos.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Derechos de los usuarios</h2>
          <p className="mt-2">
            Puedes ejercer tus derechos de acceso, rectificación, oposición o
            eliminación de tus datos escribiendo a{" "}
            <a href="mailto:info@echevensko.com" className="underline">
              info@echevensko.com
            </a>
            .  
            Responderemos en un plazo máximo de 5 días hábiles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Cookies y analítica</h2>
          <p className="mt-2">
            Este sitio utiliza cookies esenciales y de medición (Google Analytics 4)
            para analizar el uso del sitio de forma anónima. Puedes gestionar o
            eliminar cookies desde la configuración de tu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Actualizaciones de esta política</h2>
          <p className="mt-2">
            Nos reservamos el derecho a actualizar esta política en cualquier
            momento. Recomendamos revisar periódicamente esta página para estar
            informado de los cambios más recientes.
          </p>
        </section>

        {/* Botones de acción */}
        <div className="text-center pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-6 py-3 font-medium hover:bg-amber-700 transition"
          >
            <ArrowLeft className="h-5 w-5" /> Volver al inicio
          </a>
          <a
            href="https://wa.me/56920080031?text=Hola%20quiero%20más%20información%20sobre%20la%20charla%20La%20Magia%20de%20la%20Imaginación"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-600 text-amber-700 px-6 py-3 font-medium hover:bg-amber-50 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Contactar por WhatsApp
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} La Magia de la Imaginación. Todos los derechos reservados.
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
              <Instagram className="h-4 w-4" aria-hidden /> @cristobalechevensko
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
