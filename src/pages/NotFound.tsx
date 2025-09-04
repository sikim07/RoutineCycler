import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { SunIcon, MoonIcon } from "@/components/icons";

const NotFound = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col items-center justify-center px-6">
      {/* 테마 전환 버튼 */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className="w-12 h-12 bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-95"
          aria-label={
            theme.isDark ? t("common.switchToLight") : t("common.switchToDark")
          }
        >
          {theme.isDark ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
      <div className="text-center">
        <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-16 h-16 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
            />
          </svg>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          {t("notFound.title")}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
          {t("notFound.subtitle")}
        </p>
        <Link
          to={ROUTES.HOME}
          className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-2xl transition-all duration-200 active:scale-95 shadow-lg"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          {t("notFound.goHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
