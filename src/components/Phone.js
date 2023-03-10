import React, { useEffect } from "react";
import {
  FaBatteryHalf,
  FaGoogle,
  FaPlay,
  FaSquare,
  FaYinYang,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Phone = () => {
  const moveElt = () => {
    gsap.fromTo(
      [".box1", ".box2"],
      { x: -200 },
      {
        rotation: 360,
        x: 0,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".box3",
      { y: -200 },
      {
        y: 0,
        rotate: 360,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".box4",
      { y: 200 },
      {
        y: 0,
        rotate: 360,
        duration: 1,
      }
    );
  };
  useEffect(() => {
    moveElt();
  }, []);

  return (
    <div className="min-w-[300px] h-[500px] border border-slate-800 border-[10px]  rounded-3xl shadow-xl flex flex-col bg-[#E6D7DA] lg:scale-[1] xl:scale-[1.3]">
      <div className="w-full h-8 bg-black rounded-t-xl border-black border-4">
        <div className="flex w-10/12 justify-between items-center m-auto text-white">
          <span>11:11</span>
          <span className="w-2 h-2 rounded full bg-neutral-500"></span>
          <span>
            <FaBatteryHalf className=" text-2xl" />
          </span>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-10/12 h-10 border bg-neutral-500 rounded-3xl mx-auto mt-4 flex items-center justify-between">
          <div className="flex w-10/12 justify-between mx-auto items-center">
            <span>
              <FaGoogle className="text-blue-400" />
            </span>
            <span className="text-white">Agnès</span>
          </div>
        </div>
        <h1 className="mt-4 text-base text-black flex w-full justify-evenly items-center">
          {" "}
          mercredi 8 fevr{" "}
          <span>
            <FaSun className="text-yellow-600 text-2xl" />
          </span>{" "}
          15°C
        </h1>
        <div className="w-10/12 mx-auto mt-8 grid grid-rows-2 grid-flow-col gap-4 justify-items-center">
          <div className="">
            <Link to="/" className="box1 flex flex-col items-center">
              <div className="w-12 h-12 bg-neutral-300 rounded-xl grid grid-rows-2 grid-flow-col place-items-center	">
                <div className="w-4 h-4 border border-white rounded bg-red-500"></div>
              </div>
              <span className="text-black">Accueil</span>
            </Link>
          </div>
          <div className="">
            <Link to="/profil" className="box2 flex flex-col items-center">
              <div className="w-12 h-12 bg-neutral-300 rounded-xl grid grid-rows-2 grid-flow-col place-items-center	">
                <div className="w-4 h-4 border border-white rounded bg-red-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-yellow-500"></div>
              </div>
              <span className="text-black">Profil</span>
            </Link>
          </div>
          <div className="">
            <Link
              to="/curiculum-vitae"
              className="box3 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-neutral-300 rounded-xl grid grid-rows-2 grid-flow-col place-items-center">
                <div className="w-4 h-4 border border-white rounded bg-red-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-yellow-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-green-500"></div>
              </div>
              <span className="text-black">CV</span>
            </Link>
          </div>
          <div className="">
            <Link to="/portfolio" className="box4 flex flex-col items-center">
              <div className="w-12 h-12 bg-neutral-300 rounded-xl grid grid-rows-2 grid-flow-col place-items-center">
                <div className="w-4 h-4 border border-white rounded bg-red-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-yellow-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-green-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-blue-500"></div>
              </div>
              <span className="text-black">Portfolio</span>
            </Link>
          </div>
          <div className="">
            <Link to="/contact" className="box4 flex flex-col items-center">
              <div className="w-12 h-12 bg-neutral-300 rounded-xl grid grid-rows-2 grid-flow-col place-items-center">
                <div className="w-4 h-4 border border-white rounded bg-red-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-yellow-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-green-500"></div>
                <div className="w-4 h-4 border border-white rounded bg-blue-500"></div>
              </div>
              <span className="text-black">Contact</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-8 bg-black rounded-b-xl flex items-center">
        <div className="flex w-6/12 justify-between items-center mx-auto text-white">
          <span>
            <FaPlay />
          </span>
          <span>
            <FaYinYang className="text-white text-2xl" />
          </span>
          <span>
            <FaSquare />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Phone;
