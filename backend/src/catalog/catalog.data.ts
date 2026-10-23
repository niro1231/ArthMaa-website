export interface ProductDetails {
  /** Longer description shown on the product page. */
  about: string;
  highlights: string[];
  perfectFor: string[];
  /** Can the customer ask for a personalised / custom-made version? */
  customizable: boolean;
}

export interface Product {
  id: string;
  name: string;
  /** Emoji shown on the card until a real photo is added. */
  icon: string;
  /** Short intro used on the home page card. */
  description: string;
  /** Optional photo path served by the frontend, e.g. "/products/lamp.jpg". */
  image?: string;
  details: ProductDetails;
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  products: Product[];
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const p = (
  name: string,
  icon: string,
  description: string,
  details: ProductDetails,
): Product => ({ id: slugify(name), name, icon, description, details });

export const CATEGORIES: Category[] = [
  {
    slug: 'crafts',
    name: 'Crafts',
    tagline: 'Made by hand, gifted with heart',
    description:
      'Lamps, crochet, keepsakes and thoughtful gifts — each piece shaped by hand with love and patience.',
    products: [
      p('Lamps', '🪔', 'Handcrafted lamps that warm every corner with a gentle glow.', {
        about:
          'Our lamps are shaped and finished by hand, so each one has its own character. They bring a soft, welcoming glow to living rooms, bedrooms, pooja corners and festive tables.',
        highlights: ['Handmade, one piece at a time', 'Warm, soft lighting', 'Unique finish on every lamp', 'Suitable for daily use and festivals'],
        perfectFor: ['Home decoration', 'Festivals and pooja', 'Housewarming gifts'],
        customizable: true,
      }),
      p('Vases', '🏺', 'Elegant handmade vases for fresh and dried blooms.', {
        about:
          'Handmade vases designed to show off flowers, whether fresh from the garden or beautifully dried. Each vase is finished by hand and makes a lovely centrepiece.',
        highlights: ['Handmade and hand-finished', 'Works with fresh or dried flowers', 'Great as a standalone decor piece'],
        perfectFor: ['Table centrepieces', 'Living room corners', 'Gifting'],
        customizable: true,
      }),
      p('Fancy Flower Stands', '💐', 'Decorative stands that give your flowers a stage.', {
        about:
          'Decorative flower stands that lift your arrangements and turn them into a feature. Made by hand to suit both traditional and modern spaces.',
        highlights: ['Handcrafted design', 'Adds height and style to arrangements', 'Suits weddings, pooja and home'],
        perfectFor: ['Pooja rooms', 'Function and event decor', 'Entrances'],
        customizable: true,
      }),
      p('Vashthu Muddi', '🔱', 'Auspicious Vashthu muddi arrangements for a harmonious home.', {
        about:
          'Vashthu muddi arrangements prepared with care for homes and new beginnings. A thoughtful, traditional piece that is also a meaningful gift.',
        highlights: ['Prepared by hand with care', 'Traditional and auspicious', 'A meaningful housewarming gift'],
        perfectFor: ['Housewarming (Griha Pravesam)', 'New homes and shops', 'Traditional gifting'],
        customizable: true,
      }),
      p('Nirai Kudam Decoration', '🪷', 'Beautifully decorated Nirai Kudam for pooja and celebrations.', {
        about:
          'A Nirai Kudam decorated by hand for pooja, weddings and special occasions. We design it to match your function, colours and theme.',
        highlights: ['Hand-decorated for your occasion', 'Traditional look with a fresh touch', 'Colours matched to your theme'],
        perfectFor: ['Weddings and functions', 'Pooja and festivals', 'Housewarming ceremonies'],
        customizable: true,
      }),
      p('Flower Pot Stands', '🪴', 'Sturdy, stylish stands for your indoor and balcony plants.', {
        about:
          'Stands made to hold your plants securely while adding style to your indoor and balcony spaces. A simple way to bring greenery up to eye level.',
        highlights: ['Sturdy build', 'Stylish handmade look', 'Suits indoor and balcony plants'],
        perfectFor: ['Balconies and gardens', 'Living rooms', 'Plant lovers'],
        customizable: false,
      }),
      p('Crochet Handbags', '👜', 'Soft, colourful crochet handbags — unique, durable and stylish.', {
        about:
          'Each crochet handbag is made stitch by stitch, so no two are exactly the same. Lightweight, colourful and practical for everyday use or as a special gift.',
        highlights: ['Hand-crocheted, stitch by stitch', 'Lightweight and comfortable to carry', 'Choice of colours on request'],
        perfectFor: ['Everyday use', 'Birthday and festival gifts', 'Handmade fashion lovers'],
        customizable: true,
      }),
      p('Tailor Made Wishing Cards', '💌', 'Personalised greeting cards written for your special moments.', {
        about:
          'Cards designed around you — the occasion, the person and the message. Tell us what you would like to say and we will craft a card that feels personal.',
        highlights: ['Made to order', 'Personal message and design', 'For any occasion'],
        perfectFor: ['Birthdays and anniversaries', 'Weddings and festivals', 'Thank-you and congratulations'],
        customizable: true,
      }),
      p('Candle Holders', '🕯️', 'Charming holders that make every evening feel festive.', {
        about:
          'Handmade candle holders that set a calm, festive mood. Perfect for dinners, festivals or a quiet evening at home.',
        highlights: ['Handmade design', 'Creates a warm ambience', 'Looks good with or without candles'],
        perfectFor: ['Dining tables', 'Festivals and celebrations', 'Gifting'],
        customizable: true,
      }),
      p('Spice Jars', '🫙', 'Hand-finished jars to keep your kitchen fragrant and pretty.', {
        about:
          'Spice jars finished by hand to make your kitchen feel special. Keep your masalas organised and display them with pride.',
        highlights: ['Hand-finished', 'Keeps spices neatly organised', 'Adds charm to the kitchen'],
        perfectFor: ['Kitchens', 'Housewarming gifts', 'Home makers'],
        customizable: true,
      }),
      p('Memory Books', '📖', 'Custom keepsake books for Retirement, Wedding Anniversary and 21st Birthday.', {
        about:
          'A memory book gathers photos, wishes and moments into one keepsake. We create custom books for Retirement, Wedding Anniversary and 21st Birthday, designed around the person being celebrated.',
        highlights: ['Made to order for each occasion', 'Photos, messages and memories in one place', 'A gift that lasts a lifetime'],
        perfectFor: ['Retirement', 'Wedding Anniversary', '21st Birthday'],
        customizable: true,
      }),
    ],
  },
  {
    slug: 'decor',
    name: 'Decor',
    tagline: 'Little touches that make a house a home',
    description:
      'Wall pieces, kolam, textiles and art to bring colour, culture and character into your space.',
    products: [
      p('Wall Decors', '🖼️', 'Statement wall pieces that add character to any room.', {
        about:
          'Handmade wall pieces that turn a blank wall into a conversation starter. Designed to bring colour and personality to your rooms.',
        highlights: ['Handmade statement pieces', 'Adds colour and character', 'Fits many room styles'],
        perfectFor: ['Living rooms and bedrooms', 'Entrances', 'Housewarming gifts'],
        customizable: true,
      }),
      p('Kolam', '🌸', 'Traditional kolam designs, lovingly made to welcome guests.', {
        about:
          'Traditional kolam designs made with care to welcome guests and bless the home. Ideal when you want a beautiful kolam without the effort.',
        highlights: ['Traditional designs', 'Welcoming and auspicious', 'Made with care'],
        perfectFor: ['Entrances and pooja rooms', 'Festivals', 'Functions and events'],
        customizable: true,
      }),
      p('Kolam Combo Kit', '🎨', 'Everything you need to create beautiful kolams at home.', {
        about:
          'A ready kit with what you need to create beautiful kolams at home. A thoughtful gift for anyone who loves tradition and creativity.',
        highlights: ['Everything together in one kit', 'Easy to use at home', 'A lovely gift idea'],
        perfectFor: ['Festival seasons', 'Gifting', 'Beginners and kolam lovers'],
        customizable: false,
      }),
      p('Hand Painted Table Cloths', '🖌️', 'Table cloths painted by hand, each one a one-of-a-kind canvas.', {
        about:
          'Each table cloth is painted by hand, making it truly one of a kind. Brings colour and art to your dining table.',
        highlights: ['Hand painted artwork', 'One of a kind', 'Colours and motifs to suit your taste'],
        perfectFor: ['Dining tables', 'Gifting', 'Special occasions'],
        customizable: true,
      }),
      p('Patch Worked Table Cloths', '🧵', 'Colourful patchwork table cloths stitched piece by piece.', {
        about:
          'Patchwork table cloths stitched piece by piece from colourful fabrics. Cheerful, textured and full of handmade charm.',
        highlights: ['Stitched piece by piece', 'Colourful and cheerful', 'Handmade character'],
        perfectFor: ['Dining and coffee tables', 'Festive tables', 'Gifting'],
        customizable: true,
      }),
      p('Hand Embroidery Pillow Cases', '🛏️', 'Delicate hand-embroidered pillow cases for cosy comfort.', {
        about:
          'Pillow cases embroidered by hand with delicate detail. They bring a soft, artistic touch to your sofa or bed.',
        highlights: ['Hand embroidered detail', 'Soft and comfortable', 'Adds a refined touch'],
        perfectFor: ['Sofas and beds', 'Gifting', 'Home refresh'],
        customizable: true,
      }),
      p('Wall Hangers', '🎐', 'Charming wall hangers to dress up blank walls.', {
        about:
          'Charming wall hangers made by hand to brighten up empty walls. Light, decorative and easy to display.',
        highlights: ['Handmade and decorative', 'Brightens blank walls', 'Easy to display'],
        perfectFor: ['Living rooms and bedrooms', 'Festival decoration', 'Gifting'],
        customizable: true,
      }),
      p('Fruit Baskets', '🧺', 'Handwoven baskets that make fruit look like art.', {
        about:
          'Baskets made by hand to present fruit beautifully on your table or counter. Useful and decorative at the same time.',
        highlights: ['Handmade basket', 'Practical and decorative', 'Great for gifting hampers'],
        perfectFor: ['Dining tables', 'Kitchen counters', 'Gift hampers'],
        customizable: false,
      }),
      p('Fancy Cement Vases', '🪨', 'Modern cement vases with a handcrafted, artistic finish.', {
        about:
          'Modern cement vases with a handcrafted finish. Their clean, artistic look suits contemporary homes.',
        highlights: ['Modern handcrafted finish', 'Contemporary look', 'Suits fresh and dried flowers'],
        perfectFor: ['Modern interiors', 'Shelves and tables', 'Gifting'],
        customizable: true,
      }),
      p('Bottle Art', '🍾', 'Ordinary bottles turned into painted works of art.', {
        about:
          'Ordinary bottles transformed into painted works of art. Each one is unique and works as a vase or a pure decor piece.',
        highlights: ['Upcycled and hand painted', 'Every bottle is unique', 'Works as decor or a vase'],
        perfectFor: ['Shelves and tables', 'Gifting', 'Creative home decor'],
        customizable: true,
      }),
    ],
  },
];
