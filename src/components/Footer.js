import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-secondary py-4 w-full">
      <nav className="text-primary text-sm">
        <ul className="flex justify-center">
          <li className="mx-2"><Link to="/">Accueil</Link></li>
          <li className="mx-2"><Link to="/profil">Profil</Link></li>
          <li className="mx-2"><Link to="/portfolio">Portfolio</Link></li>
          <li className="mx-2"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="text-primary text-sm flex justify-center items-center mt-4">
        <Link to="/MentionsLegales" className="mx-2">Mentions légales</Link>
        <p className="mx-2">© {new Date().getFullYear()} Agnès Beaumatin</p>
      </div>
    </footer>
  );
}

export default Footer;

