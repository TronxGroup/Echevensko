// app/privacidad/page.tsx
import React from "react";

export const metadata = {
  title: "Política de Privacidad | Echevensko",
  description:
    "Política de Privacidad de Echevensko: tratamiento de datos personales, finalidades, base legal, derechos y contacto.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://empresas.echevensko.com/privacidad" },
  openGraph: {
    type: "article",
    title: "Política de Privacidad | Echevensko",
    description:
      "Tratamiento de datos personales, finalidades, base legal, derechos, Zoho CRM y contacto.",
    url: "https://empresas.echevensko.com/privacidad",
  },
  twitter: { card: "summary" },
};

export default function PrivacidadPage() {
  const fecha = "10 de septiembre de 2025";
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-3xl px-4 py-12">
        {/* Enlace para volver al home */}
        <div className="mb-4">
          <a
            href="https://empresas.echevensko.com/"
            className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
            aria-label="Volver a Echevensko Empresas"
          >
            <span aria-hidden>←</span> Volver a Echevensko Empresas
          </a>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight">Política de Privacidad</h1>
        <p className="mt-2 text-sm text-neutral-600">Última actualización: {fecha}</p>

        <p className="mt-6 text-neutral-700 leading-relaxed">
          En <strong>Echevensko</strong> respetamos y protegemos tus datos personales. Esta Política describe cómo
          recopilamos, usamos, compartimos y protegemos tu información cuando interactúas con nuestro sitio{" "}
          <span className="whitespace-nowrap">empresas.echevensko.com</span> y cuando completas el formulario de contacto o cotización.
        </p>

        <h2 className="mt-10 text-2xl font-bold">1. Responsable del tratamiento</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Responsable: <strong>Echevensko</strong>. Domicilio de contacto: <strong>Santiago, Chile</strong>.
          Correo: <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>.
        </p>

        <h2 className="mt-8 text-2xl font-bold">2. Datos que recopilamos</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Según el formulario utilizado, podemos solicitar y tratar: nombre, apellido, email, teléfono, cargo,
          empresa/organización, ciudad/país, fecha tentativa de la actividad, número de asistentes y objetivo del evento,
          así como cualquier información que libremente nos compartas. Además, podemos registrar datos técnicos básicos
          de uso del sitio (p. ej., dirección IP, navegador, páginas visitadas) para fines de operación y seguridad.
        </p>

        <h2 className="mt-8 text-2xl font-bold">3. Finalidades del tratamiento</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Gestionar cotizaciones y solicitudes de información sobre nuestras charlas y servicios.</li>
          <li>Coordinar aspectos logísticos y comerciales (fechas, modalidad, requerimientos técnicos).</li>
          <li>Dar seguimiento a consultas y mantener comunicaciones comerciales relacionadas.</li>
          <li>Mejorar la experiencia del sitio y la calidad del servicio.</li>
          <li>Cumplir obligaciones legales y administrativas aplicables.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">4. Base legal</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Tratamos tus datos sobre la base de tu <strong>consentimiento</strong> (al enviar el formulario), la
          <strong> ejecución de medidas precontractuales/contractuales</strong> (p. ej., elaboración de propuesta) y el
          <strong> interés legítimo</strong> en mantener la seguridad del sitio y la calidad del servicio.
        </p>

        <h2 className="mt-8 text-2xl font-bold">5. Destinatarios y encargados</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Utilizamos herramientas de terceros para operar de forma eficiente y segura. En particular,
          <strong> Zoho CRM</strong> para la gestión de leads (formulario <em>WebToLead</em>). Estos proveedores actúan
          como encargados de tratamiento y procesan datos siguiendo nuestras instrucciones y la normativa aplicable.
          Podremos compartir datos cuando sea necesario para cumplir obligaciones legales, responder requerimientos de
          autoridad o proteger derechos y seguridad.
        </p>

        <h2 className="mt-8 text-2xl font-bold">6. Transferencias internacionales</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Algunos proveedores pueden alojar datos en otros países. En tales casos, adoptamos medidas razonables para
          asegurar niveles adecuados de protección conforme a las mejores prácticas y a los acuerdos del proveedor.
        </p>

        <h2 className="mt-8 text-2xl font-bold">7. Plazos de conservación</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Conservamos los datos por el tiempo necesario para gestionar tu solicitud, mantener la relación comercial y
          cumplir obligaciones legales. Cuando no sean necesarios, los eliminaremos o los anonimizaremos de manera segura.
        </p>

        <h2 className="mt-8 text-2xl font-bold">8. Derechos de las personas</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Puedes ejercer los derechos que te asistan (acceso, rectificación, actualización, supresión, oposición,
          limitación, portabilidad, según corresponda) escribiendo a{" "}
          <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>. Atenderemos tu
          solicitud en los plazos legalmente aplicables.
        </p>

        <h2 className="mt-8 text-2xl font-bold">9. Seguridad de la información</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Implementamos medidas técnicas y organizativas razonables para proteger los datos frente a accesos no
          autorizados, pérdida, uso indebido o divulgación. No obstante, ningún sistema es 100% infalible.
        </p>

        <h2 className="mt-8 text-2xl font-bold">10. Cookies y tecnologías similares</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Nuestro sitio puede usar cookies estrictamente necesarias y/o herramientas de medición con fines estadísticos
          y de mejora del servicio. Puedes gestionar preferencias desde tu navegador. Si implementas herramientas de
          analítica o marketing adicionales, lo informaremos en esta política o en un banner de consentimiento.
        </p>

        <h2 className="mt-8 text-2xl font-bold">11. Enlaces de terceros</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          El sitio puede incluir enlaces a páginas de terceros (p. ej., YouTube, redes sociales, Zoho). No somos
          responsables por sus prácticas de privacidad. Te recomendamos revisar sus políticas de privacidad.
        </p>
