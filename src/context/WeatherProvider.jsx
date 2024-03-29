import React, { createContext, useEffect, useState } from "react";
import getFormattedWeatherData from "../services/AppService";
import { toast } from "react-toastify";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "gottingen" });
  const [units, setUnits] = useState("metric"); // metric or imperial
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const message = query.q ? query.q : "current location.";

    toast.info("Fetching weather for " + message);
    await getFormattedWeatherData({ ...query, units }).then((result) => {
      toast.success(
        `Succesfully fetched weather for ${result.name}, ${result.country}`
      );

      setWeather(result);
      console.log(weather);
    });
  };

  useEffect(() => {
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return `from-cyan-400 to-blue-400`;
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return `from-cyan-400 to-blue-400`;
    return `from-yellow-400 to-orange-400`;
  };

  return (
    <WeatherContext.Provider
      value={{ query, setQuery, units, setUnits, weather, formatBackground }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
