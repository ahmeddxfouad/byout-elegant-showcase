import { motion } from "framer-motion";

const values = [
  { icon: "🤲", title: "Handcrafted", desc: "Every piece is shaped, glazed, and finished by hand with care and intention." },
  { icon: "✨", title: "Elegant Minimalism", desc: "Clean lines and earthy tones designed to elevate everyday living." },
  { icon: "🎨", title: "Made for Your Style", desc: "Custom colors, sets, and finishes — tailored to your home aesthetic." },
];

const About = () => (
  <main className="pt-20 md:pt-24 pb-20">
    <div className="container-main max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">About BYOUT</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          BYOUT is made with love & passion — minimal pieces designed to elevate everyday living.
          We believe that the objects you surround yourself with shape how you feel, and we craft each piece 
          to bring warmth, beauty, and intention into your home.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          From our hands to your table — every plate, cup, and vase is a small act of care.
          We source quality materials, celebrate natural textures, and honor the beauty of simplicity.
          Based in Egypt, delivering elegance across the country 🇪🇬
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-sm p-8 text-center"
          >
            <span className="text-4xl mb-4 block">{v.icon}</span>
            <h3 className="font-heading text-lg uppercase tracking-wider text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default About;
