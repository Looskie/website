import type { Config } from "tailwindcss";
// @ts-expect-error xD
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        cursor: "cursor 8s linear infinite",
      },
      keyframes: {
        cursor: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      spacing: {
        "default-window": "3.5em",
      },
      colors: {
        primary: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#303030",
          800: "#262626",
          900: "#171717",
        },
        highlight: "rgba(38,38,38,.7)",
      },
    },
  },
  plugins: [
    {
      handler: (tw) => {
        tw.matchComponents(
          {
            "bg-grid": (value) => ({
              backgroundSize: "7em 16em",
              backgroundImage: `
								linear-gradient(to right, ${value} 1px, transparent 1px),
								linear-gradient(to bottom, ${value} 1px, transparent 1px)
							`,
            }),
          },
          {
            values: flattenColorPalette(tw.theme("colors")),
            type: "color",
          }
        );
      },
    },
  ],
} satisfies Config;

export default config;
