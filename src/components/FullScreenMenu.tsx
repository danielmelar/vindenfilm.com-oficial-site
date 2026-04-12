import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuBg = "https://assets.vindenfilm.com/fotos/foto-menu.jpg";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Trabalhos", path: "/trabalhos" },
  { label: "Contato", path: "/contato" },
];

const FullScreenMenu = ({ isOpen, onClose }: FullScreenMenuProps) => {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${menuBg})` }}
          />
          <div className="absolute inset-0 overlay-dark-heavy" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 left-6 md:left-12 z-10 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Fechar menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* Menu items */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20 flex-wrap justify-center px-6">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => handleLinkClick(item.path)}
                  className="font-montserrat text-2xl md:text-3xl font-light text-foreground hover:text-primary transition-colors duration-300 tracking-[0.2em] uppercase"
                >
                  {item.label}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
