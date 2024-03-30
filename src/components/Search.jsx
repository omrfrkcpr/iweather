import React, { useContext, useState } from "react";
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import Loading from "../assets/Loading.svg";
import { WeatherContext } from "../context/WeatherProvider";
// import { AsyncPaginate } from "react-select-async-paginate";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { setQuery, loading, error } = useContext(WeatherContext);
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (city) {
      setQuery({ q: city });
      if (!error) {
        navigate(`/${city}`);
      }
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
        if (!error) {
          navigate(`/${(lat, lon)}`);
        }
      });
    }
  };

  return (
    <div className="search-box my-6 flex flex-row justify-center w-100">
      <div className="flex flex-row items-center justify-center space-x-4 relative w-96">
        <input
          type="text"
          className="text-cl font-light px-3 py-2 w-full shadow-xl bg-base-input text-white rounded-8 focus:outline-none capitalize "
          placeholder="Search location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearchClick();
          }}
        />
        {loading && (
          <img src={Loading} alt="loading-gif" className="absolute right-20" />
        )}
        <MagnifyingGlass
          className="text-product cursor-pointer transition ease-out hover:scale-125 "
          size={32}
          onClick={handleSearchClick}
        />
        <MapPin
          size={32}
          className="text-product cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
    </div>
  );
};

export default Search;
