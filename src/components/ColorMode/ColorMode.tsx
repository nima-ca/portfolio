import { useEffect, useState } from "react";
import styles from "./ColorMode.module.scss";
import { Moon } from "../../utils/icons/Moon";
import { Sun } from "../../utils/icons/Sun";

const ColorMode = () => {
  const [colorMode, setColorMode] = useState("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const isBrowserInDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const themeState =
      localTheme != "" ? localTheme : isBrowserInDarkMode ? "dark" : "light";
    setColorMode(themeState!);
    if (
      themeState == "dark" &&
      !document.documentElement.classList.contains("dark-mode")
    ) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", themeState);
    }
  }, []);

  const toggleColorMode = () => {
    const targetTheme = colorMode == "dark" ? "light" : "dark";
    setColorMode(targetTheme);
    localStorage.setItem("theme", targetTheme);
    targetTheme == "dark" &&
      document.documentElement.classList.add("dark-mode");
    targetTheme == "light" &&
      document.documentElement.classList.remove("dark-mode");
  };

  return (
    <span className={styles.colorMode}>
      <input onChange={toggleColorMode} type="checkbox" id="colorMode" />
      <label htmlFor="colorMode">
        {colorMode == "dark" ? <Moon /> : <Sun />}
      </label>
    </span>
  );
};

export default ColorMode;
