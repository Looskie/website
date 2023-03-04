import { styled } from "../../stitches.config";

export const TitleWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: 778,
  marginBottom: 80,

  "> h1": {
    fontSize: "$3xlarge",
    lineHeight: "9rem",
    textTransform: "uppercase",
    transform: "scale(1.35, 0.8)",
    transformOrigin: "left",

    "@xsmall": {
      fontSize: "$2xlarge",
      lineHeight: "5rem",
    },

    "@mobile": {
      fontSize: "$xlarge",
      lineHeight: "3rem",
    },
  },

  "> span": {
    textAlign: "right",
    fontSize: "$large",
    width: "100%",

    "@small": {
      textAlign: "left",
    },

    "@mobile": {
      fontSize: "$medium",
    },
  },

  "@small": {
    width: "100%",
  },
});
