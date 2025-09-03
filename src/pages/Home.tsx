import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const Home = () => {
  return (
    <div className="text-center py-10 px-5 min-h-screen">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
        Routine Cycler
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
        Welcome to your routine management app!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-8">
        <Link
          to={ROUTES.HOME}
          className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center min-h-[44px] flex items-center justify-center"
        >
          Home
        </Link>
        <Link
          to={ROUTES.ROUTINES}
          className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center min-h-[44px] flex items-center justify-center"
        >
          Routines
        </Link>
        <Link
          to={ROUTES.SETTINGS}
          className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center min-h-[44px] flex items-center justify-center"
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Home;
