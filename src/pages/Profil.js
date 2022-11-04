import React from "react";
import moi from "../assets/IMG_20220816_072523_171.jpg";
import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";
const Profil = () => {
	return (
		<>
			<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col items-center w-full h-screen">
				<main className="mt-14 w-full h-2/12 flex justify-center rounded-lg">
					<div className="flex justify-evenly items-center sm:flex-row  flex-col-reverse sm-w-9/12 w-10/12 bg-neutral-100 rounded-lg p-3 sm:p-5">
						<div className="w-11/12 sm:w-9/12 sm:gap-10 flex sm:flex-col flex-col justify-center items-center">
							<div className="mt-5 md:w-4/5 flex gap-2 justify-between"><FaHtml5 className="md:w-20 md:h-20 fill-orange-500"/> <FaCss3Alt className="md:w-20 md:h-20 fill-blue-500"/><FaSass className="md:w-20 md:h-20 fill-pink-500"/> <FaNpm className="md:w-20 md:h-20 fill-green-500"/> <FaGithub className="md:w-20 md:h-20"/> <SiJavascript className="md:w-20 md:h-20 fill-yellow-500"/> <SiTailwindcss className="md:w-20 md:h-20 fill-blue-300"/> <SiBootstrap className="md:w-20 md:h-20 fill-purple-500"/></div>
							<p className="md:w-4/5 md:text-xl mt-5">
								Diplomée du parcours de 14 mois de chez OpenClassrooms, je suis spécialisée dans le Frontend avec le framework React.
								<br/> <br /> Pour ce qui est du style, je code beaucoup en Sass, mais aussi en tailwind et bootstrap que j'ai appris en plus de ma formation.
							</p>
						</div>

						<img className="block w-2/4 sm:w-1/4 rounded-lg	" src={moi} alt="Moi" />
					</div>
				</main>
			</div>
		</>
	);
};

export default Profil;
