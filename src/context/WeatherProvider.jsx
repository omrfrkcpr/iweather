import React, { createContext, useEffect, useState } from "react";
import getFormattedWeatherData from "../services/AppService";
import { toast } from "react-toastify";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState("metric"); // metric or imperial
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iconSize, setIconSize] = useState(32);

  const fetchWeather = async () => {
    // Fetch only if there is any query
    if (query.q !== "") {
      setLoading(true);

      try {
        const result = await getFormattedWeatherData({ ...query, units });
        setTimeout(() => {
          toast.success(
            `Successfully fetched weather for ${result.name}, ${result.country}`,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }, 2000);
        setWeather(result);
        setError(null);
      } catch (error) {
        setTimeout(() => {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }, 2000);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newSize = 32;
      if (windowWidth < 500) {
        newSize = 16;
      } else if (windowWidth >= 500 && windowWidth < 900) {
        newSize = 24;
      }
      setIconSize(newSize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        query,
        setQuery,
        units,
        setUnits,
        weather,
        loading,
        setLoading,
        error,
        setError,
        iconSize,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
