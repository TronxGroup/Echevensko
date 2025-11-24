// app/page.tsx — Landing principal magiaimaginacion.cl (versión optimizada para Ads)
"use client";

import React from "react";
import Script from "next/script";
import Image from "next/image";
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

export default function MagiaImaginacionLanding() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* ===== reCAPTCHA y Zoho (cargan en cliente, no bloquean build) ===== */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      {/* Analytics Zoho */}
      <Script
        id="zoho-wf-analytics"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=fee7c1bafea2661c9997e37c41c59cb445f826a65325d8f5a4739f83e2f0792aa8b373107d7f752fd56da4c13b1e6ea9gid17d84ea467391076102a5e17c4ceb5e46f0e8c97c8e4ec657efda52a847e640egid709883a9fe5c13efc46469418983ea231f3f387d63c04ea294ff27cc49c931b9gid2d12d24eb6184bc462e5506056223c61b3c38aeca8b23b786dd9bdf0ecd58008&tw=a7501812887942453320df557f0aaa2f67d7ee2c72ff98af67a179a0a7f4553c"
        strategy="afterInteractive"
      />

      {/* Validadores Zoho (adaptados: menos campos obligatorios) */}
      <Script id="zoho-validators" strategy="afterInteractive">
        {`
function addAriaSelected6988454000000575779(){
  var optionElem = event.target;
  var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
  if(previousSelectedOption){ previousSelectedOption.removeAttribute('aria-selected'); }
  optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
}

/* Do not remove this code. */
function rccallback6988454000000575779(){
  var el = document.getElementById('recap6988454000000575779');
  if(el){ el.setAttribute('captcha-verified', true); }
  var err = document.getElementById('recapErr6988454000000575779');
  if(err && err.style.visibility === 'visible'){ err.style.visibility = 'hidden'; }
}
function reCaptchaAlert6988454000000575779(){
  var recap = document.getElementById('recap6988454000000575779');
  if(recap && recap.getAttribute('captcha-verified') == 'false'){
    var err = document.getElementById('recapErr6988454000000575779');
    if(err){ err.style.visibility = 'visible'; }
    return false;
  }
  return true;
}
function validateEmail6988454000000575779(){
  var form = document.forms['WebToLeads6988454000000575779'];
  var emailFld = form.querySelectorAll('[ftype=email]');
  for(var i=0;i<emailFld.length;i++){
    var emailVal = emailFld[i].value;
    if((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0){
      var atpos = emailVal.indexOf('@');
      var dotpos = emailVal.lastIndexOf('.');
      if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
        alert('Introduzca una dirección de correo electrónico válida. ');
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}
function checkMandatory6988454000000575779(){
  // Campos realmente obligatorios (bajamos fricción para campañas)
  var mndFileds = new Array('Company','First Name','Last Name','Email','LEADCF3');
  var fldLangVal = new Array('Empresa','Nombre','Apellido','Correo electrónico','Mensaje');
  for(var i=0;i<mndFileds.length;i++){
    var fieldObj = document.forms['WebToLeads6988454000000575779'][mndFileds[i]];
    if(fieldObj){
      if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0){
        if(fieldObj.type == 'file'){ alert('Seleccione un archivo para cargar.'); fieldObj.focus(); return false; }
        alert(fldLangVal[i] + ' no puede estar vacío.');
        fieldObj.focus(); return false;
      }else if(fieldObj.nodeName == 'SELECT'){
        if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
          alert(fldLangVal[i] + ' no puede ser nulo.'); fieldObj.focus(); return false;
        }
      }else if(fieldObj.type == 'checkbox'){
        if(fieldObj.checked == false){ alert('Please accept ' + fldLangVal[i]); fieldObj.focus(); return false; }
      }
      try{ if(fieldObj.name == 'Last Name'){ name = fieldObj.value; } }catch(e){}
    }
  }
  if(!validateEmail6988454000000575779()){ return false; }
  if(!reCaptchaAlert6988454000000575779()){ return false; }
  var urlparams = new URLSearchParams(window.location.search);
  if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')){
    var webform = document.getElementById('webform6988454000000575779');
    var service = urlparams.get('service');
    var smarturlfield = document.createElement('input');
    smarturlfield.setAttribute('type','hidden');
    smarturlfield.setAttribute('value', service);
    smarturlfield.setAttribute('name','service');
    webform.appendChild(smarturlfield);
  }
  var sb = document.querySelector('.crmWebToEntityForm .formsubmit');
  if(sb){ sb.setAttribute('disabled', true); }
  return true;
}
        `}
      </Script>

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" />
            <span className="font-semibold tracking-tight">
              La Magia de la Imaginación
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#por-que" className="hover:text-neutral-600">
              Impacto
            </a>
            <a href="#estructura" className="hover:text-neutral-600">
              Contenido
            </a>
            <a href="#testimonios" className="hover:text-neutral-600">
              Testimonios
            </a>
            <a
              href="#contacto"
              className="hover:text-neutral-900 font-semibold"
            >
              Contacto
            </a>
          </nav>
          <Button asChild size="sm" className="rounded-2xl">
            <a href="#contacto">Solicitar propuesta</a>
          </Button>
        </div>
      </header>

      <main id="main" role="main">
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
                <Badge className="mb-4">
                  Charlas corporativas · Bienestar & Cultura
                </Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Charla corporativa para equipos que necesitan
                  <span className="text-amber-600">
                    {" "}
                    más foco, bienestar y motivación
                  </span>
                </h1>
                <p className="mt-4 text-lg text-neutral-700">
                  <strong>La Magia de la Imaginación</strong> es una
                  charla-espectáculo presentada por{" "}
                  <strong>Cristóbal Echevensko</strong>, diseñada para áreas de
                  Personas, Cultura y Liderazgo que buscan mejorar clima
                  laboral, engagement y creatividad con herramientas simples y
                  aplicables.
                </p>
                <p className="mt-3 text-sm text-neutral-600">
                  +3.000 personas han vivido la charla en empresas, colegios y
                  fundaciones en Chile y Latam.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="rounded-2xl" asChild>
                    <a href="#contacto">Solicitar propuesta corporativa</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-2xl"
                    asChild
                  >
                    <a href="#rrhh">Ver cómo funciona la charla</a>
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
                      <Image
                        src="/images/echevensko_web_foto_1.jpg"
                        alt="Echevensko presentando ante un auditorio corporativo"
                        width={1200}
                        height={900}
                        className="rounded-3xl object-cover h-[360px] w-full"
                        priority
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

        {/* POR QUÉ EMPRESAS */}
        <section id="por-que" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold leading-tight">
                ¿Por qué llevar{" "}
                <span className="text-amber-700">
                  La Magia de la Imaginación
                </span>{" "}
                a tu organización?
              </h2>
              <p className="mt-4 text-neutral-700">
                Diseñada para RR.HH., People, Cultura y Liderazgo: impacto real
                en clima, foco y productividad, con un lenguaje cercano y
                aplicable al día a día.
              </p>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Bienestar emocional",
                  desc: "Reduce estrés y ansiedad con una práctica simple y aplicable.",
                },
                {
                  title: "Cohesión de equipos",
                  desc: "Lenguaje común que mejora comunicación y confianza.",
                },
                {
                  title: "Creatividad aplicada",
                  desc: "Herramientas para resolver problemas y tomar mejores decisiones.",
                },
                {
                  title: "Engagement y propósito",
                  desc: "Reconecta a las personas con su potencial y el sentido del trabajo.",
                },
              ].map((b, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-neutral-700">
                    {b.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* RR.HH. – DEMO + FOTOS */}
        <section id="rrhh" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <Badge className="mb-3">
                  Un recurso innovador para potenciar equipos en tu empresa
                </Badge>
                <h2 className="text-3xl font-bold">
                  La Magia de la Imaginación | Charla corporativa para equipos
                </h2>
                <p className="mt-2 text-neutral-700">
                  Conoce cómo esta experiencia puede integrarse a iniciativas de
                  bienestar, liderazgo y cultura organizacional.
                </p>
                <div className="mt-6 rounded-2xl overflow-hidden border">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/_K00lO5cwzA?rel=0&modestbranding=1"
                      title="La Magia de la Imaginación | Charlas corporativas para equipos"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Momentos que importan</h3>
                <p className="mt-2 text-neutral-700">
                  Escenas reales que reflejan participación, foco y energía en
                  contextos corporativos.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/echevensko_foto3.jpg"
                        alt="Auditorio atento durante la charla corporativa"
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
                    <Check className="h-4 w-4 mt-0.5" aria-hidden /> Enfoque en
                    clima, engagement y liderazgo.
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" aria-hidden /> Contrato,
                    factura y métricas post-evento (opcional).
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" aria-hidden /> Cobertura
                    nacional y Latam, presencial u online.
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="rounded-2xl">
                    <a href="#contacto">Solicitar propuesta para RR.HH.</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿A QUIÉN VA? */}
        <section id="dirigido" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex items-start gap-3">
              <Target className="h-6 w-6 mt-1" aria-hidden />
              <div>
                <h2 className="text-3xl font-bold">¿A quién va dirigido?</h2>
                <p className="mt-2 text-neutral-700 max-w-3xl">
                  Ideal para <strong>colegios</strong>,{" "}
                  <strong>fundaciones</strong>, <strong>empresas</strong>,{" "}
                  <strong>universidades</strong>,{" "}
                  <strong>municipalidades</strong>, áreas de{" "}
                  <strong>salud</strong>, <strong>retail</strong> y{" "}
                  <strong>tecnología</strong>. Adaptamos ejemplos al contexto
                  del público.
                </p>
              </div>
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Industrias objetivo"
            >
              {[
                "Colegios",
                "Fundaciones",
                "Empresas",
                "Corporaciones",
                "Universidades",
                "Municipalidades",
                "Salud",
                "Retail",
                "Tecnología",
                "Startups",
              ].map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* ESTRUCTURA */}
        <section id="estructura" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold">
              Contenido del espectáculo corporativo
            </h2>
            <p className="mt-3 text-neutral-700 max-w-3xl">
              Una charla entretenida y útil en tres actos, con historias, humor
              y ejercicios prácticos para que tu equipo se lleve herramientas
              concretas.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Acto I – Potencial interno",
                  points: [
                    "Autoimagen y autoestima práctica",
                    "Cambiar actitud para cambiar realidad",
                  ],
                },
                {
                  title: "Acto II – El obstáculo",
                  points: [
                    "La causa del autosabotaje",
                    "Cómo gestionarla en el día a día",
                  ],
                },
                {
                  title: "Acto III – La técnica",
                  points: [
                    "Práctica ancestral moderna",
                    "Menos preocupación, más foco",
                  ],
                },
              ].map((col, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{col.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-700">
                    <ul className="space-y-2">
                      {col.points.map((p, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2"
                        >
                          <Check
                            className="h-4 w-4 mt-0.5"
                            aria-hidden
                          />{" "}
                          {p}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* LOGÍSTICA */}
            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Modalidad",
                  desc: "Presencial (auditorio/sala) u online (Zoom/Teams).",
                },
                {
                  title: "Duración",
                  desc: "60–75 min + Q&A (opcional).",
                },
                {
                  title: "Audiencia",
                  desc: "20 a 600 personas (consultar para más).",
                },
              ].map((c, i) => (
                <Card key={i} className="rounded-2xl border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-neutral-700">
                    {c.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROPUESTA */}
        <section id="valor" className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold">Propuesta y alcance</h2>
              <p className="mt-2 text-neutral-700">
                Plan corporativo claro, adaptable a tu contexto. *Viáticos o
                traslados pueden aplicar según ciudad/país.
              </p>
            </div>
            <Badge variant="secondary">ES/EN · Presencial u Online</Badge>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="rounded-3xl border-amber-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Plan Corporativo</span>
                  <Badge className="bg-amber-600">Recomendado</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="mt-1 space-y-2 text-sm text-neutral-700">
                  {[
                    "Charla 60–75 min",
                    "Material PDF resumen",
                    "Soporte técnico básico",
                    "Guía práctica 7 días para equipos",
                    "Reporte de feedback post-evento",
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="h-4 w-4 mt-0.5" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  💡 Cuéntanos el alcance (audiencia, modalidad, ciudad) y te
                  enviaremos una propuesta a medida.
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl">
                    <a href="#contacto">Cotizar</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href="#faq">Ver condiciones</a>
                  </Button>
                </div>
                <p className="text-xs text-neutral-500 mt-4">
                  Incluye factura electrónica y contrato de servicios. *Viáticos
                  según ciudad/país.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  Resultados que buscamos
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" aria-hidden /> Subir ánimo
                    y foco del equipo
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" aria-hidden /> Refuerzo de
                    cultura y colaboración
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" aria-hidden /> Lenguaje
                    común para afrontar desafíos
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" aria-hidden /> Técnicas
                    simples con adopción inmediata
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section id="testimonios" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-bold">
                  Lo que dicen quienes ya vivieron la experiencia
                </h2>
                <p className="mt-2 text-neutral-700">
                  Comentarios que hablan de un antes y un después.
                </p>
              </div>
              <div
                className="flex items-center gap-1 text-amber-600"
                aria-label="Valoraciones"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-500 stroke-amber-500"
                    aria-hidden
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  name: "Ana María Cooper",
                  role: "Líder de Personas",
                  quote:
                    "Interactividad, claridad y herramientas concretas. Al día siguiente mi equipo aplicó la técnica.",
                },
                {
                  name: "Sergio Barriga",
                  role: "Gerente Comercial",
                  quote:
                    "Dinámica y directa. 100% recomendable para kickoffs y ciclos comerciales.",
                },
                {
                  name: "Francisca Sánchez",
                  role: "People Partner",
                  quote:
                    "Llegamos con carga y salimos con foco y energía. Impacto real en el ánimo del equipo.",
                },
              ].map((t, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="pt-6">
                    <Quote className="h-6 w-6 opacity-50" aria-hidden />
                    <p className="mt-3 text-neutral-800">{t.quote}</p>
                    <p className="mt-4 text-sm text-neutral-600">
                      {t.name} · {t.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-xs text-neutral-500 mt-6">
              *Testimonios reales de asistentes, adaptados al contexto
              corporativo.
            </p>
          </div>
        </section>

        {/* CTA INTERMEDIA */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <Card className="rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">
                  ¿Por qué elegir La Magia de la Imaginación?
                </h3>
                <p className="mt-2 text-neutral-700">
                  Experiencia validada en Chile y Latam. Adaptada al lenguaje
                  corporativo: entretenida, práctica y con aplicación inmediata.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl w-full md:w-auto"
                >
                  <a href="#contacto">Quiero cotizar</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl w-full md:w-auto"
                >
                  <a href="#faq">Ver preguntas frecuentes</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white border-y">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "¿Se puede personalizar para un área o industria?",
                  a: "Sí. Hacemos un breve discovery y adaptamos ejemplos al negocio.",
                },
                {
                  q: "¿Qué requerimientos técnicos hay?",
                  a: "Nosotros contamos con parlante, micrófono y luces para poder hacer la charla donde sea.",
                },
                {
                  q: "¿Ofrecen factura y contrato?",
                  a: "Sí, factura electrónica y acuerdo de servicios.",
                },
                {
                  q: "¿En qué ciudades trabajan?",
                  a: "Base en Santiago; cobertura nacional y Latam. Viáticos según ciudad/país.",
                },
                {
                  q: "¿Se puede medir el impacto?",
                  a: "Encuesta post-evento y reporte de insights para RR.HH.",
                },
                {
                  q: "¿Idiomas y formatos?",
                  a: "Español, opción inglés. Presencial u online.",
                },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-neutral-700">
                    {item.a}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold">Solicita tu propuesta</h2>
              <p className="mt-2 text-neutral-700">
                Cuéntanos fecha tentativa, modalidad y tamaño de audiencia. Te
                enviaremos una propuesta a medida según tu alcance y
                necesidades.
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Respuesta habitual: dentro de 24 horas hábiles.
              </p>

              {/* FORMULARIO Zoho */}
              <form
                className="crmWebToEntityForm mt-6 grid grid-cols-1 gap-3"
                id="webform6988454000000575779"
                action="https://crm.zoho.com/crm/WebToLeadForm"
                name="WebToLeads6988454000000575779"
                method="POST"
                acceptCharset="UTF-8"
                onSubmit={() => {
                  // Zoho exige este charset switch
                  // @ts-ignore
                  document.charset = "UTF-8";

                  // Tracking GA4 (si existe gtag)
                  if (
                    typeof window !== "undefined" &&
                    (window as any).gtag
                  ) {
                    (window as any).gtag("event", "lead_submit", {
                      event_category: "magiaimaginacion",
                      event_label: "Formulario contacto corporativo",
                    });
                  }

                  return true;
                }}
              >
                {/* Nuevos tokens Zoho */}
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="xnQsjsdp"
                  value="262358f21ca24f4e670022a44d6a3bef7a3f01e2ca41871145e1340fe759c917"
                />
                <input
                  type="hidden"
                  name="zc_gad"
                  id="zc_gad"
                  value=""
                />
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="xmIwtLD"
                  value="1cb4a097c9fb16a1423586156657ec9743e2fa6ac2ee4419a9fe52186dbe61b9a441224667d017f52ced1af798ef3874"
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
                  value="https://magiaimaginacion.cl/gracias"
                />

                <div className="grid sm:grid-cols-2 gap-3">
                  <Input
                    name="First Name"
                    id="First_Name"
                    placeholder="Nombre"
                    required
                  />
                  <Input
                    name="Last Name"
                    id="Last_Name"
                    placeholder="Apellido"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Input
                    name="Email"
                    id="Email"
                    placeholder="Email corporativo"
                    type="email"
                    required
                    // Zoho valida este atributo
                    ftype="email"
                  />
                  <Input
                    name="Company"
                    id="Company"
                    placeholder="Organización/Empresa"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Input
                    name="Phone"
                    id="Phone"
                    placeholder="Teléfono (opcional)"
                  />
                  <Input
                    name="City"
                    id="City"
                    placeholder="Ciudad/País (opcional)"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <select
                    name="LEADCF6"
                    id="LEADCF6"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    defaultValue="-None-"
                    aria-label="Modalidad"
                    onChange={() => {
                      // @ts-ignore
                      if (
                        typeof addAriaSelected6988454000000575779 ===
                        "function"
                      )
                        addAriaSelected6988454000000575779();
                    }}
                  >
                    <option value="-None-">Modalidad (opcional)</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                <Textarea
                  name="LEADCF3"
                  id="LEADCF3"
                  placeholder="Cuéntanos el objetivo de la actividad (kickoff, bienestar, liderazgo, colegios, fundaciones, etc.)"
                  className="min-h-[120px]"
                  required
                />

                {/* Selects ocultos de origen */}
                <div className="wfrm_fld_dpNn" aria-hidden>
                  <label className="sr-only" htmlFor="LEADCF5">
                    Echevensko
                  </label>
                  <select
                    id="LEADCF5"
                    name="LEADCF5"
                    className="hidden"
                    defaultValue="Echevensko"
                    aria-label="LEADCF5"
                  >
                    <option value="-None-">-None-</option>
                    <option value="Tronx-Group">Tronx-Group</option>
                    <option value="Dekaelo">Dekaelo</option>
                    <option value="Tronx-TV">Tronx-TV</option>
                    <option value="Tonx-Strategy">Tonx-Strategy</option>
                    <option value="Echevensko">Echevensko</option>
                    <option value="APCC">APCC</option>
                    <option value="HKLABA">HKLABA</option>
                  </select>
                </div>

                <div className="wfrm_fld_dpNn" aria-hidden>
                  <label className="sr-only" htmlFor="LEADCF9">
                    Lead_Origen
                  </label>
                  <select
                    id="LEADCF9"
                    name="LEADCF9"
                    className="hidden"
                    defaultValue="magiaimaginacion.cl"
                    aria-label="LEADCF9"
                  >
                    <option value="-None-">-None-</option>
                    <option value="plan.dekaelomedia.com">
                      plan.dekaelomedia.com
                    </option>
                    <option value="tronxgroup.com/contacto">
                      tronxgroup.com/contacto
                    </option>
                    <option value="tronxstrategic.com/contacto">
                      tronxstrategic.com/contacto
                    </option>
                    <option value="dekaelomedia.com/contacto">
                      dekaelomedia.com/contacto
                    </option>
                    <option value="magiaimaginacion.cl">
                      magiaimaginacion.cl
                    </option>
                    <option value="asiapacific-chamber.com/contacto">
                      asiapacific-chamber.com/contacto
                    </option>
                    <option value="asiapacific-chamber/join">
                      asiapacific-chamber/join
                    </option>
                    <option value="hklaba.com/contacto">
                      hklaba.com/contacto
                    </option>
                    <option value="asiapacific-chamber/eventos">
                      asiapacific-chamber/eventos
                    </option>
                  </select>
                </div>

                {/* Honeypot */}
                <input type="hidden" name="aG9uZXlwb3Q" value="" />

                {/* Privacidad */}
                <label className="flex items-start gap-2 text-sm text-neutral-700">
                  <input type="checkbox" required />
                  <span>
                    He leído y acepto la{" "}
                    <a
                      href="/privacidad-condiciones"
                      className="underline"
                    >
                      Política de Privacidad y Condiciones
                    </a>
                    .
                  </span>
                </label>

                {/* reCAPTCHA */}
                <div className="mt-2">
                  <div
                    id="recap6988454000000575779"
                    className="g-recaptcha"
                    data-sitekey="6LccQukrAAAAAHZqUeL8cKl1rpmwpU5fyrLUocGn"
                    data-theme="light"
                    data-callback="rccallback6988454000000575779"
                    data-size="normal"
                    aria-label="Verificación reCAPTCHA"
                    // @ts-ignore
                    captcha-verified="false"
                  />
                  <div
                    id="recapErr6988454000000575779"
                    style={{
                      fontSize: 12,
                      color: "red",
                      visibility: "hidden",
                    }}
                  >
                    Error en validación de Captcha. Si no es un robot, inténtelo
                    de nuevo.
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Button
                    className="rounded-2xl formsubmit"
                    type="submit"
                  >
                    Enviar consulta
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl"
                  >
                    <a href="mailto:info@echevensko.com?subject=Cotizaci%C3%B3n%20charla%20corporativa">
                      O escríbenos por email
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl"
                  >
                    <a
                      href="https://wa.me/56920080031?text=Hola%20quiero%20cotizar%20la%20charla%20corporativa%20La%20Magia%20de%20la%20Imaginaci%C3%B3n"
                      rel="noopener"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-neutral-500 mt-2">
                  *Al enviar, aceptas ser contactado(a) con fines comerciales.{" "}
                  <br />
                  💡 Te responderemos con una propuesta ajustada a tu evento.
                </p>
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
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden /> Respuesta
                    en 24h hábiles
                  </p>
                  <div className="pt-3 border-t">
                    <p className="font-medium">Incluye</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex gap-2">
                        <Check
                          className="h-4 w-4 mt-0.5"
                          aria-hidden
                        />{" "}
                        Factura electrónica (afecta a IVA o exenta)
                      </li>
                      <li className="flex gap-2">
                        <Check
                          className="h-4 w-4 mt-0.5"
                          aria-hidden
                        />{" "}
                        Contrato de servicios
                      </li>
                      <li className="flex gap-2">
                        <Check
                          className="h-4 w-4 mt-0.5"
                          aria-hidden
                        />{" "}
                        Prueba técnica previa
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* CTA STICKY MOBILE (para tráfico Ads en móvil) */}
      <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
        <Button asChild className="w-full rounded-2xl shadow-lg">
          <a href="#contacto">Solicitar propuesta corporativa</a>
        </Button>
      </div>

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
              <Instagram className="h-4 w-4" aria-hidden />{" "}
              @cristobalechevensko
            </a>
            <a
              href="https://www.linkedin.com/company/la-magia-de-la-imaginacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-800 inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.352V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.268 2.372 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM6.993 20.452H3.681V9h3.312v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
