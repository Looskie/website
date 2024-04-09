import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "hello@looskie.com";
const GITHUB = "https://github.com/looskie";
const TWITTER = "https://twitter.com/devlooskie";
const LINKEDIN = "https://linkedin.com/in/devlooskie/";
const INSTAGRAM = "https://instagram.com/devlooskie";

const DISCORD_ID = "207204046115831809";

type Work = {
  company: string;
  position: string;
  link?: string;
  description: string;
};

const WORK: Work[] = [
  {
    company: "Bloom",
    position: "Fullstack & Android Engineer",
    link: "https://bloomapp.com",
    description:
      "Bloom is an app that helps you learn to invest for building wealth long-term.",
  },
  {
    company: "Hop Inc.",
    position: "Design & Frontend Engineer",
    link: "https://hop.io",
    description:
      "Hop is a cloud provider that enables you to deploy any service to the cloud. No more configs, no more fuss, just push your code.",
  },
  {
    company: "Giggl Inc.",
    position: "Design & Mobile/Frontend Engineer",
    link: "https://giggl.app",
    description:
      "From hosting virtual movie nights, browsing the web with friends or watching anime with your long-distance partner: Giggl lets you do that together in real-time.",
  },
  {
    company: "IMPERIAL",
    position: "Design & Founder/Fullstack Engineer",
    link: "https://imperialb.in",
    description:
      "IMPERIAL is a code/text storing site where you can share, edit, or encrypt documents.",
  },
  {
    company: "Capybara API",
    position: "Fullstack Engineer",
    link: "https://capy.lol/",
    description:
      "capy.lol is a free, open-source API that allows you to generate random images of capybaras.",
  },
  {
    company: "Capybara tic-tac-toe",
    position: "Fullstack Engineer",
    link: "https://tictactoe.capy.lol/",
    description:
      "Proof-of-concept for a multiplayer tic-tac-toe game using Hop Channels",
  },
  {
    company: "Subso",
    position: "Android Developer",
    link: "https://sub.so",
    description:
      "Subso helps you navigate the vast content landscape by joining all creators' socials into one.",
  },
  {
    company: "UberLast",
    position: "Android Developer",
    link: "https://uberlast.app",
    description:
      "Uberlast helps you progressively overload on all your lifts, maintaining optimal rep ranges and keeping your progress in check.",
  },
  {
    company: "dahliaOS",
    position: "Frontend Engineer",
    link: "https://dahliaos.io",
    description:
      "dahliaOS is a modern, open-source operating system for personal computers, powered by Flutter.",
  },
  {
    company: "Gumroad Inc.",
    position: "Frontend Engineer",
    link: "https://gumroad.com",
    description:
      "Gumroad is a platform for creators to sell directly to their audience.",
  },

  {
    company: "Hits",
    position: "Fullstack Engineer",
    link: "https://hits-app.vercel.app/",
    description:
      "A customizable and super fast badge for displaying hits for any link",
  },
];

export {
  EMAIL,
  TWITTER,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  DISCORD_ID,
  WORK,
  fullTwConfig,
};
