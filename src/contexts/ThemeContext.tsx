import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "auto";

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  isDark: boolean;
}

interface ThemeContextType {
  theme: Theme;
  setThemeMode: (mode: ThemeMode) => void;
  setPrimaryColor: (color: string) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { ThemeContext };

const defaultColors: ThemeColors = {
  primary: "#3B82F6",
  secondary: "#6B7280",
  accent: "#8B5CF6",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#06B6D4",
};

const getSystemTheme = (): boolean => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>({
    mode: "light",
    colors: defaultColors,
    isDark: false,
  });

  // CSS 변수 업데이트 함수
  const updateCSSVariables = (isDark: boolean) => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme.mode === "auto") {
        const newIsDark = e.matches;
        setTheme((prev) => ({ ...prev, isDark: newIsDark }));
        updateCSSVariables(newIsDark);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // 초기 시스템 테마 설정 (auto 모드일 때)
    if (theme.mode === "auto") {
      const systemIsDark = getSystemTheme();
      if (systemIsDark !== theme.isDark) {
        setTheme((prev) => ({ ...prev, isDark: systemIsDark }));
        updateCSSVariables(systemIsDark);
      }
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme.mode, theme.isDark]);

  // 테마 변경 시 CSS 변수 업데이트
  useEffect(() => {
    updateCSSVariables(theme.isDark);
  }, [theme.isDark]);

  const setThemeMode = (mode: ThemeMode) => {
    let isDark: boolean;

    if (mode === "light") {
      isDark = false;
    } else if (mode === "dark") {
      isDark = true;
    } else if (mode === "auto") {
      isDark = getSystemTheme();
    } else {
      isDark = false;
    }

    setTheme((prev) => ({ ...prev, mode, isDark }));
    updateCSSVariables(isDark);
  };

  const setPrimaryColor = (color: string) => {
    setTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, primary: color },
    }));
  };

  const toggleTheme = () => {
    // light와 dark 모드만 전환
    if (theme.mode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setThemeMode, setPrimaryColor, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
