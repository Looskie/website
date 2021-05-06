import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <title>DEVLOOSKIE</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Hello, I am DEVLOOSKIE, a 16 year old fullstack web developer and designer.'
        />
        <meta
          name='keywords'
          content='Developer, Devlooskie, DEVLOOSKIE, looskie, looskie, dev, developer ui, ui, ux, html, js, css, looskie.com, looskieee, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, '
        />

        <link rel='icon' href='assets/img/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
