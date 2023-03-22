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
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <>
      <div
        ref={ref}
        className={`flex flex-col xl:flex-row border p-4 w-11/12 text-black h-auto rounded shadow-lg card ${
          inView ? "animate__fadeInUp" : ""
        }`}
      >
        {href && (
          <div className="flex justify-center">
            <img
              loading="lazy"
              src={href}
              alt="project screenshot"
              className="xl:max-w-[700px]"
            />
          </div>
        )}

        <div className="py-2  xl:px-6">
          <p className="text-xl text-justify">{text}</p>
          <br />
          {href ? (
            <p className="text-xl">
              Lien github pages:
              <a
                href={page}
                className="text-blue-500 hover:text-[#802836]"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {name}
              </a>
            </p>
          ) : (
            <p className="text-xl">
              Lien du package sur npm:
              <a
                href={npm}
                className="text-blue-500 hover:text-[#802836]"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {name}
              </a>
            </p>
          )}

          <p className="text-xl">
            Lien vers le code sur github:{" "}
            <a
              href={code}
              className="text-blue-500 hover:text-[#802836]"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Code {name}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
