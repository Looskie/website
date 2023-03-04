import Head from "next/head";
import { styled } from "../../stitches.config";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedText from "../components/AnimatedText";
import { TitleWrapper } from "../components/CommonPageStyles";

export default function About() {
  return (
    <AnimatedPage>
      <Head>
        <title>cody — about</title>
        <meta
          name="description"
          content="hey, i'm cody, a 17 year old software engineer and designer based in the
        United States. i strive off of building unique and polished web
        interfaces both for consumer and business ends. i love lacrosse,
        capybaras, and writing open source software! i'm currently working on hop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleWrapper>
        <AnimatedText element="h1" text="About" />
      </TitleWrapper>
      <p>
        hey, i'm cody, a 17 year old software engineer and designer based in the
        United States. i strive off of building unique and polished web
        interfaces both for consumer and business ends. i love lacrosse,
        capybaras, and writing open source software!
        <br />
        <br />
        current working on{" "}
        <a href="https://hop.io" target="_blank" rel="noreferrer">
          Hop
        </a>
      </p>
    </AnimatedPage>
  );
}
