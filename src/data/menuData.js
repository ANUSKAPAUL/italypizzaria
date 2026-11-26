/**
 * Complete Menu Catalog for ITLYPIZZERIA
 * Structured by category with dietary tags and ingredient highlights.
 */

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'pizzas', label: 'Wood-Fired Pizzas' },
  { id: 'pastas', label: 'Handmade Pastas' },
  { id: 'sides', label: 'Artisan Garlic Breads & Sides' },
  { id: 'dolci', label: 'Dolci & Beverages' },
];

export const MENU_ITEMS = [
  // Pizzas
  {
    id: 'pizza-margherita',
    category: 'pizzas',
    name: 'Margherita Verace D.O.P.',
    price: '€16.50',
    description: 'San Marzano D.O.P. tomatoes, fresh Fior di Latte mozzarella, sweet Genovese basil, cold-pressed Sicilian EVOO.',
    tags: ['Vegetarian', 'Signature', 'Wood-Fired'],
    image: '/assets/images/pizza-explosion-2k.jpg',
    highlight: 'Classic Neapolitan',
  },
  {
    id: 'pizza-diavola',
    category: 'pizzas',
    name: 'Diavola all’Nduja & Hot Honey',
    price: '€19.00',
    description: 'Spicy Calabrian spianata salame, artisanal ’nduja paste, chili-infused organic wildflower honey, fresh mozzarella.',
    tags: ['Spicy', 'House Special'],
    image: '/assets/images/pizza-cheese-pull-2k.jpg',
    highlight: 'Flavour Explosion',
  },
  {
    id: 'pizza-burrata-tartufo',
    category: 'pizzas',
    name: 'Burrata Pugliese & Black Truffle',
    price: '€22.50',
    description: 'Whole creamy 150g Puglia burrata placed fresh out of the oven, black truffle cream, Fior di Latte, toasted pine nuts.',
    tags: ['Vegetarian', 'Chef Selection'],
    image: '/assets/images/itly-food-spread-2k.jpg',
    highlight: 'Luxury Reserve',
  },
  {
    id: 'pizza-marinara',
    category: 'pizzas',
    name: 'Marinara Antica di Napoli',
    price: '€14.00',
    description: 'Double San Marzano tomatoes, sliced wild garlic cloves, dried Mediterranean oregano, extra virgin olive oil.',
    tags: ['Vegan', 'Dairy-Free'],
    image: '/assets/images/pizza-explosion-2k.jpg',
    highlight: 'Ancient Recipe',
  },
  {
    id: 'pizza-quattro-formaggi',
    category: 'pizzas',
    name: 'Quattro Formaggi al Forno',
    price: '€18.50',
    description: 'Fior di Latte, aged Gorgonzola Dolce, 24-month Parmigiano Reggiano, and Taleggio with cracked black pepper.',
    tags: ['Vegetarian', 'Cheese Lover'],
    image: '/assets/images/pizza-cheese-pull-2k.jpg',
    highlight: 'Four Italian Cheeses',
  },

  // Pastas
  {
    id: 'pasta-pomodoro',
    category: 'pastas',
    name: 'Penne al Pomodoro e Basilico',
    price: '€17.00',
    description: 'Bronze-extruded penne rigate slow-tossed in sweet San Marzano sugo, torn fresh basil, shaved 24-month Parmigiano.',
    tags: ['Vegetarian', 'Classic'],
    image: '/assets/images/itly-food-spread-2k.jpg',
    highlight: 'Slow-Simmered',
  },
  {
    id: 'pasta-cacio-pepe',
    category: 'pastas',
    name: 'Tonnarelli Cacio e Pepe',
    price: '€18.50',
    description: 'Hand-rolled egg tonnarelli pasta, aged Pecorino Romano D.O.P., freshly cracked Tellicherry black peppercorns.',
    tags: ['Vegetarian', 'Roman Classic'],
    image: '/assets/images/itly-food-spread-2k.jpg',
    highlight: 'Silky Emulsion',
  },
  {
    id: 'pasta-ragu',
    category: 'pastas',
    name: 'Tagliatelle al Ragù Bolognese',
    price: '€21.00',
    description: '8-hour slow-cooked braised beef and pork cheek ragù, San Marzano reduction, tossed with fresh golden egg tagliatelle.',
    tags: ['Signature Meat', 'Heritage'],
    image: '/assets/images/itly-food-spread-2k.jpg',
    highlight: '8-Hour Simmered',
  },

  // Sides & Garlic Breads
  {
    id: 'side-garlic-bread',
    category: 'sides',
    name: 'Pane all’Aglio & Mozzarella Pull',
    price: '€9.50',
    description: 'Artisan sourdough baguette baked with slow-roasted garlic confit butter, Italian parsley, and bubbling three-cheese blend.',
    tags: ['Vegetarian', 'Cheesy Side', 'Must Try'],
    image: '/assets/images/itly-food-spread-2k.jpg',
    highlight: 'Epic Cheese Pull',
  },
  {
    id: 'side-arancini',
    category: 'sides',
    name: 'Arancini al Tartufo (3 pcs)',
    price: '€11.00',
    description: 'Crispy carnaroli risotto balls filled with wild mushrooms and smoked provola cheese, served with garlic saffron aioli.',
    tags: ['Vegetarian', 'Crispy'],
    image: '/assets/images/pizza-explosion-2k.jpg',
    highlight: 'Crispy Sicilian',
  },
  {
    id: 'side-burrata-caprese',
    category: 'sides',
    name: 'Burrata Caprese Rustica',
    price: '€14.50',
    description: 'Fresh Pugliese burrata, heirloom multi-coloured cherry tomatoes on the vine, basil oil, and 12-year balsamic glaze.',
    tags: ['Vegetarian', 'Gluten-Free', 'Fresh'],
    image: '/assets/images/itly-food-spread-2k.jpg',
    highlight: 'Farm Fresh',
  },

  // Dolci & Drinks
  {
    id: 'dolce-tiramisu',
    category: 'dolci',
    name: 'Tiramisù Tradizionale al Mascarpone',
    price: '€8.50',
    description: 'Savoiardi ladyfingers soaked in dark Illy espresso and Marsala wine, layered with whipped mascarpone cream and Valrhona cocoa.',
    tags: ['Vegetarian', 'House Dessert'],
    image: '/assets/images/pizza-explosion-2k.jpg',
    highlight: 'Handmade Daily',
  },
  {
    id: 'bev-san-pellegrino',
    category: 'dolci',
    name: 'San Pellegrino Aranciata Amara',
    price: '€4.50',
    description: 'Sparkling bitter orange soda with natural Italian sun-drenched Mediterranean citrus.',
    tags: ['Refreshing', 'Non-Alcoholic'],
    image: '/assets/images/itly-food-spread-2k.jpg',
    highlight: 'Imported',
  },
  {
    id: 'bev-chianti-classico',
    category: 'dolci',
    name: 'Chianti Classico Riserva D.O.C.G.',
    price: '€38.00 / bot',
    description: 'Full-bodied Tuscan red wine with notes of wild cherry, tobacco, and delicate oak tannins. Perfect with wood-fired pizza.',
    tags: ['Organic Wine', 'Tuscan'],
    image: '/assets/images/pizza-cheese-pull-2k.jpg',
    highlight: 'Cellar Selection',
  },
];

