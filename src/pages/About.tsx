import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const aboutHero = "https://assets.vindenfilm.com/fotos/foto-sobre.jpg";
const paulo = "https://assets.vindenfilm.com/fundadores/paulo.jpg";
const nunes = "https://assets.vindenfilm.com/fundadores/nunes.png";
const aguiar = "https://assets.vindenfilm.com/fundadores/aguiar.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
} as const;

const founders = [
  {
    name: "Paulo Henrique",
    role: "CEO",
    image: paulo,
    bio: "É quem define a visão e direciona o caminho criativo da Vinden. Atua na construção do posicionamento da empresa, garantindo coerência estética e intencionalidade em cada projeto. Na Vinden, Paulo lidera a visão estratégica e contribui com o olhar artístico, assegurando que cada entrega reflita identidade, sensibilidade e excelência visual.",
  },
  {
    name: "Gabriel Nunes",
    role: "Editor Chefe",
    image: nunes,
    bio: "É quem faz a ponte entre o set e a edição, mantendo a intenção do projeto até a entrega final. Na Vinden, Gabriel atua na direção interna dos projetos e na pós-produção, com foco em motion design e SFX, trazendo personalidade, movimento e intensão para cada entrega.",
  },
  {
    name: "Gabriel Aguiar",
    role: "Diretor de Fotografia",
    image: aguiar,
    bio: "É quem compõe o quadro e dá vida à atmosfera do projeto, garantindo que a luz, a arte e a câmera conversem em perfeita harmonia. Na Vinden, atua no comando da captação visual e da direção de arte, sendo o responsável por registrar a narrativa com excelência técnica e um olhar artístico refinado.",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollY } = useScroll();
  
  // Aumentando ainda mais a agressividade para fechar o vácuo.
  // Desktop: sobe 600px | Mobile: sobe 400px.
  const contentY = useTransform(
    scrollY, 
    [0, 500], 
    [0, isMobile ? -180 : -400]
  );

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
            <h1 className="font-display italic font-light text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight mb-8 uppercase">
              Sobre a Vinden
            </h1>
            <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              A Vinden existe para construir imagem com intenção. Unindo estratégia, identidade e execução em cada projeto para construir presença real.
            </p>
          </motion.div>
        </section>

        {/* Dynamic Wrapper to pull content up and pull the footer along with it */}
        <motion.div style={{ y: contentY, marginBottom: contentY }} className="relative">
          {/* Mission Section - Transparent */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="pt-0 pb-24 md:pb-32 px-6 md:px-12 flex items-center justify-center"
          >
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-6">
                <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  Cada projeto começa na definição de direção, narrativa e posicionamento, porque não é o volume que constrói relevância, mas a clareza de como um artista é percebido. Por isso, não trabalhamos para produzir mais, mas para construir presença, unindo estratégia, identidade e execução em cada projeto.
                </p>
                <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  Antes de qualquer câmera ligada, existe um processo de entender quem é o artista, o que ele comunica hoje e o que quer que comuniquem sobre ele amanhã. Esse intervalo entre o que é e o que precisa ser percebido, é onde o trabalho da Vinden começa de verdade.
                </p>
              </div>

              <div className="py-8 md:py-12">
                <p className="text-foreground/80 font-artistic text-xl md:text-4xl font-light italic">
                  "O que você mostra define o que percebem"
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  Trabalhamos com quem entende que ser consistente é diferente de aparecer com frequência. Nossos clientes sabem que cada projeto precisa deixar uma marca e construir reconhecimento, sabem que devem fazer com que a próxima pessoa que chegar ao perfil ou assistir a um vídeo entenda imediatamente o que você representa
                </p>
              </div>
            </div>
          </motion.section>

          {/* Founders Section */}
          <section className="py-24 md:py-24">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display italic text-3xl md:text-5xl font-light text-center text-foreground mb-24 px-6 uppercase"
            >
              Fundadores
            </motion.h2>

            <div className="max-w-6xl mx-auto flex flex-col gap-32 md:gap-48 px-6 uppercase">
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
                    <h3 className="font-display italic text-3xl md:text-5xl font-light text-foreground">
                      {founder.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-md lowercase">
                      {founder.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;