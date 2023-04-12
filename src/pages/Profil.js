import React, { useEffect } from "react";

import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Footer from "../components/Footer";

const Profil = () => {
  gsap.registerPlugin(SplitText);
  const animeText = () => {
    var tl = gsap.timeline();
    
    tl.fromTo(
      ".box",
      {
        x: -150,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.33,
        delay: 0.7,
      }
    )
  };

  useEffect(() => {
    animeText();
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center w-full h-auto sm:h-screen">
        <Navbar />
        <main className="mt-14 w-full h-2/12 flex justify-center flex-1 rounded-lg mb-32">
          <div className="box flex justify-evenly items-center lg:flex-row  flex-col-reverse sm-w-9/12 w-10/12 bg-neutral-100 rounded-lg p-3 sm:p-5">
            <div className="w-full sm:w-9/12 sm:gap-10 flex sm:flex-col flex-col justify-center items-center">
              <div className="mt-5 md:w-4/5 flex gap-2 justify-between">
                <FaHtml5 className="md:w-20 md:h-20 fill-orange-500" />{" "}
                <FaCss3Alt className="md:w-20 md:h-20 fill-blue-500" />
                <FaSass className="md:w-20 md:h-20 fill-pink-500" />{" "}
                <FaNpm className="md:w-20 md:h-20 fill-green-700" />{" "}
                <FaGithub className="md:w-20 md:h-20" />{" "}
                <SiJavascript className="md:w-20 md:h-20 fill-yellow-500" />{" "}
                <SiTailwindcss className="md:w-20 md:h-20 fill-blue-300" />{" "}
                <SiBootstrap className="md:w-20 md:h-20 fill-purple-500" />
                <TbBrandNextjs className="md:w-20 md:h-20 fill-transparent" />
                <SiTypescript className="md:w-20 md:h-20 fill-blue-500" />
              </div>
              <div class="w-full mx-auto">
                <p
                  class="text w-full md:w-4/5 md:text-xl mt-5 text-justify hyphens-auto tracking-wide md:tracking-normal"
                  lang="fr"
                >
                  Diplomée du parcours de 14 mois de chez OpenClassrooms, je
                  suis spécialisée dans le Frontend avec le framework{" "}
                  <strong>React</strong>.
                  <br />
                  <br /> Pour ce qui est du style, je code beaucoup en{" "}
                  <strong >Sass</strong> , mais aussi en{" "}
                  <strong >Tailwind</strong> et{" "}
                  <strong>Bootstrap</strong> que j'ai appris
                  en plus de ma formation, Tailwind étant mon préféré des
                  frameworks css que j'utilise.
                  <br />
                  <br />
                  Vous trouverez dans mon portfolio mes projets personnels,
                  suivis de mes projets de formation. Actuellement, je
                  m'approprie <strong>NextJS </strong>
                  et <strong>Typescript</strong> pour
                  continuer à évoluer avec React avec un site de mémo relié à
                  une base de données où je peux joindre des fichiers (photos,
                  pdf, ...).
                  <br />
                  <br />
                  Lors de ma formation j'ai appris à utiliser Redux Toolkit pour
                  une authentification, manipuler le Context, utiliser les
                  Styled-components, utiliser des librairies (Recharts, antd,
                  react-hook-form, gsap ...), créer un npm et l'héberger
                  (modale). Mais j'ai aussi appris à utiliser{" "}
                  <strong>Figma</strong> pour créer des
                  maquettes et j'ai été initiée aux méthodes agiles (
                  <strong>SCRUM</strong>).
                  <br />
                  De moi-même, j'ai appris Tailwind, l'utilisation de firebase
                  pour plusieurs projets.
                </p>
              </div>
            </div>

            <img
              className="block w-2/4 sm:w-1/4 rounded-lg	"
              src="https://firebasestorage.googleapis.com/v0/b/perso-6e317.appspot.com/o/Photos%2Fmoi%2Fagnes_CV.png?alt=media&token=b74fc244-5ed8-4934-b07b-0d27ed6f2254"
              alt="Moi"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Profil;
