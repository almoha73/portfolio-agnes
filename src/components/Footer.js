import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-palette-1 py-4 w-full text-palette-5">
      <nav className="text-sm">
        <ul className="flex justify-center">
          <li className="mx-2"><Link to="/" className="text-palette-5 hover:text-palette-3">Accueil</Link></li>
          <li className="mx-2"><Link to="/profil" className="text-palette-5 hover:text-palette-3">Profil</Link></li>
          <li className="mx-2"><Link to="/portfolio" className="text-palette-5 hover:text-palette-3">Portfolio</Link></li>
          <li className="mx-2"><Link to="/contact" className="text-palette-5 hover:text-palette-3">Contact</Link></li>
        </ul>
      </nav>
      <div className="text-sm flex justify-center items-center mt-4">
        <Link to="/MentionsLegales" className="mx-2 text-palette-5 hover:text-palette-3">Mentions légales</Link>
        <p className="mx-2">© {new Date().getFullYear()} Agnès Beaumatin</p>
      </div>
    </footer>
  );
}

export default Footer;

