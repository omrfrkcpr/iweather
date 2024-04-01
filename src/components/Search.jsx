import React, { useContext, useState } from "react";
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import Loading from "../assets/Loading.svg";
import { WeatherContext } from "../context/WeatherProvider";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { setQuery, setUnits, loading, error } = useContext(WeatherContext);
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [selectedUnit, setSelectedUnit] = useState("metric");

  const handleSearchClick = () => {
    if (city) {
      setQuery({ q: city });
      setUnits(selectedUnit);
      if (!error) {
        setTimeout(() => {
          navigate(`/${city}`);
        }, 2000);
      }
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
        setUnits(selectedUnit);
        if (!error) {
          setTimeout(() => {
            navigate(`/${(lat, lon)}`);
          }, 2000);
        }
      });
    }
  };

  return (
    <div className="my-4 flex-col center w-4/5 max-w-[900px] font-sans">
      <div className=" flex-row center space-x-2 w-auto relative ">
        <input
          type="text"
          className="text-responsive px-3 py-2 w-[220px] md:w-[250px] lg:w-[350px] xl:w-[450px] shadow-xl bg-base-input text-white placeholder-base-400 rounded-8 focus:outline-none capitalize max-w-[500px]"
          placeholder="Search location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearchClick();
          }}
        />
        {loading && (
          <img
            src={Loading}
            alt="loading-gif"
            className="absolute left-[175px] -top-1 md:left-[200px] md:top-0 lg:left-[300px] lg:top-1 xl:left-[400px] xl:top-0"
          />
        )}

        <MagnifyingGlass
          className="icon-colored"
          size={28}
          onClick={handleSearchClick}
        />
        <MapPin
          size={28}
          className="icon-colored"
          onClick={handleLocationClick}
        />
      </div>
      <div
        className="flex items-center space-x-2"
        style={{ fontSize: "1.2rem", marginTop: "1rem" }}
      >
        <p
          className={`icon-colorless ${
            selectedUnit === "metric" ? "text-white" : "text-product"
          }`}
          onClick={() => setSelectedUnit("metric")}
        >
          °C
        </p>
        <p className="text-product">|</p>
        <p
          className={` icon-colorless  ${
            selectedUnit === "imperial" ? "text-white" : "text-product"
          }`}
          onClick={() => setSelectedUnit("imperial")}
        >
          °F
        </p>
      </div>
    </div>
  );
};

export default Search;
