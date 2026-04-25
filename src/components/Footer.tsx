import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 bg-background relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display italic text-2xl text-foreground mb-4 [transform:skewX(-15deg)]">
              Vinden Film
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Produção audiovisual com intenção.<br />
              Direção, captação e color grading como um único processo.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body text-primary">
              Navegação
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-foreground hover:text-primary transition-colors text-sm font-body">Home</Link>
              <Link to="/sobre" className="text-foreground hover:text-primary transition-colors text-sm font-body">Sobre</Link>
              <Link to="/trabalhos" className="text-foreground hover:text-primary transition-colors text-sm font-body">Trabalhos</Link>
              <Link to="/contato" className="text-foreground hover:text-primary transition-colors text-sm font-body">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body text-primary">
              Contato
            </h4>
            <div className="flex flex-col gap-2 text-sm text-foreground font-body">
              <span>vindenfilm.com</span>
              <span>+55 (11) 996317-1341</span>
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Vinden Film. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs font-body">
            Criado por 

            <Link to="https://danielmelar.com" className="transition-colors"> Daniel Aguilar</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
