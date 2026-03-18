export const products = [
  {
    id: 1,
    slug: 'whiskey-barrel-tables',
    name: 'Whiskey Barrel Tables',
    category: 'Cocktail & Lounge',
    price: '$75 / Unit',
    priceNote: '(Stools: Extra $5 / Stool)',
    image: '/images/1.png',
    images: ['/images/1.png'],
    description:
      'Rustic charm meets function with authentic whiskey barrel tables, perfect for cocktail hours and stylish gathering spaces.',
    stock: '4 Units',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Authentic character', desc: 'Adds warmth and texture to modern or rustic wedding themes.' },
      { title: 'Guest friendly', desc: 'Great standing height for mingling, drinks, and hors d’oeuvres.' },
      { title: 'Sturdy build', desc: 'Reliable setup for indoor and covered outdoor events.' },
      { title: 'Flexible styling', desc: 'Pairs beautifully with florals, candles, and signage.' }
    ]
  },
  {
    id: 2,
    slug: 'whiskey-barrel-bar',
    name: 'Whiskey Barrel Bar',
    category: 'Cocktail & Lounge',
    price: '$150 / Unit',
    image: '/images/6.png',
    images: ['/images/6.png'],
    description: 'Create a standout beverage station with a whiskey barrel bar that feels both elevated and welcoming.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Statement setup', desc: 'Adds instant personality to reception and cocktail areas.' },
      { title: 'Rustic-luxury style', desc: 'Authentic barrel base with polished event-ready presentation.' },
      { title: 'Event versatile', desc: 'Ideal for weddings, private parties, and corporate celebrations.' },
      { title: 'Service ready', desc: 'Ample workspace for bartending and beverage display.' }
    ]
  },
  {
    id: 3,
    slug: 'memory-ladder',
    name: 'Memory Ladder',
    category: 'Decor & Signage',
    price: '$25 / Unit',
    image: '/images/9.png',
    images: ['/images/9.png'],
    description: 'Display treasured photos and milestone moments with a vintage-inspired memory ladder.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Storytelling piece', desc: 'Showcase engagement photos, family memories, and milestones.' },
      { title: 'Simple styling', desc: 'Easy to personalize with clips, twine, ribbon, and florals.' },
      { title: 'Warm visual tone', desc: 'Weathered wood finish complements many wedding palettes.' },
      { title: 'Compact footprint', desc: 'Adds visual impact without taking up much floor space.' }
    ]
  },
  {
    id: 4,
    slug: 'decorations',
    name: 'Decorations',
    category: 'Decor & Signage',
    price: 'Price Varies',
    note: '*Includes customization*',
    image: '/images/12.png',
    images: ['/images/12.png'],
    description: 'Customized decor elements designed to fit your venue, style, and celebration vision.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Tailored for your event', desc: 'Personalized decor to reflect your design direction.' },
      { title: 'Curated selections', desc: 'Thoughtful pieces chosen for elegant visual cohesion.' },
      { title: 'Photo ready', desc: 'High-quality items that look polished in person and on camera.' },
      { title: 'Flexible packages', desc: 'Mix and match pieces based on budget and priorities.' }
    ]
  },
  {
    id: 5,
    slug: 'water-jugs',
    name: 'Water Jugs',
    category: 'Guest Experience',
    price: '$3 / Unit',
    image: '/images/14.png',
    images: ['/images/14.png'],
    description: 'Elegant glass dispensers that keep guests refreshed while complementing your table design.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Clean presentation', desc: 'Glass styling blends seamlessly with upscale event decor.' },
      { title: 'Practical service', desc: 'Convenient hydration option for guests throughout the event.' },
      { title: 'Generous capacity', desc: 'Built to serve groups efficiently with less refill frequency.' },
      { title: 'Infusion friendly', desc: 'Perfect for citrus, herbs, or fruit-infused water stations.' }
    ]
  },
  {
    id: 6,
    slug: 'benches',
    name: 'Benches',
    category: 'Ceremony & Seating',
    price: '$50 / Unit',
    image: '/images/2.png',
    images: ['/images/2.png', '/images/3.png'],
    description: 'Beautiful wooden benches with timeless character for ceremony aisles and lounge seating.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Ceremony ready', desc: 'Ideal for guest rows, sweetheart areas, and photo vignettes.' },
      { title: 'Solid construction', desc: 'Designed for comfort and dependable event-day use.' },
      { title: 'Naturally elegant', desc: 'Adds warmth without overpowering your floral or venue design.' },
      { title: 'Versatile placement', desc: 'Works across indoor venues, tents, and outdoor spaces.' }
    ]
  },
  {
    id: 7,
    slug: 'chest-coffee-table',
    name: 'Chest Coffee Table',
    category: 'Cocktail & Lounge',
    price: '$50 / Unit',
    image: '/images/7.png',
    images: ['/images/7.png'],
    description: 'A vintage chest coffee table that delivers character, function, and visual depth to lounge setups.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Distinctive look', desc: 'Unique focal piece for relaxed seating areas and lounges.' },
      { title: 'Multi-use design', desc: 'Functions as both tabletop and hidden storage.' },
      { title: 'Event adaptable', desc: 'Fits rustic, garden, and modern-vintage aesthetics.' },
      { title: 'Conversation piece', desc: 'Adds personality guests naturally gather around.' }
    ]
  },
  {
    id: 8,
    slug: 'order-of-events',
    name: 'Order of Events',
    category: 'Decor & Signage',
    price: '$75 / Unit',
    image: '/images/10.png',
    images: ['/images/10.png'],
    description: 'An elegant timeline display to guide guests and keep your day flowing smoothly.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Clear communication', desc: 'Helps guests stay informed throughout each event milestone.' },
      { title: 'Design-forward signage', desc: 'A polished piece that complements your decor story.' },
      { title: 'Easy readability', desc: 'Formatted for quick scanning from a comfortable distance.' },
      { title: 'Customizable format', desc: 'Adaptable to ceremony, cocktail, and reception timelines.' }
    ]
  },
  {
    id: 9,
    slug: 'arches',
    name: 'Arches',
    category: 'Ceremony & Seating',
    price: '$125 / Unit',
    image: '/images/4.png',
    images: ['/images/4.png', '/images/5.png'],
    description: 'Create a breathtaking ceremony focal point with elegant arches ready for floral styling.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Ceremony centerpiece', desc: 'Frames vows beautifully for guests and photography.' },
      { title: 'Indoor or outdoor', desc: 'Designed to suit multiple venue types and layouts.' },
      { title: 'Decorator friendly', desc: 'Easy to dress with florals, fabric, greenery, or lighting.' },
      { title: 'Timeless impact', desc: 'Creates iconic wedding imagery with minimal effort.' }
    ]
  },
  {
    id: 10,
    slug: 'dessert-ladder',
    name: 'Dessert Ladder',
    category: 'Guest Experience',
    price: '$50 / Unit',
    image: '/images/8.png',
    images: ['/images/8.png'],
    description: 'A charming tiered display for desserts, favors, and curated reception details.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Tiered visual appeal', desc: 'Creates depth and elegance on dessert or welcome tables.' },
      { title: 'Space-saving setup', desc: 'Vertical form maximizes display impact in compact areas.' },
      { title: 'Rustic-modern blend', desc: 'Complements farmhouse, classic, and garden wedding themes.' },
      { title: 'Guest engagement', desc: 'Encourages interaction around sweet or favor stations.' }
    ]
  },
  {
    id: 11,
    slug: 'candle-lanterns',
    name: 'Candle Lanterns',
    category: 'Lighting & Atmosphere',
    price: '$10 / Unit',
    note: '*Includes customization*',
    image: '/images/11.png',
    images: ['/images/11.png'],
    description: 'Add romantic glow and depth with candle lanterns for aisles, tables, and pathways.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Romantic ambiance', desc: 'Warm light elevates ceremony and reception atmosphere.' },
      { title: 'Flexible styling', desc: 'Use on tables, entryways, altars, or lounge zones.' },
      { title: 'Event-safe design', desc: 'Protective enclosure supports safer candle presentation.' },
      { title: 'Curated finishes', desc: 'Styles can be tailored to match your event aesthetic.' }
    ]
  },
  {
    id: 12,
    slug: 'edison-lights',
    name: 'Edison Lights',
    category: 'Lighting & Atmosphere',
    price: '$10 / Unit',
    image: '/images/13.png',
    images: ['/images/13.png'],
    description: 'Vintage Edison lighting adds a soft, inviting glow that transforms evening celebrations.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Warm evening tone', desc: 'Creates cozy atmosphere for sunset and night events.' },
      { title: 'Classic aesthetic', desc: 'Edison bulbs blend rustic and refined styling cues.' },
      { title: 'Venue flexibility', desc: 'Suitable for many indoor and covered outdoor installations.' },
      { title: 'Photo enhancement', desc: 'Adds cinematic depth to portraits and reception imagery.' }
    ]
  },
  {
    id: 13,
    slug: 'photo-backdrop',
    name: 'Photo Backdrop',
    category: 'Decor & Signage',
    price: '$40 / Unit',
    image: '/images/16.png',
    images: ['/images/16.png'],
    description: 'Designed photo backdrops that help guests capture polished, memorable event moments.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Dedicated photo zone', desc: 'Creates a clear focal area for guest photos and portraits.' },
      { title: 'Event-branded look', desc: 'Backdrop styling can align with your wedding theme.' },
      { title: 'Quick setup', desc: 'Simple assembly supports efficient event-day coordination.' },
      { title: 'Memory friendly', desc: 'Encourages natural moments guests love to share.' }
    ]
  },
  {
    id: 14,
    slug: 'stock-tanks',
    name: 'Stock Tanks',
    category: 'Guest Experience',
    price: '$50 / Unit',
    image: '/images/15.png',
    images: ['/images/15.png', '/images/16.png'],
    description: 'Galvanized stock tanks ideal for beverage stations, floral styling, and creative decor moments.',
    duration: '1-2 Days',
    pickup: 'Smithville, Ontario',
    delivery: 'Hamilton, Ontario & Surrounding Area',
    features: [
      { title: 'Multi-purpose use', desc: 'Great for drinks on ice, florals, or decorative installations.' },
      { title: 'Farmhouse texture', desc: 'Adds rustic edge that pairs with natural wedding elements.' },
      { title: 'Large capacity', desc: 'Handles high guest counts with practical serving space.' },
      { title: 'Styling flexibility', desc: 'Can be dressed up or down to suit venue ambiance.' }
    ]
  }
];
