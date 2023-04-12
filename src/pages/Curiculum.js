import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Curiculum = () => {
	return (
		<div className=" flex flex-col items-start w-full  min-h-screen">
			<Navbar />
			<div className="flex flex-col xl:p-24 items-center justify-center w-full  xl:w-2/3 flex-1 gap-8 text-[#802836]">
				<a
					href="https://bit.ly/3ZPJYe5"
					className="text-4xl   hover:text-white hover:bg-[#802836] border shadow-lg px-4 py-2 rounded-lg"
					target="_blank"
					rel="noreferrer"
				>
					CV
				</a>
				<a
					href="https://firebasestorage.googleapis.com/v0/b/portfolio-e5e20.appspot.com/o/CV%2FLettre%20de%20recommandation%20Mme%20BEAUMATIN%20Agn%C3%A8s.pdf?alt=media&token=72d9c145-2be8-4c51-b64a-2fc00b11600e"
					className="text-xl sm:text-4xl  hover:text-white hover:bg-[#802836] border shadow-lg py-2 px-4 rounded-lg"
					target="_blank"
					rel="noreferrer"
				>
					Lettre de recommandation
				</a>
			</div>
			<Footer />
		</div>
	);
};

export default Curiculum;
