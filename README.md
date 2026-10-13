# BAYLAN.MED Business Webinar – Landingpage

Astro 7 · TypeScript · Tailwind CSS 4 · statische Seite (SSG) · kein Client-Framework

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

Der fertige Build liegt in `dist/` und kann auf jedem statischen Hosting veröffentlicht werden.

## Wichtige Dateien

```text
src/pages/index.astro         → Hauptseite (Reihenfolge der Bereiche)
src/components/               → einzelne Landingpage-Bereiche
src/config/webinar.ts         → Webinar-Datum, Uhrzeit, Speaker, First-Movers-Angebot, CTA-Texte, SEO
src/styles/global.css         → Design-Tokens, Tailwind-Setup, Buttons, Formularfelder
src/styles/fonts.css          → selbst gehostete Schriften
src/lib/registration.ts       → Versand des Anmeldeformulars (API-Anbindung)
src/assets/images/            → Fotos (werden beim Build automatisch optimiert, WebP + srcset)
public/                       → Logo, Favicons, Schriften, Open-Graph-Bild
```

## Inhalte pflegen

Alle wiederkehrenden Angaben stehen in `src/config/webinar.ts` (Datum, Uhrzeit, First-Movers usw.)
und erscheinen automatisch an allen Stellen der Seite. Optional `[FIRST-MOVER-BEDINGUNGEN]` ersetzen.

Schalter in derselben Datei:

- `isFree` – CTA-Texte mit „kostenlos“
- `showCongressLabel` – Label „Exklusiv für Kongress-Teilnehmer & Interessierte“ im Hero
- `offer.enabled` – First-Movers-Angebot (eigene Section nach der Anmeldung)

## Formular / API-Anbindung

Die Anmeldung geht an `POST /api/register` (Node hinter Nginx, wie bei der Metads-Event-Landingpage).

**Lokal:**

```bash
npm run api   # Terminal 1 – SMTP-API auf :3001 (liest .env)
npm run dev   # Terminal 2 – Astro proxyt /api → :3001
```

**Produktion (Dokploy):** Runtime-Env setzen (bereits hinterlegt):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`
- `INQUIRY_TO` (Empfänger im Office)
- optional `WEBINAR_DATE`, `WEBINAR_TIME` für die Mail-Texte
- `API_PORT=3001` (intern), Domain-Port **80**

Payload: `name`, `telefon`, `email`, plus Honeypot-Feld `website` (muss leer bleiben).
Es gehen zwei Mails raus: eine an `INQUIRY_TO`, eine Bestätigung an den Teilnehmer.

`.env` / Passwörter werden **nicht** nach GitHub committed (siehe `.gitignore` und `.env.example`).

## Hinweise

- **Tailwind ohne Preflight:** `global.css` lädt Tailwind bewusst ohne den CSS-Reset, weil das
  Design auf den Browser-Standardwerten aufbaut (u. a. `box-sizing: content-box`,
  `line-height: normal`). So bleibt die Darstellung 1:1.
- **Schriften:** Archivo und Instrument Serif (SIL Open Font License) liegen lokal unter
  `public/fonts/` – keine Verbindung zu Google-Servern (DSGVO).
- **SEO:** Für `canonical`, `og:url` und `og:image` die Live-Domain in `astro.config.mjs`
  unter `site` eintragen.
- **Bilder:** Die Fotos werden beim Build mit dem Astro-Standard-Bildservice (sharp) optimiert.
  `sharp` wird mit Astro automatisch installiert.
- `package-lock.json` entsteht beim ersten `npm install`.
