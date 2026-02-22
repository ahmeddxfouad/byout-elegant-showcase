import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const colors = ["All", "Blue", "Green", "Beige", "Cream", "Charcoal", "Sand", "White", "Brown", "Neutral"];
const finishes = ["All", "matte", "glazed"];
const sortOptions = ["Newest", "Popular", "Price: Low", "Price: High"];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [color, setColor] = useState("All");
  const [finish, setFinish] = useState("All");
  const [sort, setSort] = useState("Newest");

  const filtered = useMemo(() => {
    let result = [...products];
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (color !== "All") result = result.filter((p) => p.color === color);
    if (finish !== "All") result = result.filter((p) => p.finish === finish);
    if (sort === "Price: Low") result.sort((a, b) => a.price - b.price);
    if (sort === "Price: High") result.sort((a, b) => b.price - a.price);
    if (sort === "Popular") result.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
    return result;
  }, [category, color, finish, sort]);

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-main">
        <h1 className="font-heading text-4xl md:text-5xl uppercase mb-2 text-foreground">Shop</h1>
        <p className="text-muted-foreground mb-8">Handcrafted homeware, made with love 🤎</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <FilterGroup
            label="Category"
            options={[{ id: "all", label: "All" }, ...categories.map((c) => ({ id: c.id, label: c.label }))]}
            value={category}
            onChange={setCategory}
          />
        </div>

        <div className="flex flex-wrap gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-heading uppercase tracking-wider text-xs">Color:</span>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="bg-card border border-border rounded-sm px-3 py-1.5 text-foreground text-sm"
            >
              {colors.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-heading uppercase tracking-wider text-xs">Finish:</span>
            <select
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              className="bg-card border border-border rounded-sm px-3 py-1.5 text-foreground text-sm"
            >
              {finishes.map((f) => <option key={f} value={f}>{f === "All" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-heading uppercase tracking-wider text-xs">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-card border border-border rounded-sm px-3 py-1.5 text-foreground text-sm"
            >
              {sortOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20 font-heading uppercase tracking-wider">
            No products match your filters
          </p>
        )}
      </div>
    </main>
  );
};

const FilterGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="flex flex-wrap gap-2">
    <span className="text-muted-foreground font-heading uppercase tracking-wider text-xs self-center mr-1">{label}:</span>
    {options.map((opt) => (
      <button
        key={opt.id}
        onClick={() => onChange(opt.id)}
        className={`font-heading text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm border transition-colors ${
          value === opt.id
            ? "bg-primary text-primary-foreground border-primary"
            : "border-border text-muted-foreground hover:border-primary hover:text-primary"
        }`}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

export default Shop;
