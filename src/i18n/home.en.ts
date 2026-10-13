import type { HomeCopy } from './home';
import { site } from '../config/site';

const { offer, founders } = site;

export const homeEn: HomeCopy = {
  seo: {
    title: 'INFINITEFORCE · The Success Seller – Think bigger. Sell better. Grow faster.',
    description:
      'Your next revenue level begins with the identity you think, decide and sell from. The Success Seller by Patricia Baylan-Paulus and Gökhan Baylan.',
  },

  nav: {
    tagline: 'Where energy becomes reality',
    links: [
      { href: '#method', label: 'Method' },
      { href: '#success-seller', label: 'The Success Seller' },
      { href: '#program', label: 'Program' },
      { href: '#stories', label: 'Stories' },
      { href: '#faq', label: 'FAQ' },
    ],
    cta: 'Secure now',
    menu: 'Menu',
  },

  announce: {
    desktop: `Private Release · ${offer.name}: ${offer.firstMoverPrice} instead of ${offer.regularPrice} – starts ${offer.programStartEn}`,
    mobile: `First Movers: ${offer.firstMoverPrice} instead of ${offer.regularPrice}`,
    cta: 'See the offer',
  },

  chatUi: { today: 'Today', typing: 'typing…', placeholder: 'Message' },

  hero: {
    eyebrow: 'INFINITEFORCE · The Success Seller',
    titleTop: 'Your outer success can never outgrow your',
    titleAccent: 'inner identity.',
    lead: [
      'Your next revenue level doesn’t begin with more work.',
      'It begins with the identity you think, decide and sell from.',
    ],
    chain: ['Energy', 'Identity', 'Action', 'Money', 'Impact'],
    ctaPrimary: `Secure The Success Seller now · ${offer.firstMoverPrice}`,
    ctaSecondary: 'Learn more',
    priceLine: `Private Release for First Movers: ${offer.firstMoverPrice} instead of ${offer.regularPrice}`,
    signatureName: founders.patricia.name,
    signatureRole: founders.patricia.role,
    product: {
      badge: 'Private Release',
      label: offer.name,
      name: 'The Success Seller',
      claim: 'Think bigger. Sell better. Grow faster.',
      features: [
        'Identity shift, success and money consciousness',
        'Positioning, pricing and sales',
        'Customer value, conversion and a repeatable sales process',
      ],
      by: `With ${founders.patricia.name} & ${founders.goekhan.name}`,
      startLabel: 'Program start',
      start: offer.programStartEn,
      regularLabel: 'instead of',
      imageAlt: 'Patricia Baylan-Paulus and Gökhan Baylan',
    },
  },

  proof: {
    label: 'Welcome to INFINITEFORCE',
    items: ['Money Maker Mindset', 'Sales Mastery', 'Consciousness', 'Limitless Success'],
  },

  welcome: {
    eyebrow: 'INFINITEFORCE',
    titleTop: 'Where energy',
    titleAccent: 'becomes reality.',
    intro: 'You are not here to play small.',
    lines: [
      'You are here to recognise what is truly inside you.',
      'To break through the limits you have taken for your reality so far.',
      'And to create a business and a life that fit the person you truly want to be.',
    ],
    followTitle: 'Your business follows one thing: YOU.',
    followList: ['Your identity.', 'Your standards.', 'Your decisions.', 'Your energy.'],
    claim: 'Welcome to INFINITEFORCE.',
  },

  problem: {
    eyebrow: 'The invisible limit',
    title: 'You are not here because you lack strategy.',
    titleAccent: 'Your revenue never outgrows your identity.',
    cards: [
      {
        title: 'You explain your price.',
        text: 'You meet them halfway before anyone has decided. Your value becomes negotiable – and the conversation ends with “let me think about it.”',
      },
      {
        title: 'You chase clients.',
        text: 'You follow up. And again. They read – and still don’t decide. Not because they lack time. Because you are not leading the conversation.',
      },
      {
        title: 'You wait instead of leading.',
        text: '“Just write when you’re ready.” Sounds polite. In truth you hand over the decision – and your next level with it.',
      },
    ],
    chats: [
      {
        label: 'Explaining the price',
        contact: 'New client',
        contactStatus: 'online',
        messages: [
          { from: 'them', text: 'So what does the package cost exactly?', time: '18:04' },
          {
            from: 'you',
            text: '€1,490. I know it’s an investment – but I’m happy to meet you halfway …',
            time: '18:09',
            status: 'read',
          },
          { from: 'them', text: 'Okay. Let me think about it.', time: '18:31' },
        ],
      },
      {
        label: 'Chasing clients',
        contact: 'Prospect',
        contactStatus: 'last seen yesterday',
        messages: [
          { from: 'you', text: 'Hi! Just wanted to follow up on our call 😊', time: '09:12', status: 'read' },
          { from: 'you', text: 'Have you had time to think it over?', time: '16:40', status: 'delivered' },
        ],
      },
      {
        label: 'Waiting instead of leading',
        contact: 'Prospect',
        contactStatus: 'online',
        messages: [
          { from: 'them', text: 'I need to think about it some more.', time: '11:08' },
          {
            from: 'you',
            text: 'Of course! Just write when you’re ready 🙏',
            time: '11:09',
            status: 'read',
          },
        ],
      },
    ],
    closing:
      'You are trying to create a result on the outside that you haven’t yet become the person for on the inside.',
  },

  notSmall: {
    eyebrow: 'Your next level',
    title: 'You are not here to play small.',
    paragraphs: [
      'Maybe you have known for a long time that there is more in you.',
      'More revenue. More freedom. More impact. More of the life you know is possible.',
      'And still there is this invisible limit.',
    ],
    loop: ['You work more.', 'You learn more.', 'You optimise your strategy.'],
    turn: [
      'But sooner or later you end up at a similar point again. Why?',
      'Because your next level doesn’t simply demand a better strategy from you. It demands a new version of you.',
      'Your revenue doesn’t grow beyond your identity for long. You will keep returning to the level you inwardly consider normal, safe and possible.',
    ],
    closingLead: 'Until you stop trying to change only the result – and start changing the cause.',
    closingAccent: 'YOU.',
    imageAlt: 'Patricia Baylan-Paulus, Founder of INFINITEFORCE',
  },

  focus: {
    eyebrow: 'Energy',
    title: 'Where focus goes,',
    titleAccent: 'energy flows.',
    paragraphs: [
      'Wherever you direct your focus, that is where your energy flows.',
      'And wherever your energy flows, that is where your decisions, your actions and ultimately your results are born.',
      'That’s why, for us, success doesn’t begin with the sale. It begins much earlier.',
    ],
    mirrorsTitle: 'It begins …',
    mirrors: [
      'with the image you have of yourself.',
      'with what you expect.',
      'with what you tolerate.',
      'with what you believe is possible.',
      'with the decisions you make when nobody is watching.',
    ],
    reality: 'Your outer reality follows your inner world. But energy alone doesn’t build a company.',
    needTitle: 'You need both',
    needs: ['Consciousness and strategy.', 'Identity and execution.', 'Magnetism and sales.'],
    closing: 'That is exactly where INFINITEFORCE begins.',
  },

  method: {
    eyebrow: 'The INFINITEFORCE Method',
    title: 'Energy → Identity → Action → Money → Impact',
    lead: 'Five levels that build on each other – from the way you think to what your success creates in the world.',
    hint: 'Select a step to read more',
    steps: [
      {
        no: '01',
        word: 'Energy',
        definition: 'How you think, how you feel and where you direct your attention.',
        paragraphs: [
          'Everything begins with your attention.',
          'Where do you put your focus? On possibilities or limits? On growth or lack? On what you want – or on what you fear?',
        ],
        quote: 'Where focus goes, energy flows.',
      },
      {
        no: '02',
        word: 'Identity',
        definition: 'Who you believe you are and what you consider possible for yourself.',
        paragraphs: [
          'You cannot create a new life from your old identity. Your results follow the person you believe you are.',
          'Change your self-image. Expand your standards. Allow yourself to think bigger.',
        ],
        quote: 'Become the person who already belongs at your next level.',
      },
      {
        no: '03',
        word: 'Action',
        definition: 'The decisions and actions that follow from it.',
        paragraphs: [
          'Awareness without action changes nothing. A new identity shows itself in new decisions.',
          'You no longer wait for certainty. You act from clarity. You no longer move like the person you were.',
        ],
        quote: 'You move like the person you are becoming.',
      },
      {
        no: '04',
        word: 'Money',
        definition: 'The economic output of your decisions.',
        paragraphs: [
          'Money is not the goal of your identity. But it is a visible result of your standards, your decisions, your value and your ability to sell that value.',
          'You learn to stop chasing money out of pressure.',
        ],
        quote: 'Create value. Communicate value. Sell value.',
      },
      {
        no: '05',
        word: 'Impact',
        definition: 'What becomes possible when growth no longer ends at your current identity.',
        paragraphs: [
          'Success doesn’t end in your bank account. That is where it only begins to grow.',
          'More freedom. More possibilities. More influence. More life. Not success at any price.',
        ],
        quote: 'But success at a level that truly fits you.',
      },
    ],
  },

  duo: {
    eyebrow: 'Two perspectives. One vision.',
    title: 'Mindset alone doesn’t build a business.',
    lead: [
      'Inner change without execution remains potential. Strategy without the right identity eventually hits a limit.',
      'That is why INFINITEFORCE connects consciousness, identity, sales and business strategy.',
    ],
    founders: [
      {
        name: founders.patricia.name,
        focus: 'Identity · Energy · Consciousness',
        paragraphs: [
          'The biggest limit between you and your next level is often not an external one.',
          'It is the version of you that is still trying to create a new result with old beliefs, old standards and an old self-image.',
          'Patricia works on the cause.',
        ],
        list: ['On your identity.', 'Your consciousness.', 'Your energy.', 'And on the person your results come from.'],
        imageAlt: 'Portrait of Patricia Baylan-Paulus',
      },
      {
        name: founders.goekhan.name,
        focus: 'Sales · Strategy · Execution',
        paragraphs: ['A strong mindset without execution remains potential.', 'Gökhan brings the other side of INFINITEFORCE:'],
        list: ['Sales.', 'Positioning.', 'Strategy.', 'Decisions.', 'Execution.'],
        closing: 'Because once you know your value, you also have to learn to communicate it and to sell it.',
        imageAlt: 'Portrait of Gökhan Baylan',
      },
    ],
    closing: 'Master the sale. Master the game.',
  },

  voice: {
    eyebrow: 'A message from Patricia',
    title: 'Listen before you decide.',
    text: 'A few honest words from Patricia – about why your next level doesn’t begin with more work.',
    from: founders.patricia.name,
    status: 'online',
    intro: 'Hey, listen to this before you decide 🤍',
    introTime: '10:23',
    voiceTime: '10:24',
    transcriptLabel: 'Read transcript',
    transcript:
      '[Placeholder – voice message follows] Patricia talks about the identity shift behind The Success Seller and why your revenue follows you.',
    play: 'Play voice message',
    pause: 'Pause voice message',
  },

  tss: {
    eyebrow: 'The Success Seller',
    headline: ['Think bigger.', 'Sell better.', 'Grow faster.'],
    intro:
      'You are not here to somehow keep your business running. You are here to create something bigger than your current revenue, bigger than your previous limits – and to finally give yourself the freedom you once started for.',
    struggleLead: 'Yet many entrepreneurs experience exactly the opposite.',
    struggles: [
      'They work more but don’t earn correspondingly more.',
      'They constantly need new clients.',
      'They are permanently busy but have too little time.',
      'They want to grow, yet their business still depends entirely on them.',
    ],
    loop: 'More revenue means more work. More clients mean less time. At some point growth feels like a hamster wheel.',
    freedom: 'That is not the freedom you became an entrepreneur for.',
    pivot: 'And this is exactly where The Success Seller begins.',
    pressureTitle: 'Your next revenue level doesn’t need more pressure.',
    pressureLines: ['It needs a different identity.', 'A different energy.', 'And a sales strategy that matches your value.'],
    pressureWorlds: ['Mindset and sales.', 'Magnetism and strategy.', 'Identity and execution.'],
    pressureClosing:
      'So that you stop chasing clients – and start standing so clearly in your value that the right people recognise it.',
    tagline: 'Open the mind. Close the deal.',
  },

  question: {
    eyebrow: 'The Success Seller',
    title: 'What if success no longer had to feel like a fight?',
    story: [
      'You set out to build something for yourself. For more freedom. More possibilities. More of your own life.',
      'And at some point exactly the opposite happens.',
    ],
    storyList: [
      'You work more.',
      'You give more.',
      'You try to win even more clients, become even more visible, achieve even more.',
    ],
    storyEnd: [
      'And still your revenue falls short of what you actually want to achieve. Or the revenue is there – but you no longer have time to enjoy it.',
      'Your business is running. But you are running alongside it all the time.',
    ],
    loopList: ['More revenue takes more work.', 'More clients take more time.', 'More growth means even more of you.'],
    notQuestion: 'Not with the question: “How can you do even more?”',
    realQuestionLead: 'But:',
    realQuestion: 'Who do you have to become for more to be possible?',
    shiftLead:
      'Because your next level doesn’t come from simply playing your old level faster. It comes from a shift:',
    shifts: [
      'In your identity.',
      'In your standards.',
      'In your relationship with money.',
      'In the way you see your value.',
      'How you sell.',
      'How you decide.',
      'And how you lead your business.',
    ],
  },

  pillars: {
    eyebrow: 'The three pillars',
    title: 'What makes The Success Seller so unique?',
    items: [
      {
        word: 'Think bigger.',
        title: 'Expand your identity.',
        focus: 'Leadership · Mindset · Identity Shift · Money',
        paragraphs: [
          'Everything begins with the limit you cannot see: your self-image, your beliefs about money, the revenue you inwardly consider “a lot”, the price you dare to say out loud, the size you allow yourself.',
          'Patricia guides you through the identity shift behind your next level. Not so that you simply think more positively – but so that you stop creating your future from the identity of your past.',
        ],
        closing: 'New identity. New standards. New success energy.',
      },
      {
        word: 'Sell better.',
        title: 'Master your value and your sales.',
        focus: 'Sales Mastery · Business · Entrepreneurship · Growth',
        paragraphs: [
          'Because a big vision without the ability to turn it into results remains a vision. Selling doesn’t mean pressure. Selling means clarity. Leadership. Conviction. Value.',
          'Gökhan shows you how your new identity becomes measurable business success.',
        ],
        pairs: [
          { stop: 'You stop explaining your price.', start: 'You learn to sell your value.' },
          { stop: 'You stop chasing clients.', start: 'You learn to lead conversations.' },
          { stop: 'You stop leaving revenue to chance.', start: 'You build a process you understand and can repeat.' },
        ],
      },
      {
        word: 'Grow faster.',
        title: 'Build a business that grows with you – without consuming you.',
        focus: 'Mindset × Sales',
        paragraphs: [
          'And this is exactly where both worlds meet. Not just working on your business. Not just working on your mindset.',
          'But on the person who leads the business – and at the same time on the system that turns this person into results.',
        ],
        closing:
          'From success and money consciousness through positioning, pricing and sales to customer value, conversion, identity shift and a repeatable sales system.',
      },
    ],
    cross: ['Mindset × Sales', 'Identity × Strategy', 'Energy × Execution', 'Money × Freedom'],
    crossText: ['That is The Success Seller.'],
    cta: `Secure The Success Seller · ${offer.firstMoverPrice}`,
  },

  follows: {
    eyebrow: 'Your revenue follows you',
    title: 'Your revenue follows you.',
    notList: ['Not your hope.', 'Not your next Instagram post.', 'Not the number of hours you work.'],
    you: 'YOU.',
    youList: [
      'Your identity.',
      'Your standards.',
      'Your relationship with money.',
      'Your ability to sell.',
      'Your decisions.',
      'And the size of what you truly allow yourself.',
    ],
    paragraphs: [
      'That is why we don’t simply try to squeeze even more performance out of your current version.',
      'We change the level you play from.',
    ],
    chain: [
      'When your identity changes, your decisions change.',
      'When your decisions change, your actions change.',
      'And when your actions change, your results begin to change.',
    ],
    mantra: 'Where focus goes, energy flows.',
    businessTitle: 'Your business follows one thing: YOU.',
    businessChain: [
      'When you change, your decisions change.',
      'When your decisions change, your actions change.',
      'When your actions change, your results change.',
    ],
    businessEnd: [
      'And one day you look at a life that used to be only a vision.',
      'Not because you were lucky. But because you stopped waiting for the outside to change first.',
      'You went first.',
    ],
    accountTitle: 'Success doesn’t begin in your bank account.',
    accountLead: 'It begins in you. In the moment you …',
    moments: [
      'stop accepting your current reality as your limit.',
      'start thinking bigger than your current revenue.',
      'stop making your value depend on whether someone accepts your price.',
      'stop chasing every client and develop a clarity that attracts people.',
    ],
    energyTitle: 'That is success energy.',
    energyText: ['Not simply thinking positively.', 'But developing an identity from which different decisions arise.'],
    energyChain: [
      'Your energy creates your actions.',
      'Your actions create your results.',
      'And one day your results create a life that used to be only your vision.',
    ],
  },

  different: {
    eyebrow: 'The difference',
    title: 'This is what makes The Success Seller different.',
    beliefs: [
      'We don’t believe you just need a better sales strategy.',
      'And we believe just as little that a new mindset alone will change your business.',
    ],
    connectLead: 'We connect what has been separated for far too long: inner transformation with outer execution.',
    pairs: [
      'Identity with strategy.',
      'Energy with sales.',
      'Magnetism with clarity.',
      'Consciousness with numbers.',
      'Vision with execution.',
    ],
    founders: [
      'Patricia works with you on the person who can carry your next level.',
      'Gökhan shows you how this new identity turns into clear positioning, better offers, stronger sales conversations, higher customer value and predictable growth.',
    ],
    program:
      'This connection is built into the program: from success and money consciousness through positioning, pricing and sales to customer value, conversion, identity shift and a repeatable sales process.',
    balance: [
      'Because energy without execution remains a vision.',
      'And strategy without the right identity eventually becomes the old limit again.',
      'The Success Seller connects both.',
    ],
    workTitle: 'You don’t come to us to work more.',
    workLead: ['You come to think differently.', 'To decide differently.', 'To sell differently.', 'And to build your business differently.'],
    sothat: [
      'So that growth no longer automatically means giving even more hours.',
      'So that you no longer start from zero every month.',
      'So that clients don’t just buy once, but stay.',
      'So that you don’t constantly need more reach, but make more of the opportunities already in front of you.',
      'So that your revenue grows without your life getting smaller.',
    ],
    triad: ['More success.', 'More freedom.', 'More life.'],
  },

  transformation: {
    eyebrow: 'And then the real shift happens',
    title: 'Your transformation',
    beforeLabel: 'Before',
    afterLabel: 'After',
    before: [
      'You get up in the morning and ask: “Where do I get clients from today?”',
      'You think: “I hope she says yes to my price.”',
      'You ask: “How am I supposed to manage all this?”',
      'You measure success by how busy you are.',
    ],
    after: [
      'You build a business that wins clients systematically.',
      'You know your value and lead the conversation from that certainty.',
      'You recognise the levers that truly create growth.',
      'You measure success by what your business creates for you.',
    ],
    measure: 'What your business creates for you:',
    outcomes: ['Revenue', 'Profit', 'Time', 'Freedom', 'Possibilities', 'Impact'],
    closing: ['You no longer work harder for your next level.', 'You become the person for whom this level is natural.'],
    chatBefore: {
      label: 'Before',
      contact: 'Prospect',
      contactStatus: 'online',
      messages: [
        { from: 'them', text: 'Sounds good, but I’m still unsure.', time: '14:02' },
        { from: 'you', text: 'No stress! I can also give you a discount if that helps 🙏', time: '14:05', status: 'read' },
      ],
    },
    chatAfter: {
      label: 'After',
      contact: 'Prospect',
      contactStatus: 'online',
      messages: [
        { from: 'them', text: 'Sounds good, but I’m still unsure.', time: '14:02' },
        {
          from: 'you',
          text: 'Thanks for being open. What exactly are you weighing up – the investment or whether it truly fits you?',
          time: '14:04',
          status: 'read',
        },
        { from: 'them', text: 'Honestly? Whether I’m worth it.', time: '14:06' },
        { from: 'you', text: 'That’s exactly where we start. Let’s talk for 15 minutes tomorrow.', time: '14:07', status: 'read' },
      ],
    },
    movesTitle: 'It’s not about giving you even more knowledge. It’s about setting something in motion.',
    moves: [
      { from: 'Lack', to: 'possibilities' },
      { from: 'Uncertainty', to: 'clarity' },
      { from: 'Chasing', to: 'magnetism' },
      { from: 'Busyness', to: 'growth' },
      { from: 'The hamster wheel', to: 'a business that gives you freedom' },
      { from: 'Your current identity', to: 'the person who already carries your next level within' },
    ],
  },

  program: {
    eyebrow: 'The Success Seller logic',
    title: 'Be → Sell → Build → Scale → Live',
    lead: 'First identity and standards, then sales, then a working business model, then growth through leverage – and finally a success in which money, freedom and life fit together.',
    steps: [
      { word: 'Be', title: 'Identity & standards', text: 'Who you become before the numbers grow. Success and money consciousness.' },
      { word: 'Sell', title: 'Value & sales', text: 'Positioning, pricing and conversations you lead with confidence.' },
      { word: 'Build', title: 'Business model', text: 'Offers, customer value and conversion that carry you.' },
      { word: 'Scale', title: 'Leverage & growth', text: 'A repeatable sales process instead of more hours.' },
      { word: 'Live', title: 'Freedom & impact', text: 'Success in which money, freedom and life fit together.' },
    ],
    goalTitle: 'The goal?',
    goalLead: 'Not simply more revenue.',
    goals: [
      'More revenue with more freedom.',
      'More clients without chasing them.',
      'More money without trading all your time for it.',
      'More growth without your business getting heavier.',
      'More success without giving up your life for it.',
    ],
    questionFrom: 'Until one day you no longer think: “How am I supposed to manage all this?”',
    questionTo: 'But: “How big do I really want to make it?”',
    shiftTitle: 'That is the shift.',
    shifts: [
      'From self-employed to entrepreneur.',
      'From reacting to leading.',
      'From having to sell to being able to sell.',
      'From the hamster wheel to a system.',
      'From your current reality to your future self.',
    ],
  },

  fit: {
    eyebrow: 'Honestly',
    title: 'Is The Success Seller for you?',
    yesTitle: 'For you if …',
    yes: [
      'you are self-employed and want to become an entrepreneur – not just busy.',
      'you have an offer that truly moves people forward.',
      'you want more revenue without simply giving more hours.',
      'you are ready to work on your identity and on your sales.',
      'you want to lead your business instead of only working in it.',
    ],
    noTitle: 'Not for you if …',
    no: [
      'you are looking for a shortcut that works without your own execution.',
      'you only want to memorise new sales lines.',
      'you believe your revenue depends solely on the market.',
      'you want to hold on to old standards.',
      'you want to grow without changing yourself.',
    ],
  },

  trailer: {
    eyebrow: 'Experienced live',
    title: 'Energy you can feel.',
    text: 'Impressions from the congress – the moments when inspiration turned into decisions. (Video follows.)',
    play: 'Play trailer with sound',
  },

  stories: {
    eyebrow: 'Client stories',
    title: 'What happens when you decide.',
    lead: 'Real voices from the congress – the videos will be added here once they are approved.',
    play: 'Play video',
    items: [
      { slug: 'story-01', name: 'Client story 01', role: 'Congress 2026', result: 'Video follows', quote: 'Quote follows after approval.' },
      { slug: 'story-02', name: 'Client story 02', role: 'Congress 2026', result: 'Video follows', quote: 'Quote follows after approval.' },
      { slug: 'story-03', name: 'Client story 03', role: 'Congress 2026', result: 'Video follows', quote: 'Quote follows after approval.' },
      { slug: 'story-04', name: 'Client story 04', role: 'Congress 2026', result: 'Video follows', quote: 'Quote follows after approval.' },
      { slug: 'story-05', name: 'Client story 05', role: 'Congress 2026', result: 'Video follows', quote: 'Quote follows after approval.' },
      { slug: 'story-06', name: 'Client story 06', role: 'Congress 2026', result: 'Video follows', quote: 'Quote follows after approval.' },
    ],
    quote: 'You no longer work harder for your next level. You become the person for whom this level is natural.',
    quoteBy: founders.patricia.name,
  },

  offer: {
    eyebrow: 'Private Release',
    title: 'The Success Seller',
    lead: 'Mindset and sales. Magnetism and strategy. Identity and execution – in one program.',
    includedTitle: 'Built into the program',
    included: [
      'Success and money consciousness',
      'Identity shift with Patricia',
      'Positioning',
      'Pricing that matches your value',
      'Sales & conversation leadership with Gökhan',
      'Customer value & conversion',
      'A repeatable sales process',
      'The Success Seller logic: Be → Sell → Build → Scale → Live',
    ],
    trioTitle: 'Three pillars, one goal',
    trio: [
      { word: 'Think bigger.', text: 'Expand your identity.' },
      { word: 'Sell better.', text: 'Master your value and your sales.' },
      { word: 'Grow faster.', text: 'Build a business that grows with you – without consuming you.' },
    ],
    card: {
      badge: 'First Movers',
      product: 'Success Seller Launcher',
      name: 'The Success Seller',
      startLabel: 'Program start',
      start: offer.programStartEn,
      regularLabel: 'Regular',
      priceLabel: 'First Mover investment',
      advantage: offer.advantage,
      cta: 'Secure it in the shop',
      trust: ['Purchase directly in the INFINITEFORCE shop', 'Invoice for your business'],
      conditions: offer.conditionsEn,
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Before you decide.',
    items: [
      {
        q: 'Who is The Success Seller for?',
        a: 'For self-employed people and entrepreneurs who have an offer and want more revenue, clarity and freedom – without simply working more. For people who are ready to work on their identity and on their sales.',
      },
      {
        q: 'When does the program start?',
        a: `The program starts on ${offer.programStartEn}. You will receive all details about the process after your purchase.`,
      },
      {
        q: 'How is The Success Seller different from a sales training?',
        a: 'A sales training gives you techniques. The Success Seller connects identity shift and success and money consciousness with positioning, pricing, sales, customer value and a repeatable sales process. Patricia works on the person, Gökhan on the system.',
      },
      {
        q: `Why ${offer.firstMoverPrice} instead of ${offer.regularPrice}?`,
        a: `This is the Private Release for First Movers – ${offer.advantage}. ${offer.conditionsEn}`,
      },
      {
        q: 'How do I buy?',
        a: 'Directly in the INFINITEFORCE shop. One click on “Secure now” takes you to the product, where you complete your purchase securely.',
      },
      {
        q: 'Will I receive an invoice?',
        a: 'Yes. After your purchase you will receive a proper invoice. Whether and how you can deduct it for tax purposes is best clarified with your tax advisor.',
      },
    ],
    contactText: 'Your question isn’t listed?',
    contactCta: 'Write to us',
  },

  future: {
    eyebrow: 'Become your future self',
    title: 'Close your eyes for a moment.',
    intro: 'And picture the version of you for whom today’s goal has long been normal.',
    questions: [
      'How does this person think?',
      'How do they decide?',
      'What do they no longer tolerate?',
      'How do they talk about money?',
      'How do they sell?',
      'How do they lead?',
      'How do they live?',
    ],
    closing: ['This person isn’t somewhere in your future.', 'The decisions that create them begin now.'],
    bestEyebrow: 'INFINITEFORCE',
    bestTitle: 'The best is yet to come.',
    bestLead: 'Maybe your new life really will cost you your old one.',
    bestList: ['Old beliefs.', 'Old standards.', 'Old limits.', 'An old version of you.'],
    bestClosing: ['But that is exactly where growth lies.', 'Every ending is the beginning of something new.'],
  },

  final: {
    eyebrow: 'Energy → Identity → Action → Money → Impact',
    title: 'Begin',
    titleAccent: 'your shift.',
    lines: [
      'You are not here to play small.',
      'You are here to find out what becomes possible when you stop letting your past decide how big your future may be.',
    ],
    statement: ['You don’t need more hours.', 'You need a new level of you.'],
    cta: `Begin your shift · ${offer.firstMoverPrice}`,
    note: `${offer.name} · starts ${offer.programStartEn} · regular ${offer.regularPrice}`,
    tagline: 'Think bigger. Sell better. Grow faster.',
  },

  questions: {
    eyebrow: 'Questions?',
    title: 'Write to us before you decide.',
    lead: 'If you would like to clarify something before buying, leave us your message here. We will get back to you personally.',
    name: 'Full name *',
    namePh: 'First and last name',
    phone: 'Phone number *',
    phonePh: 'e.g. +49 170 1234567',
    email: 'Email address *',
    emailPh: 'name@business.com',
    message: 'Your question *',
    messagePh: 'What would you like to know?',
    submit: 'Send question',
    submitting: 'Sending …',
    consentBefore: 'By submitting you agree to the',
    consentLink: 'privacy policy',
    consentAfter: '.',
    successTitle: 'Thank you – your question has arrived.',
    successBody: 'We will get back to you personally shortly.',
    errName: 'Please enter your full name.',
    errPhone: 'Please enter your phone number.',
    errPhoneInvalid: 'Please check your phone number.',
    errEmail: 'Please enter your email address.',
    errEmailInvalid: 'Please check your email address.',
    errMessage: 'Please briefly describe your question.',
    errNetwork: 'Your message could not be sent right now. Please try again.',
  },

  exit: {
    eyebrow: 'Private Release',
    title: 'Before you go …',
    text: `The First Mover price of ${offer.firstMoverPrice} instead of ${offer.regularPrice} is only available for a limited number of seats. Your next level begins with a decision.`,
    cta: `Secure The Success Seller · ${offer.firstMoverPrice}`,
    secondary: 'I still have a question',
    close: 'Close',
  },

  sticky: {
    label: 'The Success Seller',
    meta: `${offer.firstMoverPrice} instead of ${offer.regularPrice}`,
    cta: 'Secure',
    float: `Secure now · ${offer.firstMoverPrice}`,
  },

  footer: {
    tagline: 'Where energy becomes reality.',
    claim: 'Master the sale. Master the game.',
    nav: 'Navigation',
    legal: 'Legal',
    rights: 'All rights reserved.',
  },
};
