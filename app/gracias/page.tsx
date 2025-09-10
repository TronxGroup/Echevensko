// app/gracias/page.tsx
import { CheckCircle } from "lucide-react";

export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md text-center">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-neutral-800">¡Gracias por tu mensaje!</h1>
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
  );
}
