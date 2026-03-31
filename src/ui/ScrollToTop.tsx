import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollTo } from "@/lib/utils";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Defina a duração do scroll em milissegundos aqui
    const scrollDuration = 1200; 

    if (!hash) {
      smoothScrollTo(0, scrollDuration);
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        smoothScrollTo(element.offsetTop, scrollDuration);
      }
    }
  }, [pathname, hash]);

  return null;
}