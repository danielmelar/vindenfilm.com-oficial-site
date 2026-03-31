import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import contactBg from "@/assets/SnapInsta.to_572040055_17856753357542776_7744339720567314343_n.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - can be connected to backend
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className="fixed inset-0 overlay-dark-heavy" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            {/* <h1 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-wide">
              Contato
            </h1> */}
            {/* <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Tem um projeto que exige mais do que execução? Vamos conversar.
            </p> */}

            <div className="flex flex-col gap-5 mt-4">
              <a href="mailto:contato@vindenfilm.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body text-sm">
                <Mail size={18} className="text-primary" />
                contato@vindenfilm.com
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body text-sm">
                <Phone size={18} className="text-primary" />
                +55 (11) 99999-9999
              </a>
              <div className="flex items-center gap-3 text-foreground font-body text-sm">
                <MapPin size={18} className="text-primary" />
                São Paulo, Brasil
              </div>
            </div>

            <div className="flex gap-5 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                rows={5}
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
