import React, { useEffect, useState } from "react";
import { getScreenshots } from "../utils/fetchScreenshots";
import Card from "../components/Card";
import { HiChevronDoubleUp } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4

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
  }, []); // Empty dependency array to run only once on mount

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
  }, [showScroll]); // Add showScroll to dependency array

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50">
      <main className="container mx-auto px-4 py-8 lg:py-16 text-gray-800 flex-1">
        <p className="w-11/12 mx-auto mb-4 text-lg">
          Lien du code sur GitHub de ce portfolio:{" "}
          <a
            href="https://github.com/almoha73/portfolio-agnes"
            className="text-blue-600 hover:underline font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            Cliquez ici
          </a>
        </p>
        <p className="w-11/12 mx-auto mb-8 text-lg">
          Lien vers mon GitHub:{" "}
          <a
            href="https://github.com/almoha73"
            className="text-blue-600 hover:underline font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            Cliquez ici
          </a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {screenshots.map((elt) => (
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
          ))}
        </div>
        <button
          className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${showScroll ? "opacity-100" : "opacity-0"}`}
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }} // Keep display none for initial render
        >
          <HiChevronDoubleUp size={24} />
        </button>
      </main>
    </div>
  );
};

export default Portfolio;
