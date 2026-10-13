# INFINITEFORCE – The Success Seller

Astro 7 · TypeScript · Tailwind CSS 4 · statische Seite (SSG) · kein Client-Framework

Hauptseite für [infiniteforce.ltd](https://infiniteforce.ltd) – Verkauf von **Success Seller Launcher** inkl. Masterclass-Teaser.

## Voraussetzungen

Node.js **22.12 oder neuer** (siehe `.nvmrc`)

## Installation

```bash
npm install
npm run dev
```

Die Seite läuft dann unter http://localhost:4321.

## Production

```bash
npm run build
npm run preview
```

Der fertige Build liegt in `dist/` und kann auf Dokploy (Dockerfile) veröffentlicht werden.

## Wichtige Dateien

```text
src/components/HomePage.astro   → Section-Reihenfolge
src/components/sections/        → Funnel-Abschnitte
src/components/ui/              → Chat, Voice, Video, FAQ, Exit-Intent
src/config/site.ts              → Shop-URL, Masterclass-URL, Angebot, Media-Pfade, SEO
src/i18n/home.de.ts             → Deutsche Texte
src/i18n/home.en.ts             → Englische Texte
src/styles/global.css           → Design-Tokens (Gold/Braun)
server/register-api.mjs         → Fragen-Formular (type: question)
public/brand/                   → Infiniteforce-Logo
public/media/                   → Trailer, Voice, Testimonials (Platzhalter)
```

## Inhalte pflegen

- Shop- und Masterclass-Links: `src/config/site.ts` → `shopUrl` / `masterclassUrl`
- Preise & Programmstart: `site.offer`
- Copy DE/EN: `src/i18n/home.de.ts` / `home.en.ts`

## Formular / API

Das Fragen-Formular am Seitenende geht an `POST /api/register` mit `type: "question"`.

```bash
npm run api   # Terminal 1 – SMTP-API auf :3001
npm run dev   # Terminal 2 – Astro proxyt /api → :3001
```

## Offen

- Finales Logo unter `public/brand/infiniteforce-logo.svg`
- Produkt-URL im Shop
- Masterclass-Link
- Kundenvideos, Trailer, Sprachnachricht unter `public/media/`
