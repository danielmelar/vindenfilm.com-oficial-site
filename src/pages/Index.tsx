import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Instagram, Youtube } from "lucide-react"; 
import sectionWork from "@/assets/SnapInsta.to_572040055_17856753357542776_7744339720567314343_n.jpg";
import sectionAbout from "@/assets/SnapInsta.to_572603706_17856753330542776_675896164524725598_n.jpg";
import sectionContact from "@/assets/SnapInsta.to_612548780_17865722814542776_7133087245881705495_n.jpg";
import heroBg from "@/assets/hero.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
} as const;

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden bg-background">
      {/* --- HERO VIDEO SECTION --- */}
      <motion.div 
        className="fixed inset-0 w-full h-screen overflow-hidden z-0"
        style={{ 
          scale: videoScale,
          opacity: videoOpacity
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline  
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Hero Scroll Indicator */}
      <section className="relative h-screen flex items-end justify-center z-10 pb-12 pointer-events-none">
        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white opacity-60 font-body">
            Role para ver
          </span>
          <ChevronDown className="w-5 h-5 text-white opacity-60 animate-bounce" />
        </motion.div>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <motion.div className="relative z-20 bg-background">
        {/* EFEITO ESFUMAÇADO (TRANSITION FADE) */}
        <div className="absolute -top-96 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          {/* Section 1 - Sobre */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-24 md:py-32 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="flex flex-col gap-6 order-2 md:order-1">
                <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
                  Não produzimos conteúdo.<br />
                  <span className="text-gradient-gold">Construímos imagem.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-lg">
                  A Vinden Film existe para construir imagens com intenção. Trabalhamos com artistas e marcas que entendem que estética não é detalhe, é estratégia.
                </p>
                <Link to="/sobre" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-all duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary/30 hover:border-foreground pb-1">
                  → Conheça a Vinden
                </Link>
              </div>
              <div className="overflow-hidden order-1 md:order-2 rounded-sm shadow-2xl">
                <img src={sectionAbout} alt="Sobre" className="w-full h-[400px] md:h-[550px] object-cover" loading="lazy" />
              </div>
            </div>
          </motion.section>

          {/* Section 2 - Trabalhos */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-24 md:py-32 px-6 md:px-12 bg-black/10"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="overflow-hidden rounded-sm shadow-2xl">
                <img src={sectionWork} alt="Trabalho" className="w-full h-[400px] md:h-[550px] object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
                  Imagens com intenção
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
                  Cada escolha visual comunica algo. Na Vinden, direção, captação e pós-produção não são etapas isoladas, mas um único processo criativo.
                </p>
                <Link to="/trabalhos" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-all duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary/30 hover:border-foreground pb-1">
                  Ver Trabalhos
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Section 3 - Contato */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-24 md:py-32 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="overflow-hidden order-1 md:order-2 rounded-sm shadow-2xl">
                <img src={sectionContact} alt="Contato" className="w-full h-[400px] md:h-[550px] object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col gap-6 order-2 md:order-1">
                <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
                  Vamos conversar sobre<br />
                  <span className="text-gradient-gold">seu projeto.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
                  Se você busca uma produção audiovisual estratégica, entre em contato conosco.
                </p>
                <Link to="/contato" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-all duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary/30 hover:border-foreground pb-1">
                  Contato
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;