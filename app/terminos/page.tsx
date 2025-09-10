// app/terminos/page.tsx
import React from "react";

export const metadata = {
  title: "Términos y Condiciones | Echevensko",
  description:
    "Términos y Condiciones de Echevensko: uso del sitio, propuestas, precios, cancelaciones, propiedad intelectual, responsabilidad y jurisdicción.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://empresas.echevensko.com/terminos" },
  openGraph: {
    type: "article",
    title: "Términos y Condiciones | Echevensko",
    description:
      "Condiciones de uso del sitio y marco de prestación de servicios corporativos.",
    url: "https://empresas.echevensko.com/terminos",
  },
  twitter: { card: "summary" },
};

export default function TerminosPage() {
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

        <h1 className="text-3xl font-extrabold tracking-tight">Términos y Condiciones</h1>
        <p className="mt-2 text-sm text-neutral-600">Última actualización: {fecha}</p>

        <p className="mt-6 text-neutral-700 leading-relaxed">
          El acceso y uso de este sitio (<span className="whitespace-nowrap">empresas.echevensko.com</span>) implican la
          aceptación de estos Términos y Condiciones. Si no estás de acuerdo, por favor abstente de utilizarlo.
        </p>

        <h2 className="mt-10 text-2xl font-bold">1. Objeto del sitio</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Este sitio tiene fines informativos y comerciales respecto de la charla-espectáculo corporativa
          <strong> “La Magia de la Imaginación”</strong> y otros servicios asociados (presencial/online).
        </p>

        <h2 className="mt-8 text-2xl font-bold">2. Información y propuestas</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>La información publicada es referencial y puede actualizarse sin previo aviso.</li>
          <li>Las propuestas comerciales se formalizan por escrito (cotización/contrato/OC) y describen alcance, precio, logística y fechas.</li>
          <li>El <strong>valor de referencia</strong> publicado para la charla corporativa es <strong>UF 32</strong>. Los viáticos o traslados pueden aplicarse según ciudad/país.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">3. Reservas, pagos y facturación</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>La reserva de fecha queda sujeta a confirmación de disponibilidad.</li>
          <li>Las condiciones de pago (por ejemplo, anticipos y saldo) se especificarán en la propuesta/contrato.</li>
          <li>Se emite factura electrónica (afecta a IVA o exenta, según corresponda).</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">4. Cancelaciones y reprogramaciones</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Las condiciones de cancelación/reprogramación se detallan en la propuesta/contrato (plazos, cargos y devoluciones, si aplican).</li>
          <li>En casos de fuerza mayor, ambas partes procurarán reprogramar la actividad en la primera fecha disponible.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">5. Requerimientos técnicos</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Para eventos presenciales: espacio adecuado (auditorio/sala), proyector o pantalla LED, sistema de audio con
          micrófono de solapa o diadema y retorno básico. Para eventos online: enlace de videoconferencia (Zoom/Teams),
          moderación y prueba técnica 24 h antes.
        </p>

        <h2 className="mt-8 text-2xl font-bold">6. Propiedad intelectual</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Los contenidos del sitio (textos, imágenes, diseño) y de la charla están protegidos por derechos de autor y otras normas aplicables.</li>
          <li>No se permite su reproducción, distribución o comunicación pública sin autorización expresa por escrito.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">7. Uso aceptable del sitio</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Te comprometes a usar el sitio de forma lícita, evitando acciones que lo deterioren, sobrecarguen o impidan su funcionamiento.</li>
          <li>Queda prohibido intentar acceder a áreas privadas o sistemas sin autorización.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">8. Enlaces de terceros</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          El sitio puede contener enlaces a plataformas externas (p. ej., YouTube, redes sociales, CRM). No nos
          responsabilizamos por su contenido o condiciones de uso; te recomendamos revisar sus políticas.
        </p>

        <h2 className="mt-8 text-2xl font-bold">9. Responsabilidad</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Procuramos mantener información actualizada y el sitio operativo, sin garantizar la ausencia de errores o
          interrupciones. En ningún caso seremos responsables por daños indirectos, emergentes o pérdida de beneficios
          derivados del uso o imposibilidad de uso del sitio.
        </p>

        <h2 className="mt-8 text-2xl font-bold">10. Cambios a los Términos</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Podemos modificar estos Términos en cualquier momento. La versión vigente se publicará en esta URL con su fecha
          de actualización.
        </p>

        <h2 className="mt-8 text-2xl font-bold">11. Ley aplicable y jurisdicción</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Estos Términos se rigen por la legislación chilena. Cualquier controversia se someterá a los tribunales
          competentes de la ciudad de Santiago, Chile.
        </p>

        <h2 className="mt-8 text-2xl font-bold">12. Contacto</h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Para consultas sobre estos Términos, contáctanos en{" "}
          <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>.
        </p>

        <div className="mt-10 border-t pt-6 text-sm text-neutral-600">
          <p>
            Echevensko · Santiago, Chile ·{" "}
            <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>
          </p>

          {/* Enlace para volver al home (también al final) */}
          <div className="mt-4">
            <a
              href="https://empresas.echevensko.com/"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              aria-label="Volver a Echevensko Empresas"
            >
              <span aria-hidden>←</span> Volver a Echevensko Empresas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
