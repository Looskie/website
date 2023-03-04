import Head from "next/head";
import { styled } from "../../stitches.config";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedText from "../components/AnimatedText";
import { TitleWrapper } from "../components/CommonPageStyles";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../components/Icons";
import { GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from "../utils/constants";

const SocialList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: 25,
  fontSize: "$schmedium",

  li: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    color: "$primary300",

    "> svg": {
      width: 30,
      height: 30,
    },
  },
});

export default function Contact() {
  return (
    <AnimatedPage>
      <Head>
        <title>Cody Miller</title>
        <meta name="description" content="Cody" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleWrapper>
        <AnimatedText element="h1" text="Contact" />
      </TitleWrapper>

      <SocialList>
        <li>
          <TwitterIcon />
          <a href={TWITTER} target="_blank" rel="noreferrer">
            @devlooskie
          </a>
        </li>
        <li>
          <GitHubIcon fill="white" />
          <a href={GITHUB} target="_blank" rel="noreferrer">
            @looskie
          </a>
        </li>
        <li>
          <LinkedInIcon />
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            @devlooskie
          </a>
        </li>
        <li>
          <InstagramIcon />
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            @devlooskie
          </a>
        </li>
        <li>
          <MailIcon /> hello@looskie.com
        </li>
      </SocialList>
    </AnimatedPage>
  );
}
