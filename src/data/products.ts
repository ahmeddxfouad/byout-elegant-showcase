import oceanBluePlate from "@/assets/products/ocean-blue-plate.jpg";
import oliveEspressoCups from "@/assets/products/olive-espresso-cups.jpg";
import matteVaseTrio from "@/assets/products/matte-vase-trio.jpg";
import sculpturalVase from "@/assets/products/sculptural-vase.jpg";
import charcoalDinnerPlates from "@/assets/products/charcoal-dinner-plates.jpg";
import sandstoneVase from "@/assets/products/sandstone-vase.jpg";
import whiteBottleVase from "@/assets/products/white-bottle-vase.jpg";
import beigeTaupeVases from "@/assets/products/beige-taupe-vases.jpg";
import servingBowl from "@/assets/products/serving-bowl.jpg";
import giftSet from "@/assets/products/gift-set.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "tableware" | "cups" | "vases" | "decor" | "gifts";
  color: string;
  finish: "matte" | "glazed";
  bestSeller: boolean;
  available: boolean;
};

export const products: Product[] = [
  {
    id: "ocean-blue-plate",
    name: "Ocean-Blue Glazed Side Plate",
    description: "Ocean-blue glaze with golden-brown details ✨",
    price: 320,
    image: oceanBluePlate,
    category: "tableware",
    color: "Blue",
    finish: "glazed",
    bestSeller: true,
    available: true,
  },
  {
    id: "olive-espresso-cups",
    name: "Olive Green Espresso Cup Set",
    description: "Minimal cups for cozy mornings ☕",
    price: 450,
    image: oliveEspressoCups,
    category: "cups",
    color: "Green",
    finish: "glazed",
    bestSeller: true,
    available: true,
  },
  {
    id: "matte-vase-trio",
    name: "Matte Neutral Vase Trio",
    description: "Soft tones, clean silhouettes 🤎",
    price: 780,
    image: matteVaseTrio,
    category: "vases",
    color: "Beige",
    finish: "matte",
    bestSeller: true,
    available: true,
  },
  {
    id: "sculptural-vase",
    name: "Speckled Sculptural Mini Vase",
    description: "Statement piece for shelves 🌿",
    price: 350,
    image: sculpturalVase,
    category: "vases",
    color: "Cream",
    finish: "matte",
    bestSeller: true,
    available: true,
  },
  {
    id: "charcoal-dinner-plates",
    name: "Charcoal Dinner Plate Set",
    description: "Modern, bold, and timeless 🖤",
    price: 680,
    image: charcoalDinnerPlates,
    category: "tableware",
    color: "Charcoal",
    finish: "glazed",
    bestSeller: true,
    available: true,
  },
  {
    id: "sandstone-vase",
    name: "Sandstone Tall Vase",
    description: "Warm beige, elegant texture 🏺",
    price: 520,
    image: sandstoneVase,
    category: "vases",
    color: "Sand",
    finish: "matte",
    bestSeller: false,
    available: true,
  },
  {
    id: "white-bottle-vase",
    name: "Minimal White Bottle Vase",
    description: "Clean lines, airy look ✨",
    price: 380,
    image: whiteBottleVase,
    category: "vases",
    color: "White",
    finish: "matte",
    bestSeller: true,
    available: true,
  },
  {
    id: "beige-taupe-vases",
    name: "Beige & Taupe Decorative Vases",
    description: "Muted palette for modern homes 🏠",
    price: 620,
    image: beigeTaupeVases,
    category: "decor",
    color: "Beige",
    finish: "matte",
    bestSeller: false,
    available: true,
  },
  {
    id: "serving-bowl",
    name: "Handmade Serving Bowl",
    description: "Glazed finish, everyday-friendly 🍲",
    price: 290,
    image: servingBowl,
    category: "tableware",
    color: "Brown",
    finish: "glazed",
    bestSeller: false,
    available: true,
  },
  {
    id: "gift-set",
    name: "Gift Set: Cups + Side Plates",
    description: "Perfect for housewarming 🎁",
    price: 850,
    image: giftSet,
    category: "gifts",
    color: "Neutral",
    finish: "glazed",
    bestSeller: false,
    available: true,
  },
];

export const categories = [
  { id: "tableware", label: "Tableware", icon: "🍽️" },
  { id: "cups", label: "Cups & Mugs", icon: "☕" },
  { id: "vases", label: "Vases", icon: "🏺" },
  { id: "decor", label: "Minimal Home Décor", icon: "🏠" },
  { id: "gifts", label: "Gift Sets", icon: "🎁" },
] as const;
