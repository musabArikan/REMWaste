const SkipCard = ({ skip, image, onSelect, selected }) => {
  const calculateTotalPrice = (skip) => {
    if (!skip) return 0;
    const vatAmount = (skip.price_before_vat * skip.vat) / 100;
    return (skip.price_before_vat + vatAmount).toFixed(2);
  };

  return (
    <div
      onClick={() => onSelect(skip)}
      className={`bg-white bg-opacity-90 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.02] cursor-pointer ${
        selected ? "ring-4 ring-blue-500" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold !rounded-button whitespace-nowrap">
          {skip.size} Yards
        </div>
        {!skip.allowed_on_road && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Not Allowed On The Road
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          {skip.size} Yard Skip
        </h3>
        <p className="text-gray-500 mb-2">
          {skip.hire_period_days} day hire period
        </p>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-gray-500 text-sm">Total Price</p>
            <p className="text-3xl font-bold text-blue-600">
              £{calculateTotalPrice(skip)}
            </p>
          </div>
        </div>
        <button
          type="button"
          tabIndex={-1}
          className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 !rounded-button whitespace-nowrap ${
            selected
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"
          }`}
        >
          {selected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
