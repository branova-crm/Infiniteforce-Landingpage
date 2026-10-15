# Active Context

## Aktueller Fokus

Kompakter Funnel für **The Success Seller**: Hero → Produkt → Principles → Problem-Chats → Stories → Quote → Voice (nach Patricia-Zitat; Desktop Text links / Chat rechts) → Offer → FAQ → Final CTA → Fragen. Abschnitte hell/dunkel abwechselnd. Keine Founder-Portraits mehr.

**GoldEdgeGlow** (Strahl + Partikel, wie Webinar): Product, Problem, Quote, Offer, FinalCta – oben/unten am Section-Rand.

## Entscheidungen

- Kauf direkt im Shop (`site.shopUrl`); Fragen-Formular am Ende
- Keine Masterclass-CTAs, kein Countdown
- Chat/Voice: WhatsApp-Look ohne Handyrahmen (Header, Sprechblasen, Häkchen, Voice-Bubble)
- Problem-Abschnitt: Titel + 3 WhatsApp-Karten nebeneinander (wie Melis im Aufbau, eigene Texte)
- Copy: `src/i18n/home.de.ts` / `home.en.ts`, Patricia-Texte, keine Melis-Inhalte
- Logo: weißes Wortmarken-PNG in Header/Footer (`Wordmark variant="white"`)
- Headlines: Playfair Display 800 (klar, dick, Satzschrift) – nicht Melis-Copy
- Problem-Chats: `data-chat-group`, Start erst im Viewport, 1,6s Staffel 1→2→3

## Offen von Kunden

- Kundenvideos, Trailer unter `public/media/`
- Sprachnachricht: `public/media/voice/patricia.mp3` (1:43) mit Puls-Play + Hinweis „Jetzt abspielen“

## Shop

- `site.shopUrl` → `https://shop.infiniteforce.ltd/?add-to-cart=1029` (alle „Jetzt sichern“-CTAs)
- Preise: First Movers **6.000 €**, regulär **9.000 €**, Advantage **3.000 €** (`site.offer`)

## Dokploy

Unverändert: Dockerfile, Port 80, SMTP-Env, Honeypot.
