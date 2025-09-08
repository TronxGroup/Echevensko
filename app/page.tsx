import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Star, Building2, Users, Timer, Globe2, Trophy, Quote, Mail, Phone, MapPin, CalendarDays, Sparkles } from "lucide-react";

// ---------------------------------------------
// Landing B2B – Charlas de Echevensko para Empresas
// Single-file React component, Tailwind + shadcn/ui
// ---------------------------------------------

export default function EchevenskoB2BLanding() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" />
            <span className="font-semibold tracking-tight">La Magia de la Imaginación</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#por-que" className="hover:text-neutral-600">Impacto</a>
            <a href="#rrhh" className="hover:text-neutral-600">RR.HH.</a>
            <a href="#estructura" className="hover:text-neutral-600">Contenido</a>
            <a href="#paquetes" className="hover:text-neutral-600">Paquetes</a>
            <a href="#testimonios" className="hover:text-neutral-600">Testimonios</a>
            <a href="#faq" className="hover:text-neutral-600">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contacto">Solicitar propuesta</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO (texto real, fondo degradado + opcional imagen tenue) */}
<section className="relative overflow-hidden">
  {/* Fondo: degrade + opcional imagen muy suave */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent" />
    {/* Si quieres una imagen de ambiente MUY suave detrás, déjala; si no, borra este div */}
    <div
      aria-hidden
      className="absolute inset-0 bg-[url('/images/echevensko_web_foto_2.jpg')] bg-cover bg-center opacity-10"
    />
  </div>

  <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Columna de TEXTO (editable) */}
      <div>
        <Badge className="mb-4">B2B · Cultura & Bienestar</Badge>

        {/* ← Edita este título libremente */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Una charla que eleva <span className="text-amber-600">la imaginación</span> y el rendimiento de tu equipo
        </h1>

        {/* ← Edita este párrafo libremente */}
        <p className="mt-4 text-lg text-neutral-700">
          Charla-espectáculo corporativa “La Magia de la Imaginación”, presentada por <strong>Cristóbal Echevensko</strong> para compañías que buscan
          mejorar clima, engagement y creatividad. Entretenido, práctico y memorable.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="rounded-2xl" asChild>
            <a href="#contacto">Solicitar propuesta</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl" asChild>
            <a href="#paquetes">Ver paquetes</a>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-amber-500 stroke-amber-500"/> 9.8/10 en Atrápalo</div>
          <div className="flex items-center gap-1"><Users className="h-4 w-4"/> 2.000+ asistentes</div>
          <div className="flex items-center gap-1"><Trophy className="h-4 w-4"/> 95% recomienda</div>
        </div>
      </div>

      {/* Columna visual opcional (puedes dejarla o quitarla) */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute -inset-2 bg-amber-200/40 blur-2xl rounded-3xl"/>
          <Card className="relative rounded-3xl shadow-xl">
            <CardContent className="p-0">
              <img
                src="/images/echevensko_web_foto_1.jpg"
                alt="Auditorio corporativo (imagen decorativa)"
                className="rounded-3xl object-cover h-[360px] w-full"
              />
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2"><Timer className="h-4 w-4"/> 60–90 min</div>
          <div className="flex items-center gap-2"><Building2 className="h-4 w-4"/> Presencial / Online</div>
          <div className="flex items-center gap-2"><Globe2 className="h-4 w-4"/> ES / EN opcional</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* POR QUÉ EMPRESAS */}
      <section id="por-que" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold leading-tight">¿Por qué llevar <span className="text-amber-700">La Magia de la Imaginación</span> a tu empresa?</h2>
            <p className="mt-4 text-neutral-700">Diseñado para RR.HH., People, Cultura y Liderazgo: impacto real en clima, foco y productividad.</p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {title: "Bienestar emocional", desc: "Reduce estrés y ansiedad con una práctica simple y aplicable."},
              {title: "Cohesión de equipos", desc: "Lenguaje común que mejora comunicación y confianza."},
              {title: "Creatividad aplicada", desc: "Herramientas para resolver problemas y tomar mejores decisiones."},
              {title: "Engagement y propósito", desc: "Reconecta a las personas con su potencial y el sentido del trabajo."},
            ].map((b, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="pb-2"><CardTitle className="text-base">{b.title}</CardTitle></CardHeader>
                <CardContent className="pt-0 text-sm text-neutral-700">{b.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RR.HH. – DEMO + FOTOGRAFÍAS DESTACADAS */}
      <section id="rrhh" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Bloque video para gerencias de RR.HH. */}
            <div>
              <Badge className="mb-3">Un recurso innovador para potenciar equipos en tu empresa</Badge>
              <h2 className="text-3xl font-bold">La Magia de la Imaginación | Charla corporativa para equipos.</h2>
              <p className="mt-2 text-neutral-700">Conoce cómo esta experiencia única puede integrarse a tus iniciativas de bienestar, liderazgo y cultura organizacional, generando un impacto positivo y duradero en tu compañía.</p>
              <div className="mt-6 rounded-2xl overflow-hidden border">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/_K00lO5cwzA?rel=0&modestbranding=1"
                    title="La Magia de la Imaginación | Charlas corporativas para equipos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-600">
                <p></p>
              </div>
            </div>

            {/* Fotografías destacadas */}
            <div>
              <h3 className="text-xl font-semibold">Momentos que importan</h3>
              <p className="mt-2 text-neutral-700">Escenas reales que reflejan participación, foco y energía en contextos corporativos.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/images/echevensko_foto3.jpg"
                      alt="Auditorio atento durante la charla"
                      className="w-full h-56 object-cover"
                    />
                  </CardContent>
                </Card>
                <Card className="rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/images/echevensko_foto4.jpg"
                      alt="Dinámica participativa con equipos"
                      className="w-full h-56 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Enfoque en clima, engagement y liderazgo.</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Operamos con contrato, factura y métricas post-evento (opcional).</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Cobertura nacional y Latam, presencial u online.</li>
              </ul>
              <div className="mt-6">
                <Button asChild className="rounded-2xl"><a href="#contacto">Solicitar propuesta para RR.HH.</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTRUCTURA / CONTENIDO */}
      <section id="estructura" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Contenido del espectáculo corporativo</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">Una charla entretenida y útil en tres actos, con historias, humor y ejercicios prácticos. Basado en investigaciones (Frankl, PNL, mindfulness) y en experiencias reales de cine, TV, videojuegos y literatura.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {title: "Acto I – Potencial interno", points: ["Autoimagen y autoestima práctica", "Cambiar actitud para cambiar realidad", "Dinámicas participativas"]},
              {title: "Acto II – El obstáculo", points: ["La causa del autosabotaje", "Cómo gestionarla en el día a día", "Conversación honesta (sin clichés)"]},
              {title: "Acto III – La técnica", points: ["Práctica ancestral moderna", "Menos preocupación, más foco", "Plan de 7 días para el equipo"]},
            ].map((col, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader><CardTitle className="text-lg">{col.title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  <ul className="space-y-2">
                    {col.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* LOGÍSTICA */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              {title: "Modalidad", desc: "Presencial (auditorio/sala) u online (Zoom/Teams)."},
              {title: "Duración", desc: "60–90 min + Q&A (opcional)."},
              {title: "Audiencia", desc: "20 a 600 personas (consultar para más)."},
            ].map((c, i) => (
              <Card key={i} className="rounded-2xl border-dashed">
                <CardHeader className="pb-2"><CardTitle className="text-base">{c.title}</CardTitle></CardHeader>
                <CardContent className="pt-0 text-sm text-neutral-700">{c.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PAQUETES */}
      <section id="paquetes" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold">Paquetes corporativos</h2>
            <p className="mt-2 text-neutral-700">Valores de referencia, sujetos a aforo, ciudad y fecha. Consultar por convenio anual.</p>
          </div>
          <Badge variant="secondary">ES/EN · Presencial u Online</Badge>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            {
              name: "Esencial",
              price: "desde UF 30",
              features: ["Charla 60–75 min", "Material PDF resumen", "Soporte técnico básico"],
              cta: "Cotizar Esencial",
            },
            {
              name: "Plus",
              price: "desde UF 35",
              features: ["Charla 75–90 min + Q&A", "Guía práctica 7 días para equipos", "Reporte de feedback post-evento"],
              highlighted: true,
              cta: "Cotizar Plus",
            },
            {
              name: "Premium",
              price: "desde UF 45",
              features: ["Charla personalizada por área", "Workshop 45 min líderes (op.)", "Video de agradecimiento para la empresa"],
              cta: "Cotizar Premium",
            },
          ].map((p, i) => (
            <Card key={i} className={`rounded-2xl ${p.highlighted ? 'border-amber-500 shadow-lg' : ''}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.name}</span>
                  {p.highlighted && <Badge className="bg-amber-600">Más elegido</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>{f}</li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6 rounded-2xl">
                  <a href="#contacto">{p.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold">Lo que dicen quienes ya vivieron la experiencia</h2>
              <p className="mt-2 text-neutral-700">Calificación promedio 9.8/10 y comentarios que hablan de un antes y un después.</p>
            </div>
            <div className="flex items-center gap-1 text-amber-600">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-500 stroke-amber-500" />)}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {name: "Ana María Cooper", role: "Líder de Personas", quote: "Interactividad, claridad y herramientas concretas. Al día siguiente mi equipo aplicó la técnica."},
              {name: "Sergio Barriga", role: "Gerente Comercial", quote: "Dinámica y directa. Se nota la experiencia. 100% recomendable para kickoffs y ciclos comerciales."},
              {name: "Francisca Sánchez", role: "People Partner", quote: "Llegamos con carga y salimos con foco y energía. Impacto real en el ánimo del equipo."},
            ].map((t, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 opacity-50"/>
                  <p className="mt-3 text-neutral-800">{t.quote}</p>
                  <p className="mt-4 text-sm text-neutral-600">{t.name} · {t.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-neutral-500 mt-6">*Testimonios reales de asistentes adaptados al contexto corporativo.</p>
        </div>
      </section>

      {/* CTA INTERMEDIA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Card className="rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">¿Por qué elegir La Magia de la Imaginación para tu organización?</h3>
              <p className="mt-2 text-neutral-700">Una experiencia validada por miles de asistentes en Chile. Adaptada al lenguaje corporativo: entretenida, práctica y con aplicación inmediata. Una inversión en bienestar que impacta directo en clima y productividad.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="rounded-2xl w-full md:w-auto"><a href="#contacto">Quiero cotizar</a></Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl w-full md:w-auto"><a href="#faq">Ver preguntas frecuentes</a></Button>
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
              {q: "¿Se puede personalizar para un área o industria?", a: "Sí. En el plan Premium incluimos discovery breve y adaptamos ejemplos y énfasis al contexto del negocio."},
              {q: "¿Qué requerimientos técnicos hay?", a: "Presencial: proyector/LED, audio con micrófono de solapa o diadema y retorno básico. Online: enlace Zoom/Teams, moderador y prueba técnica 24 h antes."},
              {q: "¿Ofrecen factura y contrato?", a: "Sí, se emite factura electrónica y se firma acuerdo de servicios con condiciones de producción y cancelación."},
              {q: "¿En qué ciudades trabajan?", a: "Base en Santiago, cobertura nacional y Latam. Viáticos según ciudad/país."},
              {q: "¿Se puede medir el impacto?", a: "En Plus y Premium entregamos encuesta post-evento y un reporte de insights con acciones sugeridas para RR.HH."},
              {q: "¿Idiomas y formatos?", a: "Español nativo, opción inglés. Presencial u online en vivo."},
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="pb-2"><CardTitle className="text-base">{item.q}</CardTitle></CardHeader>
                <CardContent className="pt-0 text-sm text-neutral-700">{item.a}</CardContent>
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
            <p className="mt-2 text-neutral-700">Cuéntanos fecha tentativa, modalidad y tamaño de audiencia. Te responderemos con disponibilidad y valores.</p>
            <form className="mt-6 grid grid-cols-1 gap-3" action="https://formspree.io/f/xjkeodav" method="POST">
              <div className="grid sm:grid-cols-2 gap-3">
                <Input name="name" placeholder="Nombre y apellido" required />
                <Input name="email" placeholder="Email corporativo" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <Input name="company" placeholder="Empresa" required />
                <Input name="role" placeholder="Cargo" />
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                <Input name="location" placeholder="Ciudad/País" />
                <Input name="date" placeholder="Fecha tentativa (dd/mm/aaaa)" />
                <Input name="attendees" placeholder="Nº asistentes" />
              </div>
              <Textarea name="message" placeholder="Cuéntanos el objetivo de la actividad (kickoff, bienestar, liderazgo, etc.)" className="min-h-[120px]" />
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-2xl" type="submit">Enviar consulta</Button>
                <Button asChild variant="outline" className="rounded-2xl"><a href="mailto:empresas@echevensko.com?subject=Cotizaci%C3%B3n%20charla%20corporativa">O escríbenos por email</a></Button>
                <Button asChild variant="outline" className="rounded-2xl"><a href="https://wa.me/56920080031?text=Hola%20quiero%20cotizar%20la%20charla%20corporativa%20de%20Echevensko">WhatsApp</a></Button>
              </div>
              <p className="text-xs text-neutral-500 mt-2">*Al enviar, aceptas ser contactado(a) por nuestro equipo con fines comerciales.</p>
            </form>
          </div>
          <div className="md:col-span-2">
            <Card className="rounded-2xl sticky top-24">
              <CardHeader>
                <CardTitle>Datos de contacto</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> empresas@echevensko.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> +56 9 2008 0031</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Santiago, Chile</p>
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4"/> Respuesta en 24h hábiles</p>
                <div className="pt-3 border-t">
                  <p className="font-medium">Incluye</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Factura electrónica (afecta a IVA o exenta)</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Contrato de servicios</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Prueba técnica previa</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Echevensko. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-800" href="#faq">Términos</a>
            <a className="hover:text-neutral-800" href="#faq">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
