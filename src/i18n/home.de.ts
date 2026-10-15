import type { HomeCopy } from './home';
import { site } from '../config/site';

const { offer, founders } = site;

export const homeDe: HomeCopy = {
  seo: {
    title: 'INFINITEFORCE · The Success Seller – Think bigger. Sell better. Grow faster.',
    description:
      'Dein nächstes Umsatzlevel beginnt mit der Identität, aus der du denkst, entscheidest und verkaufst. The Success Seller von Patricia Baylan-Paulus und Gökhan Baylan.',
  },

  nav: {
    tagline: 'Where energy becomes reality',
    links: [
      { href: '#truth', label: 'Wahrheit' },
      { href: '#problem', label: 'Problem' },
      { href: '#offer', label: 'Angebot' },
      { href: '#faq', label: 'FAQ' },
    ],
    cta: 'Jetzt sichern',
    menu: 'Menü',
  },

  announce: {
    desktop: `Private Release · ${offer.name}: ${offer.firstMoverPrice} statt ${offer.regularPrice} – START NOVEMBER 2026`,
    mobile: `First Movers: ${offer.firstMoverPrice} statt ${offer.regularPrice}`,
    cta: 'Jetzt sichern',
  },

  chatUi: { today: 'Heute', typing: 'schreibt …', placeholder: 'Nachricht' },

  hero: {
    eyebrow: 'INFINITEFORCE · The Success Seller',
    titleTop: 'Dein Business wächst nie',
    titleAccent: 'über deine Identität hinaus.',
    lead: [
      'Nicht härter verkaufen. Nicht lauter werden.',
      'Sondern größer denken, klarer führen und besser verkaufen.',
    ],
    chain: ['Energy', 'Identity', 'Action', 'Money', 'Impact'],
    ctaPrimary: 'Jetzt sichern',
    ctaSecondary: 'Mehr erfahren',
    priceLine: `Private Release für First Movers: ${offer.firstMoverPrice} statt ${offer.regularPrice}`,
    signatureName: founders.patricia.name,
    signatureRole: founders.patricia.role,
    product: {
      badge: 'Private Release',
      label: offer.name,
      name: 'The Success Seller',
      claim: 'Think bigger. Sell better. Grow faster.',
      features: [
        'Identity Shift, Erfolgs- und Geldbewusstsein',
        'Positionierung, Preise und Verkauf',
        'Kundenwert, Conversion und ein wiederholbarer Sales-Prozess',
      ],
      by: `Mit ${founders.patricia.name} & ${founders.goekhan.name}`,
      regularLabel: 'statt',
      cta: 'Jetzt sichern',
      imageAlt: 'Patricia Baylan-Paulus und Gökhan Baylan',
    },
  },

  proof: {
    label: 'Welcome to INFINITEFORCE',
    items: ['Money Maker Mindset', 'Sales Mastery', 'Consciousness', 'Limitless Success'],
  },

  principles: {
    eyebrow: 'Die Wahrheit hinter dem Umsatz',
    title: 'Es geht nicht nur darum, was du sagst.',
    titleAccent: 'Es geht darum, wer du bist, wenn du es sagst.',
    items: [
      {
        title: 'Die unsichtbare Grenze',
        text: 'Dein Business wächst nie über deine Identität hinaus.',
      },
      {
        title: 'Wer du bist, wenn du sprichst',
        text: 'Es geht nicht nur darum, was du sagst. Es geht darum, wer du bist, wenn du es sagst.',
      },
      {
        title: 'Verkauf ist Identität',
        text: 'Verkauf ist keine Technik. Verkauf ist Identität, Fähigkeit und Umsetzung.',
      },
      {
        title: 'Nicht härter. Klarer.',
        text: 'Nicht härter verkaufen. Nicht lauter werden. Sondern größer denken, klarer führen und besser verkaufen.',
      },
      {
        title: 'Eine neue Version von dir',
        text: 'Dein nächstes Umsatzlevel braucht eine neue Version von dir.',
      },
      {
        title: 'Was du dir erlaubst',
        text: 'Du kannst nur das Business führen, das du dir selbst erlaubst zu tragen.',
      },
      {
        title: 'Bewusstsein + Umsetzung',
        text: 'Bewusstsein ohne Umsetzung verändert keinen Umsatz. Strategie ohne die richtige Identität wird irgendwann anstrengend.',
      },
    ],
    ctaCard: {
      title: 'Dein nächster Schritt',
      text: 'Jetzt beim The Success Seller Platz sichern.',
      cta: 'Jetzt sichern',
    },
    closing: [
      'Dein nächstes ',
      { strong: 'Level' },
      ' beginnt mit der ',
      { strong: 'Person' },
      ', die du wirst – nicht mit mehr ',
      { strong: 'Arbeit' },
      '.',
    ],
  },

  welcome: {
    eyebrow: 'INFINITEFORCE',
    titleTop: 'Where energy',
    titleAccent: 'becomes reality.',
    intro: 'Du bist nicht hier, um klein zu spielen.',
    lines: [
      'Du bist hier, um zu erkennen, was wirklich in dir steckt.',
      'Um die Grenzen zu durchbrechen, die du bisher für deine Realität gehalten hast.',
      'Und um ein Business und ein Leben zu erschaffen, das zu der Person passt, die du wirklich sein willst.',
    ],
    followTitle: 'Dein Business folgt einer Sache: DIR.',
    followList: ['Deiner Identität.', 'Deinen Standards.', 'Deinen Entscheidungen.', 'Deiner Energie.'],
    claim: 'Welcome to INFINITEFORCE.',
  },

  problem: {
    eyebrow: 'Die unsichtbare Grenze',
    title: 'Du bist nicht hier, weil dir Strategie fehlt.',
    titleAccent: 'Dein Business wächst nie über deine Identität hinaus.',
    cards: [
      {
        title: 'Du erklärst deinen Preis.',
        text: 'Du kommst entgegen, bevor jemand entschieden hat. Dein Wert wird verhandelbar – und das Gespräch endet mit „ich überleg’s mir nochmal.“',
      },
      {
        title: 'Du läufst Kunden hinterher.',
        text: 'Du schreibst nach. Und nochmal. Sie liest – und entscheidet sich nicht. Nicht weil ihr Zeit fehlt. Weil du das Gespräch nicht führst.',
      },
      {
        title: 'Du wartest, statt zu führen.',
        text: '„Schreib, wenn du soweit bist.“ Klingt höflich. In Wahrheit gibst du die Entscheidung ab – und dein nächstes Level mit.',
      },
    ],
    chats: [
      {
        label: 'Den Preis erklären',
        contact: 'Neue Kundin',
        contactStatus: 'online',
        messages: [
          { from: 'them', text: 'Was kostet das Paket denn genau?', time: '18:04' },
          {
            from: 'you',
            text: '1.490 €. Ich weiß, das ist eine Investition – ich kann dir aber gern etwas entgegenkommen …',
            time: '18:09',
            status: 'read',
          },
          { from: 'them', text: 'Okay. Dann überleg ich mir das nochmal.', time: '18:31' },
        ],
      },
      {
        label: 'Hinterherlaufen',
        contact: 'Interessentin',
        contactStatus: 'zuletzt online gestern',
        messages: [
          { from: 'you', text: 'Hi! Wollte nur kurz nachhaken wegen unseres Gesprächs 😊', time: '09:12', status: 'read' },
          { from: 'you', text: 'Hattest du schon Zeit, darüber nachzudenken?', time: '16:40', status: 'delivered' },
        ],
      },
      {
        label: 'Warten statt führen',
        contact: 'Interessentin',
        contactStatus: 'online',
        messages: [
          { from: 'them', text: 'Ich muss das nochmal überlegen.', time: '11:08' },
          {
            from: 'you',
            text: 'Natürlich! Schreib einfach, wenn du soweit bist 🙏',
            time: '11:09',
            status: 'read',
          },
        ],
      },
    ],
    closing: [
      'Du versuchst im ',
      { strong: 'Außen' },
      ' ein ',
      { strong: 'Ergebnis' },
      ' zu erschaffen, für das du im ',
      { strong: 'Inneren' },
      ' noch nicht zur ',
      { strong: 'Person' },
      ' geworden bist.',
    ],
  },

  notSmall: {
    eyebrow: 'Dein nächstes Level',
    title: 'Du bist nicht hier, um klein zu spielen.',
    paragraphs: [
      'Vielleicht weißt du längst, dass mehr in dir steckt.',
      'Mehr Umsatz. Mehr Freiheit. Mehr Wirkung. Mehr von dem Leben, von dem du weißt, dass es möglich ist.',
      'Und trotzdem gibt es diese unsichtbare Grenze.',
    ],
    loop: ['Du arbeitest mehr.', 'Du lernst mehr.', 'Du optimierst deine Strategie.'],
    turn: [
      'Aber irgendwann landest du wieder an einem ähnlichen Punkt. Warum?',
      'Weil dein nächstes Level nicht einfach eine bessere Strategie von dir verlangt. Es verlangt eine neue Version von dir.',
      'Dein Umsatz wächst nicht dauerhaft über deine Identität hinaus. Du wirst immer wieder auf das Level zurückkehren, das du innerlich für normal, sicher und möglich hältst.',
    ],
    closingLead:
      'Bis du aufhörst, nur das Ergebnis verändern zu wollen – und beginnst, die Ursache zu verändern.',
    closingAccent: 'DICH.',
    imageAlt: 'Patricia Baylan-Paulus, Founder of INFINITEFORCE',
  },

  focus: {
    eyebrow: 'Energy',
    title: 'Where focus goes,',
    titleAccent: 'energy flows.',
    paragraphs: [
      'Worauf du deinen Fokus richtest, dorthin fließt deine Energie.',
      'Und wohin deine Energie fließt, dort entstehen deine Entscheidungen, deine Handlungen und schließlich deine Ergebnisse.',
      'Deshalb beginnt Erfolg für uns nicht erst beim Verkauf. Er beginnt viel früher.',
    ],
    mirrorsTitle: 'Er beginnt …',
    mirrors: [
      'bei dem Bild, das du von dir selbst hast.',
      'bei dem, was du erwartest.',
      'bei dem, was du tolerierst.',
      'bei dem, was du für möglich hältst.',
      'bei den Entscheidungen, die du triffst, wenn niemand zusieht.',
    ],
    reality: 'Deine äußere Realität folgt deiner inneren Welt. Aber Energie allein baut noch kein Unternehmen.',
    needTitle: 'Du brauchst beides',
    needs: ['Bewusstsein und Strategie.', 'Identität und Umsetzung.', 'Magnetismus und Verkauf.'],
    closing: 'Genau dort beginnt INFINITEFORCE.',
  },

  method: {
    eyebrow: 'The INFINITEFORCE Method',
    title: 'Energy → Identity → Action → Money → Impact',
    lead: 'Fünf Ebenen, die aufeinander aufbauen – von der Art, wie du denkst, bis zu dem, was dein Erfolg in der Welt bewirkt.',
    hint: 'Wähle einen Schritt, um mehr zu lesen',
    steps: [
      {
        no: '01',
        word: 'Energy',
        definition: 'Wie du denkst, fühlst und worauf du deine Aufmerksamkeit richtest.',
        paragraphs: [
          'Alles beginnt mit deiner Aufmerksamkeit.',
          'Worauf richtest du deinen Fokus? Auf Möglichkeiten oder Grenzen? Auf Wachstum oder Mangel? Auf das, was du willst – oder auf das, was du fürchtest?',
        ],
        quote: 'Where focus goes, energy flows.',
      },
      {
        no: '02',
        word: 'Identity',
        definition: 'Wer du glaubst zu sein und was du für dich für möglich hältst.',
        paragraphs: [
          'Du kannst kein neues Leben aus deiner alten Identität erschaffen. Deine Ergebnisse folgen dem Menschen, der du glaubst zu sein.',
          'Verändere dein Selbstbild. Erweitere deine Standards. Erlaube dir, größer zu denken.',
        ],
        quote: 'Become the person who already belongs at your next level.',
      },
      {
        no: '03',
        word: 'Action',
        definition: 'Die Entscheidungen und Handlungen, die daraus entstehen.',
        paragraphs: [
          'Bewusstsein ohne Handlung verändert nichts. Eine neue Identität zeigt sich in neuen Entscheidungen.',
          'Du wartest nicht mehr auf Sicherheit. Du handelst aus Klarheit. Du bewegst dich nicht mehr wie die Person, die du warst.',
        ],
        quote: 'Du bewegst dich wie die Person, die du wirst.',
      },
      {
        no: '04',
        word: 'Money',
        definition: 'Der wirtschaftliche Output deiner Entscheidungen.',
        paragraphs: [
          'Geld ist nicht das Ziel deiner Identität. Aber es ist ein sichtbares Ergebnis deiner Standards, deiner Entscheidungen, deines Wertes und deiner Fähigkeit, diesen Wert zu verkaufen.',
          'Du lernst, Geld nicht länger aus Druck zu verfolgen.',
        ],
        quote: 'Wert erschaffen. Wert kommunizieren. Wert verkaufen.',
      },
      {
        no: '05',
        word: 'Impact',
        definition: 'Was möglich wird, wenn Wachstum nicht mehr an deiner bisherigen Identität endet.',
        paragraphs: [
          'Erfolg endet nicht auf deinem Konto. Er beginnt dort erst, größer zu werden.',
          'Mehr Freiheit. Mehr Möglichkeiten. Mehr Einfluss. Mehr Leben. Nicht Erfolg um jeden Preis.',
        ],
        quote: 'Sondern Erfolg auf einem Level, das wirklich zu dir passt.',
      },
    ],
  },

  duo: {
    eyebrow: 'Zwei Perspektiven. Eine Vision.',
    title: 'Mindset alone doesn’t build a business.',
    lead: [
      'Innere Veränderung ohne Umsetzung bleibt Potenzial. Strategie ohne die richtige Identität stößt irgendwann an eine Grenze.',
      'Deshalb verbindet INFINITEFORCE Consciousness, Identity, Sales und Business Strategy.',
    ],
    founders: [
      {
        name: founders.patricia.name,
        focus: 'Identity · Energy · Consciousness',
        paragraphs: [
          'Die größte Grenze zwischen dir und deinem nächsten Level ist häufig keine äußere.',
          'Es ist die Version von dir, die noch versucht, ein neues Ergebnis mit alten Überzeugungen, alten Standards und einem alten Selbstbild zu erschaffen.',
          'Patricia arbeitet an der Ursache.',
        ],
        list: ['An deiner Identität.', 'Deinem Bewusstsein.', 'Deiner Energie.', 'Und an der Person, aus der deine Ergebnisse entstehen.'],
        imageAlt: 'Portrait von Patricia Baylan-Paulus',
      },
      {
        name: founders.goekhan.name,
        focus: 'Sales · Strategy · Execution',
        paragraphs: [
          'Ein starkes Mindset ohne Umsetzung bleibt Potenzial.',
          'Gökhan bringt die andere Seite von INFINITEFORCE:',
        ],
        list: ['Verkauf.', 'Positionierung.', 'Strategie.', 'Entscheidungen.', 'Umsetzung.'],
        closing: 'Denn wenn du deinen Wert kennst, musst du auch lernen, ihn zu kommunizieren und zu verkaufen.',
        imageAlt: 'Portrait von Gökhan Baylan',
      },
    ],
    closing: 'Master the sale. Master the game.',
  },

  voice: {
    eyebrow: 'Eine Nachricht von Patricia',
    title: 'Hör rein, bevor du entscheidest.',
    text: 'Ein paar ehrliche Worte von Patricia – darüber, warum dein nächstes Level nicht mit mehr Arbeit beginnt.',
    from: founders.patricia.name,
    status: 'online',
    intro: 'Hey, hör dir das kurz an, bevor du entscheidest 🤍',
    introTime: '10:23',
    voiceTime: '10:24',
    transcriptLabel: 'Transkript lesen',
    transcript:
      'Patricia spricht über den Identity Shift hinter The Success Seller und darüber, warum dein Umsatz dir folgt – und warum dein nächstes Level mit der Person beginnt, die du wirst.',
    play: 'Sprachnachricht abspielen',
    pause: 'Sprachnachricht pausieren',
    playHint: 'Jetzt abspielen',
  },

  tss: {
    eyebrow: 'The Success Seller',
    headline: ['Think bigger.', 'Sell better.', 'Grow faster.'],
    intro:
      'Du bist nicht hier, um dein Business irgendwie am Laufen zu halten. Du bist hier, um etwas zu erschaffen, das größer ist als dein heutiger Umsatz, größer als deine bisherigen Grenzen – und dir endlich die Freiheit gibt, für die du einmal gestartet bist.',
    struggleLead: 'Doch viele Unternehmer erleben genau das Gegenteil.',
    struggles: [
      'Sie arbeiten mehr, aber verdienen nicht entsprechend mehr.',
      'Sie brauchen ständig neue Kunden.',
      'Sie sind permanent beschäftigt, aber haben zu wenig Zeit.',
      'Sie wollen wachsen, doch ihr Business hängt immer noch vollständig von ihnen ab.',
    ],
    loop: 'Mehr Umsatz bedeutet mehr Arbeit. Mehr Kunden bedeuten weniger Zeit. Wachstum fühlt sich irgendwann wie ein Hamsterrad an.',
    freedom: 'Das ist nicht die Freiheit, für die du Unternehmer geworden bist.',
    pivot: 'Und genau hier beginnt The Success Seller.',
    pressureTitle: 'Dein nächstes Umsatzlevel braucht nicht mehr Druck.',
    pressureLines: [
      'Es braucht eine andere Identität.',
      'Eine andere Energie.',
      'Und eine Verkaufsstrategie, die zu deinem Wert passt.',
    ],
    pressureWorlds: ['Mindset und Sales.', 'Magnetismus und Strategie.', 'Identität und Umsetzung.'],
    pressureClosing:
      'Damit du aufhörst, Kunden hinterherzulaufen – und beginnst, so klar in deinem Wert zu stehen, dass die richtigen Menschen ihn erkennen.',
    tagline: 'Open the mind. Close the deal.',
  },

  question: {
    eyebrow: 'The Success Seller',
    title: 'Was, wenn Erfolg sich nicht mehr nach Kampf anfühlen muss?',
    story: [
      'Du bist angetreten, um dir etwas aufzubauen. Für mehr Freiheit. Mehr Möglichkeiten. Mehr von deinem eigenen Leben.',
      'Und irgendwann passiert genau das Gegenteil.',
    ],
    storyList: [
      'Du arbeitest mehr.',
      'Du gibst mehr.',
      'Du versuchst, noch mehr Kunden zu gewinnen, noch sichtbarer zu werden, noch mehr zu leisten.',
    ],
    storyEnd: [
      'Und trotzdem bleibt der Umsatz hinter dem zurück, was du eigentlich erreichen willst. Oder der Umsatz ist da – aber du hast keine Zeit mehr, ihn zu genießen.',
      'Dein Business läuft. Aber du läufst die ganze Zeit mit.',
    ],
    loopList: ['Mehr Umsatz braucht mehr Arbeit.', 'Mehr Kunden brauchen mehr Zeit.', 'Mehr Wachstum bedeutet noch mehr von dir.'],
    notQuestion: 'Nicht mit der Frage: „Wie kannst du noch mehr machen?“',
    realQuestionLead: 'Sondern:',
    realQuestion: 'Wer musst du werden, damit mehr möglich wird?',
    shiftLead:
      'Denn dein nächstes Level entsteht nicht dadurch, dass du dein altes Level einfach schneller spielst. Es entsteht durch einen Shift:',
    shifts: [
      'In deiner Identität.',
      'In deinen Standards.',
      'In deinem Verhältnis zu Geld.',
      'In der Art, wie du deinen Wert siehst.',
      'Wie du verkaufst.',
      'Wie du entscheidest.',
      'Und wie du dein Business führst.',
    ],
  },

  pillars: {
    eyebrow: 'Die drei Säulen',
    title: 'Was macht The Success Seller so einzigartig?',
    items: [
      {
        word: 'Think bigger.',
        title: 'Erweitere deine Identität.',
        focus: 'Leadership · Mindset · Identity Shift · Money',
        paragraphs: [
          'Alles beginnt mit der Grenze, die du nicht sehen kannst: deinem Selbstbild, deinen Überzeugungen über Geld, dem Umsatz, den du innerlich für „viel“ hältst, dem Preis, den du dich traust auszusprechen, der Größe, die du dir selbst erlaubst.',
          'Patricia führt dich durch den Identity Shift hinter deinem nächsten Level. Nicht, damit du einfach positiver denkst – sondern damit du aufhörst, deine Zukunft aus der Identität deiner Vergangenheit zu erschaffen.',
        ],
        closing: 'Neue Identität. Neue Standards. Neue Erfolgsenergie.',
      },
      {
        word: 'Sell better.',
        title: 'Meistere deinen Wert und deinen Verkauf.',
        focus: 'Sales Mastery · Business · Entrepreneurship · Growth',
        paragraphs: [
          'Denn eine große Vision ohne die Fähigkeit, sie in Ergebnisse zu verwandeln, bleibt eine Vision. Verkaufen bedeutet nicht Druck. Verkaufen bedeutet Klarheit. Führung. Überzeugung. Wert.',
          'Gökhan zeigt dir, wie aus deiner neuen Identität messbarer Business-Erfolg wird.',
        ],
        pairs: [
          { stop: 'Du hörst auf, deinen Preis zu erklären.', start: 'Du lernst, deinen Wert zu verkaufen.' },
          { stop: 'Du hörst auf, Kunden hinterherzulaufen.', start: 'Du lernst, Gespräche zu führen.' },
          {
            stop: 'Du hörst auf, Umsatz dem Zufall zu überlassen.',
            start: 'Du baust einen Prozess, den du verstehst und wiederholen kannst.',
          },
        ],
      },
      {
        word: 'Grow faster.',
        title: 'Baue ein Business, das mit dir wächst – ohne dich aufzufressen.',
        focus: 'Mindset × Sales',
        paragraphs: [
          'Und genau hier treffen beide Welten aufeinander. Nicht nur an deinem Business arbeiten. Nicht nur an deinem Mindset arbeiten.',
          'Sondern an der Person, die das Business führt – und gleichzeitig an dem System, das aus dieser Person Ergebnisse macht.',
        ],
        closing:
          'Vom Erfolgs- und Geldbewusstsein über Positionierung, Preise und Verkauf bis hin zu Kundenwert, Conversion, Identity Shift und einem wiederholbaren Sales-System.',
      },
    ],
    cross: ['Mindset × Sales', 'Identity × Strategy', 'Energy × Execution', 'Money × Freedom'],
    crossText: ['Das ist The Success Seller.'],
    cta: 'Jetzt sichern',
  },

  follows: {
    eyebrow: 'Dein Umsatz folgt dir',
    title: 'Dein Umsatz folgt dir.',
    notList: ['Nicht deiner Hoffnung.', 'Nicht deinem nächsten Instagram-Post.', 'Nicht der Anzahl der Stunden, die du arbeitest.'],
    you: 'DIR.',
    youList: [
      'Deiner Identität.',
      'Deinen Standards.',
      'Deinem Verhältnis zu Geld.',
      'Deiner Fähigkeit zu verkaufen.',
      'Deinen Entscheidungen.',
      'Und der Größe dessen, was du dir selbst wirklich erlaubst.',
    ],
    paragraphs: [
      'Deshalb versuchen wir nicht einfach, aus deiner heutigen Version noch mehr Leistung herauszuholen.',
      'Wir verändern das Level, von dem aus du spielst.',
    ],
    chain: [
      'Wenn sich deine Identität verändert, verändern sich deine Entscheidungen.',
      'Wenn sich deine Entscheidungen verändern, verändert sich dein Handeln.',
      'Und wenn sich dein Handeln verändert, beginnen sich deine Ergebnisse zu verändern.',
    ],
    mantra: 'Where focus goes, energy flows.',
    businessTitle: 'Dein Business folgt einer Sache: DIR.',
    businessChain: [
      'Wenn du dich veränderst, verändern sich deine Entscheidungen.',
      'Wenn sich deine Entscheidungen verändern, verändern sich deine Handlungen.',
      'Wenn sich deine Handlungen verändern, verändern sich deine Ergebnisse.',
    ],
    businessEnd: [
      'Und irgendwann schaust du auf ein Leben, das früher nur eine Vision war.',
      'Nicht weil du Glück hattest. Sondern weil du aufgehört hast, darauf zu warten, dass sich das Außen zuerst verändert.',
      'Du bist zuerst gegangen.',
    ],
    accountTitle: 'Erfolg beginnt nicht auf deinem Konto.',
    accountLead: 'Er beginnt in dir. In dem Moment, in dem du …',
    moments: [
      'aufhörst, deine heutige Realität als deine Grenze zu akzeptieren.',
      'beginnst, größer zu denken als dein aktueller Umsatz.',
      'deinen Wert nicht mehr davon abhängig machst, ob jemand deinen Preis akzeptiert.',
      'nicht mehr jedem Kunden hinterherläufst, sondern eine Klarheit entwickelst, die Menschen anzieht.',
    ],
    energyTitle: 'Das ist Erfolgsenergie.',
    energyText: [
      'Nicht einfach positiv denken.',
      'Sondern eine Identität zu entwickeln, aus der andere Entscheidungen entstehen.',
    ],
    energyChain: [
      'Aus deiner Energie entsteht dein Handeln.',
      'Aus deinem Handeln entstehen deine Ergebnisse.',
      'Und aus deinen Ergebnissen entsteht irgendwann ein Leben, das früher nur deine Vision war.',
    ],
  },

  different: {
    eyebrow: 'Der Unterschied',
    title: 'Genau das macht The Success Seller anders.',
    beliefs: [
      'Wir glauben nicht daran, dass du nur eine bessere Verkaufsstrategie brauchst.',
      'Und wir glauben genauso wenig daran, dass ein neues Mindset allein dein Business verändert.',
    ],
    connectLead:
      'Wir verbinden das, was viel zu lange getrennt wurde: die innere Transformation mit der äußeren Umsetzung.',
    pairs: [
      'Identität mit Strategie.',
      'Energie mit Sales.',
      'Magnetismus mit Klarheit.',
      'Bewusstsein mit Zahlen.',
      'Vision mit Umsetzung.',
    ],
    founders: [
      'Patricia arbeitet mit dir an der Person, die dein nächstes Level tragen kann.',
      'Gökhan zeigt dir, wie diese neue Identität zu klarer Positionierung, besseren Angeboten, stärkeren Verkaufsgesprächen, höheren Kundenwerten und planbarem Wachstum wird.',
    ],
    program:
      'Genau diese Verbindung ist im Programm angelegt: vom Erfolgs- und Geldbewusstsein über Positionierung, Preise und Sales bis zu Kundenwert, Conversion, Identity Shift und einem wiederholbaren Sales-Prozess.',
    balance: [
      'Denn Energie ohne Umsetzung bleibt eine Vision.',
      'Und Strategie ohne die richtige Identität wird irgendwann wieder zur alten Grenze.',
      'The Success Seller verbindet beides.',
    ],
    workTitle: 'Du kommst nicht zu uns, um mehr zu arbeiten.',
    workLead: ['Du kommst, um anders zu denken.', 'Anders zu entscheiden.', 'Anders zu verkaufen.', 'Und dein Business anders aufzubauen.'],
    sothat: [
      'Damit Wachstum nicht länger automatisch bedeutet, dass du noch mehr Stunden geben musst.',
      'Damit du nicht mehr jeden Monat bei null anfängst.',
      'Damit Kunden nicht nur einmal kaufen, sondern bleiben.',
      'Damit du nicht ständig mehr Reichweite brauchst, sondern mehr aus den Möglichkeiten machst, die längst vor dir liegen.',
      'Damit dein Umsatz wächst, ohne dass dein Leben kleiner wird.',
    ],
    triad: ['Mehr Erfolg.', 'Mehr Freiheit.', 'Mehr Leben.'],
  },

  transformation: {
    eyebrow: 'Und dann passiert der eigentliche Shift',
    title: 'Deine Transformation',
    beforeLabel: 'Vorher',
    afterLabel: 'Nachher',
    before: [
      'Du stehst morgens auf und fragst: „Wo bekomme ich heute wieder Kunden her?“',
      'Du denkst: „Hoffentlich sagt sie Ja zu meinem Preis.“',
      'Du fragst: „Wie soll ich das alles schaffen?“',
      'Du misst Erfolg daran, wie beschäftigt du bist.',
    ],
    after: [
      'Du baust ein Business, das Kunden systematisch gewinnt.',
      'Du kennst deinen Wert und führst das Gespräch aus dieser Sicherheit.',
      'Du erkennst die Hebel, die wirklich Wachstum erzeugen.',
      'Du misst Erfolg daran, was dein Business für dich erschafft.',
    ],
    measure: 'Was dein Business für dich erschafft:',
    outcomes: ['Umsatz', 'Gewinn', 'Zeit', 'Freiheit', 'Möglichkeiten', 'Wirkung'],
    closing: [
      'Du arbeitest nicht länger härter für dein nächstes Level.',
      'Du wirst zu der Person, für die dieses Level selbstverständlich wird.',
    ],
    chatBefore: {
      label: 'Vorher',
      contact: 'Interessentin',
      contactStatus: 'online',
      messages: [
        { from: 'them', text: 'Klingt gut, aber ich bin mir noch unsicher.', time: '14:02' },
        {
          from: 'you',
          text: 'Kein Stress! Ich kann dir auch einen Rabatt machen, wenn das hilft 🙏',
          time: '14:05',
          status: 'read',
        },
      ],
    },
    chatAfter: {
      label: 'Nachher',
      contact: 'Interessentin',
      contactStatus: 'online',
      messages: [
        { from: 'them', text: 'Klingt gut, aber ich bin mir noch unsicher.', time: '14:02' },
        {
          from: 'you',
          text: 'Danke für deine Offenheit. Was genau wägst du gerade ab – die Investition oder ob es wirklich zu dir passt?',
          time: '14:04',
          status: 'read',
        },
        { from: 'them', text: 'Ehrlich gesagt, ob ich es mir wert bin.', time: '14:06' },
        { from: 'you', text: 'Genau da setzen wir an. Lass uns morgen 15 Minuten sprechen.', time: '14:07', status: 'read' },
      ],
    },
    movesTitle: 'Es geht nicht darum, dir noch mehr Wissen zu geben. Es geht darum, etwas in Bewegung zu setzen.',
    moves: [
      { from: 'Mangel', to: 'Möglichkeiten' },
      { from: 'Unsicherheit', to: 'Klarheit' },
      { from: 'Hinterherlaufen', to: 'Magnetismus' },
      { from: 'Beschäftigung', to: 'Wachstum' },
      { from: 'Hamsterrad', to: 'ein Business, das dir Freiheit gibt' },
      { from: 'deiner heutigen Identität', to: 'der Person, die dein nächstes Level längst in sich trägt' },
    ],
  },

  program: {
    eyebrow: 'Die Success-Seller-Logik',
    title: 'Be → Sell → Build → Scale → Live',
    lead: 'Erst Identität und Standards, dann Verkauf, dann ein funktionierendes Geschäftsmodell, dann Wachstum über Hebel – und schließlich ein Erfolg, bei dem Geld, Freiheit und Leben zusammenpassen.',
    steps: [
      { word: 'Be', title: 'Identität & Standards', text: 'Wer du wirst, bevor die Zahlen wachsen. Erfolgs- und Geldbewusstsein.' },
      { word: 'Sell', title: 'Wert & Verkauf', text: 'Positionierung, Preise und Gespräche, die du sicher führst.' },
      { word: 'Build', title: 'Geschäftsmodell', text: 'Angebote, Kundenwert und Conversion, die tragen.' },
      { word: 'Scale', title: 'Hebel & Wachstum', text: 'Ein wiederholbarer Sales-Prozess statt mehr Stunden.' },
      { word: 'Live', title: 'Freiheit & Impact', text: 'Erfolg, bei dem Geld, Freiheit und Leben zusammenpassen.' },
    ],
    goalTitle: 'Das Ziel?',
    goalLead: 'Nicht einfach mehr Umsatz.',
    goals: [
      'Mehr Umsatz mit mehr Freiheit.',
      'Mehr Kunden, ohne ihnen hinterherzulaufen.',
      'Mehr Geld, ohne deine gesamte Zeit dafür einzutauschen.',
      'Mehr Wachstum, ohne dass dein Business immer schwerer wird.',
      'Mehr Erfolg, ohne dein Leben dafür aufzugeben.',
    ],
    questionFrom: 'Bis du irgendwann nicht mehr denkst: „Wie soll ich das alles schaffen?“',
    questionTo: 'Sondern: „Wie groß will ich es wirklich machen?“',
    shiftTitle: 'Das ist der Shift.',
    shifts: [
      'Vom Selbstständigen zum Unternehmer.',
      'Vom Reagieren zum Führen.',
      'Vom Verkaufen-Müssen zum Verkaufen-Können.',
      'Vom Hamsterrad zum System.',
      'Von deiner heutigen Realität zu deinem Future Self.',
    ],
  },

  fit: {
    eyebrow: 'Ehrlich gesagt',
    title: 'Ist The Success Seller für dich?',
    yesTitle: 'Für dich, wenn …',
    yes: [
      'du selbstständig bist und Unternehmer:in werden willst – nicht nur beschäftigt.',
      'du ein Angebot hast, das Menschen wirklich weiterbringt.',
      'du mehr Umsatz willst, ohne einfach mehr Stunden zu geben.',
      'du bereit bist, an deiner Identität und an deinem Verkauf zu arbeiten.',
      'du dein Business führen willst, statt nur darin zu arbeiten.',
    ],
    noTitle: 'Nicht für dich, wenn …',
    no: [
      'du eine Abkürzung suchst, die ohne eigene Umsetzung funktioniert.',
      'du nur neue Verkaufssätze auswendig lernen willst.',
      'du glaubst, dein Umsatz hänge allein vom Markt ab.',
      'du an alten Standards festhalten willst.',
      'du wachsen willst, ohne dich selbst zu verändern.',
    ],
  },

  trailer: {
    eyebrow: 'Live erlebt',
    title: 'Energie, die man spürt.',
    text: 'Eindrücke vom Kongress – die Momente, in denen aus Inspiration Entscheidungen wurden. (Video folgt.)',
    play: 'Trailer mit Ton abspielen',
  },

  stories: {
    eyebrow: 'Reportagen',
    title: 'Echte Stimmen. Echte Entscheidungen.',
    lead: 'Sechs Reportagen – Momente, in denen Klarheit entsteht und ein neues Level beginnt.',
    play: 'Video abspielen',
    items: [
      { slug: 'story-01', name: 'Reportage 01', role: 'INFINITEFORCE', result: 'Reportage', quote: 'Ein Moment, der bleibt.' },
      { slug: 'story-02', name: 'Reportage 02', role: 'INFINITEFORCE', result: 'Reportage', quote: 'Klarheit statt Ausreden.' },
      { slug: 'story-03', name: 'Reportage 03', role: 'INFINITEFORCE', result: 'Reportage', quote: 'Wenn Identität auf Umsatz trifft.' },
      { slug: 'story-04', name: 'Reportage 04', role: 'INFINITEFORCE', result: 'Reportage', quote: 'Entscheiden statt zögern.' },
      { slug: 'story-05', name: 'Reportage 05', role: 'INFINITEFORCE', result: 'Reportage', quote: 'Neues Level, neue Standards.' },
      { slug: 'story-06', name: 'Reportage 06', role: 'INFINITEFORCE', result: 'Reportage', quote: 'Aus Inspiration wird Handlung.' },
    ],
    quote: 'Du arbeitest nicht länger härter für dein nächstes Level. Du wirst zu der Person, für die dieses Level selbstverständlich wird.',
    quoteBy: founders.patricia.name,
  },

  offer: {
    eyebrow: 'Private Release',
    title: 'The Success Seller',
    lead: 'Mindset und Sales. Magnetismus und Strategie. Identität und Umsetzung – in einem Programm.',
    includedTitle: 'Das ist im Programm angelegt',
    included: [
      'Erfolgs- und Geldbewusstsein',
      'Identity Shift mit Patricia',
      'Positionierung',
      'Preise, die zu deinem Wert passen',
      'Verkauf & Gesprächsführung mit Gökhan',
      'Kundenwert & Conversion',
      'Ein wiederholbarer Sales-Prozess',
      'Die Success-Seller-Logik: Be → Sell → Build → Scale → Live',
    ],
    trioTitle: 'Drei Säulen, ein Ziel',
    trio: [
      { word: 'Think bigger.', text: 'Erweitere deine Identität.' },
      { word: 'Sell better.', text: 'Meistere deinen Wert und deinen Verkauf.' },
      { word: 'Grow faster.', text: 'Baue ein Business, das mit dir wächst – ohne dich aufzufressen.' },
    ],
    card: {
      badge: 'First Movers',
      product: 'Success Seller Launcher',
      name: 'The Success Seller',
      startLabel: 'Programmstart',
      start: offer.programStart,
      regularLabel: 'Regulär',
      priceLabel: 'First-Movers-Investment',
      advantage: offer.advantage,
      cta: 'Jetzt sichern',
      trust: ['Kauf direkt im INFINITEFORCE Shop', 'Rechnung für dein Business'],
      conditions: offer.conditions,
    },
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    title: 'Bevor du entscheidest.',
    items: [
      {
        q: 'Für wen ist The Success Seller?',
        a: 'Für Selbstständige und Unternehmer:innen, die ein Angebot haben und mehr Umsatz, Klarheit und Freiheit wollen – ohne einfach nur mehr zu arbeiten. Für Menschen, die bereit sind, an ihrer Identität und an ihrem Verkauf zu arbeiten.',
      },
      {
        q: 'Wann startet das Programm?',
        a: 'Start ist im November 2026. Alle Details zum Ablauf erhältst du nach dem Kauf.',
      },
      {
        q: 'Was unterscheidet The Success Seller von einem Sales-Training?',
        a: 'Ein Sales-Training gibt dir Techniken. The Success Seller verbindet Identity Shift, Erfolgs- und Geldbewusstsein mit Positionierung, Preisen, Verkauf, Kundenwert und einem wiederholbaren Sales-Prozess. Patricia arbeitet an der Person, Gökhan am System.',
      },
      {
        q: `Warum ${offer.firstMoverPrice} statt ${offer.regularPrice}?`,
        a: `Das ist der Private Release für First Movers – ${offer.advantage}. ${offer.conditions}`,
      },
      {
        q: 'Wie kaufe ich?',
        a: 'Direkt im INFINITEFORCE Shop. Ein Klick auf „Jetzt sichern“ bringt dich zum Produkt, dort schließt du den Kauf sicher ab.',
      },
      {
        q: 'Bekomme ich eine Rechnung?',
        a: 'Ja. Nach dem Kauf erhältst du eine ordnungsgemäße Rechnung. Ob und wie du sie steuerlich geltend machen kannst, klärst du am besten mit deiner Steuerberatung.',
      },
    ],
    contactText: 'Deine Frage ist nicht dabei?',
    contactCta: 'Schreib uns',
  },

  future: {
    eyebrow: 'Become your future self',
    title: 'Schließ für einen Moment die Augen.',
    intro: 'Und stell dir die Version von dir vor, für die dein heutiges Ziel längst Normalität ist.',
    questions: [
      'Wie denkt diese Person?',
      'Wie entscheidet sie?',
      'Was toleriert sie nicht mehr?',
      'Wie spricht sie über Geld?',
      'Wie verkauft sie?',
      'Wie führt sie?',
      'Wie lebt sie?',
    ],
    closing: [
      'Diese Person ist nicht irgendwo in deiner Zukunft.',
      'Die Entscheidungen, durch die sie entsteht, beginnen jetzt.',
    ],
    bestEyebrow: 'INFINITEFORCE',
    bestTitle: 'The best is yet to come.',
    bestLead: 'Vielleicht kostet dich dein neues Leben tatsächlich dein altes.',
    bestList: ['Alte Überzeugungen.', 'Alte Standards.', 'Alte Grenzen.', 'Eine alte Version von dir.'],
    bestClosing: ['Aber genau darin liegt Wachstum.', 'Jedes Ende ist der Anfang von etwas Neuem.'],
  },

  final: {
    eyebrow: 'Energy → Identity → Action → Money → Impact',
    title: 'Begin',
    titleAccent: 'your shift.',
    lines: [
      'Du bist nicht hier, um klein zu spielen.',
      'Du bist hier, um herauszufinden, was möglich wird, wenn du aufhörst, deine Vergangenheit entscheiden zu lassen, wie groß deine Zukunft sein darf.',
    ],
    statement: ['Du brauchst nicht mehr Stunden.', 'Du brauchst ein neues Level von dir.'],
    cta: 'Jetzt sichern',
    note: `${offer.name} · START NOVEMBER 2026 · regulär ${offer.regularPrice}`,
    tagline: 'Think bigger. Sell better. Grow faster.',
  },

  questions: {
    eyebrow: 'Noch Fragen?',
    title: 'Noch Fragen vor deiner Entscheidung?',
    lead: 'Wenn etwas ungeklärt ist, melde dich persönlich. Wir nehmen uns die Zeit – klar, ruhig und ohne Druck.',
    phoneLabel: 'Telefon',
    whatsappCta: 'Jetzt WhatsApp schreiben',
  },

  exit: {
    eyebrow: 'Private Release',
    title: 'Bevor du gehst …',
    text: `Der First-Movers-Preis von ${offer.firstMoverPrice} statt ${offer.regularPrice} gilt nur für begrenzte Plätze. Dein nächstes Level beginnt mit einer Entscheidung.`,
    cta: 'Jetzt sichern',
    secondary: 'Ich habe noch eine Frage',
    close: 'Schließen',
  },

  sticky: {
    label: 'The Success Seller',
    meta: `${offer.firstMoverPrice} statt ${offer.regularPrice}`,
    cta: 'Jetzt sichern',
    float: 'Jetzt sichern',
  },

  footer: {
    tagline: 'Where energy becomes reality.',
    claim: 'Master the sale. Master the game.',
    nav: 'Navigation',
    legal: 'Rechtliches',
    rights: 'Alle Rechte vorbehalten.',
  },
};
