import React, { createContext, useContext, useState, useEffect } from "react";
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
    mode: "auto",
    colors: defaultColors,
    isDark: getSystemTheme(),
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme.mode === "auto") {
        setTheme((prev) => ({ ...prev, isDark: e.matches }));
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme.mode]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme.isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme.isDark]);

  const setThemeMode = (mode: ThemeMode) => {
    let isDark = theme.isDark;

    if (mode === "light") {
      isDark = false;
    } else if (mode === "dark") {
      isDark = true;
    } else if (mode === "auto") {
      isDark = getSystemTheme();
    }

    setTheme((prev) => ({ ...prev, mode, isDark }));
  };

  const setPrimaryColor = (color: string) => {
    setTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, primary: color },
    }));
  };

  const toggleTheme = () => {
    const newMode = theme.mode === "light" ? "dark" : "light";
    setThemeMode(newMode);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setThemeMode, setPrimaryColor, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
