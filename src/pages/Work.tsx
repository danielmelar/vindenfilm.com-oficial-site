import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/hero.mp4";

const isYoutubeUrl = (url: string) => url.includes("youtube.com");
const isVideoFile = (url: string) => url.endsWith(".mp4") || url.endsWith(".webm");

const ParallaxProjectMedia = ({ video, image }: { video: string, image: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] top-[-10%]">
        {isYoutubeUrl(video) ? (
          <iframe 
            className="w-full h-full object-cover pointer-events-none scale-110"
            src={`${video}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playlist=${video.split('/').pop()}`}
            title="Project Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : isVideoFile(video) ? (
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline  
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </motion.div>
    </div>
  );
};

const projects = [
  {
    title: "Horizonte Dourado",
    category: "Filme Institucional",
    description:
      "Documentário visual para uma marca de luxo, capturando a essência da excelência artesanal em paisagens cinematográficas.",
    image: work1,
    link: "#",
    video: "https://www.youtube.com/embed/TU-a3ntzSAA",
  },
  {
    title: "Clipe Sillas Micael",
    category: "Clipe Musical",
    description:
      "Documentário visual para uma marca de luxo, capturando a essência da excelência artesanal em paisagens cinematográficas.",
    image: "",
    link: "#",
    video: work4,
  },
  {
    title: "Luzes da Cidade",
    category: "Videoclipe",
    description:
      "Direção e produção de videoclipe musical com estética urbana noturna, explorando o contraste entre luz artificial e escuridão.",
    image: work2,
    link: "#",
    video: "https://www.youtube.com/embed/ErwS24cBZPc"
  },
  {
    title: "Noir Editorial",
    category: "Fashion Film",
    description:
      "Fashion film para marca de alta costura, onde a iluminação e o color grading criam uma atmosfera de elegância intemporal.",
    image: work3,
    link: "#",
    video: "https://www.youtube.com/embed/eQ3-UA65Eok"
  },
];

const Work = () => {
  return (
    <div className="bg-background">
      {/* Work sections - each ~90vh */}
      {projects.map((project, i) => (
        <motion.section
          key={project.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative h-[90vh] overflow-hidden"
        >
          {/* Background with Parallax */}
          <ParallaxProjectMedia video={project.video} image={project.image} />
          
          <div className="absolute inset-0 overlay-dark-heavy" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 lg:p-16 pb-16 md:pb-20">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-body mb-3">
              {project.category}
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              {project.title}
            </h2>
            <p className="text-muted-foreground font-body text-sm md:text-base max-w-lg leading-relaxed mb-6">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-body w-fit border-b border-primary hover:border-foreground pb-1"
            >
              Saber Mais
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Work;