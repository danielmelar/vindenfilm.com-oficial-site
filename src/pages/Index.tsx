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

const ParallaxImage = ({ src, alt, direction = "right" }: { src: string, alt: string, direction?: "left" | "right" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`absolute ${direction === "right" ? "right-0" : "left-0"} top-0 bottom-0 w-full md:w-3/4 z-0 opacity-40 md:opacity-60 overflow-hidden`}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y }}
        className="w-full h-[120%] object-cover absolute top-0" 
        loading="lazy" 
      />
      <div className={`absolute inset-0 bg-gradient-to-${direction === "right" ? "r" : "l"} from-background via-background/50 to-transparent`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative overflow-x-hidden bg-background">
      {/* --- HERO VIDEO BACKGROUND (FIXED) --- */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline  
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content / Spacer */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 pointer-events-none z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-[0.2em] uppercase font-extralight leading-none">
            Vinden Film
          </h1>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-montserrat text-[9px] md:text-xs uppercase tracking-[0.4em] mt-4 text-foreground"
          >
            Audiovisual com intenção
          </motion.span>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {/* <span className="text-[10px] uppercase tracking-[0.4em] text-white opacity-60 font-body">
            mais
          </span>
          <ChevronDown className="w-5 h-5 text-white opacity-60 animate-bounce" /> */}
        </motion.div>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <motion.div className="relative z-20 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="relative z-10">
          {/* Section 1 - Sobre */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative min-h-[80vh] flex items-center py-24 md:py-32 px-6 md:px-12 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="flex flex-col gap-6 md:w-1/2">
                <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
                  Não produzimos conteúdo.<br />
                  <span className="text-gradient-gold">Construímos imagem.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-lg">
                  A Vinden Film existe para construir imagens com intenção. Trabalhamos com artistas e marcas que entendem que estética não é detalhe, é estratégia.
                </p>
                <Link to="/sobre" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-all duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary/30 hover:border-foreground pb-1">
                  Conheça a Vinden
                </Link>
              </div>
            </div>
            {/* Background Integrated Image */}
            <ParallaxImage src={sectionAbout} alt="Sobre" direction="right" />
          </motion.section>

          {/* Section 2 - Trabalhos */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative min-h-[80vh] flex items-center py-24 md:py-32 px-6 md:px-12 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto w-full relative z-10 flex justify-end">
              <div className="flex flex-col gap-6 md:w-1/2">
                <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
                  Imagens com<br />
                  <span className="text-gradient-gold">intenção.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-lg">
                  Cada escolha visual comunica algo. Na Vinden, direção, captação e pós-produção não são etapas isoladas, mas um único processo criativo.
                </p>
                <Link to="/trabalhos" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-all duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary/30 hover:border-foreground pb-1">
                  Ver Trabalhos
                </Link>
              </div>
            </div>
            {/* Background Integrated Image */}
            <ParallaxImage src={sectionWork} alt="Trabalho" direction="left" />
          </motion.section>

          {/* Section 3 - Contato */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative min-h-[80vh] flex items-center py-24 md:py-32 px-6 md:px-12 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="flex flex-col gap-6 md:w-1/2">
                <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
                  Vamos conversar sobre<br />
                  <span className="text-gradient-gold">seu projeto.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-lg">
                  Se você busca uma produção audiovisual estratégica, entre em contato conosco para construir algo memorável.
                </p>
                <Link to="/contato" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-all duration-300 text-sm uppercase tracking-[0.2em] font-body mt-2 w-fit border-b border-primary/30 hover:border-foreground pb-1">
                  Contato
                </Link>
              </div>
            </div>
            {/* Background Integrated Image */}
            <ParallaxImage src={sectionContact} alt="Contato" direction="right" />
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;