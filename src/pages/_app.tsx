import type { AppProps } from "next/app";
import { globalCss, styled } from "../../stitches.config";
import Nav from "../components/Nav";
import Spotify from "../components/Spotify";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { loadCursor } from "../utils/cursor";

const Wrapper = styled("main", {
  minHeight: "100vh",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const Content = styled("div", {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  height: "85vh",
  overflow: "auto",
  padding: "$window-padding",
});

const Cursor = styled("div", {
  position: "fixed",
  width: 30,
  height: 30,
  borderRadius: "50%",
  pointerEvents: "none",
  border: "2px solid $primary400",
  mixBlendMode: "difference",
  transition: "opacity 0.15s, transform 0.15s",
  zIndex: 999999999,

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
    <>
      <Cursor ref={cursorCanvas} />
      <Wrapper>
        <Content>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </Content>
        <Spotify />
        <Nav />
      </Wrapper>
    </>
  );
}
