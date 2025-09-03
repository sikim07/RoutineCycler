import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const NotFound = () => {
  return (
    <div className="text-center py-10 px-5 min-h-screen">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to={ROUTES.HOME}
        className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center min-h-[44px] flex items-center justify-center mx-auto"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
