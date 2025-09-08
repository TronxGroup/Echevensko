# Echevensko Empresas – Landing B2B (Next.js + Tailwind)

## Paso rápido
1) Instala dependencias:
```
npm i
```
2) Desarrollo local:
```
npm run dev
```
3) Deploy:
- Sube el repo a GitHub y conéctalo en Vercel → Deploy.
- En Cloudflare crea un CNAME `empresas` → `cname.vercel-dns.com`.
- En Vercel (Project → Domains) agrega `empresas.echevensko.com` y verifica.

## Configurar formulario y video
- En `app/page.tsx` reemplaza:
  - `FORM_ACTION_URL` → tu endpoint de Formspree u otro.
  - `VIDEO_ID` → ID de YouTube.
  - `WHATSAPP_INTL_NUMBER` → número en formato internacional (ej. 56912345678).

## Stack
- Next.js 14 (App Router)
- TailwindCSS 3
- Iconos: lucide-react
- Componentes UI mínimos (Button, Card, Badge, Input, Textarea) implementados con Tailwind.
