import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { SunIcon, MoonIcon, PlusIcon } from "@/components/icons";

interface Routine {
  id: number;
  name: string;
  description: string;
  time: string;
  days: string[];
  active: boolean;
}

const Routines = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [routines, setRoutines] = useState<Routine[]>([
    {
      id: 1,
      name: "Morning Routine",
      description: "Start your day with energy",
      time: "07:00",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      active: true,
    },
    {
      id: 2,
      name: "Evening Routine",
      description: "Wind down and prepare for tomorrow",
      time: "21:00",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      active: true,
    },
    {
      id: 3,
      name: "Workout",
      description: "Stay fit and healthy",
      time: "18:00",
      days: ["Mon", "Wed", "Fri"],
      active: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newRoutine, setNewRoutine] = useState({
    name: "",
    description: "",
    time: "07:00",
    days: [] as string[],
  });

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleAddRoutine = () => {
    if (newRoutine.name.trim()) {
      const routine: Routine = {
        id: Date.now(),
        name: newRoutine.name,
        description: newRoutine.description,
        time: newRoutine.time,
        days: newRoutine.days,
        active: true,
      };
      setRoutines([...routines, routine]);
      setNewRoutine({ name: "", description: "", time: "07:00", days: [] });
      setShowAddForm(false);
    }
  };

  const handleDeleteRoutine = (id: number) => {
    setRoutines(routines.filter((routine) => routine.id !== id));
  };

  const toggleRoutineStatus = (id: number) => {
    setRoutines(
      routines.map((routine) =>
        routine.id === id ? { ...routine, active: !routine.active } : routine
      )
    );
  };

  const toggleDay = (day: string) => {
    setNewRoutine((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* 상단 섹션 */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900 px-6 pt-12 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t("routines.title")}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t("routines.subtitle")}
            </p>
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
        {/* 루틴 추가 버튼 */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-2xl transition-all duration-200 active:scale-95"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </div>
        {/* 루틴 목록 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("routines.allRoutines")}
            </h2>
            {routines.length > 0 ? (
              <div className="space-y-4">
                {routines.map((routine) => (
                  <div
                    key={routine.id}
                    className="border border-gray-100 dark:border-gray-600 rounded-2xl p-4 bg-gray-50 dark:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {routine.name}
                          </h3>
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              routine.active
                                ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                                : "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {routine.active
                              ? t("common.active")
                              : t("common.inactive")}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {routine.description}
                        </p>
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {routine.time}
                          </span>
                          <div className="flex space-x-1">
                            {daysOfWeek.map((day) => (
                              <span
                                key={day}
                                className={`w-6 h-6 text-xs flex items-center justify-center rounded-lg ${
                                  routine.days.includes(day)
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500"
                                }`}
                              >
                                {day[0]}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <button
                          onClick={() => toggleRoutineStatus(routine.id)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 ${
                            routine.active
                              ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800"
                              : "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
                          }`}
                        >
                          {routine.active
                            ? t("common.inactive")
                            : t("common.active")}
                        </button>
                        <button
                          onClick={() => handleDeleteRoutine(routine.id)}
                          className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-200 active:scale-95"
                        >
                          {t("common.delete")}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-gray-400 dark:text-gray-500"
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
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
                  {t("routines.noRoutines")}
                </p>
                <p className="text-gray-400 dark:text-gray-500">
                  {t("routines.noRoutinesSubtitle")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 새 루틴 추가 폼 */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-6 border border-gray-200 dark:border-gray-600 w-11/12 max-w-md shadow-2xl rounded-3xl bg-white dark:bg-gray-800 transition-colors duration-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("routines.addNewRoutine")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("routines.addNewRoutineSubtitle")}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("routines.routineName")}
                  </label>
                  <input
                    type="text"
                    value={newRoutine.name}
                    onChange={(e) =>
                      setNewRoutine({ ...newRoutine, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder={t("routines.routineNamePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("routines.description")}
                  </label>
                  <textarea
                    value={newRoutine.description}
                    onChange={(e) =>
                      setNewRoutine({
                        ...newRoutine,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder={t("routines.descriptionPlaceholder")}
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("routines.time")}
                  </label>
                  <input
                    type="time"
                    value={newRoutine.time}
                    onChange={(e) =>
                      setNewRoutine({ ...newRoutine, time: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("routines.daysOfWeek")}
                  </label>
                  <div className="flex space-x-2">
                    {daysOfWeek.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`w-10 h-10 text-sm font-medium rounded-xl transition-all duration-200 active:scale-95 ${
                          newRoutine.days.includes(day)
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                        }`}
                      >
                        {day[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex space-x-3 mt-8">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-xl transition-all duration-200 active:scale-95"
                >
                  {t("common.cancel")}
                </button>
                <button
                  onClick={handleAddRoutine}
                  className="flex-1 px-4 py-3 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all duration-200 active:scale-95"
                >
                  {t("routines.addRoutine")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 뒤로가기 버튼 */}
        <div className="text-center mb-8">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 font-medium rounded-2xl transition-all duration-200 active:scale-95"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t("routines.backToDashboard")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Routines;
