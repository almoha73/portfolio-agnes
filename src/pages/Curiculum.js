import React from "react";
import { HiOutlineDownload, HiOutlineArrowNarrowRight, HiOutlineDocumentText } from "react-icons/hi";

const Curiculum = () => {
	return (
		<div className="min-h-screen pt-32 pb-20 bg-slate-50">
			<main className="container mx-auto px-4 max-w-4xl">
				<div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
					{/* Header */}
					<div className="bg-slate-900 p-12 text-white relative overflow-hidden text-center sm:text-left">
						<div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
						<div className="relative z-10">
							<h1 className="text-5xl font-black mb-4">Curriculum <span className="text-primary-400">Vitae</span></h1>
							<p className="text-slate-400 text-xl font-medium">Développeuse Front-end React</p>
						</div>
					</div>

					<div className="p-8 md:p-16 space-y-12">
						{/* Download section */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="flex flex-col items-center sm:items-start p-8 bg-slate-50 rounded-3xl gap-4 group">
								<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm text-primary-500 group-hover:scale-110 transition-transform">
									<HiOutlineDownload />
								</div>
								<div className="text-center sm:text-left">
									<h3 className="text-xl font-black text-slate-900 mb-1">Mon CV complet</h3>
									<p className="text-slate-500 text-sm italic mb-6">Format PDF - Février 2026</p>
									<a
										href="https://bit.ly/3ZPJYe5"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-primary-500/20"
									>
										Télécharger
									</a>
								</div>
							</div>

							<div className="flex flex-col items-center sm:items-start p-8 bg-slate-50 rounded-3xl gap-4 group">
								<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm text-secondary-500 group-hover:scale-110 transition-transform">
									<HiOutlineDocumentText />
								</div>
								<div className="text-center sm:text-left">
									<h3 className="text-xl font-black text-slate-900 mb-1">Recommandation</h3>
									<p className="text-slate-500 text-sm italic mb-6">Lettre de recommandation</p>
									<a
										href="https://firebasestorage.googleapis.com/v0/b/portfolio-e5e20.appspot.com/o/CV%2FLettre%20de%20recommandation%20Mme%20BEAUMATIN%20Agn%C3%A8s.pdf?alt=media&token=72d9c145-2be8-4c51-b64a-2fc00b11600e"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg"
									>
										Consulter
									</a>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							<section>
								<h3 className="text-2xl font-black text-slate-900 mb-6 border-b-4 border-primary-100 pb-2 inline-block">Expertise</h3>
								<div className="space-y-4">
									{[
										{ name: "React.js / Next.js", level: "95%" },
										{ name: "Tailwind CSS / UI Design", level: "90%" },
										{ name: "JavaScript / TypeScript", level: "85%" },
										{ name: "Firebase / Node.js", level: "80%" }
									].map((skill, i) => (
										<div key={i}>
											<div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
												<span>{skill.name}</span>
												<span>{skill.level}</span>
											</div>
											<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
												<div className="h-full bg-primary-500 rounded-full" style={{ width: skill.level }}></div>
											</div>
										</div>
									))}
								</div>
							</section>
							<section>
								<h3 className="text-2xl font-black text-slate-900 mb-6 border-b-4 border-secondary-100 pb-2 inline-block">Savoir-être</h3>
								<ul className="space-y-3">
									{["Autonomie globale", "Esprit d'équipe", "Curiosité technologique", "Résolution de problèmes"].map((skill, i) => (
										<li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
											<HiOutlineArrowNarrowRight className="text-secondary-500" /> {skill}
										</li>
									))}
								</ul>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Curiculum;

