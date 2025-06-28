import React, { useState } from "react";
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

  const showSideMenu = () => {
    setisSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full mx-auto bg-palette-1 backdrop-blur-sm shadow-md">
      <div className="w-11/12 mx-auto">
        <div className="rounded-md px-2.5 w-full h-20 text-palette-5 flex flex-row justify-between items-center">
          <div className="brand-logo text-xl sm:text-2xl px-2 w-1/2 font-bold">
            <NavLink to="/">Agnès Beaumatin</NavLink>
          </div>
          <ul className="hidden lg:flex lg:flex-row lg:justify-between text-xl items-center">
            {navigation.map((item) => (
              <li key={item.key} className="mx-2">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "pb-1 border-b-2 border-palette-3 text-palette-3"
                      : "pb-1 border-b-2 border-transparent hover:border-palette-3 transition-colors duration-300"
                  }
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button onClick={showSideMenu} className="lg:hidden menu-button">
            {isSideMenuOpen ? (
              <FaTimes className="w-8 h-8 px-2" />
            ) : (
              <FaBars className="w-8 h-8 px-2" />
            )}
          </button>
        </div>
      </div>
      {isSideMenuOpen && (
        <div className="lg:hidden bg-palette-1 backdrop-blur-sm shadow-lg absolute top-20 left-0 w-full">
          <ul className="flex flex-col items-center py-4">
            {navigation.map((item) => (
              <li key={item.key} className="my-2">
                <NavLink
                  to={item.href}
                  onClick={showSideMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-palette-3 font-bold"
                      : "text-palette-5 hover:text-palette-3 transition-colors duration-300"
                  }
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
