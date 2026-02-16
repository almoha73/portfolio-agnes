import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Modal from "../components/Modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";

export default function Contact() {
	const [isOpen, setIsOpen] = useState(false);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
		try {
			await addDoc(collection(db, "messages"), data);
			setIsOpen(true);
			reset();
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	};

	return (
		<>
			{isOpen && <Modal />}
			<div className="min-h-screen pt-32 pb-20 bg-slate-50">
				<main className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
						{/* Info Sidebar */}
						<div className="lg:w-2/5 gradient-bg p-12 text-white flex flex-col justify-between relative overflow-hidden">
							<div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

							<div className="relative z-10">
								<h1 className="text-4xl font-black mb-6">Parlons de votre <span className="text-primary-400">projet</span></h1>
								<p className="text-slate-400 text-lg mb-10 leading-relaxed">
									Vous avez une idée, un besoin technique ou simplement envie de discuter ? Mon formulaire est là pour ça.
								</p>

								<div className="space-y-6">
									<div className="flex items-start gap-4">
										<span className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl text-primary-400 shrink-0"><HiOutlineMail /></span>
										<div>
											<p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
											<p className="font-bold">almoha73@gmail.com</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<span className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl text-secondary-400 shrink-0"><HiOutlinePhone /></span>
										<div>
											<p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Téléphone</p>
											<p className="font-bold">06.07.67.75.25</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<span className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl text-accent shrink-0"><HiOutlineLocationMarker /></span>
										<div>
											<p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Localisation</p>
											<p className="font-bold">Lyon, France</p>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-12 flex gap-4 relative z-10">
								<a href="https://github.com/almoha73" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-2xl transition-all border border-white/5"><FaGithub /></a>
								<a href="https://www.linkedin.com/in/agnes-beaumatin-521b341b8/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-2xl transition-all border border-white/5"><FaLinkedin /></a>
								<a href="https://www.facebook.com/agnes.bmt" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-2xl transition-all border border-white/5"><FaFacebook /></a>
							</div>
						</div>

						{/* Form */}
						<div className="lg:w-3/5 p-12">
							<h3 className="text-2xl font-black text-slate-900 mb-8">Envoyez-moi un message</h3>
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Prénom</label>
										<input
											{...register("firstname", { required: true })}
											placeholder="Jean"
											className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Nom</label>
										<input
											{...register("lastname", { required: true })}
											placeholder="Dupont"
											className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email</label>
									<input
										{...register("email", { required: true })}
										type="email"
										placeholder="jean.dupont@exemple.com"
										className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Message</label>
									<textarea
										{...register("message", { required: true })}
										rows={5}
										placeholder="Comment puis-je vous aider ?"
										className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none resize-none"
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl shadow-primary-500/20 hover:-translate-y-1 active:scale-[0.98]"
								>
									Envoyer le message
								</button>
							</form>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}


