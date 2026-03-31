import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
        Mais
      </span>
      <ChevronDown size={20} className="text-muted-foreground" />
    </div>
  );
};

export default ScrollIndicator;
