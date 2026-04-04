import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutHero from "@/assets/SnapInsta.to_610137273_17865722793542776_2806416153630550121_n.jpg";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";
import founder3 from "@/assets/founder-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
} as const;

const founders = [
  {
    name: "Gabriel Nunes",
    role: "Diretor Criativo",
    image: founder1,
    bio: "Lidera a visão criativa de cada projeto, garantindo que cada frame comunique com intenção e estratégia visual única.",
  },
  {
    name: "Rafael Torres",
    role: "Diretor de Fotografia",
    image: founder2,
    bio: "Especialista em iluminação cinematográfica, transforma conceitos em imagens que transcendem o convencional.",
  },
  {
    name: "André Costa",
    role: "Pós-Produção",
    image: founder3,
    bio: "Responsável pelo color grading, dá a cada projeto a identidade visual que o diferencia no mercado.",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Escurece o fundo conforme o scroll avança, começando mais escuro (0.6)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.6, 0.85, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* FIXED GLOBAL BACKGROUND */}
      <div className="fixed inset-0 w-full h-screen z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        {/* Dynamic Overlay that darkens on scroll */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-black z-10" 
        />
      </div>

      {/* CONTENT SCROLLING OVER BACKGROUND */}
      <div className="relative z-10">
        {/* Hero Spacer - Full Screen */}
        <section className="h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground tracking-wide mb-8">
              Sobre a Vinden
            </h1>
            <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              A Vinden existe para construir imagem com intenção. Unindo estratégia, identidade e execução em cada projeto para construir presença real.
            </p>
          </motion.div>
        </section>

        {/* Mission Section - Transparent */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-32 md:py-48 px-6 md:px-12 flex items-center justify-center"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Trabalhamos com artistas e marcas que entendem que estética não é detalhe, mas sim estratégia. Se o objetivo é apenas "ter um vídeo", provavelmente não somos a escolha certa.
            </p>
            <p className="text-foreground/80 font-artistic text-xl md:text-4xl italic mt-16 md:mt-24">
              "O que você mostra define o que percebem"
            </p>
          </div>
        </motion.section>

        {/* Founders Section */}
        <section className="py-24 md:py-32">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-light text-center text-foreground mb-24 px-6"
          >
            Fundadores
          </motion.h2>

          <div className="max-w-6xl mx-auto flex flex-col gap-32 md:gap-48 px-6">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                <div className={`w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative`}>
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className={`flex flex-col gap-4 md:w-1/2 ${i % 2 !== 0 ? "md:text-right md:items-end" : "md:text-left md:items-start"}`}>
                  <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-body">
                    {founder.role}
                  </span>
                  <h3 className="font-display text-3xl md:text-5xl font-light text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-md">
                    {founder.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Spacer */}
        <div className="h-[30vh]" />
      </div>
    </div>
  );
};

export default About;