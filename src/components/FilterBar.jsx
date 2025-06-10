import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAppContext } from "../context/AppContext";

const FilterBar = () => {
  const {
    priceRange,
    setPriceRange,
    minMax,
    yardRange,
    setYardRange,
    yardMinMax,
  } = useAppContext();

  return (
    <div className="mb-8 flex flex-row gap-4 items-center flex-wrap md:flex-nowrap md:gap-4 md:items-center justify-center md:justify-start">
      {/* Price Range Filter */}
      <div className="w-full max-w-xs pl-1 pr-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <label className="font-medium text-gray-700 text-xs">
            Price Range
          </label>
          <span className="text-blue-700 font-semibold text-sm">
            £{priceRange[0]} - £{priceRange[1]}
          </span>
        </div>
        <Slider
          range
          min={minMax[0]}
          max={minMax[1]}
          value={priceRange}
          onChange={setPriceRange}
          allowCross={false}
          trackStyle={[{ backgroundColor: "#2563eb", height: 4 }]}
          handleStyle={[
            {
              borderColor: "#2563eb",
              backgroundColor: "#2563eb",
              width: 12,
              height: 12,
              marginTop: -4,
            },
            {
              borderColor: "#2563eb",
              backgroundColor: "#2563eb",
              width: 12,
              height: 12,
              marginTop: -4,
            },
          ]}
          railStyle={{ backgroundColor: "#dbeafe", height: 4 }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>£{minMax[0]}</span>
          <span>£{minMax[1]}</span>
        </div>
      </div>
      {/* Yard Range Filter */}
      <div className="w-full max-w-xs pl-1 pr-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <label className="font-medium text-gray-700 text-xs">
            Yard Range
          </label>
          <span className="text-blue-700 font-semibold text-sm">
            {yardRange?.[0]} - {yardRange?.[1]} yd
          </span>
        </div>
        <Slider
          range
          min={yardMinMax[0]}
          max={yardMinMax[1]}
          value={yardRange}
          onChange={setYardRange}
          allowCross={false}
          step={1}
          trackStyle={[{ backgroundColor: "#2563eb", height: 4 }]}
          handleStyle={[
            {
              borderColor: "#2563eb",
              backgroundColor: "#2563eb",
              width: 12,
              height: 12,
              marginTop: -4,
            },
            {
              borderColor: "#2563eb",
              backgroundColor: "#2563eb",
              width: 12,
              height: 12,
              marginTop: -4,
            },
          ]}
          railStyle={{ backgroundColor: "#dbeafe", height: 4 }}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>{yardMinMax[0]} yd</span>
          <span>{yardMinMax[1]} yd</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
