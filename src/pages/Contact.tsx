import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import contactBg from "@/assets/midias-oficiais/fotos/foto-contato.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - can be connected to backend
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative h-screen bg-background overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className="absolute inset-0 overlay-dark-heavy" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 pt-16 pb-8 md:pt-20 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 h-full md:h-auto"
        >
          {/* Info */}
          <div className="flex flex-col justify-center gap-6 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-5">
              <a href="mailto:contato@vindenfilm.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body text-sm">
                <Mail size={18} className="text-primary" />
                vindenfilm@gmail.com
              </a>
              <a href="tel:+55119963171341" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body text-sm">
                <Phone size={18} className="text-primary" />
                +55 (11) 996317-1341
              </a>
              <div className="flex items-center gap-3 text-foreground font-body text-sm">
                <MapPin size={18} className="text-primary" />
                São Paulo, Brasil
              </div>
            </div>

            <div className="flex gap-5">
              <a href="https://instagram.com/vindenfilm" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={22} />
              </a> */}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 h-full justify-center">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mb-2 block">
                Nome
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mb-2 block">
                Mensagem
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.2em] px-8 py-3 hover:bg-primary/80 transition-colors"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
