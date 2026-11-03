import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// internal
import ScrollToTop from "../hooks/scroll-to-top";
import { animationCreate } from "../utils/utils";
import GdprBanner from "../components/gdpr-banner";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = ({ children }) => {
  useEffect(() => {
    animationCreate();
  }, []);

  return (
    <>
      <ScrollToTop />
      {children}
      <GdprBanner />
    </>
  );
};

export default Wrapper;
