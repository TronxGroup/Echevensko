// app/page.tsx
import React from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  Star,
  Building2,
  Users,
  Timer,
  Globe2,
  Trophy,
  Quote,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Sparkles,
  Target,
  Instagram,
} from "lucide-react";

// ====== SEO (Next.js App Router) ======
export const metadata = {
  title: "Charlas corporativas | Echevensko",
  description:
    "Charla-espectáculo para empresas: bienestar, foco y creatividad. Presencial/online. Cotiza tu fecha.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://empresas.echevensko.com/" },
  openGraph: {
    type: "website",
    title: "Charlas corporativas | Echevensko",
    description:
      "Experiencia validada por miles de asistentes. Presencial/online. Ideal para RR.HH., cultura y liderazgo.",
    url: "https://empresas.echevensko.com/",
    images: ["/og-cover.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function EchevenskoB2BLanding() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* reCAPTCHA v2 (checkbox) */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" aria-hidden />
            <span className="font-semibold tracking-tight">
              La Magia de la Imaginación
            </span>
          </div>
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            aria-label="Secciones"
          >
            <a href="#por-que" className="hover:text-neutral-600">
              Impacto
            </a>
            <a href="#dirigido" className="hover:text-neutral-600">
              ¿A quién va?
            </a>
            <a href="#estructura" className="hover:text-neutral-600">
              Contenido
            </a>
            <a href="#valor" className="hover:text-neutral-600">
              Valor
            </a>
            <a href="#testimonios" className="hover:text-neutral-600">
              Testimonios
            </a>
            <a href="#faq" className="hover:text-neutral-600">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contacto">Solicitar propuesta</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/images/echevensko_web_foto_2.jpg')] bg-cover bg-center opacity-10"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4">B2B · Cultura & Bienestar</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Eleva{" "}
                <span className="text-amber-600">la imaginación</span> y el
                rendimiento de tu equipo
              </h1>
              <p className="mt-4 text-lg text-neutral-700">
                Charla-espectáculo corporativa presentada por{" "}
                <strong>Cristóbal Echevensko</strong> para organizaciones que
                buscan mejorar clima, engagement y creatividad. Entretenida,
                práctica y memorable, con aplicación inmediata en el día a día.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-2xl" asChild>
                  <a href="#contacto">Reservar charla (UF 32)</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl"
                  asChild
                >
                  <a href="#valor">Ver valor y alcance</a>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-1">
                  <Star
                    className="h-4 w-4 fill-amber-500 stroke-amber-500"
                    aria-hidden
                  />{" "}
                  Altas valoraciones
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" aria-hidden /> Miles de asistentes
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" aria-hidden /> Recomendado por
                  empresas
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div
                  className="absolute -inset-2 bg-amber-200/40 blur-2xl rounded-3xl"
                  aria-hidden
                />
                <Card className="relative rounded-3xl shadow-xl">
                  <CardContent className="p-0">
                    <img
                      src="/images/echevensko_web_foto_1.jpg"
                      alt="Auditorio corporativo durante la charla"
                      className="rounded-3xl object-cover h-[360px] w-full"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4" aria-hidden /> 60–75 min
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" aria-hidden /> Presencial /
                  Online
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4" aria-hidden /> ES / EN opcional
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... Secciones intermedias idénticas (Impacto, RR.HH., A quién va, Estructura, Valor, Testimonios, CTA, FAQ) ... */}

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold">Solicita tu propuesta</h2>
            <p className="mt-2 text-neutral-700">
              Cuéntanos fecha tentativa, modalidad y tamaño de audiencia.{" "}
              <strong>Valor único: UF 32</strong>.
            </p>

            <form
              className="mt-6 grid grid-cols-1 gap-3"
              id="webform6988454000000575779"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              name="WebToLeads6988454000000575779"
              method="POST"
              onSubmit="javascript:document.charset='UTF-8'; return checkMandatory6988454000000575779()"
              acceptCharset="UTF-8"
            >
              {/* Hidden inputs obligatorios */}
              <input
                type="text"
                style={{ display: "none" }}
                name="xnQsjsdp"
                value="45d9b797d479f84068f90d42b00a56219ce832c39eec6842269a4802278cacf1"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input
                type="text"
                style={{ display: "none" }}
                name="xmIwtLD"
                value="b43dad152065720fc561bb796faf679d9b41423112ae8cc52a6f4ac121fc64ed79d4c6fd1e1e5bad4f6986047f9d8f98"
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="actionType"
                value="TGVhZHM="
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="returnURL"
                value="https://empresas.echevensko.com/gracias"
              />

              {/* Campos visibles (diseño propio) */}
              <div className="grid sm:grid-cols-2 gap-3">
                <Input name="First Name" placeholder="Nombre" required />
                <Input name="Last Name" placeholder="Apellido" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <Input
                  name="Email"
                  placeholder="Email corporativo"
                  type="email"
                  required
                />
                <Input name="Company" placeholder="Organización/Empresa" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <Input name="LEADCF2" placeholder="Cargo" />
                <Input name="City" placeholder="Ciudad/País" required />
              </div>

              <Textarea
                name="LEADCF3"
                placeholder="Cuéntanos el objetivo de la actividad"
                className="min-h-[120px]"
                required
              />

              {/* Checkbox privacidad */}
              <label className="flex items-start gap-2 text-sm text-neutral-700">
                <input type="checkbox" required />
                <span>
                  He leído y acepto la{" "}
                  <a href="/privacidad-condiciones" className="underline">
                    Política de Privacidad y Condiciones
                  </a>
                  .
                </span>
              </label>

              {/* reCAPTCHA */}
              <div className="mt-2">
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lf-3sorAAAAAKTLgYS7eN1k_eC0Ewx20D_7kALH"
                  data-theme="light"
                />
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <Button className="rounded-2xl" type="submit">
                  Enviar consulta
                </Button>
              </div>
            </form>
          </div>

          <div className="md:col-span-2">
            <Card className="rounded-2xl md:sticky md:top-24">
              <CardHeader>
                <CardTitle>Datos de contacto</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" aria-hidden /> info@echevensko.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden /> +56 9 2008 0031
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden /> Santiago, Chile
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Echevensko. Todos los derechos
            reservados.
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
