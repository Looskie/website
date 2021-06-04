import Document, { Head, Html, NextScript, Main } from "next/document";

const Page = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />

        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#af3b2c' />
        <meta name='msapplication-TileColor' content='#af3b2c' />
        <meta name='theme-color' content='#af3b2c' />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500&display=swap'
          rel='stylesheet'
        />
        <meta
          name='description'
          content='Hey, I am Cody, a 16 y/o full-stack web developer & designer. Currently working on imperialbin.'
        />
        <meta
          name='keywords'
          content='Developer, Devlooskie, DEVLOOSKIE, looskie, looskie, dev, developer ui, ui, ux, html, js, css, looskie.com, looskieee, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, '
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default class extends Document {
  render(): JSX.Element {
    return <Page />;
  }
}
