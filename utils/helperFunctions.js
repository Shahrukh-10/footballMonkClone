import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) =>
      setScrollY(latest * document.documentElement.scrollHeight)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  return { scrollY };
};





