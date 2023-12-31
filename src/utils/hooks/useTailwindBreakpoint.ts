import { useEffect, useState } from "react";
import { fullTwConfig } from "../constants";

export type Breakpoint = keyof (typeof fullTwConfig)["theme"]["screens"];
const breakpoints = Object.keys(fullTwConfig.theme.screens) as [
  ...[Breakpoint]
];

export default function useTailwindBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      const breakpoint = breakpoints.reduce((acc, curr) => {
        const breakpointWidth = fullTwConfig.theme.screens[curr];

        // Parseint will automatically ignore the "px" suffix
        if (windowWidth > parseInt(breakpointWidth)) {
          return curr;
        }

        return acc;
      }, "sm");

      setBreakpoint(breakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
}
