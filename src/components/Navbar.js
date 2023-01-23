import React, { useState } from "react";
import MenuIcon from "../assets/bars-solid.svg";
import CloseIcon from "../assets/xmark-solid.svg";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
	};

	const navigation = [
		{ name: "Accueil", href: "/", key: uuidv4() },
		{ name: "Profil", href: "/profil", key: uuidv4() },
		{ name: "CV", href: "/curiculum-vitae", key: uuidv4() },
		{ name: "Portfolio", href: "/portfolio", key: uuidv4() },
		{ name: "Contact", href: "/contact", key: uuidv4() },
	];

	return (
		<header className="w-11/12 mx-auto">
			<div className="rounded-md mt-5 bg-neutral-700 px-2.5   w-full h-20 text-gray-300 flex flex-row justify-between items-center ">
				<div className="brand-logo text-l  sm:text-2xl px-2 w-1/2">
					Agnès Beaumatin
				</div>
				<ul className="w-1/2 hidden menu-list	lg:flex lg:flex-row lg:justify-between  text-xl ">
					{navigation.map((item) => (
						<NavLink
							key={item.key}
							to={item.href}
							className={({ isActive }) =>
								isActive
									? "nav-active underline hover:decoration-4 decoration-blue-500 hover:text-blue-500 text-blue-500"
									: "menu-list-item  px-2"
							}
							end
						>
							<li>{item.name}</li>
						</NavLink>
					))}
				</ul>
				<button
					onClick={() => {
						showSideMenu();
					}}
					className="lg:hidden menu-button  justify-end	"
				>
					{isSideMenuOpen ? (
						<img src={CloseIcon} className="w-8 h-8 px-2" alt="close"></img>
					) : (
						<img src={MenuIcon} className="w-8 h-8 px-2 	" alt="menu"></img>
					)}
				</button>
				{isSideMenuOpen ? SideMenu() : ""}
			</div>
		</header>
	);
}

function SideMenu() {
	return (
		<div className="z-10 fixed h-56 w-1/2 flex justify-center items-center text-neutral-700 sm:w-1/4 lg:hidden bg-neutral-100 top-28">
			<ul className="menu-list flex flex-col text-base font-bold">
				<li className="menu-list-item py-2 hover:bg-white hover:text-blue-500 		">
					<a href="/">Accueil</a>
				</li>
				<li className="menu-list-item  py-2 hover:bg-white hover:text-blue-500 	">
					<a href="/profil">Profil</a>
				</li>
				<li className="menu-list-item  py-2 hover:bg-white hover:text-blue-500 	">
					<a href="/curiculum-vitae">CV</a>
				</li>
				<li className="menu-list-item  py-2 hover:bg-white hover:text-blue-500 	">
					<a href="/portfolio">PortFolio</a>
				</li>
				<li className="menu-list-item  py-2 hover:bg-white hover:text-blue-500 	">
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</div>
	);
}
