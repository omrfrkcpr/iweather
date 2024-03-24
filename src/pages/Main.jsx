import React from "react";
import { CitiesContextComp } from "../context/CitiesProvider";

const Main = () => {
  const { cities, setCities } = CitiesContextComp();
  return <div></div>;
};

export default Main;
