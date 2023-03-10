import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getScreenshots } from "../utils/fetchScreenshots";
import Card from "../components/Card";
import { uuidv4 } from "@firebase/util";

const Portfolio = () => {
	const [screenshots, setScreenshots] = useState([]);
	useEffect(() => {
		const loadData = async () => {
			const array = [];
			const d = await getScreenshots();
			await d.forEach((query) =>
				array.push({ key: query.id, screenshots: query.data() })
				
			);
			array.sort((a,b)=> a.screenshots.order - b.screenshots.order)
			setScreenshots(array);
		};
		loadData();
	}, [screenshots.length]);

	console.log(screenshots);

	return (
		<div className=" flex flex-col items-center w-full h-auto bg-[#F1EBED]  ">
			<Navbar />
			<main className="w-full h-auto mt-16 sm:mt-24 mb-16 text-black">
				<p className="w-11/12 mx-auto mb-4">
					Lien du code sur github de ce portfolio:{" "}
					<a
						href="https://github.com/almoha73/portfolio-agnes"
						className="text-xl text-blue-500"
					>
						Cliquez ici
					</a>
				</p>
				<p className=" w-11/12 mx-auto mb-4">
					Lien vers mon github:{" "}
					<a
						href="https://github.com/almoha73"
						className="text-xl text-blue-500"
					>
						Cliquez ici
					</a>
				</p>
				<div className=" flex flex-col gap-5 items-center justify-center">
					{screenshots &&
						screenshots.map((elt) => (
							<Card
								href={elt.screenshots.href}
								npm={elt.screenshots.npm}
								text={elt.screenshots.text}
								code={elt.screenshots.code}
								page={elt.screenshots.page}
								name={elt.screenshots.name}
								key={uuidv4()}
							/>
						))}
				</div>
			</main>
		</div>
	);
};

export default Portfolio;
