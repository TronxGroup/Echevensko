"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
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
  GraduationCap,
  HeartHandshake,
  BriefcaseBusiness,
  ChevronDown,
  Zap,
} from "lucide-react";

type OrgType = "" | "Empresa" | "Colegio" | "Fundación" | "Otra";
type Modality = "" | "Presencial" | "Online";

type LeadPayload = {
  name: string;
  email: string;
  orgType: OrgType;
  message: string;
  phone?: string;
  consent: boolean;
  hp?: string;
  utm?: Record<string, string>;
};

function safeTrim(v: any) {
  return typeof v === "string" ? v.trim() : "";
}

const trustedOrganizations = [
  { name: "The Grange School", src: "/logos/the-grange-school-horizontal.png" },
  { name: "Farmacias Knop", src: "/logos/farmacias-knop.png" },
  { name: "Colegio Árabe", src: "/logos/colegio-arabe.png" },
  { name: "Registro Civil", src: "/logos/registro-civil.png" },
  { name: "Copesa", src: "/logos/grupo-copesa.png" },
  { name: "Municipalidad de Providencia", src: "/logos/providencia.png" },
  { name: "Nestlé", src: "/logos/nestle.png" },
  { name: "Codelco", src: "/logos/codelco.png" },
  { name: "El Colorado", src: "/logos/el-colorado.png" },
  { name: "Quererte Cafetería", src: "/logos/quererte.png" },
  { name: "Municipalidad de Vitacura", src: "/logos/vitacura.png" },
  { name: "Trewhhela's School", src: "/logos/trewhhelas-school.png" },
];

const faqs = [
  {
    q: "¿Se adapta a empresas, colegios y fundaciones?",
    a: "Sí. Definimos objetivo y audiencia en un brief breve para ajustar lenguaje, ejemplos y dinámica según el perfil del grupo.",
  },
  {
    q: "¿Qué requerimientos técnicos hay?",
    a: "En modalidad online hacemos prueba previa. En presencial se valida infraestructura con checklist de audio y proyección.",
  },
  {
    q: "¿Incluye factura y contrato?",
    a: "Sí. Factura electrónica y contrato de servicios en todos los casos.",
  },
  {
    q: "¿En qué ciudades trabajan?",
    a: "Base Santiago, cobertura nacional y Latam. Traslados y viáticos según ciudad o país.",
  },
  {
    q: "¿Qué duración y tamaño de audiencia?",
    a: "60-75 minutos. Desde 20 a 600 personas (consultar para grupos más grandes).",
  },
  {
    q: "¿Se puede medir el impacto?",
    a: "Opcional: encuesta post-evento y resumen de insights según el alcance acordado.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-base font-medium text-stone-900 hover:text-amber-700 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-amber-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function MagiaImaginacionLanding() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<null | "ok" | "error">(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<LeadPayload>({
    name: "",
    email: "",
    orgType: "",
    message: "",
    phone: "",
    consent: false,
    hp: "",
    utm: {},
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  function fireLeadEvent() {
    const gtag = typeof window !== "undefined" ? (window as any).gtag : null;
    if (typeof gtag === "function") {
      gtag("event", "generate_lead", {
        event_category: "lead",
        event_label: "form_magiaimaginacion",
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(null);
    setErrorMsg("");

    if (safeTrim(form.hp).length > 0) {
      setDone("ok");
      return;
    }

    if (!safeTrim(form.name) || !safeTrim(form.email) || !safeTrim(form.message)) {
      setDone("error");
      setErrorMsg("Por favor completa nombre, email y mensaje.");
      return;
    }

    if (!form.consent) {
      setDone("error");
      setErrorMsg("Debes aceptar la Política de Privacidad para continuar.");
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

      fireLeadEvent();
      setDone("ok");
      setForm((p) => ({ ...p, name: "", email: "", orgType: "", message: "", phone: "", hp: "" }));
    } catch (err: any) {
      setDone("error");
      setErrorMsg(err?.message || "Error inesperado. Escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-stone-900 font-sans">

      {/* == HEADER== */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
          <a href="#main" className="sr-only focus:not-sr-only focus:underline">
            Ir al contenido
          </a>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100">
              <Trophy className="h-5 w-5 text-amber-800" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sm tracking-tight text-stone-900">La Magia de la Imaginación</p>
              <p className="text-[11px] text-stone-500">Charlas · Bienestar · Foco · Creatividad</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-stone-600">
            <a href="#impacto" className="hover:text-stone-900 transition-colors">Impacto</a>
            <a href="#paraquien" className="hover:text-stone-900 transition-colors">Público</a>
            <a href="#video" className="hover:text-stone-900 transition-colors">Video</a>
            <a href="#contenido" className="hover:text-stone-900 transition-colors">Estructura</a>
            <a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a>
          </nav>

          <Button asChild size="sm" className="rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0 shadow-none text-sm px-4">
            <a href="#contacto">Recibir propuesta &rarr;</a>
          </Button>
        </div>
      </header>

      <main id="main" role="main">

        {/* == HERO== */}
        <section ref={heroRef} className="relative overflow-hidden bg-[#FAFAF7]">
          {/* Decorative background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-100/60" />
            <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-stone-100/80" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-20 md:pb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left col */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full text-xs bg-amber-100 text-amber-800 border-0">
                    Kickoff · Bienestar · Convivencia · Cierres de ciclo
                  </Badge>
                  <Badge variant="secondary" className="rounded-full text-xs bg-stone-100 text-stone-700 border-0">
                    Presencial u Online
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-stone-900">
                  Sube foco, energía y clima de equipo en{" "}
                  <span className="text-amber-600">75 minutos</span>.
                </h1>

                <p className="text-lg text-stone-600 leading-relaxed">
                  Charla <strong className="text-stone-800 font-semibold">entretenida y aplicable</strong> para{" "}
                  <strong className="text-stone-800 font-semibold">empresas</strong>,{" "}
                  <strong className="text-stone-800 font-semibold">colegios</strong> y{" "}
                  <strong className="text-stone-800 font-semibold">fundaciones</strong>. Los participantes se llevan una técnica concreta para regular tensión y recuperar claridad{" "}
                  <strong className="text-stone-800 font-semibold">desde el día siguiente</strong>.
                </p>

                <ul className="space-y-2.5 text-sm text-stone-700">
                  {[
                    "Formato profesional: historias + participación + herramienta concreta (sin 'humo').",
                    "Operación clara: coordinación, factura, contrato y prueba técnica previa.",
                    "Se adapta al objetivo y audiencia (corporativo o educativo/social).",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100">
                        <Check className="h-3 w-3 text-amber-700" />
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button size="lg" className="rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0 shadow-none" asChild>
                    <a href="#contacto">
                      Cotizar ahora <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-stone-300 text-stone-700 hover:bg-stone-100" asChild>
                    <a
                      href="https://wa.me/56985012300?text=Hola%20quiero%20cotizar%20la%20charla%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0ATipo%20de%20organizaci%C3%B3n:%20Empresa/Colegio/Fundaci%C3%B3n%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__"
                      rel="noopener"
                    >
                      WhatsApp con brief
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" /> Altas valoraciones
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" /> Audiencias reales
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" /> Factura + contrato
                  </span>
                </div>
              </div>

              {/* Right col */}
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/echevensko_web_foto_1.jpg"
                    alt="Cristóbal Echevensko presentando ante un auditorio"
                    width={1200}
                    height={900}
                    className="object-cover w-full h-[360px]"
                    priority
                  />
                  {/* Overlay pill */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur rounded-2xl px-4 py-3 flex items-center justify-between text-xs text-stone-700 shadow-sm">
                      <span className="flex items-center gap-1.5"><Timer className="h-3.5 w-3.5 text-amber-600" /> 60-75 min</span>
                      <span className="w-px h-4 bg-stone-200" />
                      <span className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-amber-600" /> Presencial / Online</span>
                      <span className="w-px h-4 bg-stone-200" />
                      <span className="flex items-center gap-1.5"><Globe2 className="h-3.5 w-3.5 text-amber-600" /> Chile / Latam</span>
                    </div>
                  </div>
                </div>

                {/* Mini brief card */}
                <div className="bg-white rounded-2xl border border-stone-200 p-5">
                  <p className="text-sm font-semibold text-stone-800 mb-3">Para cotizar rápido, cuéntanos:</p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-stone-600">
                    {[
                      { icon: CalendarDays, label: "Fecha tentativa" },
                      { icon: Users, label: "Cantidad de asistentes" },
                      { icon: Building2, label: "Presencial u Online" },
                      { icon: MapPin, label: "Ciudad / País" },
                    ].map((it) => {
                      const Icon = it.icon;
                      return (
                        <div key={it.label} className="flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                          <span>{it.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <Button asChild className="mt-4 w-full rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0 text-sm">
                    <a href="#contacto">Completar formulario (1 min)</a>
                  </Button>
                  <p className="mt-2 text-center text-xs text-stone-400">Respuesta habitual en 24h hábiles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* == LOGOS== */}
        <section className="bg-white border-y border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 mb-8">
              Organizaciones que han confiado en esta charla
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-7 items-center">
              {trustedOrganizations.map((org) => (
                <div key={org.name} className="flex items-center justify-center" title={org.name}>
                  <Image
                    src={org.src}
                    alt={org.name}
                    width={180}
                    height={90}
                    className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500">
              {["Empresas", "Colegios", "Fundaciones", "Municipalidades", "Organizaciones públicas y privadas"].map((t) => (
                <span key={t} className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* == PARA QUIÉN== */}
        <section id="paraquien" className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Público objetivo</p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">¿Para quién funciona mejor?</h2>
            <p className="mt-3 text-stone-600 leading-relaxed">
              Mismo formato base, con ejemplos y lenguaje ajustados al grupo: presión por metas, estrés, convivencia o necesidad de re-energizar el ciclo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: BriefcaseBusiness,
                title: "Empresas",
                desc: "Kickoffs, bienestar laboral, clima, liderazgo, equipos comerciales u operación.",
                tags: ["RR.HH. / People & Culture", "Liderazgo", "Equipos comerciales"],
              },
              {
                icon: GraduationCap,
                title: "Colegios",
                desc: "Convivencia, foco y bienestar. Adaptable a estudiantes, docentes o apoderados.",
                tags: ["Estudiantes", "Docentes", "Apoderados"],
              },
              {
                icon: HeartHandshake,
                title: "Fundaciones",
                desc: "Equipos con alta carga emocional y trabajo comunitario. Energía, foco y herramientas simples.",
                tags: ["Equipos sociales", "Organizaciones públicas"],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 mb-4">
                    <Icon className="h-5 w-5 text-amber-700" />
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">{card.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span key={tag} className="text-[11px] bg-stone-100 text-stone-600 rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* == IMPACTO== */}
        <section id="impacto" className="bg-stone-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Resultados</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Impacto que una organización puede{" "}
                  <span className="text-amber-400">defender internamente</span>
                </h2>
                <p className="mt-4 text-stone-400 leading-relaxed">
                  Ideal cuando el grupo viene con carga o presión. Se llevan una herramienta concreta y un lenguaje común para sostener el cambio.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: ShieldCheck, title: "Operación clara", desc: "Alcance definido + coordinación + prueba técnica." },
                    { icon: Trophy, title: "Estándar profesional", desc: "Tono cuidado, participación real y ejemplos a medida." },
                    { icon: Target, title: "Cierre aplicable", desc: "Técnica simple para adoptar desde el día siguiente." },
                  ].map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.title} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/10">
                          <Icon className="h-4 w-4 text-amber-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{b.title}</p>
                          <p className="text-sm text-stone-400">{b.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Bienestar y regulación", desc: "Baja tensión, sube claridad y presencia.", n: "01" },
                  { title: "Cohesión y convivencia", desc: "Lenguaje común para colaborar y respetar límites.", n: "02" },
                  { title: "Creatividad aplicada", desc: "Recursos concretos para resolver y decidir.", n: "03" },
                  { title: "Engagement", desc: "Energía arriba con participación auténtica.", n: "04" },
                ].map((b) => (
                  <div key={b.title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <p className="text-xs text-stone-500 font-mono mb-3">{b.n}</p>
                    <p className="font-semibold text-white text-sm mb-1">{b.title}</p>
                    <p className="text-xs text-stone-400 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* == VIDEO== */}
        <section id="video" className="bg-white border-y border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Mira 90 segundos y decide</p>
                <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">Extracto (formato real)</h2>
                <p className="text-stone-600 mb-6">Tono, ritmo, participación y la herramienta que se entrega.</p>

                <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/_K00lO5cwzA?rel=0&modestbranding=1"
                      title="La Magia de la Imaginación | Charlas"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-stone-700">
                  {[
                    "Adecuada para kickoffs, bienestar laboral, convivencia escolar y jornadas internas.",
                    "Se ajusta a objetivo, edad/perfil y contexto del grupo.",
                    "Opción de Q&A breve (según modalidad).",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100">
                        <Check className="h-3 w-3 text-amber-700" />
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0">
                    <a href="#contacto">Recibir propuesta en 24h</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-stone-300">
                    <a href="https://wa.me/56985012300?text=Hola%20quiero%20cotizar%20la%20charla%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0ATipo%20de%20organizaci%C3%B3n:%20Empresa/Colegio/Fundaci%C3%B3n%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__" rel="noopener">
                      WhatsApp con brief
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-stone-900 mb-1">Momentos que importan</h3>
                <p className="text-stone-600 text-sm mb-6">Participación, energía y foco: escenas reales.</p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/images/echevensko_foto3.jpg"
                      alt="Auditorio atento durante la charla"
                      width={800}
                      height={600}
                      className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/images/echevensko_foto4.jpg"
                      alt="Dinámica participativa con equipos"
                      width={800}
                      height={600}
                      className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2.5 items-center"><Mic className="h-4 w-4 text-amber-600 shrink-0" /> Tono cercano, estándar profesional.</li>
                  <li className="flex gap-2.5 items-center"><ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" /> Coordinación, factura y contrato.</li>
                  <li className="flex gap-2.5 items-center"><Globe2 className="h-4 w-4 text-amber-600 shrink-0" /> Cobertura Chile / Latam.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* == CONTENIDO== */}
        <section id="contenido" className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Estructura</p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">3 actos, 75 minutos</h2>
            <p className="mt-3 text-stone-600 leading-relaxed">
              Historias + humor + ejercicios simples. El grupo sale con una herramienta práctica y un lenguaje común.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                n: "I",
                title: "Atención y presión",
                points: ["Cómo recuperar foco con carga real", "Marco simple para ordenar energía"],
              },
              {
                n: "II",
                title: "Obstáculo y gestión",
                points: ["Qué bloquea el rendimiento", "Qué hacer en el momento (sin teoría)"],
              },
              {
                n: "III",
                title: "Técnica aplicable",
                points: ["Ejercicio guiado", "Plan simple de 7 días para sostener el hábito"],
              },
            ].map((col) => (
              <div key={col.n} className="bg-white rounded-2xl border border-stone-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 rounded-lg px-2.5 py-1">Acto {col.n}</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-3">{col.title}</h3>
                <ul className="space-y-2">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 mt-0.5 text-amber-600 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: "Modalidad", desc: "Presencial u online (Zoom / Teams)." },
                { icon: Timer, title: "Duración", desc: "60-75 min + Q&A opcional." },
                { icon: Users, title: "Audiencia", desc: "20 a 600 personas (consultar)." },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                      <Icon className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">{c.title}</p>
                      <p className="text-sm text-stone-600 mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0">
              <a href="#contacto">Cotizar</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-stone-300">
              <a href="#faq">Ver preguntas frecuentes</a>
            </Button>
          </div>
        </section>

        {/* == LOGÍSTICA== */}
        <section className="bg-stone-50 border-y border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-stone-900 mb-6">Cómo se contrata (simple)</h3>
                <div className="space-y-5">
                  {[
                    { n: "1", title: "Brief de 10 minutos", desc: "Objetivo, audiencia, modalidad, ciudad y fecha." },
                    { n: "2", title: "Propuesta por escrito", desc: "Alcance, requerimientos y condiciones claras." },
                    { n: "3", title: "Confirmación y coordinación", desc: "Contrato + factura + prueba técnica (si aplica)." },
                  ].map((s) => (
                    <div key={s.n} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-sm font-bold">{s.n}</span>
                      <div>
                        <p className="font-semibold text-stone-900 text-sm">{s.title}</p>
                        <p className="text-sm text-stone-500 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm font-semibold text-stone-800 mb-3">Incluye</p>
                  <ul className="space-y-2">
                    {["Factura electrónica", "Contrato de servicios", "Prueba técnica previa (online / coordinación)"].map((x) => (
                      <li key={x} className="flex items-center gap-2 text-sm text-stone-600">
                        <Check className="h-4 w-4 text-amber-600" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-amber-600 rounded-2xl p-6 md:p-8 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 mb-5">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resultados que buscamos</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Subir energía y foco (sin 'humo').",
                    "Mejorar convivencia con un lenguaje común.",
                    "Dejar una técnica simple con adopción inmediata.",
                    "Que la organización tenga un recurso defendible y replicable.",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-amber-50">
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-amber-200" /> {x}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl bg-white/15 px-4 py-3 text-sm text-amber-100 mb-6">
                  Cuéntanos: <strong className="text-white">tipo de organización</strong>,{" "}
                  <strong className="text-white">fecha</strong>,{" "}
                  <strong className="text-white">modalidad</strong> y{" "}
                  <strong className="text-white">objetivo</strong>. Te respondemos con propuesta ajustada.
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-full !bg-white !text-amber-700 hover:!bg-amber-50 border-0 font-semibold">
                    <a href="#contacto">Cotizar</a>
                  </Button>
                  <Button asChild className="rounded-full !bg-transparent !text-white border border-white/50 hover:!bg-white/10 font-normal">
                    <a href="https://wa.me/56985012300?text=Hola%20quiero%20cotizar%20la%20charla%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0ATipo%20de%20organizaci%C3%B3n:%20Empresa/Colegio/Fundaci%C3%B3n%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__" rel="noopener">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* == TESTIMONIOS== */}
        <section className="bg-white border-b border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Feedback</p>
                <h2 className="text-3xl font-bold tracking-tight text-stone-900">Qué dicen los asistentes</h2>
                <p className="mt-2 text-stone-600">Participación alta, energía arriba y técnica aplicada al día siguiente.</p>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 stroke-amber-400" aria-hidden />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { who: "People & Culture - Servicios", quote: "Interactividad, claridad y herramienta concreta. Al día siguiente la aplicamos." },
                { who: "Gerencia - Retail", quote: "Dinámica y directa. Muy útil para kickoffs y ciclos exigentes." },
                { who: "Equipo educativo - Convivencia", quote: "Lenguaje claro, participación y enfoque práctico. Buena recepción del grupo." },
              ].map((t) => (
                <div key={t.who} className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
                  <Quote className="h-5 w-5 text-amber-400 mb-4" aria-hidden />
                  <p className="text-stone-800 leading-relaxed mb-5">{t.quote}</p>
                  <p className="text-xs text-stone-400 font-medium">{t.who}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* == CTA INTERMEDIA== */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-stone-900 rounded-3xl overflow-hidden p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">¿Necesitas una propuesta hoy?</h3>
              <p className="mt-3 text-stone-400 leading-relaxed">
                Envíanos tipo de organización, fecha tentativa, modalidad, ciudad y cantidad de asistentes. Respondemos con propuesta y siguiente paso.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Alcance por escrito", "Factura + contrato", "Prueba técnica previa", "Presencial u Online"].map((x) => (
                  <span key={x} className="text-xs text-stone-400 border border-stone-700 rounded-full px-3 py-1">{x}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-amber-500 hover:bg-amber-400 text-white border-0 font-semibold">
                <a href="#contacto">Solicitar propuesta <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-full !bg-transparent !text-stone-300 border border-stone-600 hover:!bg-stone-800 hover:!text-white">
                <a href="mailto:info@magiaimaginacion.cl?subject=Cotizaci%C3%B3n%20charla%20La%20Magia%20de%20la%20Imaginaci%C3%B3n">
                  Enviar email
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* == FAQ== */}
        <section id="faq" className="bg-white border-y border-stone-200">
          <div className="mx-auto max-w-3xl px-4 py-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Preguntas frecuentes</p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-10">Lo que suelen preguntar</h2>
            <div className="divide-y divide-stone-200 border-t border-stone-200">
              {faqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* == CONTACTO== */}
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-5 gap-10">

            {/* Formulario */}
            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Cotizar</p>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">Recibe tu propuesta en 24h</h2>
              <p className="mt-2 text-stone-600">
                Solo necesitamos lo esencial. El detalle lo coordinamos después.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
                {/* Honeypot */}
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.hp || ""}
                  onChange={(e) => setForm((p) => ({ ...p, hp: e.target.value }))}
                  className="hidden"
                  aria-hidden
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-stone-700">Nombre y apellido *</label>
                    <Input
                      id="name"
                      placeholder="Ej: María González"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      required
                      className="rounded-xl border-stone-300 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-stone-700">Email *</label>
                    <Input
                      id="email"
                      placeholder="correo@empresa.cl"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      required
                      className="rounded-xl border-stone-300 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="orgType" className="text-xs font-medium text-stone-700">Tipo de organización *</label>
                    <select
                      id="orgType"
                      className="h-10 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={form.orgType}
                      onChange={(e) => setForm((p) => ({ ...p, orgType: e.target.value as OrgType }))}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Empresa">Empresa</option>
                      <option value="Colegio">Colegio</option>
                      <option value="Fundación">Fundación</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-stone-700">Teléfono <span className="text-stone-400">(opcional)</span></label>
                    <Input
                      id="phone"
                      placeholder="+56 9 ..."
                      value={form.phone || ""}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="rounded-xl border-stone-300 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-stone-700">Mensaje *</label>
                  <Textarea
                    id="message"
                    className="min-h-[130px] rounded-xl border-stone-300 bg-white resize-none"
                    placeholder="Cuéntanos brevemente: objetivo de la charla, fecha tentativa, modalidad y cantidad aproximada de asistentes."
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    required
                  />
                  <p className="text-xs text-stone-400">El detalle lo coordinamos juntos. No necesitas tener todo definido ahora.</p>
                </div>

                <label className="flex items-start gap-2.5 text-sm text-stone-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!form.consent}
                    onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                    required
                    className="mt-0.5 accent-amber-600"
                  />
                  <span>
                    Acepto la{" "}
                    <a href="/privacidad-condiciones" className="underline text-stone-800 hover:text-amber-700">
                      Política de Privacidad y Condiciones
                    </a>
                    {" "}y que me contacten con fines comerciales.
                  </span>
                </label>

                {done === "ok" && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900">
                    <p className="font-semibold mb-1">¡Solicitud recibida!</p>
                    <p>Te respondemos dentro de 24h hábiles. Si necesitas respuesta hoy, escríbenos por{" "}
                      <a href="https://wa.me/56985012300" rel="noopener" className="underline font-medium">WhatsApp</a>.
                    </p>
                  </div>
                )}

                {done === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {errorMsg || "No se pudo enviar. Intenta nuevamente o escríbenos por WhatsApp."}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-1">
                  <Button
                    className="rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0 px-6"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-stone-300 text-stone-700">
                    <a href="https://wa.me/56985012300?text=Hola%20quiero%20cotizar%20la%20charla%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0ATipo%20de%20organizaci%C3%B3n:%20Empresa/Colegio/Fundaci%C3%B3n%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__" rel="noopener">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2">
              <div className="md:sticky md:top-24 space-y-4">
                <div className="bg-white rounded-2xl border border-stone-200 p-6">
                  <h3 className="font-semibold text-stone-900 mb-4">Contacto directo</h3>
                  <ul className="space-y-3 text-sm text-stone-700">
                    <li className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 text-amber-600 shrink-0" />
                      <a href="mailto:info@magiaimaginacion.cl" className="hover:text-amber-700">info@magiaimaginacion.cl</a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-amber-600 shrink-0" />
                      <a href="tel:+56985012300" className="hover:text-amber-700">+56 9 8501 2300</a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0" /> Santiago, Chile
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CalendarDays className="h-4 w-4 text-amber-600 shrink-0" /> Respuesta en 24h hábiles
                    </li>
                  </ul>

                  <div className="mt-5 pt-5 border-t border-stone-100">
                    <p className="text-xs font-semibold text-stone-700 mb-3">Incluye siempre</p>
                    <ul className="space-y-2">
                      {["Factura electrónica", "Contrato de servicios", "Prueba técnica previa (si aplica)"].map((x) => (
                        <li key={x} className="flex items-center gap-2 text-sm text-stone-600">
                          <Check className="h-4 w-4 text-amber-600" /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                  <p className="text-sm font-semibold text-amber-900 mb-1">¿Necesitas respuesta hoy?</p>
                  <p className="text-xs text-amber-700 mb-4">Escríbenos por WhatsApp con el brief y respondemos en el día.</p>
                  <Button asChild className="w-full rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0 text-sm">
                    <a href="https://wa.me/56985012300?text=Hola%20quiero%20cotizar%20la%20charla%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0ATipo%20de%20organizaci%C3%B3n:%20Empresa/Colegio/Fundaci%C3%B3n%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__" rel="noopener">
                      Abrir WhatsApp &rarr;
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* == CTA STICKY MOBILE== */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-stone-200 bg-white/95 backdrop-blur px-4 py-3">
        <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
          <Button asChild className="w-full rounded-full bg-amber-600 hover:bg-amber-700 text-white border-0">
            <a href="#contacto">Cotizar</a>
          </Button>
          <Button asChild variant="outline" className="w-full rounded-full border-stone-300 text-stone-700">
            <a href="https://wa.me/56985012300?text=Hola%20quiero%20cotizar%20la%20charla%20La%20Magia%20de%20la%20Imaginaci%C3%B3n.%0ATipo%20de%20organizaci%C3%B3n:%20Empresa/Colegio/Fundaci%C3%B3n%0AObjetivo:%20__%0AFecha:%20__%0AModalidad:%20__%0ACiudad:%20__%0AAsistentes:%20__" rel="noopener">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* == FOOTER== */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Echevensko. Todos los derechos reservados.</p>
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href="/privacidad-condiciones" className="hover:text-stone-800 transition-colors">Privacidad y Condiciones</a>
            <a href="https://instagram.com/cristobalechevensko" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-stone-800 transition-colors">
              <Instagram className="h-4 w-4" />@cristobalechevensko
            </a>
          </div>
        </div>
        <div className="pb-6 text-center">
          <a href="https://www.tronxweb.com/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-stone-300 hover:text-stone-500 transition-colors">
            Desarrollado por <span className="font-medium">Tronx Web</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
