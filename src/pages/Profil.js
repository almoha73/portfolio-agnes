import React from "react";
import {
  FaSass, FaGithub, FaReact, FaBriefcase, FaGraduationCap, FaUser
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiTypescript, SiFirebase, SiFigma
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Profil = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Next.js", icon: <TbBrandNextjs className="text-slate-900" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Sass", icon: <FaSass className="text-pink-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-slate-800" /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <main className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Aside: Profile Image and Socials */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white rounded-[3rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group">
                <div className="aspect-square relative rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://firebasestorage.googleapis.com/v0/b/perso-6e317.appspot.com/o/Photos%2Fmoi%2Fagnes_CV.png?alt=media&token=b74fc244-5ed8-4934-b07b-0d27ed6f2254"
                    alt="Agnès Beaumatin"
                  />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 px-1">Coordonnées</h3>
                <div className="space-y-4">
                  <a href="mailto:almoha73@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-primary-600 font-medium transition-colors">
                    <span className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-lg"><FaUser /></span>
                    almoha73@gmail.com
                  </a>
                  <a href="https://github.com/almoha73" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary-600 font-medium transition-colors">
                    <span className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-lg"><FaGithub /></span>
                    @almoha73
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="lg:w-2/3 space-y-16">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                À propos de <span className="gradient-text">moi</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Développeuse Front-end passionnée par l'écosystème <span className="text-primary-600 font-bold">React</span>, je conçois des interfaces web alliant performance technique et élégance visuelle.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center text-xl mb-6">
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Formation</h3>
                <p className="text-slate-500 text-sm font-bold mb-4 uppercase tracking-widest">OpenClassrooms</p>
                <p className="text-slate-600 leading-relaxed">
                  Parcours intensif de 14 mois spécialisé en Frontend React. Réalisation de 14 projets concrets couvrant l'ensemble du cycle de développement.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-2xl flex items-center justify-center text-xl mb-6">
                  <FaBriefcase />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Freelance</h3>
                <p className="text-slate-500 text-sm font-bold mb-4 uppercase tracking-widest">2023 - Présent</p>
                <p className="text-slate-600 leading-relaxed">
                  Accompagnement de projets variés, de l'intégration de maquettes Figma complexes au développement d'applications web interactives.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-8 border-b-4 border-slate-100 pb-2 inline-block">Stack Technique</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-50 shadow-sm group hover:border-primary-200 transition-colors">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span className="font-bold text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Ma Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed italic">
                "Je crois en un code propré, maintenable et accessible. Chaque pixel compte pour offrir une expérience utilisateur exceptionnelle."
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profil;
