import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../utils/Theme";
import { ParallaxProvider } from "react-scroll-parallax";

function Website({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default Website;
