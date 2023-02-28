import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
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
			<div className=" flex flex-col items-center w-full h-auto w-full xl:min-h-[1024px] lg:min-h-[768px]">
				<Navbar />

				<main className="overflow-hidden">
					{/* Header */}

					{/* Contact section */}
					<section className="" aria-labelledby="contact-heading">
						<div className=" mx-auto max-w-7xl px-6 lg:px-8 shadow-xl">
							<h2 id="contact-heading" className="sr-only">
								Contactez-moi
							</h2>

							<div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
								{/* Contact information */}
								<div className="lg:max-h-[600px] relative overflow-hidden bg-gradient-to-b from-[#802836] to-[#e6d7da] py-10 px-6 sm:px-10 xl:p-12">
									{/* Decorative angle backgrounds */}
									<div
										className="pointer-events-none absolute inset-0 sm:hidden"
										aria-hidden="true"
									>
										<svg
											className="absolute inset-0 h-full w-full"
											width={343}
											height={388}
											viewBox="0 0 343 388"
											fill="none"
											preserveAspectRatio="xMidYMid slice"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
												fill="url(#linear1)"
												fillOpacity=".1"
											/>
											<defs>
												<linearGradient
													id="linear1"
													x1="254.553"
													y1="107.554"
													x2="961.66"
													y2="814.66"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#fff" />
													<stop offset={1} stopColor="#fff" stopOpacity={0} />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<div
										className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
										aria-hidden="true"
									>
										<svg
											className="absolute inset-0 h-full w-full"
											width={359}
											height={339}
											viewBox="0 0 359 339"
											fill="none"
											preserveAspectRatio="xMidYMid slice"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
												fill="url(#linear2)"
												fillOpacity=".1"
											/>
											<defs>
												<linearGradient
													id="linear2"
													x1="192.553"
													y1="28.553"
													x2="899.66"
													y2="735.66"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#fff" />
													<stop offset={1} stopColor="#fff" stopOpacity={0} />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<div
										className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
										aria-hidden="true"
									>
										<svg
											className="absolute inset-0 h-full w-full"
											width={160}
											height={678}
											viewBox="0 0 160 678"
											fill="none"
											preserveAspectRatio="xMidYMid slice"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
												fill="url(#linear3)"
												fillOpacity=".1"
											/>
											<defs>
												<linearGradient
													id="linear3"
													x1="192.553"
													y1="325.553"
													x2="899.66"
													y2="1032.66"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#fff" />
													<stop offset={1} stopColor="#fff" stopOpacity={0} />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<h3 className="text-lg font-medium text-white">
										Contactez-moi
									</h3>
									<p className="mt-6 max-w-3xl text-base text-blue-50">
										
									</p>
									<dl className="mt-8 space-y-6">
										<dt>
											<span className="sr-only">Phone number</span>
										</dt>
										<dd className="flex text-base text-blue-50">
											<PhoneIcon
												className="h-6 w-6 flex-shrink-0 text-blue-200"
												aria-hidden="true"
											/>
											<span className="ml-3">06 28 40 84 80</span>
										</dd>
										<dt>
											<span className="sr-only">Email</span>
										</dt>
										<dd className="flex text-base text-blue-50">
											<EnvelopeIcon
												className="h-6 w-6 flex-shrink-0 text-blue-200"
												aria-hidden="true"
											/>
											<span className="ml-3">almoha@gmail.com</span>
										</dd>
									</dl>
									<ul className="mt-8 flex space-x-12">
										<li>
											<a
												className="text-blue-200 hover:text-blue-100"
												href="https://www.facebook.com/agnes.bmt"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">Facebook</span>
												<FaFacebook className="text-2xl" />
											</a>
										</li>
										<li>
											<a
												className="text-blue-200 hover:text-blue-100"
												href="https://github.com/almoha73"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">GitHub</span>
												<FaGithub className="text-2xl" />
											</a>
										</li>
										<li>
											<a
												className="text-blue-200 hover:text-blue-100"
												href="https://www.linkedin.com/in/agnes-beaumatin-521b341b8/"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">Linkedin</span>
												<FaLinkedin className="text-2xl" />
											</a>
										</li>
									</ul>
								</div>

								{/* Contact form */}
								<div className="py-10 sm:px-10 lg:col-span-2 xl:p-12">
									<h3 className="sm:text-lg font-medium">
										Ou envoyez moi un message !
									</h3>
									<form
										onSubmit={handleSubmit(onSubmit)}
										className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
									>
										<div>
											<label
												htmlFor="first-name"
												className="block text-sm font-medium"
											>
												Prénom
											</label>
											<div className="mt-1">
												<input
													{...register("firstname", { required: true })}
													type="text"
													name="firstname"
													id="firstname"
													className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-secondary focus:ring-secondary"
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="last-name"
												className="block text-sm font-medium"
											>
												Nom
											</label>
											<div className="mt-1">
												<input
													{...register("lastname", { required: true })}
													type="text"
													name="lastname"
													id="lastname"
													autoComplete="family-name"
													className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-secondary focus:ring-secondary"
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium"
											>
												Email
											</label>
											<div className="mt-1">
												<input
													{...register("email", { required: true })}
													id="email"
													name="email"
													type="email"
													autoComplete="email"
													className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-secondary focus:ring-secondary"
												/>
											</div>
										</div>
										<div>
											<div className="">
												<label
													htmlFor="phone"
													className="block text-sm font-medium"
												>
													Téléphone
												</label>
											</div>
											<div className="mt-1">
												<input
													{...register("phone", { required: true })}
													type="text"
													name="phone"
													id="phone"
													autoComplete="tel"
													className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-secondary focus:ring-secondary"
													aria-describedby="phone-optional"
												/>
											</div>
										</div>
										<div className="sm:col-span-2">
											<label
												htmlFor="subject"
												className="block text-sm font-medium"
											>
												Objet
											</label>
											<div className="mt-1">
												<input
													{...register("subject", { required: true })}
													type="text"
													name="subject"
													id="subject"
													className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-secondary focus:ring-secondary"
												/>
											</div>
										</div>
										<div className="sm:col-span-2">
											<div className="flex">
												<label
													htmlFor="message"
													className="block text-sm font-medium"
												>
													Message
												</label>
											</div>
											<div className="mt-1">
												<textarea
													{...register("message", { required: true })}
													id="message"
													name="message"
													rows={4}
													className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-secondary focus:ring-secondary"
													aria-describedby="message-max"
													defaultValue={""}
												/>
											</div>
										</div>
										<div className="sm:col-span-2 sm:flex sm:justify-end">
											<button
												type="submit"
												className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
											>
												Envoyer
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>

					{/* Contact grid */}
				</main>
			</div>
		</>
	);
}
