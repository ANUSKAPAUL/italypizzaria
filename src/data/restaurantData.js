/**
 * Brand and Restaurant Information for ITLYPIZZERIA
 * Kept warm, authentic, and human-centred.
 */

export const RESTAURANT_INFO = {
  brand: {
    name: 'ITLYPIZZERIA',
    legalName: 'ITLY Pizzeria & Bakehouse',
    subtitle: 'House of Artisan Wood Fire Pizzas',
    taglines: {
      primary: 'A LITTLE ITALY. A LOT OF FLAVOUR.',
      hero: 'ITALIAN SOUL. UNFORGETTABLE TASTE.',
      craft: 'CRAFTED WITH PASSION. BAKED WITH LOVE.',
      philosophy: 'Let the food do the talking.',
    },
    founded: '2024',
    story: {
      lead: 'We believe genuine Italian food begins with sacred simplicity: stone-ground flour, volcanic tomatoes, pristine water, and the roaring heat of seasoned oak.',
      paragraphs: [
        'Every morning before the city stirs, our pizzaioli start with flour-dusted hands and a living wild starter. There are no shortcuts here—only patience, passion, and time.',
        'Each batch of dough rests quietly for 48 hours in cold fermentation. This patient wait creates a crust that is airy, light as cloud, and naturally gentle on your stomach.',
        'From sweet San Marzano plum tomatoes picked in volcanic Campania soils to creamy Fior di Latte mozzarella stretched fresh each dawn and cold-pressed extra virgin olive oil from centuries-old groves, every ingredient is chosen with love.',
      ],
      quote: 'Simplicity is the ultimate sophistication.',
      author: 'Master Pizzaiolo Marco & The ITLY Family',
    },
  },

  contact: {
    address: {
      street: '42 Via Bella Vista, Artisan Promenade',
      city: 'Milano District',
      state: 'Flagship Pizzeria',
      postalCode: '20121',
      country: 'Italy',
      mapsUrl: 'https://maps.google.com',
    },
    phone: '+39 02 8945 7712',
    phoneFormatted: '(02) 8945-7712',
    email: 'ciao@itlypizzeria.com',
    reservationsEmail: 'prenotazioni@itlypizzeria.com',
  },

  hours: [
    { days: 'Monday – Thursday', time: '12:00 PM – 10:30 PM' },
    { days: 'Friday – Saturday', time: '12:00 PM – 11:30 PM' },
    { days: 'Sunday', time: '12:30 PM – 10:00 PM' },
    { days: 'Wood-Fire Lunch Aperitivo', time: 'Daily 12:00 PM – 4:00 PM' },
  ],

  social: [
    { name: 'Instagram', handle: '@itlypizzeria', url: 'https://instagram.com' },
    { name: 'TikTok', handle: '@itly.pizza', url: 'https://tiktok.com' },
    { name: 'YouTube', handle: 'ITLY Pizzeria Bakehouse', url: 'https://youtube.com' },
    { name: 'TripAdvisor', handle: 'ITLY Pizzeria', url: 'https://tripadvisor.com' },
  ],

  navLinks: [
    { label: 'HOME', href: '#hero' },
    { label: 'OUR CRAFT', href: '#experience' },
    { label: 'SIGNATURE PIZZA', href: '#signature' },
    { label: 'FLAVOURS', href: '#flavours' },
    { label: 'PASTA & SIDES', href: '#pasta' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'OUR STORY', href: '#story' },
    { label: 'VISIT US', href: '#contact' },
  ],

  craftBadges: [
    {
      title: '48-HR COLD FERMENT',
      desc: 'Double-milled Tipo 00 flour slow-fermented for two full days to give an impossibly light, digestable crust.',
      tag: 'The Dough',
    },
    {
      title: '450°C OAK WOOD FIRE',
      desc: 'Seasoned beech and oak logs blistering our crust with signature leopard spots in exactly 90 seconds.',
      tag: 'The Oven',
    },
    {
      title: 'SAN MARZANO D.O.P.',
      desc: 'Naturally sweet plum tomatoes grown in volcanic soil beneath Mount Vesuvius, hand-crushed every day.',
      tag: 'The Sauce',
    },
    {
      title: 'FRESH FIOR DI LATTE',
      desc: 'Artisan cow-milk mozzarella delivered fresh from local creameries for a sweet, velvety melting texture.',
      tag: 'The Cheese',
    },
  ],

  testimonials: [
    {
      quote: 'Biting into their Margherita took me right back to the alleyways of Spaccanapoli. Extraordinary crust and unmistakable soul.',
      author: 'Elena Moretti',
      role: 'Food Writer & Regular Guest',
    },
    {
      quote: 'You can taste the patience in the dough. No heavy feeling afterwards—just pure, honest, wood-fired happiness.',
      author: 'Matteo Bellini',
      role: 'Local Patron',
    },
  ],
};
