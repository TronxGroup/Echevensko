// app/gracias/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias | Echevensko Empresas",
  description: "Formulario enviado correctamente.",
  robots: { index: false, follow: false }, // evita indexar la página de conversión
};

export default function GraciasPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <section className="max-w-xl text-center">
        <h1 className="text-3xl font-bold">¡Gracias! 🎉</h1>
        <p className="mt-3 text-neutral-700">
          Recibimos tu solicitud. Te contactaremos dentro de <strong>24h hábiles</strong>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/56920080031?text=Hola%20ya%20envi%C3%A9%20el%20formulario%20para%20la%20charla%20corporativa"
            className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm"
            rel="noopener"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
