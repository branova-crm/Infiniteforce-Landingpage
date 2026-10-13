# System Patterns

- Astro SSG im Repo-Root, Build nach `dist`
- Wortmarke: `Wordmark` default `white` auf dunkel (`site.logo`)
- Problem-Chats: Abschnitt triggert `chat:play` gestaffelt; einzelne ChatMocks sonst per IntersectionObserver
- Section-Orchestrierung in `HomePage.astro`, Inhalte in `i18n/home.*.ts`
- Interaktive UI unter `components/ui/` (Client-Scripts inline, IntersectionObserver, reduced-motion)
- Primär-Conversion: externe Shop-Links (`CtaButton` Varianten `shop` | `masterclass`)
- Sekundär: Fragen-Formular → `POST /api/register` mit `type: 'question'`
- Deployment Dokploy: Node-Build, Runtime Nginx + interne Node-API
- Spam-Schutz: Honeypot-Feld `website`
- Secrets nur in `.env` / Dokploy Runtime Env
