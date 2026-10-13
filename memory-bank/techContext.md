# Tech Context

- Astro 7, TypeScript, Tailwind CSS 4 (ohne Preflight)
- Node ≥ 22.12
- Design-Tokens: `--if-*` in `global.css` (Espresso/Gold/Elfenbein)
- Schriften: Playfair Display 800 (Headlines), Cormorant Garamond (Editorial), Montserrat (UI)
- i18n: Astro routing `de` (default) + `en` prefix
- API: `server/register-api.mjs` (Nodemailer), Dev-Proxy `/api` → `:3001`
- Media-Platzhalter: `public/media/{voice,trailer,testimonials}/`
- Brand: `public/brand/infiniteforce-{gold,white,black}.png` via `site.logo` / `Wordmark`
