import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollIndicator from "@/components/ScrollIndicator";
// import heroBg from "@/assets/hero-bg.jpg";
import sectionWork from "@/assets/SnapInsta.to_572040055_17856753357542776_7744339720567314343_n.jpg";
import sectionAbout from "@/assets/SnapInsta.to_572603706_17856753330542776_675896164524725598_n.jpg";
import sectionContact from "@/assets/SnapInsta.to_612548780_17865722814542776_7133087245881705495_n.jpg";

import heroBg from "@/assets/hero.mp4";

import logo from "@/assets/VINDEN-VETORIZADA.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
} as const;

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "start end"]
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);
  // Removendo o contentY que estava causando o espaço extra
  
  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Fixed Video Background - Only visible during hero section */}
      <motion.div 
        className="absolute inset-0 w-full overflow-hidden"
        style={{ 
          height: "100vh",
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
        <div className="absolute inset-0 overlay-dark" />
      </motion.div>

      {/* Hero Content */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-4 md:gap-8"
          >
            {["PRODUÇÃO", "DIREÇÃO", "EXCELÊNCIA"].map((word, i) => (
              <span
                key={word}
                className="text-xs md:text-sm  uppercase tracking-[0.3em] text-muted-foreground font-body"
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Content Container - This will cover the video */}
      <motion.div 
        className="relative z-30 bg-background"
        style={{
          marginTop: "-20px",
        }}
      >
        {/* Blur transition at the top */}
        <div 
          className="absolute top-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(13, 13, 13, 0.1) 30%, rgba(13, 13, 13, 0.8) 70%, rgba(13, 13, 13, 1) 100%)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)"
          }}
        />
        
        {/* Content with proper spacing from blur */}
        <div className="relative z-10 pt-12">
        {/* Section 1 - Sobre */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-24 md:py-32 px-6 md:px-12 pt-32"
        >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
              Não produzimos conteúdo.<br />
              <span className="text-gradient-gold">Construímos imagem.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
              A Vinden Film existe para construir imagens com intenção. Trabalhamos com artistas e marcas que entendem que estética não é detalhe, é estratégia. Não buscamos volume. Buscamos projetos que exigem mais do que apenas execução.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary hover:border-foreground pb-1"
            >
              → Conheça a Vinden
            </Link>
          </div>
          <div className="overflow-hidden order-1 md:order-2">
            <img
              src={sectionAbout}
              alt="Sobre a Vinden Film"
              className="w-full h-[400px] md:h-[550px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 2 - Trabalhos */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 md:py-32 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="overflow-hidden">
            <img
              src={sectionWork}
              alt="Trabalho cinematográfico"
              className="w-full h-[400px] md:h-[550px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
              Imagens com intenção
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
              Cada escolha visual comunica algo, ou expõe a falta de direção. Na Vinden, direção, captação e pós-produção não são etapas isoladas, mas um único processo criativo. O resultado são narrativas visuais que constroem percepção e consolidam o posicionamento de cada projeto.
            </p>
            <Link
              to="/trabalhos"
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary hover:border-foreground pb-1"
            >
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
          className="py-24 md:py-32 px-6 md:px-12 pb-12"
        >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="overflow-hidden">
            <img
              src={sectionContact}
              alt="Contato Vinden Film"
              className="w-full h-[400px] md:h-[550px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
              Vamos conversar sobre<br />
              <span className="text-gradient-gold">seu projeto.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
              Se você busca uma produção audiovisual que vai além da execução técnica, que entende o poder da imagem como ferramenta estratégica, entre em contato. Queremos ouvir sobre o seu projeto
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary hover:border-foreground pb-1"
            >
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
