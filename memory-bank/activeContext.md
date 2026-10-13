# Active Context

## Aktueller Fokus

Rechtliche Unterseiten live im Build: `/impressum/`, `/datenschutz/`, `/cookie-richtlinien/` (+ EN-Pfade). Site setzt keine Cookies; Cookie-Seite erklärt TDDDG/kein Banner.

## Entscheidung

Deployment-Ziel ist Dokploy. Hochladen erst, wenn das Projekt fertig ist.

## Dokploy

Dockerfile wie bei Metads Event: Node baut die Site, Runtime = Nginx + Register-API (`nodemailer`).

In Dokploy einstellen:

- Build Type: Dockerfile
- Dockerfile Path: `Dockerfile`
- Context: `.`
- Publish Directory: leer
- Domain-Port: `80`
- Runtime Env: `SMTP_*`, `INQUIRY_TO`, `API_PORT=3001` (bereits hinterlegt)

Spam-Schutz: unsichtbares Honeypot-Feld `website` (wie Metads). `.env` nie committen.
