import React, { useEffect, useState } from "react";
import { FaSignal, FaWifi } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const apps = [
  { name: "Accueil", to: "/", icon: "🏠", color: "bg-white" },
  { name: "Profil", to: "/profil", icon: "👤", color: "bg-blue-100" },
  { name: "CV", to: "/curiculum-vitae", icon: "📄", color: "bg-orange-100" },
  { name: "Portfolio", to: "/portfolio", icon: "💼", color: "bg-purple-100" },
  { name: "Contact", to: "/contact", icon: "✉️", color: "bg-green-100" },
];

const Phone = () => {
  const [city, setCity] = useState("Lyon"); // Default city
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateFr = currentTime.toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  useEffect(() => {
    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const detectedCity = data.address.city || data.address.town || data.address.village || "Lyon";
            setCity(detectedCity);
          } catch (e) {
            console.error("Erreur de géocodage inverse:", e);
          }
        },
        (error) => {
          console.warn("Erreur de géolocalisation:", error.message);
          // Garde la ville par défaut (Lyon)
        },
        geoOptions
      );
    }
  }, []);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          // Tentative via l'API locale (Vercel)
          const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
          if (response.ok) {
            const data = await response.json();
            if (data.main) {
              setTemperature(data.main.temp.toFixed(0));
              setDescription(data.weather[0].description);
              setIcon(data.weather[0].icon);
              return;
            }
          }
          throw new Error("Local API failed");
        } catch (error) {
          // Fallback : Appel direct si une clé est présente (pour le dev local)
          const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY || "e8a36da0c58028348fa33d1813fc9105";
          if (apiKey) {
            try {
              const directRes = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},FR&appid=${apiKey}&units=metric&lang=fr`
              );
              const data = await directRes.json();
              if (data.main) {
                setTemperature(data.main.temp.toFixed(0));
                setDescription(data.weather[0].description);
                setIcon(data.weather[0].icon);
              }
            } catch (e) {
              console.error("Erreur lors de l'appel direct à la météo:", e);
            }
          }
        }
      };

      fetchWeather();
    }
  }, [city]);

  return (
    <div className="relative mx-auto border-slate-900 bg-slate-900 border-[12px] rounded-[3rem] h-[600px] w-[280px] shadow-2xl scale-90 md:scale-100 transition-transform">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-slate-900 rounded-b-2xl z-30"></div>

      {/* Buttons */}
      <div className="absolute -left-[15px] top-[100px] w-1 h-12 bg-slate-900 rounded-l-md"></div>
      <div className="absolute -left-[15px] top-[160px] w-1 h-12 bg-slate-900 rounded-l-md"></div>
      <div className="absolute -right-[15px] top-[140px] w-1 h-16 bg-slate-900 rounded-r-md"></div>

      <div className="relative rounded-[2.2rem] overflow-hidden w-full h-full bg-slate-100 flex flex-col">
        {/* Wall paper background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-secondary-500 to-accent opacity-20 -z-10"></div>

        {/* Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-bold text-slate-900">
          <span>{timeStr}</span>
          <div className="flex items-center space-x-1.5">
            <FaSignal />
            <FaWifi />
            <div className="relative w-5 h-2.5 border border-slate-900/30 rounded-sm flex items-center px-0.5">
              <div className="w-full h-1.5 bg-slate-900 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 overflow-y-auto pt-4 scrollbar-hide">
          {/* Weather Widget Improved */}
          <div className="bg-white/90 backdrop-blur-xl p-4 rounded-[2.5rem] shadow-sm mb-6 flex flex-col items-center border border-white/60 transition-all hover:shadow-md">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{city}</p>

            <div className="flex items-center justify-center gap-1">
              {icon ? (
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={description}
                  className="w-12 h-12 -ml-2"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center text-2xl">🌤️</div>
              )}
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                {temperature ? `${temperature}°` : "--"}
              </h2>
            </div>

            {description && (
              <p className="text-[9px] font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full mt-1">
                {description}
              </p>
            )}
          </div>

          <p className="text-xs font-bold text-slate-900/40 mb-3 px-1 uppercase tracking-widest">{dateFr}</p>

          <div className="grid grid-cols-4 gap-3">
            {apps.map((app) => (
              <NavLink
                to={app.to}
                key={app.name}
                className="flex flex-col items-center group"
              >
                <div className={`w-14 h-14 rounded-2xl ${app.color} shadow-sm flex items-center justify-center text-2xl group-active:scale-95 transition-transform duration-150 border border-white`}>
                  {app.icon}
                </div>
                <span className="text-[10px] font-semibold text-slate-600 mt-1">{app.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Dock */}
        <div className="px-3 pb-6 pt-2">
          <div className="bg-white/30 backdrop-blur-xl rounded-[2rem] p-2 flex justify-around items-center border border-white/20">
            {apps.slice(0, 4).map((app, i) => (
              <NavLink key={i} to={app.to} className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform">
                {app.icon}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-1.5 w-1/3 bg-slate-900/20 mx-auto mb-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default Phone;
