import React, { useEffect, useState } from "react";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const apps = [
  { name: "Accueil", to: "/", icon: "🏠" },
  { name: "Profil", to: "/profil", icon: "👤" },
  { name: "CV", to: "/curiculum-vitae", icon: "📄" },
  { name: "Portfolio", to: "/portfolio", icon: "💼" },
  { name: "Contact", to: "/contact", icon: "✉️" },
];

const Phone = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateFr = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

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

  useEffect(() => {
    if (city) {
      fetch(`/api/weather?city=${city}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.main) {
            setTemperature(data.main.temp.toFixed(1));
            setDescription(data.weather[0].description);
            setIcon(data.weather[0].icon);
          }
        })
        .catch((error) => console.error("Error fetching weather from backend:", error));
    }
  }, [city]);

  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[580px] w-[280px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-palette-5">
        <div className="absolute top-0 left-0 w-full h-10 bg-palette-1 px-4 flex items-center justify-between">
          <span className="text-sm font-bold text-palette-5">{time}</span>
          <div className="flex items-center space-x-1">
            <FaSignal className="text-palette-5" />
            <FaWifi className="text-palette-5" />
            <FaBatteryFull className="text-palette-5" />
          </div>
        </div>

        <div className="p-4 pt-16">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-palette-1">{city}</p>
            <p className="text-sm text-palette-1">{dateFr}</p>
            {temperature && description && icon && (
              <div className="flex items-center justify-center mt-2">
                <img
                  src={`https://openweathermap.org/img/wn/${icon}.png`}
                  alt={description}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold text-palette-1">{temperature}°C</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            {apps.map((app) => (
              <NavLink to={app.to} key={app.name} className="flex flex-col items-center space-y-1">
                <div className="w-16 h-16 rounded-xl bg-palette-4 flex items-center justify-center text-3xl">
                  {app.icon}
                </div>
                <span className="text-xs text-palette-1">{app.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-palette-1/50 backdrop-blur-lg flex justify-center items-center">
          <div className="w-2/3 h-1.5 bg-palette-5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
