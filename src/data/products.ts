export type Product = {
  slug: string;
  title: string;
  category: string;
  price: number;
  compareAt?: number;
  badge?: "Sale" | "New" | "Limited" | "Demo";
  stock: "In stock" | "Low stock" | "Preorder" | "Pickup only";
  color?: string;
  specs: string[];
  description: string;
  tags: string[];
};

export const categories = [
  "Spray Paint",
  "Caps",
  "Mops",
  "Paint Markers",
  "Brush Pens",
  "Blackbooks",
  "Sticker Blanks",
  "Canvas",
  "Gloves",
  "Tape",
  "Apparel",
  "3D-Printed Tools",
  "Limited Drops"
];

export const products: Product[] = [
  {
    slug: "freight-red-spray-400",
    title: "Freight Red Spray 400ml",
    category: "Spray Paint",
    price: 8.99,
    compareAt: 10.99,
    badge: "Sale",
    stock: "In stock",
    color: "Freight red",
    specs: ["400ml can", "Matte finish", "Medium pressure", "Demo price"],
    description: "A punchy red demo can for murals, canvas work, and street-art studies.",
    tags: ["paint", "sale", "spray"]
  },
  {
    slug: "safety-yellow-spray-400",
    title: "Safety Yellow Spray 400ml",
    category: "Spray Paint",
    price: 8.99,
    badge: "New",
    stock: "Low stock",
    color: "Safety yellow",
    specs: ["400ml can", "High visibility", "Medium pressure"],
    description: "Bright yellow placeholder stock for outlines, fills, signage, and display demos.",
    tags: ["paint", "new"]
  },
  {
    slug: "needle-cap-pack",
    title: "Needle Cap 10-Pack",
    category: "Caps",
    price: 4.5,
    stock: "In stock",
    specs: ["Fine line", "Fits most demo cans", "Bag of 10"],
    description: "Fine-line caps for detail work, sketch fills, and controlled spray patterns.",
    tags: ["caps", "tools"]
  },
  {
    slug: "concrete-mop-15",
    title: "Concrete Mop 15mm",
    category: "Mops",
    price: 7.5,
    badge: "New",
    stock: "In stock",
    specs: ["15mm nib", "Refillable body", "Ink sold separately"],
    description: "A refillable mop marker for bold tags, poster work, and studio lettering.",
    tags: ["mop", "marker"]
  },
  {
    slug: "cyan-paint-marker",
    title: "Electric Cyan Paint Marker",
    category: "Paint Markers",
    price: 5.99,
    stock: "In stock",
    specs: ["Bullet nib", "Opaque paint", "Shake-valve flow"],
    description: "Opaque cyan marker for blackbooks, stickers, canvas, and custom footwear concepts.",
    tags: ["marker", "cyan"]
  },
  {
    slug: "barton-blackbook",
    title: "Barton Blackbook A4",
    category: "Blackbooks",
    price: 14.99,
    stock: "In stock",
    specs: ["A4 pages", "Thick paper", "Hard cover"],
    description: "Sketchbook for letter studies, throw-up practice, character concepts, and planning.",
    tags: ["blackbook", "paper"]
  },
  {
    slug: "sticker-blank-pack",
    title: "Slap Blank Sticker Pack",
    category: "Sticker Blanks",
    price: 6.25,
    stock: "In stock",
    specs: ["50 blanks", "Matte finish", "Marker friendly"],
    description: "Sticker blanks for hand styles, characters, label tests, and quick drop-ins.",
    tags: ["stickers"]
  },
  {
    slug: "canvas-panel-12",
    title: "Concrete Canvas Panel 12x12",
    category: "Canvas",
    price: 11.99,
    stock: "Pickup only",
    specs: ["12x12 inches", "Primed surface", "Demo item"],
    description: "Studio-ready panel for spray, brush, marker, and mixed-media work.",
    tags: ["canvas"]
  },
  {
    slug: "cc-work-gloves",
    title: "CC Work Gloves",
    category: "Gloves",
    price: 9.99,
    stock: "In stock",
    specs: ["Nitrile-coated palm", "Reusable", "Multiple sizes"],
    description: "Gloves for painting sessions, workshops, and messy customization nights.",
    tags: ["supplies"]
  },
  {
    slug: "capsule-tee-001",
    title: "Barton St. Capsule Tee 001",
    category: "Limited Drops",
    price: 34,
    badge: "Limited",
    stock: "Preorder",
    specs: ["Limited demo quantity", "Pickup option", "Sizes to confirm"],
    description: "Concrete Culture x Branded Promotions capsule tee concept.",
    tags: ["drop", "apparel"]
  },
  {
    slug: "cc-001-cap-tray",
    title: "CC-001 Cap Tray",
    category: "3D-Printed Tools",
    price: 18,
    badge: "Demo",
    stock: "Pickup only",
    specs: ["3D printed", "Holds mixed caps", "Prototype colorways"],
    description: "Industrial desk tray concept for organizing caps at the shop or studio.",
    tags: ["cc lab", "3d"]
  },
  {
    slug: "canvas-to-concrete-kit",
    title: "Canvas to Concrete Kit",
    category: "Apparel",
    price: 49,
    badge: "Limited",
    stock: "Preorder",
    specs: ["Paint marker bundle", "Lace swap concept", "Workshop-ready"],
    description: "Future footwear customization concept built around paintable canvas shoes.",
    tags: ["footwear", "custom"]
  }
];
