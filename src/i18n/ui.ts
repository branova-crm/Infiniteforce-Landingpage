import type { Locale } from './config';
import { webinar } from '../config/webinar';

export type BenefitCopy = { tag: string; title: string; text: string };

type Ui = {
  language: string;
  languageDe: string;
  languageEn: string;
  headerCta: string;
  headerTag: string;
  ctaLabel: string;
  ctaOffer: string;
  ctaSubmit: string;
  ctaSubmitting: string;
  ctaHeroNote: string;
  imprint: string;
  privacy: string;
  cookies: string;
  legalNav: string;
  legalBack: string;
  seoTitle: string;
  seoDescription: string;

  heroEyebrow: string;
  heroKicker: string;
  heroTitleBefore: string;
  heroSlam: [string, string, string];
  heroLead: string;
  heroWith: string;
  heroAnd: string;
  marqueeRevenue: string;

  detailsDate: string;
  detailsTime: string;

  introEyebrow: string;
  introLead: string;
  introMaximum: string;
  introTail: string;
  introItalic: string;
  introBody1: string;
  introBody2: string;

  benefitsTitleBefore: string;
  benefitsTitleAccent: string;
  benefitsLead: string;
  benefitsFooter: string;
  benefits: BenefitCopy[];

  speakersTitleBefore: string;
  speakersTitleAccent: string;
  speakersLead: string;
  goekhanBio: string;
  patriciaBio: string;

  registerEyebrow: string;
  registerTitleBefore: string;
  registerTitleAccent: string;
  registerLead: string;
  registerWith: string;

  finalLine1: string;
  finalLine2: string;

  offerEyebrow: string;
  offerTitleBefore: string;
  offerTitleAccent: string;
  offerBody: string;
  offerQuote: string;
  offerProgramStart: string;
  offerRegular: string;
  offerFirstMovers: string;
  offerConditions: string;
  offerBarDesktop: string;
  offerBarMobile: string;

  modalClose: string;
  modalEyebrow: string;
  modalTitleBefore: string;
  modalTitleAccent: string;
  modalLead: string;
  modalName: string;
  modalNamePlaceholder: string;
  modalPhone: string;
  modalPhonePlaceholder: string;
  modalEmail: string;
  modalEmailPlaceholder: string;
  modalConsentBefore: string;
  modalConsentLink: string;
  modalConsentAfter: string;
  modalSuccessEyebrow: string;
  modalSuccessTitle: string;
  modalSuccessBodyBefore: string;
  modalSuccessBodyAfter: string;
  modalCloseButton: string;
  errName: string;
  errPhone: string;
  errPhoneInvalid: string;
  errEmail: string;
  errEmailInvalid: string;
  errNetwork: string;
};

const ui: Record<Locale, Ui> = {
  de: {
    language: 'Sprache',
    languageDe: 'Deutsch',
    languageEn: 'English',
    headerCta: 'Platz sichern',
    headerTag: `Business Webinar · ${webinar.date}`,
    ctaLabel: webinar.isFree ? 'Jetzt kostenlos anmelden' : 'Webinar-Platz sichern',
    ctaOffer: webinar.isFree ? 'Kostenlos zum Webinar anmelden' : 'Webinar-Platz sichern',
    ctaSubmit: webinar.isFree ? 'Jetzt kostenlos zum Webinar anmelden' : 'Jetzt zum Webinar anmelden',
    ctaSubmitting: 'Wird gesendet …',
    ctaHeroNote: webinar.isFree
      ? 'Kostenlos · Name, Telefon & E-Mail · Alle Infos per E-Mail'
      : 'Name, Telefon & E-Mail · Alle Infos zum Webinar per E-Mail',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookie-Richtlinien',
    legalNav: 'Rechtliches',
    legalBack: '← Zurück zum Webinar',
    seoTitle: webinar.seo.title,
    seoDescription: webinar.seo.description,

    heroEyebrow: 'Exklusiv für Kongress-Teilnehmer & Interessierte',
    heroKicker: 'BAYLAN.MED Business Webinar',
    heroTitleBefore: 'Der Kongress war',
    heroSlam: ['erst', 'der', 'Anfang.'],
    heroLead: `Vertiefe die Business- und Sales-Themen aus dem BAYLAN.MED Kongress in unserem exklusiven Webinar – mit ${webinar.speakers.goekhan.name} und ${webinar.speakers.patricia.name}.`,
    heroWith: 'Im Webinar mit',
    heroAnd: 'und',
    marqueeRevenue: 'Umsatz',

    detailsDate: 'Wann?',
    detailsTime: 'Wie viel Uhr?',

    introEyebrow: 'Nach dem Kongress',
    introLead: 'Hol das',
    introMaximum: 'Maximum',
    introTail: 'raus.',
    introItalic: 'Jetzt wird aus Impuls Umsatz.',
    introBody1: `Auf dem Kongress konnten viele Themen nur angerissen werden. Im Webinar gehen ${webinar.speakers.patricia.firstName} und ${webinar.speakers.goekhan.firstName} tiefer in die Business- und Sales-Themen ein und zeigen, wo in vielen Beauty- und Ästhetik-Unternehmen noch ungenutztes Umsatzpotenzial liegt.`,
    introBody2:
      'Für Inhaberinnen und Inhaber von Kosmetikstudios, Instituten und Ästhetik-Praxen, die ihr Business unternehmerischer führen wollen.',

    benefitsTitleBefore: 'Das erwartet dich',
    benefitsTitleAccent: 'im Webinar',
    benefitsLead: 'Ein Webinar. Drei Hebel. Dein nächster Schritt.',
    benefitsFooter:
      'Konkret statt theoretisch: Du erkennst, welche nächsten Schritte du in deinem eigenen Unternehmen angehen kannst.',
    benefits: [
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
    ],

    speakersTitleBefore: 'Mit wem du',
    speakersTitleAccent: 'durchstartest',
    speakersLead: 'Zwei Perspektiven. Ein gemeinsames Webinar.',
    goekhanBio:
      'Hat mit seinem Team ein Unternehmen mit Millionenumsätzen aufgebaut und über 1.000 Studios und Praxen im Wachstum begleitet.',
    patriciaBio:
      '„Die beste Strategie endet dort, wo die Person, die sie umsetzen soll, innerlich zurückweicht.“',

    registerEyebrow: 'Anmeldung',
    registerTitleBefore: 'Sichere dir',
    registerTitleAccent: 'deinen Platz',
    registerLead: 'Name, Telefon und E-Mail – in wenigen Sekunden bist du angemeldet.',
    registerWith: 'Mit',

    finalLine1: 'Der Kongress hat Impulse gesetzt.',
    finalLine2: 'Jetzt gehen wir einen Schritt tiefer.',

    offerEyebrow: 'Business Congress · Private Release',
    offerTitleBefore: 'First Movers sichern sich',
    offerTitleAccent: '1.000 € Vorteil.',
    offerBody: `Der ${webinar.offer.name} ist das weiterführende Business-Angebot von BAYLAN.MED. First Movers erhalten ihn zum Private-Release-Preis.${webinar.isFree ? ' Die Teilnahme am Webinar ist kostenlos.' : ''}`,
    offerQuote: 'For those who recognize opportunity — and move.',
    offerProgramStart: 'Programmstart:',
    offerRegular: 'Regular Investment',
    offerFirstMovers: 'First Movers Investment',
    offerConditions: 'Bedingungen:',
    offerBarDesktop: `First Movers: ${webinar.offer.advantage} auf den ${webinar.offer.name}`,
    offerBarMobile: `First Movers: ${webinar.offer.advantage}`,

    modalClose: 'Fenster schließen',
    modalEyebrow: 'Kostenlos anmelden',
    modalTitleBefore: 'Sichere dir',
    modalTitleAccent: 'deinen Platz',
    modalLead: 'Drei Angaben genügen. Du erhältst alle Infos per E-Mail.',
    modalName: 'Vollständiger Name *',
    modalNamePlaceholder: 'Vor- und Nachname',
    modalPhone: 'Telefonnummer *',
    modalPhonePlaceholder: 'z. B. 0170 1234567',
    modalEmail: 'E-Mail-Adresse *',
    modalEmailPlaceholder: 'name@studio.de',
    modalConsentBefore: 'Mit der Anmeldung stimmst du der',
    modalConsentLink: 'Datenschutzerklärung',
    modalConsentAfter: 'zu.',
    modalSuccessEyebrow: 'Anmeldung eingegangen',
    modalSuccessTitle: 'Du bist dabei,',
    modalSuccessBodyBefore: 'Alle Informationen zum Webinar erhältst du per E-Mail an',
    modalSuccessBodyAfter: '.',
    modalCloseButton: 'Schließen',
    errName: 'Bitte gib deinen vollständigen Namen ein.',
    errPhone: 'Bitte gib deine Telefonnummer ein.',
    errPhoneInvalid: 'Bitte prüfe deine Telefonnummer.',
    errEmail: 'Bitte gib deine E-Mail-Adresse ein.',
    errEmailInvalid: 'Bitte prüfe deine E-Mail-Adresse.',
    errNetwork: 'Die Anmeldung konnte gerade nicht gesendet werden. Bitte versuche es erneut.',
  },
  en: {
    language: 'Language',
    languageDe: 'Deutsch',
    languageEn: 'English',
    headerCta: 'Secure spot',
    headerTag: `Business Webinar · ${webinar.date}`,
    ctaLabel: webinar.isFree ? 'Register for free' : 'Secure webinar spot',
    ctaOffer: webinar.isFree ? 'Register for the webinar free' : 'Secure webinar spot',
    ctaSubmit: webinar.isFree ? 'Register for the webinar free now' : 'Register for the webinar now',
    ctaSubmitting: 'Sending …',
    ctaHeroNote: webinar.isFree
      ? 'Free · Name, phone & email · All details by email'
      : 'Name, phone & email · All webinar details by email',
    imprint: 'Imprint',
    privacy: 'Privacy',
    cookies: 'Cookie Policy',
    legalNav: 'Legal',
    legalBack: '← Back to webinar',
    seoTitle: 'BAYLAN.MED Business Webinar',
    seoDescription:
      'The free BAYLAN.MED Business Webinar with Gökhan Baylan and Patricia Baylan-Paulus: deepen the business and sales topics from the BAYLAN.MED congress.',

    heroEyebrow: 'Exclusive for congress attendees & interested professionals',
    heroKicker: 'BAYLAN.MED Business Webinar',
    heroTitleBefore: 'The congress was',
    heroSlam: ['just', 'the', 'beginning.'],
    heroLead: `Deepen the business and sales topics from the BAYLAN.MED congress in our exclusive webinar – with ${webinar.speakers.goekhan.name} and ${webinar.speakers.patricia.name}.`,
    heroWith: 'In the webinar with',
    heroAnd: 'and',
    marqueeRevenue: 'Revenue',

    detailsDate: 'When?',
    detailsTime: 'What time?',

    introEyebrow: 'After the congress',
    introLead: 'Get the',
    introMaximum: 'Maximum',
    introTail: 'out.',
    introItalic: 'Now impulse turns into revenue.',
    introBody1: `Many topics could only be touched on at the congress. In the webinar, ${webinar.speakers.patricia.firstName} and ${webinar.speakers.goekhan.firstName} go deeper into business and sales and show where many beauty and aesthetics businesses still leave revenue on the table.`,
    introBody2:
      'For owners of beauty studios, institutes and aesthetics practices who want to run their business more entrepreneurially.',

    benefitsTitleBefore: 'What to expect',
    benefitsTitleAccent: 'in the webinar',
    benefitsLead: 'One webinar. Three levers. Your next step.',
    benefitsFooter:
      'Practical, not theoretical: you will see which next steps you can take in your own business.',
    benefits: [
      {
        tag: 'Mindset',
        title: 'From practitioner to entrepreneur',
        text: 'See which levers truly move your business forward.',
      },
      {
        tag: 'Sales',
        title: 'More confidence in sales',
        text: 'Learn how to structure consultations and communicate your services and prices more convincingly.',
      },
      {
        tag: 'Revenue',
        title: 'Spot unused revenue potential',
        text: 'Discover where revenue is left behind in your existing business.',
      },
    ],

    speakersTitleBefore: 'Who you',
    speakersTitleAccent: 'grow with',
    speakersLead: 'Two perspectives. One shared webinar.',
    goekhanBio:
      'Built a multi-million business with his team and has supported more than 1,000 studios and practices in their growth.',
    patriciaBio:
      '“The best strategy ends where the person who should execute it holds back inside.”',

    registerEyebrow: 'Registration',
    registerTitleBefore: 'Secure',
    registerTitleAccent: 'your spot',
    registerLead: 'Name, phone and email – you are registered in a few seconds.',
    registerWith: 'With',

    finalLine1: 'The congress created momentum.',
    finalLine2: 'Now we take the next step deeper.',

    offerEyebrow: 'Business Congress · Private Release',
    offerTitleBefore: 'First Movers lock in',
    offerTitleAccent: '€1,000 advantage.',
    offerBody: `${webinar.offer.name} is BAYLAN.MED’s advanced business offer. First Movers get it at the Private Release price.${webinar.isFree ? ' Webinar participation is free.' : ''}`,
    offerQuote: 'For those who recognize opportunity — and move.',
    offerProgramStart: 'Program start:',
    offerRegular: 'Regular Investment',
    offerFirstMovers: 'First Movers Investment',
    offerConditions: 'Terms:',
    offerBarDesktop: `First Movers: ${webinar.offer.advantage} on ${webinar.offer.name}`,
    offerBarMobile: `First Movers: ${webinar.offer.advantage}`,

    modalClose: 'Close window',
    modalEyebrow: 'Register for free',
    modalTitleBefore: 'Secure',
    modalTitleAccent: 'your spot',
    modalLead: 'Three details are enough. You will receive all information by email.',
    modalName: 'Full name *',
    modalNamePlaceholder: 'First and last name',
    modalPhone: 'Phone number *',
    modalPhonePlaceholder: 'e.g. +49 170 1234567',
    modalEmail: 'Email address *',
    modalEmailPlaceholder: 'name@studio.com',
    modalConsentBefore: 'By registering you agree to the',
    modalConsentLink: 'privacy policy',
    modalConsentAfter: '.',
    modalSuccessEyebrow: 'Registration received',
    modalSuccessTitle: 'You’re in,',
    modalSuccessBodyBefore: 'You will receive all webinar details by email at',
    modalSuccessBodyAfter: '.',
    modalCloseButton: 'Close',
    errName: 'Please enter your full name.',
    errPhone: 'Please enter your phone number.',
    errPhoneInvalid: 'Please check your phone number.',
    errEmail: 'Please enter your email address.',
    errEmailInvalid: 'Please check your email address.',
    errNetwork: 'Registration could not be sent right now. Please try again.',
  },
};

export type UiKey = keyof Ui;

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key] as string;
}

export function getUi(locale: Locale): Ui {
  return ui[locale];
}
