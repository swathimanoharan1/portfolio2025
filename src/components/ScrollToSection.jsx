import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      // Delay slightly to ensure DOM is ready
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 1000,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      }, 100);
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
