import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface Settings {
  notifications: {
    enabled: boolean;
    sound: boolean;
    vibration: boolean;
    reminderTime: string;
  };
  privacy: {
    dataSharing: boolean;
    analytics: boolean;
  };
}

const Settings = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setThemeMode, setPrimaryColor } = useTheme();

  const [settings, setSettings] = useState<Settings>({
    notifications: {
      enabled: true,
      sound: true,
      vibration: false,
      reminderTime: "09:00",
    },
    privacy: {
      dataSharing: false,
      analytics: true,
    },
  });

  const handleNotificationChange = (
    key: keyof Settings["notifications"],
    value: boolean | string
  ) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

  const handlePrivacyChange = (
    key: keyof Settings["privacy"],
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value,
      },
    }));
  };

  const languages = [
    { code: "en", name: t("settings.language.english") },
    { code: "ko", name: t("settings.language.korean") },
  ];

  const colorOptions = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Yellow
    "#EF4444", // Red
    "#8B5CF6", // Purple
    "#EC4899", // Pink
    "#06B6D4", // Cyan
    "#84CC16", // Lime
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* 상단 섹션 */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-900 px-6 pt-12 pb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {t("settings.title")}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {t("settings.subtitle")}
        </p>
      </div>

      <div className="px-6 -mt-4">
        {/* 알림 설정 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-200">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4 19h6l-6 6v-6zM4 13h6l-6 6v-6zM4 7h6l-6 6V7zM10 19h6l-6 6v-6zM10 13h6l-6 6v-6zM10 7h6l-6 6V7z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("settings.notifications.title")}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("settings.notifications.subtitle")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {t("settings.notifications.enable")}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("settings.notifications.enableSubtitle")}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.enabled}
                    onChange={(e) =>
                      handleNotificationChange("enabled", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              {settings.notifications.enabled && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {t("settings.notifications.sound")}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t("settings.notifications.soundSubtitle")}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.sound}
                        onChange={(e) =>
                          handleNotificationChange("sound", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {t("settings.notifications.vibration")}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t("settings.notifications.vibrationSubtitle")}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.vibration}
                        onChange={(e) =>
                          handleNotificationChange(
                            "vibration",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t("settings.notifications.reminderTime")}
                    </label>
                    <input
                      type="time"
                      value={settings.notifications.reminderTime}
                      onChange={(e) =>
                        handleNotificationChange("reminderTime", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 테마 설정 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-200">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-pink-600 dark:text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("settings.theme.title")}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("settings.theme.subtitle")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("settings.theme.mode")}
                </label>
                <select
                  value={theme.mode}
                  onChange={(e) =>
                    setThemeMode(e.target.value as "light" | "dark" | "auto")
                  }
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                >
                  <option value="light">{t("settings.theme.light")}</option>
                  <option value="dark">{t("settings.theme.dark")}</option>
                  <option value="auto">{t("settings.theme.auto")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("settings.theme.primaryColor")}
                </label>
                <div className="flex space-x-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => setPrimaryColor(color)}
                      className={`w-10 h-10 rounded-xl border-2 transition-all duration-200 active:scale-95 ${
                        theme.colors.primary === color
                          ? "border-gray-900 dark:border-white scale-110"
                          : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 언어 설정 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-200">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("settings.language.title")}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("settings.language.subtitle")}
                </p>
              </div>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "ko")}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 개인정보 설정 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-200">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("settings.privacy.title")}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("settings.privacy.subtitle")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {t("settings.privacy.dataSharing")}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("settings.privacy.dataSharingSubtitle")}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.dataSharing}
                    onChange={(e) =>
                      handlePrivacyChange("dataSharing", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {t("settings.privacy.analytics")}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("settings.privacy.analyticsSubtitle")}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.analytics}
                    onChange={(e) =>
                      handlePrivacyChange("analytics", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 앱 정보 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-200">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("settings.appInfo.title")}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("settings.appInfo.subtitle")}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-600">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {t("common.version")}
                </span>
                <span className="text-sm text-gray-900 dark:text-white font-medium">
                  1.0.0
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-600">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {t("common.build")}
                </span>
                <span className="text-sm text-gray-900 dark:text-white font-medium">
                  2024.01.01
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {t("common.developer")}
                </span>
                <span className="text-sm text-gray-900 dark:text-white font-medium">
                  {t("settings.appInfo.developerName")}
                </span>
              </div>
            </div>
          </div>
        </div>

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
            {t("settings.backToDashboard")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
