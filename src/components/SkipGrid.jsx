import React from "react";
import { useAppContext } from "../context/AppContext";
import SkipCard from "./SkipCard";

const skipImages = [
  "https://readdy.ai/api/search-image?query=A%20professional%20photograph%20of%20a%20bright%20yellow%204%20yard%20skip%20container%20for%20waste%20disposal%2C%20with%20clear%20branding%2C%20set%20against%20a%20neutral%20background%2C%20showcasing%20its%20industrial%20design%20and%20sturdy%20construction%2C%20perfect%20for%20construction%20waste%20removal&width=400&height=300&seq=1&orientation=landscape",
  "https://readdy.ai/api/search-image?query=A%20professional%20photograph%20of%20a%20bright%20yellow%206%20yard%20skip%20container%20for%20waste%20disposal%2C%20with%20clear%20branding%2C%20set%20against%20a%20neutral%20background%2C%20showcasing%20its%20industrial%20design%20and%20sturdy%20construction%2C%20perfect%20for%20construction%20waste%20removal&width=400&height=300&seq=3&orientation=landscape",
  "https://readdy.ai/api/search-image?query=A%20professional%20photograph%20of%20a%20bright%20yellow%208%20yard%20skip%20container%20for%20waste%20disposal%2C%20with%20clear%20branding%2C%20set%20against%20a%20neutral%20background%2C%20showcasing%20its%20industrial%20design%20and%20sturdy%20construction%2C%20perfect%20for%20construction%20waste%20removal&width=400&height=300&seq=4&orientation=landscape",
  "https://readdy.ai/api/search-image?query=A%20professional%20photograph%20of%20a%20bright%20yellow%2010%20yard%20skip%20container%20for%20waste%20disposal%2C%20with%20clear%20branding%2C%20set%20against%20a%20neutral%20background%2C%20showcasing%20its%20industrial%20design%20and%20sturdy%20construction%2C%20perfect%20for%20construction%20waste%20removal&width=400&height=300&seq=5&orientation=landscape",
];

const SkipGrid = () => {
  const {
    skips,
    selectedSkip,
    setSelectedSkip,
    setFooterOpen,
    loading,
    error,
    priceRange,
    yardRange,
  } = useAppContext();

  const filteredSkips = skips.filter((skip) => {
    const total =
      Number(skip.price_before_vat) +
      (Number(skip.price_before_vat) * Number(skip.vat)) / 100;
    const yard = Number(skip.size);
    return (
      total >= priceRange[0] &&
      total <= priceRange[1] &&
      yard >= yardRange[0] &&
      yard <= yardRange[1]
    );
  });

  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
    setFooterOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
      {filteredSkips.map((skip, index) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          image={skipImages[index % skipImages.length]}
          onSelect={handleSelectSkip}
          selected={selectedSkip?.id === skip.id}
        />
      ))}
    </div>
  );
};

export default SkipGrid;
