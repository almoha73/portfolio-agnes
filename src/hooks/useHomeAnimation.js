import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHomeAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#textel1",
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out"
      }
    );

    tl.fromTo(
      "#textel2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".skill-icon",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.4"
    );

    tl.fromTo(
      ".cvbutton",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    );

    tl.fromTo(
      ".phone-container",
      { opacity: 0, scale: 0.8, rotationY: 45 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "expo.out"
      },
      "0.5"
    );

  }, []);
};

export default useHomeAnimation;

