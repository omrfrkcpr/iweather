import React, { createContext, useContext, useState } from "react";

//! Create Context
export const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  return (
    <CitiesContext.Provider value={{ cities }}>
      {children}
    </CitiesContext.Provider>
  );
};

export const CitiesContextComp = () => {
  return useContext(CitiesContext);
};

export default CitiesProvider;
