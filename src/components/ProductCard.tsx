import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group card-hover rounded-sm overflow-hidden bg-card">
    <Link to={`/product/${product.id}`} className="block">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </Link>
    <div className="p-4">
      <Link to={`/product/${product.id}`}>
        <h3 className="font-heading text-base uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="font-heading text-primary text-lg">{product.price} EGP</span>
        <a
          href="https://www.instagram.com/byout.eg/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-heading uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          DM to Order
        </a>
      </div>
    </div>
  </div>
);

export default ProductCard;
