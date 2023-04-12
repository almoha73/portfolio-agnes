import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getScreenshots } from "../utils/fetchScreenshots";
import Card from "../components/Card";
import { uuidv4 } from "@firebase/util";
import { HiChevronDoubleUp } from "react-icons/hi";

/**
 * Composant Portfolio.
 * Affiche les screenshots de projets et permet de retourner en haut de la page en cours de scroll grâce à une flêche de retour.
 * @returns {JSX.Element} Élément JSX représentant le composant Portfolio.
 */
const Portfolio = () => {
  const [screenshots, setScreenshots] = useState([]); // État représentant les screenshots à afficher
  const [showScroll, setShowScroll] = useState(false); // État représentant l'affichage du bouton "retour en haut"

  useEffect(() => {
    /**
     * Charge les données des screenshots et les trie.
     * @async
     */
    const loadData = async () => {
      // récupère les données des screenshots
      const array = [];
      const d = await getScreenshots();
      await d.forEach(
        (
          query //parcourt les données des screenshots récupérées et stocke chaque élément dans un tableau array sous forme d'objet contenant une clé key et les données screenshots associées
        ) => array.push({ key: query.id, screenshots: query.data() })
      );
      array.sort((a, b) => a.screenshots.order - b.screenshots.order);
      setScreenshots(array);
    };
    loadData();
  }, [screenshots.length]);

  console.log(screenshots);

  /**
   * Vérifie la position de la page et met à jour l'état showScroll en conséquence.
   */
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  /**
   * Fait défiler la page jusqu'en haut avec un effet de transition.
   */
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    /**
     * Supprime l'événement de l'objet window lors du démontage du composant pour éviter les fuites de mémoire.
     */
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  return (
    <div className=" flex flex-col items-center w-full h-auto bg-[#F1EBED]  ">
      <Navbar />
      <main className="w-full h-auto mt-8 sm:mt-24 mb-16 text-black flex-1">
        <p className="w-11/12 mx-auto mb-4">
          Lien du code sur github de ce portfolio:{" "}
          <a
            href="https://github.com/almoha73/portfolio-agnes"
            className="text-xl text-blue-500"
          >
            Cliquez ici
          </a>
        </p>
        <p className=" w-11/12 mx-auto mb-4">
          Lien vers mon github:{" "}
          <a
            href="https://github.com/almoha73"
            className="text-xl text-blue-500"
          >
            Cliquez ici
          </a>
        </p>
        <div className=" flex flex-col gap-5 items-center justify-center">
          {screenshots &&
            screenshots.map((elt) => {
              /**
               * Affiche le composant Card pour chaque screenshot.
               * @param {Object} elt - L'élément à afficher. --> Card
               *  @param {string} elt.href - Lien vers le projet.
               * @param {string} elt.npm - Lien vers le package npm.
               * @param {string} elt.text - Texte de présentation du projet.
               * @param {string} elt.code - Lien vers le code source du projet.
               * @param {string} elt.page - Lien vers la page du projet.
               * @param {string} elt.name - Nom du projet.
               * @returns {JSX.Element} Élément JSX représentant le composant Card.
               */
              return (
                <Card
                  href={elt.screenshots.href}
                  npm={elt.screenshots.npm}
                  text={elt.screenshots.text}
                  code={elt.screenshots.code}
                  page={elt.screenshots.page}
                  name={elt.screenshots.name}
                  key={uuidv4()}
                  {...elt}
                />
              );
            })}
        </div>
        <div
          className="scrollTop"
          onClick={scrollTop}
          style={{
            display: showScroll ? "flex" : "none",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "999",
          }}
        >
          <div className="w-8">
            <HiChevronDoubleUp
              className="text-secondary cursor-pointer"
              size={30}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
