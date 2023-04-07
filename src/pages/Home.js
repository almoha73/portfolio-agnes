import React, { useEffect} from "react";
import Phone from "../components/Phone";
import { FaReact } from "react-icons/fa";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-full ">
        <main className="title w-10/12 py-8  sm:w-11/12 lg:m-16 lg:gap-8 flex flex-col xl:flex-row items-center">
          <div className="flex flex-col  justify-center  items-center w-full sm:w-2/3  text-[#8C1636]">
            <div className="text  sm:p-0 flex flex-col justify-center items-center  ">
              <h1
                id="textel1"
                className="textel1 text-6xl lg:text-7xl xl:text-8xl text-center mb-5 font-bold	"
              >
                Agnès Beaumatin
              </h1>
              <div className=" w-20 flex items-center justify-center mb-5">
                <FaReact className="faReact w-20 h-20 fill-red-500 stroke-1 " />
              </div>
              <p
                id="textel2"
                className="textel2 text-center text-xl lg:text-3xl 	"
              >
                Développeur d'applications Javascript React
              </p>
            </div>
            <a
              href="https://bit.ly/3ZPJYe5"
              className="cvbutton my-8 block lg:text-2xl bg-secondary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Téléchargez le CV
            </a>
          </div>

          <div className="phone-container">
            <Phone />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
