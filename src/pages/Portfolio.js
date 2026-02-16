import React, { useEffect, useState } from "react";
import { getScreenshots } from "../utils/fetchScreenshots";
import Card from "../components/Card";
import { HiChevronDoubleUp, HiOutlineExternalLink } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

const Portfolio = () => {
  const [screenshots, setScreenshots] = useState([]);
  const [showScroll, setShowScroll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");

  useEffect(() => {
    const loadData = async () => {
      const array = [];
      const d = await getScreenshots();
      d.forEach((query) => array.push({ key: query.id, screenshots: query.data() }));
      array.sort((a, b) => a.screenshots.order - b.screenshots.order);
      setScreenshots(array);
    };
    loadData();
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <main className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 px-4">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Mes <span className="gradient-text">Projets</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Une sélection de mes travaux récents, allant des applications web complexes aux intégrations créatives.
            Retrouvez tout mon code sur mon <a href="https://github.com/almoha73" className="text-primary-600 font-bold hover:underline inline-flex items-center gap-1">GitHub <HiOutlineExternalLink /></a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {screenshots.map((elt) => (
            <Card
              key={elt.key || elt.screenshots.name}
              href={elt.screenshots.href}
              npm={elt.screenshots.npm}
              text={elt.screenshots.text}
              code={elt.screenshots.code}
              page={elt.screenshots.page}
              name={elt.screenshots.name}
            />
          ))}
        </div>

        <button
          className={`fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 z-50 ${showScroll ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
            }`}
          onClick={scrollTop}
        >
          <HiChevronDoubleUp size={24} />
        </button>
      </main>
    </div>
  );
};

export default Portfolio;

