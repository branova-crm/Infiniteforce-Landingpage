/**
 * Zentrale Infiniteforce-Site-Konfiguration.
 * Shop-URL und Medien sind Platzhalter, bis die finalen Links/Dateien kommen.
 */
const testimonialSlugs = ['story-01', 'story-02', 'story-03', 'story-04', 'story-05', 'story-06'] as const;

export const site = {
  brand: 'INFINITEFORCE',
  tagline: 'WHERE ENERGY BECOMES REALITY.',
  domain: 'infiniteforce.ltd',

  logo: {
    gold: '/brand/infiniteforce-gold.png',
    white: '/brand/infiniteforce-white.png',
    black: '/brand/infiniteforce-black.png',
  },

  /** Kauf-CTA: Success Seller direkt in den Warenkorb */
  shopUrl: 'https://shop.infiniteforce.ltd/?add-to-cart=1029',

  /** Kontakt (Impressum) */
  contact: {
    phoneDisplay: '01573 6246091',
    phoneHref: 'tel:+4915736246091',
    whatsappHref:
      'https://wa.me/4915736246091?text=Hey%20Patricia%2C%20ich%20brauche%20eine%20Beratung.',
  },

  /** First-Movers-Angebot: Success Seller Launcher */
  offer: {
    name: 'Success Seller Launcher',
    productName: 'THE SUCCESS SELLER',
    programStart: 'Sonntag, 8. November 2026',
    programStartEn: 'Sunday, 8 November 2026',
    regularPrice: '9.000 €',
    firstMoverPrice: '6.000 €',
    advantage: '3.000 € Private Release Advantage',
    conditions: 'First-Movers-Konditionen gelten nur für begrenzte Plätze.',
    conditionsEn: 'First Mover terms apply to a limited number of seats only.',
  },

  founders: {
    patricia: {
      name: 'Patricia Baylan-Paulus',
      role: 'Founder of INFINITEFORCE',
    },
    goekhan: {
      name: 'Gökhan Baylan',
      role: 'Sales · Strategy · Execution',
    },
  },

  media: {
    voice: {
      src: '/media/voice/patricia.mp3',
      durationLabel: '1:43',
    },
    trailer: {
      src: '/media/trailer/congress.mp4',
      poster: '/media/trailer/congress.jpg',
    },
    testimonials: testimonialSlugs.map((slug) => ({
      slug,
      video: `/media/testimonials/${slug}.mp4`,
      poster: `/media/testimonials/${slug}.jpg`,
    })),
  },

  form: {
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
    ogImage: '/images/og-image.jpg',
  },
};

export type SiteConfig = typeof site;
