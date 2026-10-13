import type { Locale } from './config';
import { homeDe } from './home.de';
import { homeEn } from './home.en';

export interface ChatMessage {
  from: 'them' | 'you';
  text: string;
  time: string;
  /** Häkchen bei eigenen Nachrichten (WhatsApp) */
  status?: 'sent' | 'delivered' | 'read';
}

export interface ChatScene {
  label: string;
  contact: string;
  contactStatus: string;
  messages: ChatMessage[];
}

export interface MethodStep {
  no: string;
  word: string;
  definition: string;
  paragraphs: string[];
  quote?: string;
}

export interface Pillar {
  word: string;
  title: string;
  focus: string;
  paragraphs: string[];
  /** Gegenüberstellung „Du hörst auf … / Du lernst …“ */
  pairs?: { stop: string; start: string }[];
  closing?: string;
}

export interface ProgramStep {
  word: string;
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface StoryCopy {
  slug: string;
  name: string;
  role: string;
  result: string;
  quote: string;
}

export interface Founder {
  name: string;
  focus: string;
  paragraphs: string[];
  list?: string[];
  closing?: string;
  imageAlt: string;
}

export interface HomeCopy {
  seo: { title: string; description: string };
  nav: {
    tagline: string;
    links: { href: string; label: string }[];
    cta: string;
    menu: string;
  };
  announce: { desktop: string; mobile: string; cta: string };
  chatUi: { today: string; typing: string; placeholder: string };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    lead: string[];
    chain: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    priceLine: string;
    signatureName: string;
    signatureRole: string;
    product: {
      badge: string;
      label: string;
      name: string;
      claim: string;
      features: string[];
      by: string;
      startLabel: string;
      start: string;
      regularLabel: string;
      imageAlt: string;
    };
  };
  proof: { label: string; items: string[] };
  welcome: {
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    intro: string;
    lines: string[];
    followTitle: string;
    followList: string[];
    claim: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    cards: { title: string; text: string }[];
    chats: ChatScene[];
    closing: string;
  };
  notSmall: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    loop: string[];
    turn: string[];
    closingLead: string;
    closingAccent: string;
    imageAlt: string;
  };
  focus: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    mirrorsTitle: string;
    mirrors: string[];
    reality: string;
    needTitle: string;
    needs: string[];
    closing: string;
  };
  method: {
    eyebrow: string;
    title: string;
    lead: string;
    hint: string;
    steps: MethodStep[];
  };
  duo: {
    eyebrow: string;
    title: string;
    lead: string[];
    founders: Founder[];
    closing: string;
  };
  voice: {
    eyebrow: string;
    title: string;
    text: string;
    from: string;
    status: string;
    intro: string;
    introTime: string;
    voiceTime: string;
    transcriptLabel: string;
    transcript: string;
    play: string;
    pause: string;
  };
  tss: {
    eyebrow: string;
    headline: string[];
    intro: string;
    struggleLead: string;
    struggles: string[];
    loop: string;
    freedom: string;
    pivot: string;
    pressureTitle: string;
    pressureLines: string[];
    pressureWorlds: string[];
    pressureClosing: string;
    tagline: string;
  };
  question: {
    eyebrow: string;
    title: string;
    story: string[];
    storyList: string[];
    storyEnd: string[];
    loopList: string[];
    notQuestion: string;
    realQuestionLead: string;
    realQuestion: string;
    shiftLead: string;
    shifts: string[];
  };
  pillars: {
    eyebrow: string;
    title: string;
    items: Pillar[];
    cross: string[];
    crossText: string[];
    cta: string;
  };
  follows: {
    eyebrow: string;
    title: string;
    notList: string[];
    you: string;
    youList: string[];
    paragraphs: string[];
    chain: string[];
    mantra: string;
    businessTitle: string;
    businessChain: string[];
    businessEnd: string[];
    accountTitle: string;
    accountLead: string;
    moments: string[];
    energyTitle: string;
    energyText: string[];
    energyChain: string[];
  };
  different: {
    eyebrow: string;
    title: string;
    beliefs: string[];
    connectLead: string;
    pairs: string[];
    founders: string[];
    program: string;
    balance: string[];
    workTitle: string;
    workLead: string[];
    sothat: string[];
    triad: string[];
  };
  transformation: {
    eyebrow: string;
    title: string;
    beforeLabel: string;
    afterLabel: string;
    before: string[];
    after: string[];
    measure: string;
    outcomes: string[];
    closing: string[];
    chatBefore: ChatScene;
    chatAfter: ChatScene;
    movesTitle: string;
    moves: { from: string; to: string }[];
  };
  program: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: ProgramStep[];
    goalTitle: string;
    goalLead: string;
    goals: string[];
    questionFrom: string;
    questionTo: string;
    shiftTitle: string;
    shifts: string[];
  };
  fit: {
    eyebrow: string;
    title: string;
    yesTitle: string;
    yes: string[];
    noTitle: string;
    no: string[];
  };
  trailer: { eyebrow: string; title: string; text: string; play: string };
  stories: {
    eyebrow: string;
    title: string;
    lead: string;
    play: string;
    items: StoryCopy[];
    quote: string;
    quoteBy: string;
  };
  offer: {
    eyebrow: string;
    title: string;
    lead: string;
    includedTitle: string;
    included: string[];
    trioTitle: string;
    trio: { word: string; text: string }[];
    card: {
      badge: string;
      product: string;
      name: string;
      startLabel: string;
      start: string;
      regularLabel: string;
      priceLabel: string;
      advantage: string;
      cta: string;
      trust: string[];
      conditions: string;
    };
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
    contactText: string;
    contactCta: string;
  };
  future: {
    eyebrow: string;
    title: string;
    intro: string;
    questions: string[];
    closing: string[];
    bestEyebrow: string;
    bestTitle: string;
    bestLead: string;
    bestList: string[];
    bestClosing: string[];
  };
  final: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lines: string[];
    statement: string[];
    cta: string;
    note: string;
    tagline: string;
  };
  questions: {
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    namePh: string;
    phone: string;
    phonePh: string;
    email: string;
    emailPh: string;
    message: string;
    messagePh: string;
    submit: string;
    submitting: string;
    consentBefore: string;
    consentLink: string;
    consentAfter: string;
    successTitle: string;
    successBody: string;
    errName: string;
    errPhone: string;
    errPhoneInvalid: string;
    errEmail: string;
    errEmailInvalid: string;
    errMessage: string;
    errNetwork: string;
  };
  exit: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    secondary: string;
    close: string;
  };
  sticky: { label: string; meta: string; cta: string; float: string };
  footer: { tagline: string; claim: string; nav: string; legal: string; rights: string };
}

export function getHome(locale: Locale): HomeCopy {
  return locale === 'en' ? homeEn : homeDe;
}
