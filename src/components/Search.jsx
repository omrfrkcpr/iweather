import React from "react";
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import Loading from "../assets/Loading.svg";

const Search = () => {
  return (
    <div className="search-box my-6 flex flex-row justify-center ">
      <div className="flex flex-row w-2/4 items-center justify-center space-x-4 ms-10 relative">
        <input
          type="text"
          className="text-cl font-light p-2 w-full shadow-xl bg-base-input text-white rounded-8 focus:outline-none capitalize "
          placeholder="Search location"
        />
        <img src={Loading} alt="loading-gif" className="absolute right-20" />
        <MagnifyingGlass
          className="text-product cursor-pointer transition ease-out hover:scale-125 "
          size={32}
        />
        <MapPin
          size={32}
          className="text-product cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Search;
