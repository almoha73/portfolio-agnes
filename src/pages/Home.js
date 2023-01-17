import React, { useEffect, useRef } from "react";
import Phone from "../components/Phone";
import { FaReact } from "react-icons/fa";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import cv from "../assets/CV.pdf";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);

const Home = () => {
	const text = useRef(null);

	const onload = () => {
		gsap
			.timeline()
			.fromTo(
				".faReact",
				{
					x: -100,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					stagger: 0.33,
					delay: 0.7,
				}
			)

			.to(".textel1", {
				text: "Agnès Beaumatin",
				ease: "none",
				scale: 2.5,
				yPercent: -580,
				delay: 0.3,
				duration: 0.4,
			});
	};

	const rotate = () => {
		gsap
			.timeline()
			.to(".faReact", {
				yPercent: 10,
			})
			.to(".faReact", {
				rotation: 360,
				duration: 0.7,
				delay: 1.7,
				fill: "#3B82F6",
				yPercent: 50,
			});
	};
	const splitText = () => {
		const tl = gsap.timeline({ repeat: 1, repeatDelay: 1 });
		tl.to("p", {
			duration: 2,
			text: " Développeur d'applications Javascript React",
		});
	};
	useEffect(() => {
		onload();
	}, []);

	useEffect(() => {
		rotate();
	}, []);

	useEffect(() => {
		splitText();
	}, []);

	return (
		<>
			<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col justify-center items-center w-full h-screen sm:h-screen">
				<main className="title w-10/12 xl:w-8/12 h-4/12 text-neutral-100 mt-14 rounded-lg flex flex-col sm:flex-row lg:justify-between  items-center">
					<div className="flex flex-col  justify-center items-center">
						<div className=" w-20 flex items-center justify-center">
							<FaReact className="faReact w-20 h-20 fill-red-500 stroke-1" />
						</div>

						<div ref={text} className="text p-8">
							<h1 id="textel1" className="textel1 -4xl text-center mb-5">
								Bonjour, je suis !
							</h1>
							<p id="textel2" className="textel2 text-center text-xl">
								{/* Développeur d'applications Javascript React */}
							</p>
						</div>
						<a
							href={cv}
							className="mb-8 block"
							target="_blank"
							rel="noreferrer"
						>
							Téléchargez le CV
						</a>
					</div>

					<Phone />
				</main>
			</div>
		</>
	);
};

export default Home;
