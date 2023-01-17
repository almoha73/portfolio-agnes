import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Curiculum from "./pages/Curiculum";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/profil" element={<Profil />}></Route>
					<Route path="/curiculum-vitae" element={<Curiculum />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/portfolio" element={<Portfolio />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
