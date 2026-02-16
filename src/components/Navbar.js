import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const navigation = [
  { name: "Accueil", href: "/", key: uuidv4() },
  { name: "Profil", href: "/profil", key: uuidv4() },
  { name: "CV", href: "/curiculum-vitae", key: uuidv4() },
  { name: "Portfolio", href: "/portfolio", key: uuidv4() },
  { name: "Contact", href: "/contact", key: uuidv4() },
];

export default function Navbar() {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSideMenu = () => {
    setisSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${scrolled
              ? "glass shadow-lg"
              : "bg-transparent"
            }`}
        >
          <div className="brand-logo text-2xl font-black tracking-tighter">
            <NavLink to="/" className="gradient-text">
              AB.
            </NavLink>
          </div>

          <ul className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-all duration-300 hover:text-primary-500 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full ${isActive
                      ? "text-primary-600 after:w-full"
                      : "text-slate-600"
                    }`
                  }
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-primary-500/20 hover:-translate-y-0.5"
            >
              Me contacter
            </NavLink>
          </div>

          <button onClick={showSideMenu} className="lg:hidden text-slate-800 p-2">
            {isSideMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 ${isSideMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navigation.map((item) => (
            <NavLink
              key={item.key}
              to={item.href}
              onClick={showSideMenu}
              className={({ isActive }) =>
                `text-3xl font-bold transition-colors ${isActive ? "text-primary-600" : "text-slate-800"
                }`
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={showSideMenu}
            className="mt-4 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-xl"
          >
            Me contacter
          </NavLink>
        </div>
      </div>
    </header>
  );
}

