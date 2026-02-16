import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 w-full text-slate-500 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black gradient-text">AB.</div>

          <nav className="text-sm">
            <ul className="flex flex-wrap justify-center gap-6">
              <li><Link to="/" className="hover:text-primary-600 transition-colors font-medium">Accueil</Link></li>
              <li><Link to="/profil" className="hover:text-primary-600 transition-colors font-medium">Profil</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-600 transition-colors font-medium">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary-600 transition-colors font-medium">Contact</Link></li>
            </ul>
          </nav>

          <div className="text-sm flex flex-col md:flex-row items-center gap-4">
            <Link to="/MentionsLegales" className="hover:text-primary-600 transition-colors font-medium underline underline-offset-4 decoration-slate-200">Mentions légales</Link>
            <p className="text-slate-400">© {new Date().getFullYear()} Agnès Beaumatin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


