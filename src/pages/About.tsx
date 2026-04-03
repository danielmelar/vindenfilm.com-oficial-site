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
    role: "Diretor Criativos",
    image: founder1,
    bio: "Com mais de 10 anos de experiência em direção audiovisual, Lucas lidera a visão criativa de cada projeto, garantindo que cada frame comunique com intenção.",
  },
  {
    name: "Rafael Torres",
    role: "Diretor de Fotografia",
    image: founder2,
    bio: "Especialista em captação e iluminação cinematográfica, Rafael transforma conceitos em imagens que transcendem o convencional.",
  },
  {
    name: "André Costa",
    role: "Colorista & Pós-Produção",
    image: founder3,
    bio: "Responsável pelo color grading e finalização, André dá a cada projeto a identidade visual que o diferencia no mercado.",
  },
];

const FounderCard = ({ founder, index }: { founder: typeof founders[number]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center min-h-[70vh] relative overflow-hidden`}
    >
      {/* Image with parallax */}
      <div className="w-full md:w-1/2 flex items-end justify-center relative h-[65vh] md:h-[80vh]">
        <motion.img
          src={founder.image}
          alt={founder.name}
          style={{ y, scale }}
          className="h-[90%] w-auto max-w-full object-contain object-bottom drop-shadow-2xl"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0">
        <span className="text-primary text-xs uppercase tracking-[0.3em] font-body mb-3">
          {founder.role}
        </span>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
          {founder.name}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body max-w-md">
          {founder.bio}
        </p>
      </div>
    </motion.div>

  );
};

const About = () => {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 overlay-dark-heavy" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-3xl text-center px-6"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground tracking-wide mb-8">
            Sobre a Vinden
          </h1>
          <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A Vinden existe para construir imagem com intenção. Cada projeto começa na definição de direção, narrativa e posicionamento, porque não é o volume que constrói relevância, mas a clareza de como um artista é percebido. Por isso, não trabalhamos para produzir mais, mas para construir presença, unindo estratégia, identidade e execução em cada projeto.
          </p>
        </motion.div>
      </section>

      {/* About text */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="pt-24 md:pt-32 pb-12 px-6 md:px-12"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-8">
            Trabalhamos com artistas e marcas que entendem que estética não é detalhe, mas sim estratégia. Se o objetivo é apenas "ter um vídeo", provavelmente não somos a escolha certa.
          </p>
          <p className="text-foreground/80 font-artistic text-xl md:text-4xl italic mt-16 md:mt-24">
            "O que você mostra define o que percebem"
          </p>
        </div>
      </motion.section>

      {/* Founders */}
      <section className="pt-12 pb-24 md:pb-32">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-light text-center text-foreground mb-20 px-6"
        >
          Fundadores
        </motion.h2>

        {/* Com uma pequena foto */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border border-border">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl font-light text-foreground mb-1">
                {founder.name}
              </h3>
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-body mb-4">
                {founder.role}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed font-body max-w-xs">
                {founder.bio}
              </p>
            </motion.div>
          ))}

          <br></br>
          <br></br>
        </div>
      </section>
    </div>
  );
};

export default About;
