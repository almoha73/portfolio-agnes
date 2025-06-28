import React from "react";
import Phone from "../components/Phone";
import { FaReact } from "react-icons/fa";
import useHomeAnimation from "../hooks/useHomeAnimation";

const Home = () => {
  useHomeAnimation();

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-50">
      <main className="container mx-auto px-4 pt-12 flex flex-col xl:flex-row items-center justify-center gap-12">
        <div className="flex flex-col items-center text-center w-full xl:w-1/2 text-gray-800">
          <h1
            id="textel1"
            className="textel1 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 leading-tight"
          >
            Agnès Beaumatin
          </h1>
          <div className="w-20 flex items-center justify-center mb-5">
            <FaReact className="faReact w-20 h-20 text-blue-600" />
          </div>
          <p
            id="textel2"
            className="textel2 text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8"
          >
            Développeur d'applications Javascript React
          </p>
          <a
            href="https://bit.ly/3ZPJYe5"
            className="cvbutton inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Téléchargez le CV
          </a>
        </div>

        <div className="phone-container flex justify-center items-center xl:w-1/2">
          <Phone />
        </div>
      </main>
    </div>
  );
};

export default Home;
