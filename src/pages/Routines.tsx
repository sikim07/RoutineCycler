import { Link } from "react-router-dom";

const Routines = () => {
  return (
    <div className="text-center py-10 px-5 min-h-screen">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
        My Routines
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
        Manage your daily routines here.
      </p>
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Morning Routine
          </h3>
          <p className="text-gray-600">Start your day with energy</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Evening Routine
          </h3>
          <p className="text-gray-600">Wind down and prepare for tomorrow</p>
        </div>
      </div>
      <Link
        to="/"
        className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center min-h-[44px] flex items-center justify-center mx-auto"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Routines;
