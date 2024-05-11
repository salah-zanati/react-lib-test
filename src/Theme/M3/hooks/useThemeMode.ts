import { useLayoutEffect, useState } from "react";
import { ThemeMode } from "../..";

export const THEME_MODE_KEY = "ThemeModeKey";

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useLayoutEffect(() => {
    if (localStorage.getItem(THEME_MODE_KEY)) {
      const localMode = JSON.parse(
        localStorage.getItem(THEME_MODE_KEY) || "{}"
      );
      setThemeMode(localMode);
    }
  }, []);

  const toggleTheme = () => {
    const value = themeMode == "light" ? "dark" : "light";
    setThemeMode(value);
    localStorage.setItem(THEME_MODE_KEY, JSON.stringify(value));
  };

  return [themeMode, toggleTheme, setThemeMode] as const;
};
