# Active Context

## Aktueller Fokus

Luxury-Editorial-Landingpage für den Verkauf von **The Success Seller**. Hero ist kompakt (Titel + Kauf-Button), Produktkarte eigener Abschnitt. Weißes Logo in Header/Footer. Problem-Titel in Playfair Display Extra-Bold (weiß + Gold-Italic). Chats starten gestaffelt, sobald der Abschnitt im Viewport ist.

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

- Konkreter Shop-Produktlink
- Kundenvideos, Trailer, Sprachnachricht unter `public/media/`

## Dokploy

Unverändert: Dockerfile, Port 80, SMTP-Env, Honeypot.
