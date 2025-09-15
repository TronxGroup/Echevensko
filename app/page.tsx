// app/page.tsx
// NOTA: Este archivo es un Server Component por defecto (no pongas "use client" aquí)
import React from "react";
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
import ZohoFormEmbed from "./components/ZohoFormEmbed";

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

// Pega aquí el HTML COMPLETO que nos compartiste (sin quitar líneas marcadas como "Do not remove this code.")
const zohoHtml = `<!-- Pega desde <div id='crmWebToEntityForm' ...> hasta </div> tal cual -->
<div id = 'crmWebToEntityForm' class = 'zcwf_lblLeft crmWebToEntityForm' style = 'background-color: white;color: black;max-width: 600px;'>
<meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'>
<META HTTP-EQUIV = 'content-type' CONTENT = 'text/html;charset=UTF-8'>
<script src = 'https://www.google.com/recaptcha/api.js' async defer > </script>
<form id = 'webform6988454000000575779' action = 'https://crm.zoho.com/crm/WebToLeadForm' name = WebToLeads6988454000000575779 method = 'POST' onSubmit = 'javascript:document.charset="UTF-8"; return checkMandatory6988454000000575779()' accept-charset = 'UTF-8'>
<input type = 'text' style = 'display:none;' name = 'xnQsjsdp' value = '9c1f99ca07437b78b332210604f47fb34c9db90a96d38795cdb8fe2db9a83357'> </input>
<input type = 'hidden' name = 'zc_gad' id = 'zc_gad' value = ''> </input>
<input type = 'text' style = 'display:none;' name = 'xmIwtLD' value = '2f679b0127e0ce61247036a1150ca1e58e415ad7746b9ca8f9512fbb6ec200c88172a54183caf5dd2af2a653ad4b1bcd'> </input>
<input type = 'text' style = 'display:none;' name = 'actionType' value = 'TGVhZHM='> </input>
<input type = 'text' style = 'display:none;' name = 'returnURL' value = 'https&#x3a;&#x2f;&#x2f;empresas.echevensko.com&#x2f;gracias'> </input>
<!-- Do not remove this code. -->
<style>
  html,body{ margin: 0px; }
  .formsubmit.zcwf_button{ color: white !important; background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); }
  #crmWebToEntityForm.zcwf_lblLeft{ width: 100%; padding: 25px; margin: 0 auto; box-sizing: border-box; }
  #crmWebToEntityForm.zcwf_lblLeft *{ box-sizing: border-box; }
  #crmWebToEntityForm {text-align: left; }
  #crmWebToEntityForm *{ direction: ltr; }
  .zcwf_lblLeft .zcwf_title{ word-wrap: break-word; padding: 0px 6px 10px; font-weight: bold }
  .zcwf_lblLeft.cpT_primaryBtn:hover{ background: linear-gradient(#02acff 0,#006be4 100%)no-repeat padding-box !important; box-shadow: 0 -2px 0 0 #0159b9 inset !important; border: 0 !important; color: #fff !important; outline: 0 !important; }
  .zcwf_lblLeft .zcwf_col_fld input[ type = text], input[ type = password], .zcwf_lblLeft .zcwf_col_fld textarea{ width: 60%; border: 1px solid #c0c6cc !important; resize: vertical; border-radius: 2px; float: left; }
  .zcwf_lblLeft .zcwf_col_lab{ width: 30%; word-break: break-word; padding: 0px 6px 0px; margin-right: 10px; margin-top: 5px; float: left; min-height: 1px; }
  .zcwf_lblLeft .zcwf_col_fld{ float: left; width: 68%; padding: 0px 6px 0px; position: relative; margin-top: 5px; }
  .zcwf_lblLeft .zcwf_privacy {padding: 6px; }
  .zcwf_lblLeft .wfrm_fld_dpNn {display: none; }
  .dIB {display: inline-block; }
  .zcwf_lblLeft .zcwf_col_fld_slt{ width: 60%; border: 1px solid #ccc; background: #fff; border-radius: 4px; font-size: 12px; float: left; resize: vertical; padding: 2px 5px; }
  .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after{ content: ''; display: table; clear: both; }
  .zcwf_lblLeft .zcwf_col_help{ float: left; margin-left: 7px; font-size: 12px; max-width: 35%; word-break: break-word; }
  .zcwf_lblLeft .zcwf_help_icon{ cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #c0c6cc; color: #c1c1c1; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; }
  .zcwf_lblLeft .zcwf_row {margin: 15px 0px; }
  .zcwf_lblLeft .formsubmit{ margin-right: 5px; cursor: pointer; color: #313949; font-size: 12px; }
  .zcwf_lblLeft .zcwf_privacy_txt{ width: 90%; color: rgb(0, 0, 0); font-size: 12px; font-family: Arial; display: inline-block; vertical-align: top; color: #313949; padding-top: 2px; margin-left: 6px; }
  .zcwf_lblLeft .zcwf_button{ font-size: 12px; color: #313949; border: 1px solid #c0c6cc; padding: 3px 9px; border-radius: 4px; cursor: pointer; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .zcwf_lblLeft .zcwf_tooltip_over{ position: relative; }
  .zcwf_lblLeft .zcwf_tooltip_ctn{ position: absolute; background: #dedede; padding: 3px 6px; top: 3px; border-radius: 4px; word-break: break-word; min-width: 100px; max-width: 150px; color: #313949; z-index: 100; }
  .zcwf_lblLeft .zcwf_ckbox{ float: left; }
  .zcwf_lblLeft .zcwf_file{ width: 55%; box-sizing: border-box; float: left; }
  .cBoth:after{ content: ''; display: block; clear: both; }
  @media all and (max-width: 600px){
    .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld{ width: auto; float: none !important; }
    .zcwf_lblLeft .zcwf_col_help {width: 40%; }
  }
</style>

<div class = 'zcwf_title' style = 'max-width: 600px;color: black; font-family:Arial;'>Landing Echevensko</div>

<!-- ... TODO: pega aquí **todo el resto** del HTML que enviaste (inputs, estilos, scripts, calendar, reCaptcha, analytics) SIN modificar ni eliminar líneas marcadas como "Do not remove this code." ... -->

</form>
</div>
`;

export default function EchevenskoB2BLanding() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" aria-hidden />
            <span className="font-semibold tracking-tight">La Magia de la Imaginación</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Secciones">
            <a href="#por-que" className="hover:text-neutral-600">Impacto</a>
            <a href="#dirigido" className="hover:text-neutral-600">¿A quién va?</a>
            <a href="#estructura" className="hover:text-neutral-600">Contenido</a>
            <a href="#valor" className="hover:text-neutral-600">Valor</a>
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

      {/* HERO */}
      {/* ... (todo tu contenido tal cual) ... */}

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold">Solicita tu propuesta</h2>
            <p className="mt-2 text-neutral-700">
              Cuéntanos fecha tentativa, modalidad y tamaño de audiencia. <strong>Valor único: UF 32</strong>.
            </p>

            {/* === REEMPLAZO: Embed Zoho con reinyección de scripts === */}
            <div className="mt-6">
              <ZohoFormEmbed html={zohoHtml} />
            </div>

            {/* Nota legal / consentimiento (enlaces unificados) */}
            <p className="text-xs text-neutral-500 mt-4">
              Al enviar, aceptas ser contactado(a) con fines comerciales y nuestras{" "}
              <a href="/privacidad-condiciones" className="underline">Política de Privacidad y Condiciones</a>.
            </p>
          </div>

          <div className="md:col-span-2">
            <Card className="rounded-2xl md:sticky md:top-24">
              <CardHeader>
                <CardTitle>Datos de contacto</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden /> info@echevensko.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden /> +56 9 2008 0031</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden /> Santiago, Chile</p>
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden /> Respuesta en 24h hábiles</p>
                <div className="pt-3 border-t">
                  <p className="font-medium">Incluye</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5" aria-hidden /> Factura electrónica (afecta a IVA o exenta)</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5" aria-hidden /> Contrato de servicios</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5" aria-hidden /> Prueba técnica previa</li>
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
            <a href="/privacidad-condiciones" className="hover:text-neutral-800">Política & Privacidad</a>
            <a href="/privacidad-condiciones" className="hover:text-neutral-800">Términos</a>
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
