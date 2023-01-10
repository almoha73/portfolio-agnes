import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/profil" element={<Profil />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
