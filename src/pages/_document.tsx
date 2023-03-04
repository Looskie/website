import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../../stitches.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="hey, i'm cody, a 17 year old software engineer and designer based in the
        United States. i strive off of building unique and polished web
        interfaces both for consumer and business ends. i love lacrosse,
        capybaras, and writing open source software! currently working on hop."
        />
        <meta
          name="keywords"
          content="Developer, Devlooskie, DEVLOOSKIE, looskie, looskie, dev, developer ui, ui, ux, html, js, css, looskie.com, looskieee, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: getCssText() }}
          id="stitches"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
