import React from "react";
import Phone from "../components/Phone";
import { FaReact, FaNodeJs, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import useHomeAnimation from "../hooks/useHomeAnimation";

const Home = () => {
  useHomeAnimation();

  const skills = [
    { icon: <FaReact />, color: "text-sky-500", label: "React" },
    { icon: <FaJs />, color: "text-yellow-400", label: "Javascript" },
    { icon: <SiTailwindcss />, color: "text-cyan-400", label: "Tailwind" },
    { icon: <FaNodeJs />, color: "text-green-500", label: "Node.js" },
    { icon: <SiFirebase />, color: "text-orange-500", label: "Firebase" },
    { icon: <FaGithub />, color: "text-slate-800", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-secondary-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-16">
        <div className="flex flex-col items-start w-full xl:w-7/12">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            Disponible pour de nouveaux projets
          </div>

          <h1
            id="textel1"
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-slate-900"
          >
            Agnès <br />
            <span className="gradient-text">Beaumatin</span>
          </h1>

          <p
            id="textel2"
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl leading-relaxed"
          >
            Développeuse d'applications <span className="text-primary-600 font-bold">Javascript React</span> passionnée par le design UI/UX et les interfaces interactives.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="skill-icon flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-slate-100 rounded-xl hover:shadow-md transition-all cursor-default"
              >
                <span className={`${skill.color} text-xl`}>{skill.icon}</span>
                <span className="text-sm font-medium text-slate-700">{skill.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://bit.ly/3ZPJYe5"
              className="cvbutton flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
            >
              Télécharger le CV
            </a>
            <a
              href="/portfolio"
              className="flex items-center justify-center bg-white border border-slate-200 hover:border-primary-500 text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all hover:-translate-y-1"
            >
              Voir mon Portfolio
            </a>
          </div>
        </div>

        <div className="phone-container relative xl:w-5/12 flex justify-center items-center">
          {/* Decorative ring */}
          <div className="absolute w-[120%] h-[120%] border-2 border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite] -z-10"></div>
          <Phone />
        </div>
      </main>
    </div>
  );
};

export default Home;

