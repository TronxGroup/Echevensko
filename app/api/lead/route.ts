// app/api/lead/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function safe(s: any) {
  return typeof s === "string" ? s.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // honeypot
    if (safe(body.hp).length > 0) return NextResponse.json({ ok: true }, { status: 200 });

    const name = safe(body.name);
    const email = safe(body.email);
    const message = safe(body.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    const to = process.env.LEADS_TO || "info@magiaimaginacion.cl";
    const from = process.env.LEADS_FROM || "Resend <onboarding@resend.dev>";

    const orgType = safe(body.orgType);
    const phone = safe(body.phone);
    const utm = body.utm && typeof body.utm === "object" ? body.utm : {};

    const utmLines = Object.entries(utm)
      .map(([k, v]) => `${k}: ${String(v)}`)
      .join("\n");

    const text = [
      "Nuevo lead — MagiaImaginacion.cl",
      "--------------------------------",
      `Nombre: ${name}`,
      `Email: ${email}`,
      orgType ? `Tipo de organización: ${orgType}` : "",
      phone ? `Teléfono: ${phone}` : "",
      "",
      "Mensaje:",
      message,
      "",
      utmLines ? "UTM / GCLID:\n" + utmLines : "",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = orgType
      ? `Lead charla — ${orgType} (${name})`
      : `Lead charla — ${name}`;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });

    if (result.error) {
      console.error("RESEND_ERROR:", result.error);
      return NextResponse.json(
        { error: result.error.message || "No se pudo enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("LEAD_API_ERROR:", e);
    return NextResponse.json({ error: "Error inesperado." }, { status: 500 });
  }
}
