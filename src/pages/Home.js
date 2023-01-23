import React, { useEffect, useRef } from "react";
import Phone from "../components/Phone";
import { FaReact } from "react-icons/fa";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);

const Home = () => {
	const text = useRef(null);

	const onload = () => {
		gsap.timeline().fromTo(
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
		);
	};

	const rotate = () => {
		gsap
			.timeline()

			.to(".faReact", {
				rotation: 360,
				duration: 0.7,
				delay: 1.7,
				fill: "#3B82F6",
			});
	};

	useEffect(() => {
		onload();
	}, []);

	useEffect(() => {
		rotate();
	}, []);

	return (
		<>
			<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col justify-center items-center w-full h-auto sm:h-screen">
				<main className="title w-10/12 mx-auto xl:w-8/12  text-neutral-100  rounded-lg flex flex-col sm:flex-row lg:justify-between  items-center">
					<div className="flex flex-col  justify-center items-center w-1/2">
						<div
							ref={text}
							className="text p-8 flex flex-col justify-center items-center"
						>
							<h1 id="textel1" className="textel1 text-6xl text-center mb-5">
								Agnès Beaumatin
							</h1>
							<div className=" w-20 flex items-center justify-center mb-5">
								<FaReact className="faReact w-20 h-20 fill-red-500 stroke-1" />
							</div>
							<p id="textel2" className="textel2 text-center text-xl">
								Développeur d'applications Javascript React
							</p>
						</div>
						<a
							href="https://firebasestorage.googleapis.com/v0/b/portfolio-e5e20.appspot.com/o/CV%2FCV.pdf?alt=media&token=e8511cda-cf06-4bdf-bc46-0892b6040914"
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
