# System Patterns

- Astro-Projekt im Repo-Root, statischer Build nach `dist`
- Deployment über Dokploy: Build-Stage Node, Runtime Nginx + interne Node-API für Anmeldung
- Spam-Schutz per Honeypot-Feld `website` (unsichtbar, bei Bot-Fill keine Mail)
- Secrets nur in `.env` / Dokploy Runtime Env, nie im Git
