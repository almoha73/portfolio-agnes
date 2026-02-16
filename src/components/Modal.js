import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

const Modal = () => {
	return (
		<div className="relative z-[100]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"></div>

			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 text-center">
					<div className="relative transform overflow-hidden rounded-[2.5rem] bg-white p-8 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm border border-slate-100">
						<div className="flex flex-col items-center">
							<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-50 text-primary-600 text-5xl mb-6">
								<HiOutlineCheckCircle />
							</div>
							<div className="text-center">
								<h3 className="text-2xl font-black text-slate-900 mb-2" id="modal-title">
									Succès !
								</h3>
								<p className="text-slate-500 font-medium mb-8">
									Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
								</p>
							</div>
						</div>
						<div className="flex justify-center">
							<a
								href="/contact"
								className="w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-primary-500/20"
							>
								Retour au site
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

