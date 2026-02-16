import React from "react";
import { useInView } from "react-intersection-observer";
import { HiOutlineCode, HiOutlineExternalLink } from "react-icons/hi";
import { SiNpm } from "react-icons/si";

const Card = ({ href, text, page, code, name, npm }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        {href ? (
          <img
            loading="lazy"
            src={href}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300 italic">
            Aperçu non disponible
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white text-xs font-bold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            Plus d'infos
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
          {text}
        </p>

        <div className="flex flex-wrap gap-2 relative z-20">
          {page && (
            <a
              href={page}
              title="Voir le projet"
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineExternalLink size={18} /> Projet
            </a>
          )}
          {code && (
            <a
              href={code}
              title="Voir le code"
              className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineCode size={18} /> Code
            </a>
          )}
          {npm && (
            <a
              href={npm}
              title="Voir le package NPM"
              className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-100 transition-all cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiNpm size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

