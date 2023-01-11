import React, { useEffect, useRef } from "react";
import Phone from "../components/Phone";
import { FaReact } from "react-icons/fa";
import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
//import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin();
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

	useEffect(() => {
		onload();
	}, []);

	useEffect(() => {
		rotate();
	}, []);

	return (
		<>
			<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col justify-center items-center w-full h-auto sm:h-screen">
				<main className="title w-10/12 xl:w-8/12 h-4/12 text-neutral-100 mt-14 rounded-lg flex flex-col sm:flex-row lg:justify-between  items-center">
					<div className="flex flex-col  justify-center items-center">
						<div className=" w-20 flex items-center justify-center">
							<FaReact className="faReact w-20 h-20 fill-red-500 stroke-1" />
						</div>

						<div ref={text} className="text p-8">
							<h1 className="textel1 -4xl text-center mb-5">Agnès Beaumatin</h1>
							<p className="textel2 text-center text-xl">
								Développeur d'applications Javascript React
							</p>
						</div>
					</div>

					<Phone />
				</main>
			</div>
		</>
	);
};

export default Home;
