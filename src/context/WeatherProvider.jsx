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

  const fetchWeather = async () => {
    // Fetch only if there is any query
    if (query.q !== "") {
      setLoading(true);

      try {
        const result = await getFormattedWeatherData({ ...query, units });
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
        setWeather(result);
        setError(null);
      } catch (error) {
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
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [query, units]);

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
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
