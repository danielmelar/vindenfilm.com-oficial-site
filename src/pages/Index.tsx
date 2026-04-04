import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero.mp4";
import sectionWork from "@/assets/SnapInsta.to_572040055_17856753357542776_7744339720567314343_n.jpg";
import sectionAbout from "@/assets/SnapInsta.to_572603706_17856753330542776_675896164524725598_n.jpg";
import sectionContact from "@/assets/SnapInsta.to_612548780_17865722814542776_7133087245881705495_n.jpg";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.4, 0.8, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* --- FIXED VIDEO BACKGROUND --- */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline  
        />
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-black z-10" 
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tighter uppercase font-extralight leading-none">
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

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
            <span className="text-[8px] uppercase tracking-[0.4em] text-white opacity-40 font-body">
              Role para explorar
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        </section>

        {/* Section 1 - Sobre */}
        <section className="py-32 md:py-56 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="flex flex-col gap-6 md:w-[45%]">
              <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
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
            <div className="w-full md:w-[65%] aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.9)] bg-background">
              <img src={sectionAbout} alt="Sobre" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Section 2 - Trabalhos */}
        <section className="py-32 md:py-56 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            <div className="flex flex-col gap-6 md:w-[45%]">
              <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
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
            <div className="w-full md:w-[65%] aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.9)] bg-background">
              <img src={sectionWork} alt="Trabalho" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Section 3 - Contato */}
        <section className="py-32 md:py-56 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="flex flex-col gap-6 md:w-[45%]">
              <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
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
            <div className="w-full md:w-[65%] aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.9)] bg-background">
              <img src={sectionContact} alt="Contato" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Final Spacer */}
        <div className="h-[20vh]" />
      </div>
    </div>
  );
};

export default Index;