// app/components/ZohoFormEmbed.tsx
"use client";

import React, { useEffect, useRef } from "react";

export default function ZohoFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pega aquí el HTML COMPLETO de tu snippet (tal cual nos lo diste)
  // ✅ IMPORTANTE: no borres líneas marcadas "Do not remove..."
  const html = `<!-- INICIO SNIPPET ZOHO -->
<div id = 'crmWebToEntityForm' class = 'zcwf_lblLeft crmWebToEntityForm' style = 'background-color: white;color: black;max-width: 600px;'>
<meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'>
<META HTTP-EQUIV = 'content-type' CONTENT = 'text/html;charset=UTF-8'>
<script src = 'https://www.google.com/recaptcha/api.js' async defer ></script>
<form id = 'webform6988454000000575779' action = 'https://crm.zoho.com/crm/WebToLeadForm' name = WebToLeads6988454000000575779 method = 'POST' onSubmit = 'javascript:document.charset="UTF-8"; return checkMandatory6988454000000575779()' accept-charset = 'UTF-8'>
<input type = 'text' style = 'display:none;' name = 'xnQsjsdp' value = '9c1f99ca07437b78b332210604f47fb34c9db90a96d38795cdb8fe2db9a83357'> </input>
<input type = 'hidden' name = 'zc_gad' id = 'zc_gad' value = ''> </input>
<input type = 'text' style = 'display:none;' name = 'xmIwtLD' value = '2f679b0127e0ce61247036a1150ca1e58e415ad7746b9ca8f9512fbb6ec200c88172a54183caf5dd2af2a653ad4b1bcd'> </input>
<input type = 'text' style = 'display:none;' name = 'actionType' value = 'TGVhZHM='> </input>
<input type = 'text' style = 'display:none;' name = 'returnURL' value = 'https&#x3a;&#x2f;&#x2f;empresas.echevensko.com&#x2f;gracias'> </input>
<!-- Do not remove this code. -->
<style>/* … (ESTILOS ORIGINALES COMPLETOS AQUÍ) … */</style>

<div class = 'zcwf_title' style = 'max-width: 600px;color: black; font-family:Arial;'>Landing Echevensko</div>

<!-- … (TODOS LOS CAMPOS ORIGINALES DEL FORMULARIO AQUÍ) … -->

<script type = 'text/javascript'>/* … (BLOQUE LARGO DE JS: formCalender, dateFormatConvert, validateEmail..., etc. PEGAR COMPLETO) … */</script>

<!-- Do not remove this --- Analytics Tracking code starts -->
<script id = 'wf_anal' src = 'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=1eca6b6a7c975a75963270eded7ca28ba1f2cca0e21f6d62d0a44bafa76b3f66d3ac3dbccd98dd6c387251cf9474dab3gid6cf259c7d6ad8a09d235d0413f0c9ba23840bca0304504248561d0a6f9268c7cgid8aeac4389d25b234627c177039b2d6036f745a2808b0f1271ca7156480a949e5gide0e9cbc5221e7d8c375eba5b17771cfad042ef3d779e317ab20d6895dd1d9f30&tw=7a03d8196961f1943fc7f2eefe8ad9a976568ddbcd227346bca014b9cf2fdf4b'> </script>
<!-- Do not remove this --- Analytics Tracking code ends. -->
</form>
</div>
<!-- FIN SNIPPET ZOHO -->`;

  useEffect(() => {
    if (!containerRef.current) return;

    // Inyecta el HTML
    const tmp = document.createElement("div");
    tmp.innerHTML = html;

    // Extrae <script> para reinyectarlos y que se ejecuten
    const scriptNodes = Array.from(tmp.querySelectorAll("script"));
    scriptNodes.forEach((s) => s.parentNode?.removeChild(s));

    containerRef.current.innerHTML = tmp.innerHTML;

    // Reinyecta todos los scripts (con src o inline)
    scriptNodes.forEach((oldScript) => {
      const s = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => s.setAttribute(attr.name, attr.value));
      if (oldScript.textContent) s.textContent = oldScript.textContent;
      containerRef.current?.appendChild(s);
    });
  }, []);

  return (
    <>
      <div ref={containerRef} />
      {/* Nota legal unificada */}
      <p className="text-xs text-neutral-500 mt-3">
        Al enviar, aceptas nuestra{" "}
        <a href="/privacidad-condiciones" className="underline">
          Política de Privacidad y Condiciones
        </a>.
      </p>
    </>
  );
}
