import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const PRICE_MINMAX = [333, 1191];
const YARD_MINMAX = [4, 40];

export const AppProvider = ({ children }) => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [footerOpen, setFooterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([...PRICE_MINMAX]);
  const [minMax, setMinMax] = useState([...PRICE_MINMAX]);
  const [yardRange, setYardRange] = useState([...YARD_MINMAX]);
  const [yardMinMax, setYardMinMax] = useState([...YARD_MINMAX]);

  return (
    <AppContext.Provider
      value={{
        skips,
        setSkips,
        selectedSkip,
        setSelectedSkip,
        loading,
        setLoading,
        error,
        setError,
        footerOpen,
        setFooterOpen,
        priceRange,
        setPriceRange,
        minMax,
        setMinMax,
        yardRange,
        setYardRange,
        yardMinMax,
        setYardMinMax,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
