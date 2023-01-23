import React from "react";

const Card = ({ href, text, page, code, name }) => {
	return (
		<>
			<div className="flex flex-col xl:flex-row border p-4 w-11/12  h-auto rounded ">
				<div>
					<img
						src={href}
						alt="project screenshot"
						className="xl:max-w-[700px]"
					/>
				</div>
				<div className="py-2 text-white xl:px-4">
					<p className="">{text}</p>
					<p>
						Lien github pages:
						<a
							href={page}
							className="text-blue-500"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							{name}
						</a>
					</p>
					<p>
						Lien vers le code sur github:{" "}
						<a
							href={code}
							className="text-blue-500"
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