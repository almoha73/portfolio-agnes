import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const useHomeAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#textel1, #textel2",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        stagger: 0.5,
        position: "relative",
      }
    );

    tl.fromTo(
      ".faReact",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.33, duration: 1 }
    );

    tl.to(".faReact", {
      rotation: 360,
      duration: 0.7,
      fill: "#3B82F6",
    });

    tl.fromTo(
      ".cvbutton",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.call(() => {
      gsap.set("#textel1, #textel2, .faReact, .cvbutton", {
        clearProps: "opacity,transform",
      });
    });
  }, []);
};

export default useHomeAnimation;
