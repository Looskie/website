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
        "default-window-sm": "2em",
      },
      colors: {
        primary: {
          100: "hsl(var(--primary-100) / <alpha-value>)",
          200: "hsl(var(--primary-200) / <alpha-value>)",
          300: "hsl(var(--primary-300) / <alpha-value>)",
          400: "hsl(var(--primary-400) / <alpha-value>)",
          500: "hsl(var(--primary-500) / <alpha-value>)",
          600: "hsl(var(--primary-600) / <alpha-value>)",
          700: "hsl(var(--primary-700) / <alpha-value>)",
          800: "hsl(var(--primary-800) / <alpha-value>)",
          900: "hsl(var(--primary-900) / <alpha-value>)",
        },
        highlight: "var(--highlight)",
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
