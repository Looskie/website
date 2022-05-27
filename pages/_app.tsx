import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../utils/Theme";

function Website({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Website;
