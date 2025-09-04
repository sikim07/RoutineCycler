import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  // 임시 데이터 - 나중에 상태 관리로 대체
  const todayRoutines = [
    { id: 1, name: "Morning Routine", completed: true, time: "07:00" },
    { id: 2, name: "Workout", completed: false, time: "18:00" },
    { id: 3, name: "Evening Routine", completed: false, time: "21:00" },
  ];

  const quickStats = {
    totalRoutines: 8,
    completedToday: 1,
    streak: 5,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* 상단 섹션 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 px-6 pt-12 pb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {t("home.greeting")}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{t("home.subtitle")}</p>
      </div>

      <div className="px-6 -mt-4">
        {/* 통계 카드 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-6 transition-colors duration-200">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {quickStats.totalRoutines}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {t("home.quickStats.total")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                {quickStats.completedToday}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {t("home.quickStats.today")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {quickStats.streak}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {t("home.quickStats.streak")}
              </div>
            </div>
          </div>
        </div>

        {/* 오늘의 루틴 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("home.todayRoutines")}
            </h2>
            {todayRoutines.length > 0 ? (
              <div className="space-y-3">
                {todayRoutines.map((routine) => (
                  <div
                    key={routine.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          routine.completed
                            ? "bg-green-500 border-green-500"
                            : "border-gray-300 dark:border-gray-500"
                        }`}
                      >
                        {routine.completed && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p
                          className={`font-medium ${
                            routine.completed
                              ? "text-gray-400 dark:text-gray-500 line-through"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {routine.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {routine.time}
                        </p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${
                        routine.completed
                          ? "bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    >
                      {routine.completed
                        ? t("common.done")
                        : t("common.complete")}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {t("home.noRoutines")}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  {t("home.noRoutinesSubtitle")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 테스트용 네비게이션 버튼 (우측 하단 고정) */}
        <div className="fixed bottom-6 right-6 space-y-2">
          <Link
            to={ROUTES.ROUTINES}
            className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </Link>
          <Link
            to={ROUTES.SETTINGS}
            className="w-12 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
