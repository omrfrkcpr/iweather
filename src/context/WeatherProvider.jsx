import React, { createContext, useEffect, useState } from "react";
import getFormattedWeatherData from "../services/AppService";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "gottingen" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((result) => {
      setWeather(result);
      console.log(weather);
    });
  };

  fetchWeather();

  return (
    <WeatherContext.Provider value={{ query, setQuery, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
