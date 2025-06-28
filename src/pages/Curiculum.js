import React from "react";

const Curiculum = () => {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 py-12">
			<main className="container mx-auto px-4 py-8 lg:py-16 flex flex-col items-center justify-center gap-8 text-gray-800">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Mon CV et Recommandations</h1>
				<a
					href="https://bit.ly/3ZPJYe5"
					className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg md:text-xl"
					target="_blank"
					rel="noreferrer"
				>
					Télécharger mon CV
				</a>
				<a
					href="https://firebasestorage.googleapis.com/v0/b/portfolio-e5e20.appspot.com/o/CV%2FLettre%20de%20recommandation%20Mme%20BEAUMATIN%20Agn%C3%A8s.pdf?alt=media&token=72d9c145-2be8-4c51-b64a-2fc00b11600e"
					className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg md:text-xl"
					target="_blank"
					rel="noreferrer"
				>
					Lettre de recommandation
				</a>
			</main>
		</div>
	);
};

export default Curiculum;
