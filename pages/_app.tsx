import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { LightTheme } from "../utils/Theme";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useRef } from "react";
import { loadCursor } from "../utils/Cursor";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
  }
`;

const Cursor = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  pointer-events: none;
  border: 2px solid ${({ theme }) => theme.secondaryBackground};
  mix-blend-mode: difference;
  transition: opacity 0.2s, transform 0.25s;
  z-index: 99999;
`;

function Website({ Component, pageProps }: AppProps) {
  const cursorCanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !cursorCanvas.current) return;

    return loadCursor(cursorCanvas.current);
  }, []);
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <ParallaxProvider>
        <Cursor ref={cursorCanvas} />
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default Website;
