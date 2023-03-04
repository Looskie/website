import { JetBrains_Mono as jetBrainsMono } from "@next/font/google";
import { createStitches } from "@stitches/react";

const JetBrains = jetBrainsMono({
  preload: true,
  subsets: ["latin"],
});

const stitches = createStitches({
  theme: {
    colors: {
      // Primary
      primary100: "#f5f5f5",
      primary200: "#e5e5e5",
      primary300: "#d4d4d4",
      primary400: "#a3a3a3",
      primary500: "#737373",
      primary600: "#525252",
      primary700: "#404040",
      primary800: "#262626",
      primary900: "#171717",
    },
    fonts: {
      main: `${JetBrains.style.fontFamily}, monospace`,
    },
    fontSizes: {
      xsmall: "0.5em",
      small: "1em",
      schmedium: "1.25em",
      medium: "1.5em",
      large: "2em",
      xlarge: "3em",
      "2xlarge": "6em",
      "3xlarge": "10em",
    },
    radii: {
      none: "0",
      small: "0.125rem",
      medium: "0.25rem",
      large: "0.5rem",
      xlarge: "0.75rem",
      "2xlarge": "1rem",
      "3xlarge": "1.5rem",
    },
    space: {
      "1": "0.5em",
      "2": "0.75em",
      "3": "1em",
      "4": "1.5em",
      "5": "2em",
      "6": "3em",
      "window-padding": "3.5em",
    },
  },
  media: {
    small: "(max-width: 880px)",
    xsmall: "(max-width: 580px)",
    mobile: "(max-width: 440px)",
  },
});

export const { styled, css, keyframes, getCssText, theme, config } = stitches;

export const globalCss = stitches.globalCss({
  "*, *:before, *:after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$main",
  },

  html: {
    background: "$primary900",
    color: "$primary100",
    fontSize: 16,
    overflowX: "hidden",
    minHeight: 600,
    width: "100%",
  },

  p: {
    fontSize: "$schmedium",
    maxWidth: "75ch",
  },

  a: {
    position: "relative",
    display: "inline-flex",
    color: "$primary300",
    textDecoration: "none",
    width: "fit-content",
    fontStyle: "italic",
    willChange: "transform",
    transformOrigin: "left",
    transition: "all 0.15s ease-in-out",

    "&:hover": {
      transform: "scale(1.15, 1)",

      "&:after": {
        width: "100%",
      },
    },

    "&:after": {
      position: "absolute",
      content: "''",
      bottom: -2.25,
      width: "40%",
      height: 2.25,
      background: "$primary300",
      transition: "width 0.25s ease-in-out",
    },
  },

  // Small
  "@media (max-width: 880px)": {
    html: {
      fontSize: 13,
    },
  },
});
