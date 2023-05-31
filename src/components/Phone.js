import React, { useEffect, useRef, useState } from "react";
import {
  FaBatteryHalf,
  FaGoogle,
  FaPlay,
  FaSquare,
  FaYinYang,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Phone = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  // Récupération de l'heure actuelle
  const hours = time.getHours();
  const minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // Formatage des secondes pour que l'affichage soit toujours de 2 chiffres
  const s = String(seconds).padStart(2, "0");

  // Formatage des minutes pour que l'affichage soit toujours de 2 chiffres
  const m = String(minutes).padStart(2, "0");

  // Formatage de l'heure pour que l'affichage soit toujours de 2 chiffres
  const h = String(hours).padStart(2, "0");

  // Formatage de l'heure
  const formattedTime = `${h} : ${m} : ${s}`;

  // Récupération de la date actuelle et conversion en français
  const dateFr = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Stockage de la ville dans une variable
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        setCity(data.address.city || data.address.town);
      });
    } else {
      console.log(
        "La géolocalisation n'est pas prise en charge par votre navigateur."
      );
    }
  }, []);

  // Récupération des données météo
  useEffect(() => {
    const apiKey = "1e13ef02fc68057b2d90d17a5fbe1a22";
    const country = "FR";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.main.temp.toFixed(1));
        setDescription(data.weather[0].description);
        setIcon(data.weather[0].icon);
      })
      .catch((error) => console.error(error));
  }, []);

  //animation des icones du téléphone au chargement de la page
  const phoneRef = useRef(null);

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

  // animation de vibration du téléphone au chargement de la page
  useEffect(() => {
    const phone = phoneRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      phone,
      {
        x: 0,
        y: 5,
        rotate: "0deg",
      },
      {
        x: 5,
        y: 0,
        rotate: "2deg",
        duration: 0.05,
        yoyo: true,
        repeat: 9,
      }
    );
  }, []);

  return (
    <div
      ref={phoneRef}
      className=" min-w-[300px] h-[500px] border-4 border-slate-800  rounded-3xl shadow-xl flex flex-col bg-[#E6D7DA] lg:scale-[1] xl:scale-[1.3]"
    >
      <div className="w-full h-8 bg-black rounded-t-xl border-black border-4">
        <div className="flex w-10/12 justify-between items-center m-auto text-white">
          {/** récupération et affichage de l'heure actuelle*/}

          <span className="text-sm">{formattedTime}</span>

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
        <p className="mt-4 text-center">{city}</p>
        <h1 className=" text-base text-black flex w-full justify-evenly items-center">
          <span>{dateFr}</span>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              alt={description}
            />
          )}
          <span>{temperature}°C</span>
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
