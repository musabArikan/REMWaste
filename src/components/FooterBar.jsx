import { useAppContext } from "../context/AppContext";

const FooterBar = ({ calculateTotalPrice }) => {
  const { selectedSkip, footerOpen } = useAppContext();

  return (
    <footer
      className={`
        fixed bottom-0 left-0 w-full bg-white shadow-lg px-8
        transition-all duration-500
        ${
          footerOpen && selectedSkip
            ? "py-6 opacity-100 translate-y-0"
            : "py-0 opacity-0 translate-y-full pointer-events-none"
        }
      `}
      style={{ zIndex: 50 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {selectedSkip ? (
            <div className="flex flex-row items-center space-x-4 md:space-x-8 justify-center">
              <span className="text-gray-500 text-md">
                {selectedSkip.size} Yard Skip
              </span>
              <div className="text-2xl font-bold text-blue-600">
                £{calculateTotalPrice(selectedSkip)}
              </div>
              <span className="text-gray-500 text-md">
                {selectedSkip.hire_period_days} day hire
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex flex-col w-full md:w-auto md:flex-row md:space-x-3 gap-3 md:gap-0">
            <button className="w-full md:w-auto px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Back
            </button>
            <button
              className={`w-full md:w-auto px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer ${
                selectedSkip
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedSkip}
            >
              Continue
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
