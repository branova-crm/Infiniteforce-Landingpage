# Tech Context

- Astro `^7.3.5`, statisches Output (`dist`)
- Node `>=22.12.0`
- Paketmanager: npm
- Scripts: `npm run dev`, `npm run build`, `npm run preview`, `npm run api`
- `nodemailer` für SMTP-Anmeldung

## Mail / API

Muster wie Metads Event Landingpage:

- `server/register-api.mjs` – `POST /api/register`, Honeypot `website`
- Env: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`, `INQUIRY_TO`, `API_PORT`
- Lokal: `.env` (gitignored), Vorlage `.env.example`
- Dev-Proxy in `astro.config.mjs`: `/api` → `127.0.0.1:3001`

## Deployment

Dokploy, Dockerfile:

- Build: Node 22 → `dist`
- Runtime: Node 22 Alpine + Nginx, Startskript startet API + Nginx
- Domain-Port `80`, Publish Directory leer
- SMTP-Env nur zur Laufzeit (nicht im Image)
