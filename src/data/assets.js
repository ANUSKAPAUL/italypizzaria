/**
 * Asset Registry for ITLYPIZZERIA
 * Genuine visual library capturing our wood-fired hearth, handcrafted doughs, and Italian ingredients.
 */

export const ASSETS = {
  // Brand Identity
  logo: {
    src: '/assets/images/itly-logo.jpg',
    alt: 'ITLY Pizzeria & Bakehouse — House of Artisan Wood Fire Pizzas',
    width: 150,
    height: 150,
  },

  // Wood-Fire Oven & Kitchen Craft Films
  videos: {
    hero: {
      src: '/assets/videos/spicy-pizza.mp4',
      poster: '/assets/images/pizza-explosion-2k.jpg',
      title: 'The Wood-Fired Crust in Motion',
      caption: 'The intense 90-second transformation inside our 450°C beechwood oven',
    },
    margherita: {
      src: '/assets/videos/spicy-pizza.mp4',
      poster: '/assets/images/pizza-cheese-pull-2k.jpg',
      title: 'Our Signature Margherita',
      caption: '48-hour cold fermented dough baked over aged oak and beech logs',
    },
    spicyPizza: {
      src: '/assets/videos/spicy-pizza.mp4',
      poster: '/assets/images/pizza-explosion-2k.jpg',
      title: 'The Calabrian Flame',
      caption: 'Calabrian chili, crushed San Marzano tomatoes, and molten Fior di Latte coming together',
    },
    pasta: {
      src: '/assets/videos/pasta-dish.mp4',
      poster: '/assets/images/itly-food-spread-2k.jpg',
      title: 'Bronze-Die Extruded Pasta',
      caption: 'Textured pasta tossed with hand-crushed pomodoro, torn sweet basil, and extra virgin olive oil',
    },
    garlicBread: {
      src: '/assets/videos/garlic-bread.mp4',
      poster: '/assets/images/itly-food-spread-2k.jpg',
      title: 'Pane all’Aglio al Forno',
      caption: 'Golden crust, roasted garlic confit butter, fresh parsley, and molten mozzarella',
    },
  },

  // Ultra-Resolution Food Photography
  images: {
    // Hero & Food Experience
    pizzaExplosion: {
      src: '/assets/images/pizza-explosion-2k.jpg',
      alt: 'Artisan Neapolitan pizza with fresh bursting ingredients on pure white canvas',
      width: 2752,
      height: 1536,
      aspectRatio: '16/9',
    },
    // Signature Pizza & Cheese Pull
    cheesePull: {
      src: '/assets/images/pizza-cheese-pull-2k.jpg',
      alt: 'Freshly baked wood-fired pizza slice with stretching melted mozzarella',
      width: 2400,
      height: 1792,
      aspectRatio: '4/3',
    },
    // Food Spread & Editorial
    foodSpread: {
      src: '/assets/images/itly-food-spread-2k.jpg',
      alt: 'Our table spread: Wood-fired pizza, handcrafted penne, cheesy garlic bread, and aged parmesan',
      width: 2752,
      height: 1536,
      aspectRatio: '16/9',
    },
  },

  // Food Gallery Items (Editorial masonry composition)
  gallery: [
    {
      id: 'gal-1',
      title: 'Our Neapolitan Masterpiece',
      category: 'Wood-Fired Pizza',
      src: '/assets/images/pizza-explosion-2k.jpg',
      alt: 'Neapolitan pizza with fresh basil and San Marzano tomatoes',
      span: 'col-span-12 md:col-span-8',
      aspect: 'aspect-[16/9]',
      caption: 'Double-fermented dough with charred leopard cornicione, sweet basil, and extra virgin olive oil.',
      tags: ['Signature', 'Wood-Fired', 'Neapolitan'],
    },
    {
      id: 'gal-2',
      title: 'The Molten Cheese Pull',
      category: 'Signature Slices',
      src: '/assets/images/pizza-cheese-pull-2k.jpg',
      alt: 'Steaming pizza slice with extended mozzarella cheese pull',
      span: 'col-span-12 md:col-span-4',
      aspect: 'aspect-[4/5]',
      caption: '100% Fior di Latte mozzarella pulled fresh from the 450°C oven hearth.',
      tags: ['Fior di Latte', 'Artisan Crust'],
    },
    {
      id: 'gal-3',
      title: 'The Italian Family Table',
      category: 'The Table Feast',
      src: '/assets/images/itly-food-spread-2k.jpg',
      alt: 'Complete Italian table with pasta, pizza, garlic bread and olive oil',
      span: 'col-span-12 md:col-span-7',
      aspect: 'aspect-[16/9]',
      caption: 'Penne al Pomodoro alongside our charred pizza and warm garlic baguettes.',
      tags: ['Family Table', 'Handcrafted', 'Sharing'],
    },
    {
      id: 'gal-4',
      title: 'The Sacred Oven Mark',
      category: 'Our Hearth',
      src: '/assets/images/itly-logo.jpg',
      alt: 'ITLY Pizzeria & Bakehouse authentic brick oven crest',
      span: 'col-span-12 md:col-span-5',
      aspect: 'aspect-square md:aspect-[4/3]',
      caption: 'Our brick wood-fire oven emblem — the beating heart of ITLYPIZZERIA.',
      tags: ['Hearth', 'Bakehouse'],
    },
  ],
};
