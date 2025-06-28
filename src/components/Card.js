import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * Composant Card.
 * Affiche une carte contenant les informations d'un projet.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.href - Lien vers le screenshot du projet.
 * @param {string} props.text - Texte de présentation du projet.
 * @param {string} props.page - Lien vers la page du projet.
 * @param {string} props.code - Lien vers le code source du projet.
 * @param {string} props.name - Nom du projet.
 * @param {string} props.npm - Lien vers le package npm du projet.
 * @returns {JSX.Element} Élément JSX représentant le composant Card.
 */

const Card = ({ href, text, page, code, name, npm }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`bg-palette-5 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${inView ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
    >
      {href && (
        <div className="w-full h-48 overflow-hidden">
          <img
            loading="lazy"
            src={href}
            alt="project screenshot"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-palette-1 mb-2">{name}</h3>
        <p className="text-palette-1 text-base mb-4">{text}</p>

        <div className="flex flex-col space-y-2">
          {page && (
            <a
              href={page}
              className="text-palette-2 hover:text-palette-3 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Voir le projet
            </a>
          )}
          {npm && (
            <a
              href={npm}
              className="text-palette-2 hover:text-palette-3 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Voir le package npm
            </a>
          )}
          {code && (
            <a
              href={code}
              className="text-palette-2 hover:text-palette-3 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Voir le code source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
