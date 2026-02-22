import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { products } from "@/data/products";

const images = products.map((p) => ({ src: p.image, alt: p.name }));

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-main">
        <h1 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-2">Gallery</h1>
        <p className="text-muted-foreground mb-10">A closer look at our pieces ✨</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setSelected(i)}
              className="aspect-square overflow-hidden rounded-sm group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <motion.img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
