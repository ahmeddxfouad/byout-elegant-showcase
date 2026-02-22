import { useState } from "react";
import { motion } from "framer-motion";

const CustomOrders = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-main max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-4">Custom Orders</h1>
          <p className="text-muted-foreground text-lg mb-4">
            We can customize your style ✨ Tell us what you're looking for and we'll make it happen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {["Custom Glaze Colors", "Personalized Sets", "Engraving (optional)"].map((opt) => (
              <div key={opt} className="bg-card border border-border rounded-sm p-4 text-center">
                <span className="text-foreground text-sm">{opt}</span>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="bg-card border border-primary/30 rounded-sm p-10 text-center">
              <p className="font-heading text-2xl uppercase text-primary mb-2">Thank You! ✨</p>
              <p className="text-muted-foreground">We'll contact you to confirm details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Name" name="name" required />
                <Input label="Phone" name="phone" type="tel" required />
              </div>
              <Input label="City" name="city" required />
              <div>
                <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">
                  Preferred Style
                </label>
                <select className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm">
                  <option>Minimal</option>
                  <option>Earthy</option>
                  <option>Bold</option>
                </select>
              </div>
              <Input label="Color Preference" name="color" placeholder="e.g. ocean blue, sage green..." />
              <Input label="Item Type" name="item" placeholder="e.g. dinner set, vases..." required />
              <div>
                <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">Notes</label>
                <textarea
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm min-h-[100px] resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit Request
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
};

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground"
    />
  </div>
);

export default CustomOrders;
