import { Link } from "react-router-dom";
import { Instagram, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const bestSellers = products.filter((p) => p.bestSeller).slice(0, 6);
const galleryImages = products.slice(0, 6).map((p) => p.image);

const Index = () => {
  return (
    <main className="pt-16 md:pt-20 pb-16 md:pb-0">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="BYOUT ceramics collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="container-main relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.p variants={fadeUp} custom={0} className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-4">
              For Elegant Home
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-foreground mb-6">
              Elegant pieces for an elegant home.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-md">
              Handmade homeware & tableware. Delivery all over Egypt. Custom styles available.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary text-center">
                Shop Collection
              </Link>
              <a
                href="https://www.instagram.com/byout.eg/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center inline-flex items-center justify-center gap-2"
              >
                <Instagram size={18} />
                Order via Instagram DM
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-center mb-12 text-foreground">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="block bg-card border border-border rounded-sm p-6 text-center card-hover"
                >
                  <span className="text-3xl mb-3 block">{cat.icon}</span>
                  <span className="font-heading text-sm uppercase tracking-widest text-foreground">{cat.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground">Best Sellers</h2>
            <Link to="/shop" className="btn-ghost inline-flex items-center gap-1 font-heading uppercase text-sm tracking-wider">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Banner */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-secondary rounded-sm p-10 md:p-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground mb-4">
              We Can Customize Your Style
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Want a custom color, glaze, or set? Tell us your vision and we'll bring it to life ✨
            </p>
            <Link to="/custom-orders" className="btn-primary">
              Request a Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border">
        <div className="container-main flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <p className="font-heading text-xl uppercase tracking-wider text-foreground">
            Trusted by home lovers across Egypt
          </p>
          <div className="flex items-center gap-2 text-primary">
            <Instagram size={20} />
            <span className="font-heading text-lg">4.9k+ followers on Instagram</span>
          </div>
        </div>
      </section>

      {/* Instagram Preview Grid */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-center mb-12 text-foreground">
            Follow Us on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/byout.eg/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-sm group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <img
                  src={img}
                  alt="BYOUT Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
