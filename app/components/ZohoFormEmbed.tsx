// components/ZohoFormEmbed.tsx
"use client";

import React, { useEffect, useRef } from "react";

type Props = { html: string; className?: string };

export default function ZohoFormEmbed({ html, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1) Creamos un contenedor temporal para parsear el HTML
    const temp = document.createElement("div");
    temp.innerHTML = html;

    // 2) Extraemos todos los <script> del embed
    const scripts = Array.from(temp.querySelectorAll("script"));

    // 3) Ponemos en el DOM todo lo que NO sea <script>
    //    (si dejamos los <script> aquí, no se ejecutan)
    const nonScriptNodes = Array.from(temp.childNodes).filter(
      (n) => !(n.nodeName && n.nodeName.toLowerCase() === "script")
    );
    containerRef.current.innerHTML = "";
    nonScriptNodes.forEach((n) => containerRef.current!.appendChild(n));

    // 4) Reinyectamos los scripts para que el navegador los ejecute
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      // Copiamos atributos (src, async, defer, id, etc.)
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // Si era inline, copiamos el contenido
      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }

      // Insertamos el script al final del contenedor
      containerRef.current!.appendChild(newScript);
    });
  }, [html]);

  return <div ref={containerRef} className={className} />;
}
