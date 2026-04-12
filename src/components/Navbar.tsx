import { useState } from "react";
import { Menu } from "lucide-react";
import FullScreenMenu from "./FullScreenMenu";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/logo-vetorizada.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-foreground hover:text-primary transition-colors duration-300"
          aria-label="Abrir menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            <img src={logo} alt="Vinden Film" className="w-24 md:w-32 lg:w-40" />
          </Link>
        </div>
      </nav>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
