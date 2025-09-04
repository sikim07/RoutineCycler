import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import {
  SunIcon,
  MoonIcon,
  PlusIcon,
  CheckIcon,
  RoutineIcon,
  SettingsIcon,
  ClockIcon,
  CalendarIcon,
  WaveIcon,
} from "@/components/icons";

const Home = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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
    <div className="min-h-screen bg-background-primary transition-colors duration-200">
      {/* 상단 섹션 */}
      <div className="bg-gradient-blue px-6 pt-12 pb-8">
        <div className="flex items-center justify-between">
          <div>
            {/* 인사말 */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2">
                {t("home.greeting")}
                <WaveIcon className="w-6 h-6 text-primary-500" />
              </h1>
              <p className="text-text-secondary">{t("home.subtitle")}</p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="w-12 h-12 bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-95"
            aria-label={
              theme.isDark
                ? t("common.switchToLight")
                : t("common.switchToDark")
            }
          >
            {theme.isDark ? (
              <MoonIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <SunIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      <div className="px-6 -mt-4">
        {/* 통계 카드 */}
        <div className="bg-background-secondary rounded-2xl shadow-sm border border-border-primary p-6 mb-6 transition-colors duration-200">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CalendarIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {quickStats.totalRoutines}
              </div>
              <div className="text-xs text-text-tertiary">
                {t("home.quickStats.total")}
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {quickStats.completedToday}
              </div>
              <div className="text-xs text-text-tertiary">
                {t("home.quickStats.today")}
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <ClockIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {quickStats.streak}
              </div>
              <div className="text-xs text-text-tertiary">
                {t("home.quickStats.streak")}
              </div>
            </div>
          </div>
        </div>

        {/* 오늘의 루틴 */}
        <div className="bg-background-secondary rounded-2xl shadow-sm border border-border-primary mb-6 transition-colors duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              {t("home.todayRoutines")}
            </h2>
            {todayRoutines.length > 0 ? (
              <div className="space-y-3">
                {todayRoutines.map((routine) => (
                  <div
                    key={routine.id}
                    className="flex items-center justify-between p-4 bg-background-tertiary rounded-xl transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          routine.completed
                            ? "bg-green-500 border-green-500"
                            : "border-border-secondary"
                        }`}
                      >
                        {routine.completed && (
                          <CheckIcon className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div>
                        <p
                          className={`font-medium ${
                            routine.completed
                              ? "text-text-tertiary line-through"
                              : "text-text-primary"
                          }`}
                        >
                          {routine.name}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {routine.time}
                        </p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${
                        routine.completed
                          ? "bg-background-tertiary text-text-tertiary"
                          : "bg-primary-500 hover:bg-primary-600 text-white"
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
                <div className="w-16 h-16 bg-background-tertiary rounded-full flex items-center justify-center mx-auto mb-3">
                  <PlusIcon className="w-8 h-8 text-text-tertiary" />
                </div>
                <p className="text-text-secondary">{t("home.noRoutines")}</p>
                <p className="text-sm text-text-tertiary">
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
            title={t("routines.title")}
          >
            <RoutineIcon className="w-6 h-6" />
          </Link>
          <Link
            to={ROUTES.SETTINGS}
            className="w-12 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg"
            title={t("settings.title")}
          >
            <SettingsIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
