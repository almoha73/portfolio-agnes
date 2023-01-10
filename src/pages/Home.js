import React from "react";
import Phone from "../components/Phone";
import { FaReact } from "react-icons/fa";

const Home = () => {
	return (
		<>
			<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col justify-center items-center w-full h-auto sm:h-screen">
				<main className="title w-10/12 xl:w-6/12 h-4/12 text-neutral-100 mt-14 rounded-lg flex flex-col sm:flex-row lg:justify-between  items-center">
					<div className="flex flex-col  justify-center items-center">
						<div className="w-20 flex items-center justify-center">
							<FaReact className="w-20 h-20 fill-red-500 stroke-1" />
						</div>

						<div className="p-8">
							<h1 className="text-4xl text-center mb-5">Agnès Beaumatin</h1>
							<p className="text-center text-xl">
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
