import Head from "next/head";
import { styled } from "../../stitches.config";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedText from "../components/AnimatedText";
import { TitleWrapper } from "../components/CommonPageStyles";
import { WORK } from "../utils/constants";

const WorkWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 100,
});

const WorkItem = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  maxWidth: 700,

  "> span": {
    position: "absolute",
    left: -45,
    top: -30,
    fontSize: "$xlarge",
    color: "$primary100",
    opacity: 0.12,
  },

  "> h2": {
    fontSize: "$xlarge",
    color: "$primary100",
    marginBottom: 10,
  },

  "> p": {
    fontSize: "$schmedium",
    color: "$primary200",
    lineHeight: 1.5,
    fontWeight: 300,
    marginBottom: 10,

    "> span": {
      fontWeight: 500,
      color: "$primary400",
    },
  },
});

export default function Work() {
  return (
    <AnimatedPage>
      <Head>
        <title>Cody Miller</title>
        <meta
          name="description"
          content="here are a few hand picked projects i've worked on recently."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleWrapper>
        <AnimatedText element="h1" text="Work" />
      </TitleWrapper>
      <WorkWrapper>
        {WORK.map((work, index) => (
          <WorkItem key={work.company}>
            <span>{index.toString().padStart(2, "0")}</span>
            <h2>{work.company}</h2>
            <p>
              <span>{work.position} — </span>
              {work.description}
            </p>
            <a href={work.link} target="_blank" rel="noreferrer">
              visit website
            </a>
          </WorkItem>
        ))}
      </WorkWrapper>
    </AnimatedPage>
  );
}
