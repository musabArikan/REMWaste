import { useRef, useEffect } from "react";

const Header = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768 && progressRef.current) {
      progressRef.current.scrollTo({ left: 360, behavior: "smooth" });
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-shrink-0 mb-2 md:mb-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              REMWaste
            </h1>
          </div>
          {/* Progress Bar */}
          <div
            className="flex-grow mx-0 md:mx-8 overflow-x-auto hide-scrollbar flex items-center h-12"
            ref={progressRef}
          >
            <div className="flex items-center justify-center min-w-max">
              <div className="flex items-center ">
                {/* Progress Steps */}
                {/* Postcode  */}
                <div className="flex items-center">
                  <div className="rounded-full py-2 px-4">
                    <i className="fas fa-map-marker-alt text-md text-blue-600"></i>
                  </div>
                  <span className="ml-2 text-sm font-medium text-blue-600">
                    Postcode
                  </span>
                  <div className="h-[2px] w-16 bg-blue-600 mx-4"></div>
                </div>
                {/* Waste Type  */}
                <div className="flex items-center">
                  <div className="rounded-full py-2 px-4">
                    <i className="fas fa-trash-alt text-md text-blue-600"></i>
                  </div>
                  <span className="ml-2 text-sm font-medium text-blue-600">
                    Waste Type
                  </span>
                  <div className="h-[2px] w-16 bg-blue-600 mx-4"></div>
                </div>
                {/* Select Skip  */}
                <div className="flex items-center">
                  <div className="rounded-full py-2 px-4 bg-blue-600">
                    <i className="fas fa-truck text-md text-white"></i>
                  </div>
                  <span className="ml-2 text-sm font-medium text-blue-600">
                    Select Skip
                  </span>
                  <div className="h-[2px] w-12 bg-gray-300 mx-2"></div>
                </div>
                {/* Permit Check  */}
                <div className="flex items-center opacity-60">
                  <div className="bg-gray-200 rounded-full py-2 px-4">
                    <i className="fas fa-clipboard-check text-md text-gray-500"></i>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    Permit
                  </span>
                  <div className="h-[2px] w-12 bg-gray-300 mx-2"></div>
                </div>
                {/* Choose Date  */}
                <div className="flex items-center opacity-60">
                  <div className="bg-gray-200 rounded-full py-2 px-4">
                    <i className="fas fa-calendar-alt text-md text-gray-500"></i>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    Date
                  </span>
                  <div className="h-[2px] w-12 bg-gray-300 mx-2"></div>
                </div>
                {/* Payment  */}
                <div className="flex items-center opacity-60">
                  <div className="bg-gray-200 rounded-full py-2 px-4">
                    <i className="fas fa-credit-card text-md text-gray-500"></i>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    Payment
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Progress Bar End */}
        </div>
      </div>
    </header>
  );
};

export default Header;
