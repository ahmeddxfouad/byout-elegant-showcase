import { useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-main max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-4">Contact & Order</h1>
          <p className="text-muted-foreground text-lg mb-8">
            The fastest way to order is via Instagram DM 💬
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <a
              href="https://www.instagram.com/byout.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center inline-flex items-center justify-center gap-2"
            >
              <Instagram size={18} />
              DM on Instagram
            </a>
            <button className="btn-secondary text-center inline-flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              WhatsApp (Coming Soon)
            </button>
          </div>

          <p className="text-muted-foreground text-sm mb-10">📍 Deliver all over Egypt — 3 to 7 business days</p>

          <div className="border-t border-border pt-10">
            <h2 className="font-heading text-2xl uppercase text-foreground mb-6">Send a Message</h2>
            {submitted ? (
              <div className="bg-card border border-primary/30 rounded-sm p-8 text-center">
                <p className="font-heading text-xl uppercase text-primary mb-2">Message Sent! ✨</p>
                <p className="text-muted-foreground text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">Name</label>
                    <input
                      required
                      className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">Email or Phone</label>
                    <input
                      required
                      className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground"
                      placeholder="How to reach you"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">Message</label>
                  <textarea
                    required
                    className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm min-h-[120px] resize-none placeholder:text-muted-foreground"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
