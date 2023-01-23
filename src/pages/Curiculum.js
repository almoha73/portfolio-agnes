import React from "react";
import Navbar from "../components/Navbar";

const Curiculum = () => {
	return (
		<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col items-center w-full h-auto h-screen">
			<Navbar />
			<div className="flex flex-col items-center justify-center w-full h-screen gap-8">
				<a
					href="https://firebasestorage.googleapis.com/v0/b/portfolio-e5e20.appspot.com/o/CV%2FCV.pdf?alt=media&token=e8511cda-cf06-4bdf-bc46-0892b6040914"
					className="text-4xl text-white  hover:text-white hover:bg-blue-500 border px-4 py-2 rounded-lg"
					target="_blank"
					rel="noreferrer"
				>
					CV
				</a>
				<a
					href="https://firebasestorage.googleapis.com/v0/b/portfolio-e5e20.appspot.com/o/CV%2FLettre%20de%20recommandation%20Mme%20BEAUMATIN%20Agn%C3%A8s.pdf?alt=media&token=72d9c145-2be8-4c51-b64a-2fc00b11600e"
					className="text-xl sm:text-4xl text-white hover:text-white hover:bg-blue-500 border py-2 px-4 rounded-lg"
					target="_blank"
					rel="noreferrer"
				>
					Lettre de recommandation
				</a>
			</div>
		</div>
	);
};

export default Curiculum;
