import React, { createContext, useContext, useState } from "react";

export const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  // State for the foods in the store.
  const [foodsData, setFoodsData] = useState([]);
  return (
    <FoodContext.Provider value={{ foodsData, setFoodsData }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider