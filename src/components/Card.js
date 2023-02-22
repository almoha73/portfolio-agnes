import React from "react";

const Card = ({ href, text, page, code, name, npm }) => {
	return (
		<>
			<div className="flex flex-col xl:flex-row border p-4 w-11/12 text-black h-auto rounded shadow-lg">
				{href && (
					<div className="flex justify-center">
						<img
							src={href}
							alt="project screenshot"
							className="xl:max-w-[700px]"
						/>
					</div>
				)}

				<div className="py-2  xl:px-6">
					<p className="text-xl text-justify">{text}</p>
					<br />
					{href ? (
						<p className="text-xl">
							Lien github pages:
							<a
								href={page}
								className="text-blue-500 hover:text-[#802836]"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								{name}
							</a>
						</p>
					) : (
						<p className="text-xl">
							Lien du package sur npm:
							<a
								href={npm}
								className="text-blue-500 hover:text-[#802836]"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								{name}
							</a>
						</p>
					)}

					<p className="text-xl">
						Lien vers le code sur github:{" "}
						<a
							href={code}
							className="text-blue-500 hover:text-[#802836]"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Code {name}
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
