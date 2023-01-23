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
			setScreenshots(array);
		};
		loadData();
	}, [screenshots.length]);

	console.log(screenshots);

	return (
		<div className="bg-gradient-to-r from-stone-500 to-neutral-800 flex flex-col items-center w-full h-auto">
			<Navbar />
			<main className="w-full h-auto mt-16 sm:mt-24 mb-16 ">
				<div className=" flex flex-col gap-5 items-center justify-center">
					{screenshots &&
						screenshots.map((elt) => (
							<Card
								href={elt.screenshots.href}
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
