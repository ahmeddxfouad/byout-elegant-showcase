import { Instagram } from "lucide-react";

const MobileOrderCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
    <a
      href="https://www.instagram.com/byout.eg/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
    >
      <Instagram size={18} />
      Order via Instagram DM
    </a>
  </div>
);

export default MobileOrderCTA;
