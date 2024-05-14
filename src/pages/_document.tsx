import { Head, Html, Main, NextScript } from "next/document";
import { CSideScript } from "@c-side/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <CSideScript />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Developer, Devlooskie, DEVLOOSKIE, looskie, looskie, dev, developer ui, ui, ux, html, js, css, looskie.com, looskieee, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, "
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#171717" />
        <meta name="msapplication-TileColor" content="#171717" />
        <meta name="theme-color" content="#171717" />

        {/* Before anyone flames me for install jquery, this is just a test for c/side */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          type="text/javascript"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
