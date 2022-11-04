import React, { useState } from "react";
import MenuIcon from "../assets/bars-solid.svg";
import CloseIcon from "../assets/xmark-solid.svg";

export default function Navbar() {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
	};

	return (
		<header className="w-11/12">
			<div className="rounded-md mt-5 bg-neutral-700 px-2.5   w-full h-28 text-gray-300 flex flex-row justify-between items-center ">
				<div className="brand-logo text-l  sm:text-2xl font-bold px-2 w-1/2">
					Agnès Beaumatin
				</div>
				<ul className="w-1/2 hidden menu-list	lg:flex lg:flex-row lg:justify-between  text-xl font-bold">
					<li className="menu-list-item px-2">
						<a href="#accueil">Accueil</a>
					</li>
					<li className="menu-list-item  px-2">
						<a href="#profil">Profil</a>
					</li>
					<li className="menu-list-item  px-2">
						<a href="#etudes">CV</a>
					</li>
					<li className="menu-list-item  px-2">
						<a href="#portfolio">Portfolio</a>
					</li>
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
		<div className="fixed h-56 w-1/2 flex justify-center items-center text-neutral-700 sm:w-1/4 lg:hidden bg-neutral-100 top-36">
			<ul className="menu-list flex flex-col text-xs font-bold">
				<li className="menu-list-item py-2 hover:bg-white hover:text-red-500  text-2xl		">
					<a href="#accueil">Accueil</a>
				</li>
				<li className="menu-list-item  py-2 hover:bg-white hover:text-red-500 	text-2xl	">
					<a href="#profil">Profil</a>
				</li>
				<li className="menu-list-item  py-2 hover:bg-white hover:text-red-500 	text-2xl	">
					<a href="#etudes">Etudes</a>
				</li>
				<li className="menu-list-item  py-2 hover:bg-white hover:text-red-500 	text-2xl	">
					<a href="#portfolio">PortFolio</a>
				</li>
			</ul>
		</div>
	);
}
