/**
 * Zentrale Webinar-Konfiguration.
 *
 * Alle wiederkehrenden Inhalte werden von hier bezogen – z. B. erscheint das
 * Datum im Header, im Hero, im Formular, im Abschluss und in der Sticky-Leiste.
 * Platzhalter in [ECKIGEN KLAMMERN] vor dem Livegang ersetzen.
 */
export const webinar = {
  /** Kostenloses Webinar – steuert die CTA-Texte auf der gesamten Seite. */
  isFree: true,

  date: '15.10.2026',
  time: '20:00 Uhr',

  /** Öffentlicher Kalender-Download (ICS) für E-Mails & Website */
  calendarIcs: '/the-success-seller-15-10-2026.ics',

  /** Label „Exklusiv für Kongress-Teilnehmer & Interessierte“ im Hero */
  showCongressLabel: true,

  speakers: {
    goekhan: {
      name: 'Gökhan Baylan',
      firstName: 'Gökhan',
      focus: 'Business · Sales · Growth',
      bio: 'Hat mit seinem Team ein Unternehmen mit Millionenumsätzen aufgebaut und über 1.000 Studios und Praxen im Wachstum begleitet.',
    },
    patricia: {
      name: 'Patricia Baylan-Paulus',
      firstName: 'Patricia',
      focus: 'Identity · Energy · Leadership',
      bio: '„Die beste Strategie endet dort, wo die Person, die sie umsetzen soll, innerlich zurückweicht.“',
    },
  },

  /** First-Movers-Angebot (Leiste oben, eigene Section, Hinweis bei der Anmeldung) */
  offer: {
    enabled: true,
    name: 'Success Seller Launcher',
    programStart: 'Sonntag, 8. November 2026',
    regularPrice: '6.000 €',
    firstMoverPrice: '5.000 €',
    advantage: '1.000 € Private Release Advantage',
    conditions: '[FIRST-MOVER-BEDINGUNGEN]',
  },

  form: {
    /** Ziel der Anmeldung – lokaler/Dokploy-API-Endpoint */
    endpoint: '/api/register',
  },

  legal: {
    imprint: '/impressum/',
    privacy: '/datenschutz/',
    cookies: '/cookie-richtlinien/',
    imprintEn: '/en/imprint/',
    privacyEn: '/en/privacy/',
    cookiesEn: '/en/cookie-policy/',
  },

  seo: {
    title: 'BAYLAN.MED Business Webinar',
    description:
      'Das kostenlose BAYLAN.MED Business Webinar mit Gökhan Baylan und Patricia Baylan-Paulus: Vertiefe die Business- und Sales-Themen aus dem BAYLAN.MED Kongress.',
    ogImage: '/images/og-image.jpg',
  },
};

/** Inhalte „Das erwartet dich im Webinar“ */
export const benefits = [
  {
    tag: 'Mindset',
    title: 'Vom Behandler zum Unternehmer',
    text: 'Erkenne, welche Stellschrauben dein Unternehmen wirklich voranbringen.',
  },
  {
    tag: 'Sales',
    title: 'Mehr Sicherheit im Verkauf',
    text: 'Verstehe, wie du Beratungen strukturierst und deine Leistungen und Preise überzeugender kommunizierst.',
  },
  {
    tag: 'Umsatz',
    title: 'Ungenutzte Umsatzpotenziale erkennen',
    text: 'Entdecke, an welchen Stellen in deinem bestehenden Business Umsatz liegen bleibt.',
  },
];

/** CTA-Texte (abhängig von webinar.isFree) */
export const cta = {
  label: webinar.isFree ? 'Jetzt kostenlos anmelden' : 'Webinar-Platz sichern',
  offerLabel: webinar.isFree ? 'Kostenlos zum Webinar anmelden' : 'Webinar-Platz sichern',
  header: 'Platz sichern',
  submit: webinar.isFree ? 'Jetzt kostenlos zum Webinar anmelden' : 'Jetzt zum Webinar anmelden',
  submitting: 'Wird gesendet …',
  heroNote: webinar.isFree
    ? 'Kostenlos · Name, Telefon & E-Mail · Alle Infos per E-Mail'
    : 'Name, Telefon & E-Mail · Alle Infos zum Webinar per E-Mail',
};
