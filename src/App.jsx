import React, { useEffect } from "react";
import axios from "axios";
import { AppProvider, useAppContext } from "./context/AppContext";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import SkipGrid from "./components/SkipGrid";
import FooterBar from "./components/FooterBar";

function AppContent() {
  const {
    setSkips,
    setLoading,
    setError,
    setMinMax,
    setPriceRange,
    setYardMinMax,
    setYardRange,
  } = useAppContext();

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        setSkips(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load skip data. Please try again later.");
        setLoading(false);
      }
    };
    fetchSkips();
  }, [setSkips, setLoading, setError]);

  const calculateTotalPrice = (skip) => {
    if (!skip) return 0;
    const vatAmount = (skip.price_before_vat * skip.vat) / 100;
    return (skip.price_before_vat + vatAmount).toFixed(2);
  };

  return (
    <div className="mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto px-8 py-8 mb-24">
        <div className="text-center md:text-start mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-600">
            Select the skip size that best suits your needs
          </p>
        </div>
        <FilterBar />
        <SkipGrid />
      </main>
      <FooterBar calculateTotalPrice={calculateTotalPrice} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
