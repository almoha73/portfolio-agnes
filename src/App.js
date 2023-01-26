import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
//import Profil from "./pages/Profil";
import Curiculum from "./pages/Curiculum";
import Contact from "./pages/Contact";
//import Portfolio from "./pages/Portfolio";
const Home = lazy(() => import("./pages/Home"));
const Profil = lazy(() => import("./pages/Profil"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Suspense fallback={<>Loading ...</>}>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/portfolio" element={<Portfolio />}></Route>
						<Route path="/profil" element={<Profil />}></Route>

						<Route path="/curiculum-vitae" element={<Curiculum />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
