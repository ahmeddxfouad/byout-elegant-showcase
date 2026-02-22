import { useParams, Link } from "react-router-dom";
import { Instagram, ArrowLeft, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useState } from "react";

const faqs = [
  { q: "How long does delivery take?", a: "Delivery takes 3–7 business days across Egypt." },
  { q: "Can I customize this piece?", a: "Yes! DM us on Instagram with your preferred colors, sizes, or glaze finish." },
  { q: "Is this dishwasher safe?", a: "Most glazed items are dishwasher safe. Matte pieces are best hand-washed." },
  { q: "Do you offer gift wrapping?", a: "Yes — just mention it in your DM and we'll wrap it beautifully 🎁" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <main className="pt-24 pb-20 container-main text-center">
        <h1 className="font-heading text-3xl uppercase text-foreground mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-main">
        <Link to="/shop" className="btn-ghost inline-flex items-center gap-1 mb-6 text-sm">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square rounded-sm overflow-hidden bg-card"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-2">{product.category}</p>
            <h1 className="font-heading text-3xl md:text-4xl uppercase text-foreground mb-3">{product.name}</h1>
            <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <span className="border border-border rounded-sm px-3 py-1">Color: {product.color}</span>
              <span className="border border-border rounded-sm px-3 py-1">Finish: {product.finish}</span>
            </div>

            <p className="font-heading text-3xl text-primary mb-8">{product.price} EGP</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://www.instagram.com/byout.eg/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center inline-flex items-center justify-center gap-2"
              >
                <Instagram size={18} />
                Order via Instagram DM
              </a>
              <Link to="/custom-orders" className="btn-secondary text-center">
                Request Customization
              </Link>
            </div>

            {/* How it's made */}
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="font-heading text-lg uppercase tracking-wider text-foreground mb-3">How It's Made</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each piece is handcrafted by skilled artisans using locally sourced clay. Shaped on the wheel, 
                dried slowly, then fired at high temperatures for durability. The finish is applied by hand, 
                making every piece unique.
              </p>
            </div>

            <div className="border-t border-border pt-8 mb-8">
              <p className="text-muted-foreground text-sm">📍 Delivery across Egypt — 3 to 7 business days</p>
            </div>

            {/* FAQ */}
            <div className="border-t border-border pt-8">
              <h3 className="font-heading text-lg uppercase tracking-wider text-foreground mb-4">FAQ</h3>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-foreground text-sm">{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="text-muted-foreground text-sm pb-4 animate-fade-in">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
