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
			<div className="flex flex-col justify-center items-center w-full xl:min-h-[1024px] lg:min-h-[768px]">
				<main className="title w-10/12 py-8  sm:w-11/12 lg:mt-16 lg:gap-8 flex flex-col xl:flex-row items-center">
					<div className="flex flex-col  justify-center  items-center w-full sm:w-2/3  text-[#8C1636]">
						<div
							ref={text}
							className="text  sm:p-0 flex flex-col justify-center items-center  "
						>
							<h1 id="textel1" className="textel1 text-6xl lg:text-7xl xl:text-8xl text-center mb-5 font-bold">
								Agnès Beaumatin
							</h1>
							<div className=" w-20 flex items-center justify-center mb-5">
								<FaReact className="faReact w-20 h-20 fill-red-500 stroke-1" />
							</div>
							<p id="textel2" className="textel2 text-center text-xl lg:text-3xl">
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
