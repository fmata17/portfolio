import { useState, useEffect } from "react";

export default function useTheme() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light",
  );

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return {
    isDark,
    toggleTheme,
  };
}