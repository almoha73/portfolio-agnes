import React from "react";
import moi from "../assets/IMG_20220816_072523_171.jpg";
import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";
import Navbar from "../components/Navbar";
const Profil = () => {
	return (
		<>
			<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col items-center w-full h-auto sm:h-screen">
				<Navbar />
				<main className="mt-14 w-full h-2/12 flex justify-center rounded-lg">
					<div className="flex justify-evenly items-center lg:flex-row  flex-col-reverse sm-w-9/12 w-10/12 bg-neutral-100 rounded-lg p-3 sm:p-5">
						<div className="w-11/12 sm:w-9/12 sm:gap-10 flex sm:flex-col flex-col justify-center items-center">
							<div className="mt-5 md:w-4/5 flex gap-2 justify-between">
								<FaHtml5 className="md:w-20 md:h-20 fill-orange-500" />{" "}
								<FaCss3Alt className="md:w-20 md:h-20 fill-blue-500" />
								<FaSass className="md:w-20 md:h-20 fill-pink-500" />{" "}
								<FaNpm className="md:w-20 md:h-20 fill-green-700" />{" "}
								<FaGithub className="md:w-20 md:h-20" />{" "}
								<SiJavascript className="md:w-20 md:h-20 fill-yellow-500" />{" "}
								<SiTailwindcss className="md:w-20 md:h-20 fill-blue-300" />{" "}
								<SiBootstrap className="md:w-20 md:h-20 fill-purple-500" />
							</div>
							<p className="md:w-4/5 md:text-xl mt-5 text-justify">
								Diplomée du parcours de 14 mois de chez OpenClassrooms, je suis
								spécialisée dans le Frontend avec le framework React.
								<br /> <br /> Pour ce qui est du style, je code beaucoup en
								Sass, mais aussi en tailwind et bootstrap que j'ai appris en
								plus de ma formation, tailwind étant mon préféré des framework
								css que j'utilise. <br />
								Mon objectif à court terme est de m'améliorer et d'acquérir un
								niveau élevé dans le framework React, commencer à utiliser
								Typecript dans mes projets. <br />
								Je souhaite aussi m'initier rapidement à d'autres frameworks
								front et apprendre le back. En ce qui concerne React, lors de ma
								formation j'ai appris à utiliser Redux Toolkit pour une
								authentification, manipuler le Context, utiliser les
								Styled-components, utiliser des librairies (Recharts, antd,
								react-hook-form ...), créer un npm et l'héberger (modale). De
								moi-même, j'ai appris Tailwind, l'utilisation de firebase pour 2
								projets (un de la formation et un projet personnel, l'initiation
								à Typescript est en cours).
							</p>
						</div>

						<img
							className="block w-2/4 sm:w-1/4 rounded-lg	"
							src={moi}
							alt="Moi"
						/>
					</div>
				</main>
			</div>
		</>
	);
};

export default Profil;
