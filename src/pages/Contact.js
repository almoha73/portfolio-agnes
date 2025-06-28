import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Modal from "../components/Modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";

export default function Contact() {
	const [isOpen, setIsOpen] = useState(false);
	const { register, handleSubmit } = useForm();
	// const onSubmit = (data) => console.log(data);
	const onSubmit = async (data) => {
		console.log(data);
		try {
			const docRef = await addDoc(collection(db, "messages"), data);
			console.log("Document written with ID: ", docRef.id);
			setIsOpen(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{isOpen && <Modal />}
			<div className="min-h-screen w-full flex flex-col items-center bg-gray-50 py-12">
				<main className="container mx-auto px-4 py-8 lg:py-16">
					<div className="bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8">
						<div className="w-full lg:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold mb-4">Contactez-moi</h3>
							<p className="text-blue-100 mb-6">
								N'hésitez pas à me contacter pour toute question ou opportunité.
							</p>
							<dl className="space-y-4">
								<div className="flex items-center">
									<PhoneIcon className="h-6 w-6 flex-shrink-0 text-blue-200" aria-hidden="true" />
									<dd className="ml-3 text-blue-50">06 28 40 84 80</dd>
								</div>
								<div className="flex items-center">
									<EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-blue-200" aria-hidden="true" />
									<dd className="ml-3 text-blue-50">almoha@gmail.com</dd>
								</div>
							</dl>
							<ul className="mt-8 flex space-x-6">
								<li>
									<a
										className="text-blue-200 hover:text-blue-100 transition-colors duration-200"
										href="https://www.facebook.com/agnes.bmt"
										target="_blank"
										rel="noreferrer"
									>
										<span className="sr-only">Facebook</span>
										<FaFacebook className="text-3xl" />
									</a>
								</li>
								<li>
									<a
										className="text-blue-200 hover:text-blue-100 transition-colors duration-200"
										href="https://github.com/almoha73"
										target="_blank"
										rel="noreferrer"
									>
										<span className="sr-only">GitHub</span>
										<FaGithub className="text-3xl" />
									</a>
								</li>
								<li>
									<a
										className="text-blue-200 hover:text-blue-100 transition-colors duration-200"
										href="https://www.linkedin.com/in/agnes-beaumatin-521b341b8/"
										target="_blank"
										rel="noreferrer"
									>
										<span className="sr-only">Linkedin</span>
										<FaLinkedin className="text-3xl" />
									</a>
								</li>
							</ul>
						</div>

						<div className="w-full lg:w-2/3 p-8 text-gray-800">
							<h3 className="text-2xl font-bold mb-6">Ou envoyez-moi un message !</h3>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
							>
								<div>
									<label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Prénom</label>
									<div className="mt-1">
										<input
											{...register("firstname", { required: true })}
											type="text"
											name="firstname"
											id="firstname"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Nom</label>
									<div className="mt-1">
										<input
											{...register("lastname", { required: true })}
											type="text"
											name="lastname"
											id="lastname"
											autoComplete="family-name"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
									<div className="mt-1">
										<input
											{...register("email", { required: true })}
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
									<div className="mt-1">
										<input
											{...register("phone", { required: true })}
											type="text"
											name="phone"
											id="phone"
											autoComplete="tel"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="subject" className="block text-sm font-medium text-gray-700">Objet</label>
									<div className="mt-1">
										<input
											{...register("subject", { required: true })}
											type="text"
											name="subject"
											id="subject"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
									<div className="mt-1">
										<textarea
											{...register("message", { required: true })}
											id="message"
											name="message"
											rows={4}
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
											defaultValue={''}
										/>
									</div>
								</div>
								<div className="sm:col-span-2 flex justify-end">
									<button
										type="submit"
										className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										Envoyer
									</button>
								</div>
							</form>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

