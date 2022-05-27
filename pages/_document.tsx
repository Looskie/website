import Document, {
  Head,
  Html,
  NextScript,
  Main,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Theme } from "../utils/Theme";

const Page = () => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="canonical" href="https://looskie.com" />
      <meta property="og:title" content="DEVLOOSKIE" key="title" />
      <meta name="theme-color" content={Theme.accent} />
      <meta property="og:site_name" content="DEVLOOSKIE" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon/favicon-32x32.png"
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={Theme.accent}
      />
      <meta name="apple-mobile-web-app-title" content="dahliaOS" />
      <meta
        name="msapplication-TileImage"
        content="/images/favicon/favicon.png"
      />
      <meta name="msapplication-TileColor" content={Theme.accent} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />

      <meta
        name="description"
        content="Cody Miller, 17 y/o software engineer and designer"
      />
      <meta
        name="og:description"
        content="Cody Miller, 17 y/o software engineer and designer"
      />
      <meta httpEquiv="Content-Language" content="en" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default class DocumentClass extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return <Page />;
  }
}
