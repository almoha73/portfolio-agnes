import React, { useEffect } from "react";

import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const Profil = () => {
	gsap.registerPlugin(SplitText);
	const animeText = () => {
		var tl = gsap.timeline(),
			mySplitText = new SplitText(".text", { type: "lines,words" }),
			words = mySplitText.words; //an array of all the divs that wrap each character

		gsap.set(".text", { perspective: 400 });
		tl.fromTo(
			".box",
			{
				x: -150,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				stagger: 0.33,
				delay: 0.7,
			}
		).from(
			words,
			{
				duration: 0.2,
				opacity: 0,
				scale: 0,
				y: 40,
				rotationX: 180,
				transformOrigin: "0% 50% -50",
				ease: "power1.inOut",
				stagger: 0.01,
			},
			"+=0"
		);
	};

	useEffect(() => {
		animeText();
	}, []);
	return (
		<>
			<div className=" flex flex-col items-center w-full h-auto sm:h-screen">
				<Navbar />
				<main className="mt-14 w-full h-2/12 flex justify-center rounded-lg mb-32">
					<div className="box flex justify-evenly items-center lg:flex-row  flex-col-reverse sm-w-9/12 w-10/12 bg-neutral-100 rounded-lg p-3 sm:p-5">
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
							<p className="text md:w-4/5 md:text-xl mt-5 text-justify">
								Diplom??e du parcours de 14 mois de chez OpenClassrooms, je suis
								sp??cialis??e dans le Frontend avec le framework React.
								<br /> <br /> Pour ce qui est du style, je code beaucoup en
								Sass, mais aussi en tailwind et bootstrap que j'ai appris en
								plus de ma formation, tailwind ??tant mon pr??f??r?? des frameworks
								css que j'utilise. <br />
								Mon objectif ?? court et moyen terme est de m'am??liorer et
								d'acqu??rir un niveau ??lev?? dans le framework React, commencer ??
								utiliser Typecript dans mes projets en me formant ?? Angular,
								m'initier au Backend.
								<br />
								En ce qui concerne React, lors de ma formation j'ai appris ??
								utiliser Redux Toolkit pour une authentification, manipuler le
								Context, utiliser les Styled-components, utiliser des librairies
								(Recharts, antd, react-hook-form, gsap ...), cr??er un npm et
								l'h??berger (modale). <br />
								De moi-m??me, j'ai appris Tailwind, l'utilisation de firebase
								pour plusieurs projets.
							</p>
						</div>

						<img
							className="block w-2/4 sm:w-1/4 rounded-lg	"
							src="https://firebasestorage.googleapis.com/v0/b/perso-6e317.appspot.com/o/Photos%2Fmoi%2Fagnes_CV.png?alt=media&token=b74fc244-5ed8-4934-b07b-0d27ed6f2254"
							alt="Moi"
						/>
					</div>
				</main>
			</div>
		</>
	);
};

export default Profil;
