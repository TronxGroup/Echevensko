// app/privacidad-condiciones/page.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Privacidad y Condiciones | Echevensko",
  description:
    "Política de Privacidad y Condiciones de uso del sitio empresas.echevensko.com.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://empresas.echevensko.com/privacidad-condiciones" },
  openGraph: {
    type: "article",
    title: "Privacidad y Condiciones | Echevensko",
    description:
      "Cómo tratamos tus datos personales y las reglas para usar nuestro sitio.",
    url: "https://empresas.echevensko.com/privacidad-condiciones",
  },
  twitter: { card: "summary_large_image" },
};

export default function PrivacyTermsPage() {
  const lastUpdated = "15 Sep 2025"; // actualiza esta fecha cuando cambies el texto

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <Badge variant="secondary">Legal</Badge>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Privacidad y Condiciones
          </h1>
          <p className="mt-3 text-neutral-700">
            Este documento explica cómo tratamos tus datos personales, qué cookies usamos y
            las condiciones de uso del sitio <strong>empresas.echevensko.com</strong>.
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Última actualización: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="mx-auto max-w-4xl px-4 py-10 space-y-8">
        {/* Índice */}
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Índice</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ol className="list-decimal pl-5 space-y-1 text-neutral-700">
              <li><a className="underline hover:text-neutral-900" href="#responsable">Responsable del tratamiento</a></li>
              <li><a className="underline hover:text-neutral-900" href="#datos-formulario">Datos que recopilamos (formulario)</a></li>
              <li><a className="underline hover:text-neutral-900" href="#finalidades">Finalidades y base legal</a></li>
              <li><a className="underline hover:text-neutral-900" href="#conservacion">Plazo de conservación</a></li>
              <li><a className="underline hover:text-neutral-900" href="#encargados">Encargados y transferencias</a></li>
              <li><a className="underline hover:text-neutral-900" href="#cookies">Cookies y medición</a></li>
              <li><a className="underline hover:text-neutral-900" href="#derechos">Tus derechos</a></li>
              <li><a className="underline hover:text-neutral-900" href="#seguridad">Seguridad</a></li>
              <li><a className="underline hover:text-neutral-900" href="#condiciones">Condiciones de uso</a></li>
              <li><a className="underline hover:text-neutral-900" href="#contacto">Contacto</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Responsable */}
        <Card id="responsable" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">1) Responsable del tratamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm space-y-2">
            <p>
              Responsable: <strong>Echevensko</strong> (Chile). Correo:{" "}
              <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>.
            </p>
            <p>
              Ámbito: Sitio web corporativo para solicitud de propuestas y contacto:
              <code className="ml-1 rounded bg-neutral-100 px-1 py-0.5">empresas.echevensko.com</code>.
            </p>
          </CardContent>
        </Card>

        {/* Datos del formulario */}
        <Card id="datos-formulario" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">2) Datos que recopilamos a través del formulario</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm space-y-2">
            <p>Cuando envías el formulario de “Solicita tu propuesta”, tratamos:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identificación y contacto: nombre, apellido, email, empresa, ciudad/país y cargo (opcional).</li>
              <li>Información del evento: fecha tentativa, Nº de asistentes y modalidad (opcional).</li>
              <li>Mensaje que describa objetivos o contexto.</li>
              <li>Dirección IP y huella técnica asociada a la validación anti-spam (reCAPTCHA v2).</li>
            </ul>
            <p>
              El formulario se integra con <strong>Zoho CRM (WebToLead)</strong> para gestionar y responder tu
              solicitud comercial.
            </p>
          </CardContent>
        </Card>

        {/* Finalidades */}
        <Card id="finalidades" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">3) Finalidades y base legal</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestionar tu solicitud, cotizar y coordinar la charla/servicio.</li>
              <li>Prevenir fraude y spam con reCAPTCHA v2.</li>
              <li>Medición básica del uso del formulario (Zoho WebForm Analytics).</li>
            </ul>
            <p>
              <strong>Base legal:</strong> consentimiento (al enviar el formulario), interés legítimo (seguridad/anti-spam)
              y medidas precontractuales (preparar una propuesta comercial).
            </p>
          </CardContent>
        </Card>

        {/* Conservación */}
        <Card id="conservacion" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">4) Plazo de conservación</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm">
            Conservamos los datos mientras gestionamos tu solicitud y durante el tiempo necesario
            para cumplir obligaciones legales, contables o de defensa de reclamaciones. Luego,
            serán eliminados o anonimizados de forma segura.
          </CardContent>
        </Card>

        {/* Encargados y transferencias */}
        <Card id="encargados" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">5) Encargados y transferencias</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm space-y-2">
            <p>Usamos proveedores para operar el sitio y gestionar el contacto:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Zoho CRM:</strong> recepción y gestión de leads (WebToLead).</li>
              <li><strong>Google reCAPTCHA v2:</strong> verificación anti-spam (“No soy un robot”).</li>
              <li><strong>Zoho WebForm Analytics:</strong> métricas del formulario.</li>
            </ul>
            <p>
              Estos proveedores pueden operar fuera de Chile. Adoptamos medidas contractuales
              y técnicas razonables para proteger tus datos.
            </p>
          </CardContent>
        </Card>

        {/* Cookies y Consent */}
        <Card id="cookies" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">6) Cookies y medición</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm space-y-2">
            <p>
              El sitio puede usar cookies o tecnologías similares para funcionalidades básicas
              y medición. Implementamos <strong>Consent Mode</strong> para respetar preferencias
              de consentimiento en regiones aplicables. Algunas integraciones (p. ej., reCAPTCHA)
              pueden establecer cookies necesarias para seguridad.
            </p>
          </CardContent>
        </Card>

        {/* Derechos */}
        <Card id="derechos" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">7) Tus derechos</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm space-y-2">
            <p>
              Puedes solicitar acceso, rectificación, actualización, oposición o eliminación
              de tus datos, en la medida que lo permita la normativa aplicable.
            </p>
            <p>
              Para ejercerlos, escríbenos a{" "}
              <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>.
            </p>
          </CardContent>
        </Card>

        {/* Seguridad */}
        <Card id="seguridad" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">8) Seguridad</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm">
            Aplicamos medidas técnicas y organizativas razonables para proteger los datos.
            Ningún sistema es 100% seguro, pero revisamos periódicamente nuestras prácticas.
          </CardContent>
        </Card>

        {/* Condiciones de uso */}
        <Card id="condiciones" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">9) Condiciones de uso del sitio</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>El contenido del sitio es informativo y puede cambiar sin previo aviso.</li>
              <li>Queda prohibido el uso del sitio para actividades ilícitas o que afecten su seguridad.</li>
              <li>
                Los precios y condiciones comerciales publicados pueden estar sujetos a
                confirmación por escrito al momento de la propuesta.
              </li>
              <li>
                Enlaces a terceros: no nos responsabilizamos por contenido o políticas de sitios externos.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contacto */}
        <Card id="contacto" className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">10) Contacto</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-700 text-sm">
            Si tienes dudas sobre estas políticas, contáctanos en{" "}
            <a href="mailto:info@echevensko.com" className="underline">info@echevensko.com</a>.
          </CardContent>
        </Card>

        <p className="text-xs text-neutral-500">
          Nota: Este texto es una referencia y no constituye asesoría legal. Ajusta según tu
          operación, jurisdicción y criterios de tu asesoría legal.
        </p>
      </section>
    </main>
  );
}
