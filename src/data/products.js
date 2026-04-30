export const categories = [
  {
    id: 'all',
    name: 'All Rentals',
    blurb: 'A full look at the collection for weddings, receptions, and special events.'
  },
  {
    id: 'ceremony',
    name: 'Wedding Arches',
    blurb: 'Statement pieces that frame vows, portraits, and ceremony focal points.'
  },
  {
    id: 'seating',
    name: 'Benches & Seating',
    blurb: 'Warm wood seating for ceremony rows, sweetheart moments, and lounge areas.'
  },
  {
    id: 'lounge',
    name: 'Whiskey Barrels',
    blurb: 'Rustic-luxury cocktail and lounge pieces that add character without clutter.'
  },
  {
    id: 'decor',
    name: 'Decor Pieces',
    blurb: 'Personal details, displays, and signage that make the event feel considered.'
  },
  {
    id: 'lighting',
    name: 'Atmosphere & Lighting',
    blurb: 'Soft glow and layered ambiance for receptions, pathways, and evening celebrations.'
  }
];

export const products = [
  {
    id: 1,
    slug: 'arches',
    name: 'Ceremony Arches',
    categoryId: 'ceremony',
    category: 'Wedding Arches',
    price: '$125',
    pricingLabel: 'per rental',
    image: '/images/4.png',
    images: ['/images/4.png', '/images/5.png'],
    featured: true,
    summary: 'A refined ceremony backdrop designed for florals, draping, and unforgettable vows.',
    details: [
      'Creates a strong focal point without overpowering your venue.',
      'Easy to style with florals, fabric, greenery, or soft lighting.',
      'Works beautifully for ceremonies, sweetheart tables, and editorial photos.'
    ]
  },
  {
    id: 2,
    slug: 'benches',
    name: 'Wood Ceremony Benches',
    categoryId: 'seating',
    category: 'Benches & Seating',
    price: '$50',
    pricingLabel: 'per bench',
    image: '/images/2.png',
    images: ['/images/2.png', '/images/3.png'],
    featured: true,
    summary: 'Timeless bench seating that adds warmth, texture, and a more intimate ceremony feel.',
    details: [
      'Ideal for ceremony rows, photo vignettes, or lounge-style setups.',
      'Neutral wood tone pairs easily with modern, garden, and rustic palettes.',
      'Built to feel polished and guest-friendly throughout the day.'
    ]
  },
  {
    id: 3,
    slug: 'whiskey-barrel-tables',
    name: 'Whiskey Barrel Tables',
    categoryId: 'lounge',
    category: 'Whiskey Barrels',
    price: '$75',
    pricingLabel: 'per table',
    image: '/images/1.png',
    images: ['/images/1.png'],
    featured: true,
    summary: 'An elevated cocktail-hour piece that brings warmth and personality to mingling spaces.',
    details: [
      'Perfect for cocktail zones, patio moments, and casual guest gathering areas.',
      'Strong visual texture for weddings that want rustic charm with a polished finish.',
      'Easy to pair with florals, candles, signage, or stools.'
    ]
  },
  {
    id: 4,
    slug: 'whiskey-barrel-bar',
    name: 'Whiskey Barrel Bar',
    categoryId: 'lounge',
    category: 'Whiskey Barrels',
    price: '$150',
    pricingLabel: 'per rental',
    image: '/images/6.png',
    images: ['/images/6.png'],
    summary: 'A statement bar setup that turns a serving area into part of the design story.',
    details: [
      'Creates a memorable beverage station for receptions and private events.',
      'Balances rustic character with a clean, event-ready presentation.',
      'Works well for signature drink moments, cocktail hours, and welcome areas.'
    ]
  },
  {
    id: 5,
    slug: 'chest-coffee-table',
    name: 'Chest Coffee Table',
    categoryId: 'lounge',
    category: 'Whiskey Barrels',
    price: '$50',
    pricingLabel: 'per rental',
    image: '/images/7.png',
    images: ['/images/7.png'],
    summary: 'A character-filled lounge piece that grounds seating groupings with vintage charm.',
    details: [
      'Adds depth to lounge furniture and conversational seating areas.',
      'Useful as both a styling surface and a practical tabletop.',
      'Best for rustic, farmhouse, garden, and vintage-inspired celebrations.'
    ]
  },
  {
    id: 6,
    slug: 'memory-ladder',
    name: 'Memory Ladder',
    categoryId: 'decor',
    category: 'Decor Pieces',
    price: '$25',
    pricingLabel: 'per rental',
    image: '/images/9.png',
    images: ['/images/9.png'],
    summary: 'A sentimental display piece for photos, milestones, and personal storytelling.',
    details: [
      'Beautiful for engagement photos, family memories, or tribute moments.',
      'Lightweight styling piece with a warm, nostalgic tone.',
      'Pairs naturally with florals, ribbon, framed prints, or custom signage.'
    ]
  },
  {
    id: 7,
    slug: 'dessert-ladder',
    name: 'Dessert Ladder',
    categoryId: 'decor',
    category: 'Decor Pieces',
    price: '$50',
    pricingLabel: 'per rental',
    image: '/images/8.png',
    images: ['/images/8.png'],
    summary: 'A layered display that makes desserts, favors, or welcome details feel intentional.',
    details: [
      'Creates vertical interest on dessert or gift tables.',
      'Useful for smaller footprints where you still want strong visual impact.',
      'Complements farmhouse, garden, and relaxed luxury styling.'
    ]
  },
  {
    id: 8,
    slug: 'order-of-events',
    name: 'Order Of Events Display',
    categoryId: 'decor',
    category: 'Decor Pieces',
    price: '$75',
    pricingLabel: 'per rental',
    image: '/images/10.png',
    images: ['/images/10.png'],
    summary: 'A polished timeline display that helps guests stay connected to the flow of the day.',
    details: [
      'Useful for ceremonies, receptions, and multi-part celebrations.',
      'Keeps functional information feeling beautiful instead of purely practical.',
      'Strong fit for welcome areas and entry moments.'
    ]
  },
  {
    id: 9,
    slug: 'decorations',
    name: 'Custom Decor Pieces',
    categoryId: 'decor',
    category: 'Decor Pieces',
    price: 'Custom',
    pricingLabel: 'pricing available on inquiry',
    image: '/images/12.png',
    images: ['/images/12.png'],
    summary: 'Tailored decorative pieces designed to suit your palette, venue, and celebration style.',
    details: [
      'A flexible option for couples who want a more personalized look.',
      'Helpful for tying together ceremony, cocktail, and reception spaces.',
      'Available for curated styling moments that need a more custom touch.'
    ]
  },
  {
    id: 10,
    slug: 'candle-lanterns',
    name: 'Candle Lanterns',
    categoryId: 'lighting',
    category: 'Atmosphere & Lighting',
    price: '$10',
    pricingLabel: 'per lantern',
    image: '/images/11.png',
    images: ['/images/11.png'],
    summary: 'Soft ambient lighting for aisles, entryways, pathways, and intimate tablescapes.',
    details: [
      'Adds warmth and romance without overwhelming a clean design.',
      'Works across ceremony styling, reception mood lighting, and evening transitions.',
      'Best used in layered groupings for a richer atmosphere.'
    ]
  },
  {
    id: 11,
    slug: 'edison-lights',
    name: 'Edison Lights',
    categoryId: 'lighting',
    category: 'Atmosphere & Lighting',
    price: '$10',
    pricingLabel: 'per strand',
    image: '/images/13.png',
    images: ['/images/13.png'],
    summary: 'A warm evening glow that makes receptions feel more cinematic and inviting.',
    details: [
      'Especially effective for tented spaces, barns, and evening outdoor celebrations.',
      'Adds instant atmosphere with very little visual heaviness.',
      'Helps photos feel softer, richer, and more dimensional after sunset.'
    ]
  },
  {
    id: 12,
    slug: 'water-jugs',
    name: 'Glass Water Jugs',
    categoryId: 'decor',
    category: 'Decor Pieces',
    price: '$3',
    pricingLabel: 'per piece',
    image: '/images/14.png',
    images: ['/images/14.png'],
    summary: 'A simple hospitality detail that keeps guest refreshment stations clean and elevated.',
    details: [
      'Suitable for water stations, infused beverages, or welcome table setups.',
      'Glass presentation feels more polished than standard service pieces.',
      'Easy to blend into neutral, garden, or classic event palettes.'
    ]
  },
  {
    id: 13,
    slug: 'stock-tanks',
    name: 'Galvanized Stock Tanks',
    categoryId: 'decor',
    category: 'Decor Pieces',
    price: '$50',
    pricingLabel: 'per rental',
    image: '/images/15.png',
    images: ['/images/15.png', '/images/16.png'],
    summary: 'A versatile oversized piece for beverage stations, florals, or creative event styling.',
    details: [
      'Great for large-format drink service or statement decor moments.',
      'Adds farmhouse texture while still feeling useful and intentional.',
      'Flexible enough for casual weddings, private parties, and outdoor events.'
    ]
  }
];

export const planningNotes = [
  {
    title: 'Service Area',
    text: 'Serving Smithville, Hamilton, and surrounding Ontario celebrations.'
  },
  {
    title: 'Booking Flow',
    text: 'Choose the pieces you love, then reach out once with your event date and wishlist so availability can be confirmed efficiently.'
  },
  {
    title: 'Rental Timing',
    text: 'Most rentals are structured around short event windows, with timing confirmed during inquiry rather than repeated on every item.'
  }
];
