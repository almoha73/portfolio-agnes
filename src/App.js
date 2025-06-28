import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Profil = lazy(() => import("./pages/Profil"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Curiculum = lazy(() => import("./pages/Curiculum"));
const Contact = lazy(() => import("./pages/Contact"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <div className="App bg-palette-5">
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
          <Route path="/curiculum-vitae" element={<Curiculum />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/MentionsLegales" element={<MentionsLegales/>}></Route>
        </Routes>
      </Suspense>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
