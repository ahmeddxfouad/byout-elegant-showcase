import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import byoutLogo from "@/assets/byout-logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={byoutLogo} alt="BYOUT" className="h-10 mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Made with love & passion. Delivery all over Egypt 📍
          </p>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm mb-4 text-foreground">Shop</h4>
          <div className="flex flex-col gap-2">
            <Link to="/shop" className="btn-ghost text-sm">All Products</Link>
            <Link to="/shop?category=tableware" className="btn-ghost text-sm">Tableware</Link>
            <Link to="/shop?category=vases" className="btn-ghost text-sm">Vases</Link>
            <Link to="/shop?category=cups" className="btn-ghost text-sm">Cups & Mugs</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm mb-4 text-foreground">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="btn-ghost text-sm">About Us</Link>
            <Link to="/gallery" className="btn-ghost text-sm">Gallery</Link>
            <Link to="/custom-orders" className="btn-ghost text-sm">Custom Orders</Link>
            <Link to="/contact" className="btn-ghost text-sm">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm mb-4 text-foreground">Order</h4>
          <p className="text-muted-foreground text-sm mb-4">DM us on Instagram to place your order ✨</p>
          <a
            href="https://www.instagram.com/byout.eg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary text-xs py-2 px-5"
          >
            <Instagram size={16} />
            @byout.eg
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
        <p>© 2025 BYOUT. All rights reserved.</p>
        <p>Deliver all over Egypt 🇪🇬</p>
      </div>
    </div>
  </footer>
);

export default Footer;
