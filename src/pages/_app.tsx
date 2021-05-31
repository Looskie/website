import { AppProps } from "next/app";

import "react-tippy/dist/tippy.css";
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
