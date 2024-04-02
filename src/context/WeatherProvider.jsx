import React, { createContext, useEffect, useState } from "react";
import getFormattedWeatherData from "../services/weatherFormatters";
import { toast } from "react-toastify";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState("metric"); // metric or imperial
  const [weather, setWeather] = useState(null);
  const [weatherList, setWeatherList] = useState(
    JSON.parse(localStorage.getItem("weatherList")) || []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iconSize, setIconSize] = useState(32);

  const getWeatherData = async () => {
    // Get fetched weather data only if there is any query
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

          isUniqueWeather(result, weatherList) &&
            setWeatherList([result, ...weatherList]);

          setLocalStorage();
        }, 2000);

        setWeather(result);
        setError(null);
      } catch (error) {
        setTimeout(() => {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 2000,
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

  const isUniqueWeather = (newItem, array) => {
    return !array.some((item) => item.name === newItem.name);
  };

  const setLocalStorage = () => {
    localStorage.setItem("weatherList", JSON.stringify(weatherList));
  };

  useEffect(() => {
    getWeatherData();
  }, [query, units]);

  useEffect(() => {
    setLocalStorage();
  }, [getWeatherData]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newSize;
      if (windowWidth < 500) {
        newSize = 24;
      } else if (windowWidth >= 500) {
        newSize = 32;
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
        weatherList,
        setWeatherList,
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
