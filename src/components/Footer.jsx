import React, { useContext } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherProvider";

const Footer = () => {
  const { iconSize } = useContext(WeatherContext);
  return (
    <div className=" text-product absolute center bottom-5 flex gap-2 w-full">
      <a href="https://github.com/omrfrkcpr" target="blank">
        <FaGithubSquare
          size={iconSize}
          className="hover:text-black hover:bg-white"
        />
      </a>
      <a href="https://www.linkedin.com/in/omrfrkcpr/" target="blank">
        <FaLinkedin
          size={iconSize}
          className=" hover:text-[#0A66C2] hover:bg-white"
        />
      </a>
    </div>
  );
};

export default Footer;
