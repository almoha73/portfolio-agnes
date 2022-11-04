import React from "react";
import { Parallax } from "react-parallax";
import Navbar from "../components/Navbar";
import Profil from "./Profil";
import { FaReact } from "react-icons/fa";


const Home = () => {
	return (
		<>
			<Parallax>
				<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col justify-center items-center w-full h-full">
					<Navbar />
					<main className="title w-10/12 h-4/12 text-neutral-100 mt-14 rounded-lg flex flex-col items-center">
						<div className="w-20 flex items-center justify-center">
                        <FaReact className="w-20 h-20 fill-red-500 stroke-1"/>
                        </div>
							
						

						<div className="p-8">
							<h1 className="text-4xl text-center mb-5">Agnès Beaumatin</h1>
							<p className="text-center text-xl">
								Développeur d'applications Javascript React
							</p>
						</div>
					</main>
				</div>
			</Parallax>

			<Parallax>
				<Profil />
			</Parallax>
		</>
	);
};

export default Home;
