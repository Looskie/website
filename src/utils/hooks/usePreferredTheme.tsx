/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useEffect, useState } from "react";
import { lightTheme } from "../../../stitches.config";

const usePreferredTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const setMatch = (matches: boolean) => {
      const html = document.documentElement;

      html.classList.toggle(lightTheme.className, matches);
      setTheme(matches ? "light" : "dark");
    };

    const media = window.matchMedia("(prefers-color-scheme: light)");
    setMatch(media.matches);

    media.addEventListener("change", (e) => setMatch(e.matches));
    return () => {
      media.removeEventListener("change", (e) => setMatch(e.matches));
    };
  }, []);

  return theme;
};

export default usePreferredTheme;
