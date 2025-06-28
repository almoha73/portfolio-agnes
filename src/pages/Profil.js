import React, { useEffect } from "react";
import {
  FaHtml5, FaCss3Alt, FaSass, FaNpm, FaGithub, FaReact
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiBootstrap, SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

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
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 py-12">
      <main className="container mx-auto px-4 py-8 lg:py-16">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">Mon Profil</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <FaHtml5 className="text-6xl text-orange-500 hover:scale-110 transition-transform duration-300" />
              <FaCss3Alt className="text-6xl text-blue-500 hover:scale-110 transition-transform duration-300" />
              <FaSass className="text-6xl text-pink-500 hover:scale-110 transition-transform duration-300" />
              <SiJavascript className="text-6xl text-yellow-500 hover:scale-110 transition-transform duration-300" />
              <FaReact className="text-6xl text-blue-400 hover:scale-110 transition-transform duration-300" />
              <SiTailwindcss className="text-6xl text-teal-500 hover:scale-110 transition-transform duration-300" />
              <SiBootstrap className="text-6xl text-purple-600 hover:scale-110 transition-transform duration-300" />
              <TbBrandNextjs className="text-6xl text-gray-800 hover:scale-110 transition-transform duration-300" />
              <SiTypescript className="text-6xl text-blue-700 hover:scale-110 transition-transform duration-300" />
              <FaNpm className="text-6xl text-red-600 hover:scale-110 transition-transform duration-300" />
              <FaGithub className="text-6xl text-gray-800 hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-xl text-gray-700 leading-loose mb-6">
              Diplômée du parcours de 14 mois de chez OpenClassrooms, je suis spécialisée dans le Frontend avec le framework <strong>React</strong>.
            </p>
            <p className="text-xl text-gray-700 leading-loose mb-6">
              Pour ce qui est du style, je code beaucoup en <strong>Sass</strong>, mais aussi en <strong>Tailwind</strong> et <strong>Bootstrap</strong> que j'ai appris en plus de ma formation, Tailwind étant mon préféré des frameworks CSS que j'utilise.
            </p>
            <p className="text-xl text-gray-700 leading-loose mb-6">
              Vous trouverez dans mon portfolio mes projets personnels, suivis de mes projets de formation. Actuellement, je m'approprie <strong>NextJS</strong> et <strong>Typescript</strong> pour continuer à évoluer avec React avec un site de mémo relié à une base de données où je peux joindre des fichiers (photos, pdf, ...).
            </p>
            <p className="text-xl text-gray-700 leading-loose">
              Lors de ma formation j'ai appris à utiliser Redux Toolkit pour une authentification, manipuler le Context, utiliser les Styled-components, utiliser des librairies (Recharts, antd, react-hook-form, gsap ...), créer un npm et l'héberger (modale). Mais j'ai aussi appris à utiliser <strong>Figma</strong> pour créer des maquettes et j'ai été initiée aux méthodes agiles (<strong>SCRUM</strong>). De moi-même, j'ai appris Tailwind, l'utilisation de Firebase pour plusieurs projets.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <img
              className="w-full max-w-xs rounded-xl border-2 border-gray-200 shadow-xl transform hover:scale-105 transition-transform duration-300"
              src="https://firebasestorage.googleapis.com/v0/b/perso-6e317.appspot.com/o/Photos%2Fmoi%2Fagnes_CV.png?alt=media&token=b74fc244-5ed8-4934-b07b-0d27ed6f2254"
              alt="Agnès Beaumatin"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profil;
