import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Profil = lazy(() => import("./pages/Profil"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Curiculum = lazy(() => import("./pages/Curiculum"));
const Contact = lazy(() => import("./pages/Contact"));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
          <Route path="/curiculum-vitae" element={<Curiculum />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
