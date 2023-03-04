import type { AppProps } from "next/app";
import { globalCss, keyframes, styled } from "../../stitches.config";
import Nav from "../components/Nav";
import Spotify from "../components/Spotify";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { loadCursor } from "../utils/cursor";
import Div100vh from "react-div-100vh";

const svgAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const Wrapper = styled("main", {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const Content = styled("div", {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  height: "85%",
  overflow: "auto",
  overflowX: "hidden",
  padding: "$window-padding",
});

const Cursor = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  width: 30,
  height: 30,
  borderRadius: "50%",
  pointerEvents: "none",
  border: "2px solid $primary400",
  mixBlendMode: "difference",
  transition: "opacity 0.15s, transform 0.15s, background-color 0.15s",
  zIndex: 999999999,

  "> svg": {
    opacity: 0,
    width: 35,
    height: 35,
    transition: "opacity .15s",
    animation: `${svgAnimation.name} 8s linear infinite`,
  },

  "&[data-hover-type='link']": {
    "> svg": {
      display: "unset",
      opacity: 1,
    },
  },

  "@mobile": {
    display: "none",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const cursorCanvas = useRef<HTMLDivElement>(null);
  globalCss();

  useEffect(() => {
    if (!cursorCanvas.current) {
      return;
    }

    return loadCursor(cursorCanvas.current);
  }, []);

  return (
    <Div100vh>
      <Cursor ref={cursorCanvas}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <path
            id="curve"
            d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z"
            fill="#181818"
            fillOpacity="0"
          />

          <text fill="white" style={{ fontSize: "0.5em" }}>
            <textPath xlinkHref="#curve">VISIT</textPath>
          </text>
        </svg>
      </Cursor>
      <Wrapper>
        <Content>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </Content>
        <Spotify />
        <Nav />
      </Wrapper>
    </Div100vh>
  );
}
