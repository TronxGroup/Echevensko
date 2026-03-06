// app/page.tsx — magiaimaginacion.cl (versión mejorada + formulario simple + envío a email)
// Requiere además el endpoint: app/api/lead/route.ts (más abajo)

"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Globe2,
  Mail,
  MapPin,
  Mic,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  Target,
  Timer,
  Trophy,
  Users,
  Instagram,
} from "lucide-react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

type LeadPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
  city?: string;
  modality?: "Presencial" | "Online" | "";
  attendees?: string;
  consent: boolean;
  hp?: string; // honeypot
  utm?: Record<string, string>;
};

export default function MagiaImaginacionLanding() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<null | "ok" | "error">(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [form, setForm] = useState<LeadPayload>({
    name: "",
    email: "",
    company: "",
    message: "",
    phone: "",
    city: "",
    modality: "",
    attendees: "",
    consent: true,
    hp: "",
    utm: {},
  });

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    const out: Record<string, string> = {};
    keys.forEach((k) => {
      const v = params.get(k);
      if (v) out[k] = v;
    });
    return out;
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(null);
    setErrorMsg("");

    // anti-spam simple
    if (form.hp && form.hp.trim().length > 0) {
      setDone("ok"); // fingimos éxito
      return;
    }

    // validación básica
    if (!form.name.trim() || !form.email.trim() || !form.company.trim() || !form.message.trim()) {
      setDone("error");
      setErrorMsg("Por favor completa Nombre, Email, Empresa y Mensaje.");
      return;
    }
    if (!form.consent) {
      setDone("error");
      setErrorMsg("Debes aceptar la Política de Privacidad y Condiciones.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, utm }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "No se pudo enviar. Intenta nuevamente.");
      }

      setDone("ok");
      setForm((p) => ({
        ...p,
        name: "",
        email: "",
        company: "",
        message: "",
        phone: "",
        city: "",
        modality: "",
        attendees: "",
        hp: "",
      }));
    } catch (err: any) {
      setDone("error");
      setErrorMsg(err?.message || "Error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
          <a href="#main" className="sr-only focus:not-sr-only focus:underline">
            Ir al contenido
          </a>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">La Magia de la Imaginación</p>
              <p className="text-xs text-neutral-600">Charlas corporativas · Bienestar · Cultura</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#impacto" className="hover:text-neutral-600">
              Impacto
            </a>
            <a href="#video" className="hover:text-neutral-600">
              Video
            </a>
            <a href="#contenido" className="hover:text-neutral-600">
              Estructura
            </a>
            <a href="#faq" className="hover:text-neutral-600">
              FAQ
            </a>
            <a href="#contacto" className="hover:text-neutral-900 font-semibold">
              Cotizar
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contacto">Recibir propuesta en 24h</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="main" role="main">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent" />
            <div
              aria-hidden
              className="absolute inset-0 bg-[url('/images/echevensko_web_foto_2.jpg')] bg-cover bg-center opacity-[0.12]"
            />
            <div aria-hidden className="absolute inset-0 bg-white/70" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full" variant="secondary">
                    Kickoff · Bienestar · Cierres de ciclo
                  </Badge>
                  <Badge className="rounded-full">Presencial u Online</Badge>
                </div>

                <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Sube foco, energía y clima del equipo en{" "}
                  <span className="text-amber-700">75 minutos</span>.
                </h1>

                <p className="mt-4 text-lg text-neutral-800">
                  Una charla corporativa <strong>entretenida y aplicable</strong> para RR.HH., People & Culture y
                  Liderazgo. Incluye una <strong>técnica práctica</strong> para regular tensión y recuperar claridad{" "}
                  <strong>desde el día siguiente</strong>.
                </p>

                <div className="mt-5 grid gap-2 text-sm text-neutral-700">
                  {[
                    "Formato profesional: historias + participación + herramienta concreta (sin “humo”).",
                    "Operación clara: coordinación, factura, contrato y prueba técnica previa.",
                    "Se ajusta a tu objetivo y audiencia (industria, cultura, ciclo del equipo).",
                  ].map((x) => (
                    <div key={x} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-amber-700" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="rounded-2xl" asChild>
                    <a href="#contacto" aria-label="Cotizar charla">
                      Cotizar charla <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                    <a
                      href="https://wa.me/56920080031?text=Hola%20quiero%20cotizar%20la%20charla%20corporativa%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__"
                      rel="noopener"
                    >
                      WhatsApp con brief
                    </a>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-700">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" aria-hidden /> Altas valoraciones
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" aria-hidden /> Audiencias corporativas reales
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" aria-hidden /> Factura + contrato
                  </div>
                </div>

                {/* Mobile image */}
                <div className="mt-8 md:hidden">
                  <Card className="rounded-3xl shadow-sm overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/echevensko_web_foto_1.jpg"
                        alt="Cristóbal Echevensko presentando ante un auditorio"
                        width={1200}
                        height={900}
                        className="object-cover w-full h-[240px]"
                        priority
                      />
                    </CardContent>
                  </Card>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-700">
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4" /> 60–75 min
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" /> Presencial/Online
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4" /> Chile/Latam
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop visual + mini-brief */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-2 bg-amber-200/50 blur-2xl rounded-3xl" aria-hidden />
                  <Card className="relative rounded-3xl shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/echevensko_web_foto_1.jpg"
                        alt="Cristóbal Echevensko presentando ante un auditorio corporativo"
                        width={1200}
                        height={900}
                        className="rounded-3xl object-cover h-[340px] w-full"
                        priority
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4" aria-hidden /> 60–75 min
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" aria-hidden /> Presencial / Online
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4" aria-hidden /> Chile / Latam
                  </div>
                </div>

                <Card className="mt-4 rounded-3xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Para cotizar rápido</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-neutral-700">
                    <div className="grid gap-2">
                      {[
                        { icon: CalendarDays, label: "Fecha tentativa" },
                        { icon: Users, label: "Cantidad de asistentes" },
                        { icon: Building2, label: "Presencial u Online" },
                        { icon: MapPin, label: "Ciudad / País" },
                      ].map((it) => {
                        const Icon = it.icon;
                        return (
                          <div key={it.label} className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-amber-700" />
                            <span>{it.label}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4">
                      <Button asChild className="rounded-2xl w-full">
                        <a href="#contacto">Completar formulario (1 min)</a>
                      </Button>
                      <p className="mt-2 text-xs text-neutral-500">
                        Respuesta habitual: <strong>24h hábiles</strong>.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACTO */}
        <section id="impacto" className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold leading-tight">
                Impacto que RR.HH. puede <span className="text-amber-700">defender internamente</span>
              </h2>
              <p className="mt-4 text-neutral-700">
                Ideal cuando el equipo viene con carga, presión o cierre de metas. Se lleva una herramienta concreta y un
                lenguaje común para sostener el cambio.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-neutral-700">
                {[
                  { icon: ShieldCheck, title: "Operación clara", desc: "Alcance definido + coordinación + prueba técnica." },
                  { icon: Trophy, title: "Estándar corporativo", desc: "Tono profesional, participación real y ejemplos a medida." },
                  { icon: Target, title: "Cierre aplicable", desc: "Técnica simple para adoptar desde el día siguiente." },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold">{b.title}</p>
                        <p className="text-neutral-600">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Bienestar y regulación", desc: "Baja tensión, sube claridad y presencia." },
                { title: "Cohesión de equipo", desc: "Lenguaje común para colaborar mejor." },
                { title: "Creatividad aplicada", desc: "Recursos concretos para resolver y decidir." },
                { title: "Engagement", desc: "Energía arriba con participación auténtica." },
              ].map((b) => (
                <Card key={b.title} className="rounded-2xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-neutral-700">{b.desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section id="video" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <Badge className="mb-3 rounded-full">Mira 90 segundos y decide</Badge>
                <h2 className="text-3xl font-bold">Extracto (formato corporativo)</h2>
                <p className="mt-2 text-neutral-700">
                  Para ver tono, ritmo, participación y el tipo de herramienta que se entrega.
                </p>

                <div className="mt-6 rounded-2xl overflow-hidden border bg-neutral-100">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/_K00lO5cwzA?rel=0&modestbranding=1"
                      title="La Magia de la Imaginación | Charlas corporativas"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-2 text-sm text-neutral-700">
                  {[
                    "Adecuada para kickoffs, semanas de bienestar y cierres de ciclo.",
                    "Se ajusta a industria, objetivo del evento y perfil de audiencia.",
                    "Opción de Q&A breve (según modalidad).",
                  ].map((x) => (
                    <div key={x} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-amber-700" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl">
                    <a href="#contacto">Recibir propuesta en 24h</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a
                      href="https://wa.me/56920080031?text=Hola%20quiero%20cotizar%20la%20charla%20corporativa%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__"
                      rel="noopener"
                    >
                      WhatsApp con brief
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Momentos que importan</h3>
                <p className="mt-2 text-neutral-700">Participación, energía y foco: escenas reales.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/echevensko_foto3.jpg"
                        alt="Auditorio atento durante la charla"
                        width={800}
                        height={600}
                        className="w-full h-56 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/echevensko_foto4.jpg"
                        alt="Dinámica participativa con equipos"
                        width={800}
                        height={600}
                        className="w-full h-56 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li className="flex gap-2">
                    <Mic className="h-4 w-4 mt-0.5 text-amber-700" /> Tono cercano, estándar profesional.
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-amber-700" /> Coordinación, factura y contrato.
                  </li>
                  <li className="flex gap-2">
                    <Globe2 className="h-4 w-4 mt-0.5 text-amber-700" /> Cobertura Chile/Latam.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <section id="contenido" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-3xl font-bold">Estructura (3 actos)</h2>
            <p className="mt-3 text-neutral-700 max-w-3xl">
              Historias + humor + ejercicios simples. El foco es que el equipo salga con una herramienta práctica y un
              lenguaje común para el día a día.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Acto I — Atención y presión",
                  points: ["Cómo recuperar foco con carga real", "Marco simple para ordenar energía"],
                },
                {
                  title: "Acto II — Obstáculo y gestión",
                  points: ["Qué bloquea el rendimiento", "Qué hacer en el momento (sin teoría)"],
                },
                {
                  title: "Acto III — Técnica aplicable",
                  points: ["Ejercicio guiado", "Plan simple de 7 días (sostener hábito)"],
                },
              ].map((col) => (
                <Card key={col.title} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{col.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-700">
                    <ul className="space-y-2">
                      {col.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-amber-700" aria-hidden /> {p}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <Card className="rounded-3xl">
                <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Modalidad", desc: "Presencial u online (Zoom/Teams).", icon: Building2 },
                    { title: "Duración", desc: "60–75 min + Q&A opcional.", icon: Timer },
                    { title: "Audiencia", desc: "20 a 600 personas (consultar).", icon: Users },
                  ].map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.title} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{c.title}</p>
                          <p className="text-sm text-neutral-700">{c.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS (sin “referencial”) */}
        <section className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-bold">Feedback de asistentes</h2>
                <p className="mt-2 text-neutral-700">
                  Señales típicas: participación alta, energía arriba y técnica aplicada al día siguiente.
                </p>
              </div>
              <div className="flex items-center gap-1 text-amber-600" aria-label="Valoraciones">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 stroke-amber-500" aria-hidden />
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  who: "People & Culture — Servicios",
                  quote: "Interactividad, claridad y herramienta concreta. Al día siguiente el equipo la aplicó.",
                },
                {
                  who: "Gerencia Comercial — Retail",
                  quote: "Dinámica y directa. Muy útil para kickoffs y ciclos exigentes.",
                },
                {
                  who: "People Partner — Tecnología",
                  quote: "Llegamos con carga y salimos con foco y energía. Impacto real en el ánimo del equipo.",
                },
              ].map((t) => (
                <Card key={t.who} className="rounded-2xl">
                  <CardContent className="pt-6">
                    <Quote className="h-6 w-6 opacity-50" aria-hidden />
                    <p className="mt-3 text-neutral-800">{t.quote}</p>
                    <p className="mt-4 text-sm text-neutral-600">{t.who}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "¿Se adapta a industria / área / tipo de evento?",
                  a: "Sí. En un brief breve definimos objetivo y audiencia para ajustar ejemplos y énfasis (kickoff, bienestar, liderazgo, etc.).",
                },
                {
                  q: "¿Qué requerimientos técnicos hay?",
                  a: "Se coordina con tu equipo. En online hacemos prueba previa. En presencial se valida infraestructura con checklist.",
                },
                { q: "¿Incluye factura y contrato?", a: "Sí. Factura electrónica y acuerdo de servicios." },
                { q: "¿En qué ciudades trabajan?", a: "Base Santiago; cobertura nacional y Latam. Traslados/viáticos según ciudad/país." },
              ].map((item) => (
                <Card key={item.q} className="rounded-2xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-neutral-700">{item.a}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO (FORM SIMPLE) */}
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold">Cotizar (1 minuto)</h2>
              <p className="mt-2 text-neutral-700">
                Completa lo mínimo y te respondemos con una propuesta ajustada al alcance.
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Respuesta habitual: <strong>24h hábiles</strong>.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-3">
                {/* Honeypot (no visible) */}
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.hp || ""}
                  onChange={(e) => setForm((p) => ({ ...p, hp: e.target.value }))}
                  className="hidden"
                  aria-hidden
                />

                <div className="grid sm:grid-cols-2 gap-3">
                  <Input
                    placeholder="Nombre y apellido"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    required
                  />
                  <Input
                    placeholder="Email corporativo"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    required
                  />
                </div>

                <Input
                  placeholder="Empresa / Organización"
                  value={form.company}
                  onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                  required
                />

                {/* Opcionales “calidad de lead” (no obligatorios) */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <Input
                    placeholder="Teléfono (opcional)"
                    value={form.phone || ""}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  />
                  <Input
                    placeholder="Ciudad / País (opcional)"
                    value={form.city || ""}
                    onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={form.modality || ""}
                    onChange={(e) => setForm((p) => ({ ...p, modality: e.target.value as any }))}
                    aria-label="Modalidad (opcional)"
                  >
                    <option value="">Modalidad (opcional)</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Online">Online</option>
                  </select>

                  <Input
                    placeholder="Asistentes (opcional)"
                    value={form.attendees || ""}
                    onChange={(e) => setForm((p) => ({ ...p, attendees: e.target.value }))}
                  />
                </div>

                <Textarea
                  className="min-h-[120px]"
                  placeholder={
                    "Mensaje (obligatorio)\nObjetivo: __\nFecha tentativa: __\nTipo de audiencia: __\nContexto/tema: __"
                  }
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  required
                />

                <label className="flex items-start gap-2 text-sm text-neutral-700">
                  <input
                    type="checkbox"
                    checked={!!form.consent}
                    onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                    required
                  />
                  <span>
                    Acepto la{" "}
                    <a href="/privacidad-condiciones" className="underline">
                      Política de Privacidad y Condiciones
                    </a>
                    .
                  </span>
                </label>

                {done === "ok" && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                    ¡Listo! Recibimos tu solicitud. Te responderemos dentro de 24h hábiles.
                  </div>
                )}

                {done === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                    {errorMsg || "No se pudo enviar. Intenta nuevamente."}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-2">
                  <Button className="rounded-2xl" type="submit" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar solicitud"}
                  </Button>

                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href="mailto:info@echevensko.com?subject=Cotizaci%C3%B3n%20charla%20corporativa">
                      Email
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="rounded-2xl">
                    <a
                      href="https://wa.me/56920080031?text=Hola%20quiero%20cotizar%20la%20charla%20corporativa%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__"
                      rel="noopener"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-neutral-500 mt-1">
                  Al enviar, aceptas ser contactado(a) con fines comerciales.
                </p>
              </form>
            </div>

            <div className="md:col-span-2">
              <Card className="rounded-2xl md:sticky md:top-24">
                <CardHeader>
                  <CardTitle>Contacto directo</CardTitle>
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
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden /> Respuesta en 24h hábiles
                  </p>

                  <div className="pt-3 border-t">
                    <p className="font-medium">Incluye</p>
                    <ul className="mt-2 space-y-1">
                      {["Factura electrónica", "Contrato de servicios", "Prueba técnica previa (si aplica)"].map((x) => (
                        <li key={x} className="flex gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-amber-700" /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="font-medium">Atajo</p>
                    <div className="mt-3 flex flex-col gap-2">
                      <Button asChild className="rounded-2xl">
                        <a href="#contacto">Completar formulario</a>
                      </Button>
                      <Button asChild variant="outline" className="rounded-2xl">
                        <a
                          href="https://wa.me/56920080031?text=Hola%20quiero%20cotizar%20la%20charla%20corporativa%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__"
                          rel="noopener"
                        >
                          WhatsApp con brief
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* CTA STICKY MOBILE */}
      <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <Button asChild className="w-full rounded-2xl shadow-lg">
            <a href="#contacto">Cotizar</a>
          </Button>
          <Button asChild variant="outline" className="w-full rounded-2xl shadow-lg bg-white">
            <a
              href="https://wa.me/56920080031?text=Hola%20quiero%20cotizar%20la%20charla%20corporativa%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__"
              rel="noopener"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>

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

            <a
              href="https://www.linkedin.com/company/la-magia-de-la-imaginacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-800 inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.352V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.268 2.372 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM6.993 20.452H3.681V9h3.312v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="pb-6 text-center">
          <a
            href="https://www.tronxstrategy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-neutral-400 hover:text-neutral-600 transition"
          >
            Desarrollado por <span className="font-medium">Tronx Strategy</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
