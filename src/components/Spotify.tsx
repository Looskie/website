import { AnimatePresence, motion } from "framer-motion";
import { useLanyardWS } from "use-lanyard";
import { styled } from "../../stitches.config";
import { DISCORD_ID } from "../utils/constants";

const Wrapper = styled(motion.div, {
  position: "absolute",
  bottom: "calc($4 + 15vh)",
  right: "$window-padding",

  "@mobile": {
    maxWidth: "calc(100% - (2 * 3em))",
  },
});

const Container = styled(motion.div, {
  maxWidth: 350,
  display: "flex",
  alignItems: "center",
  background: "$primary800",
  padding: "$2",
  borderRadius: "$xlarge",
  fontSize: "$small",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: "1px solid $primary700",

  "@mobile": {
    maxWidth: "100%",
    width: "100%",
  },

  "> img": {
    width: 90,
    height: 90,
    borderRadius: "$xlarge",
  },

  "> span": {
    position: "relative",
    minWidth: 8,
    minHeight: 8,
    borderRadius: "50%",
    background: "#1DB954",
    margin: "0 $2 0 $1",
  },

  "> div": {
    overflow: "hidden",

    "> h2": {
      fontSize: "$small",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "#1DB954",
      fontWeight: "800",
    },

    "> p": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontSize: "$small",
    },
  },
});

const WRAPPER_ANIMATION = {
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
};

const ALBUM_ART_ANIMATION = {
  animate: {
    opacity: 1,
    x: 0,
    height: 90,
    width: 90,
  },
  initial: {
    opacity: 0,
    x: -120,
    height: 0,
    width: 0,
  },
};

const SPOTIFY_ICON_ANIMATION = {
  animate: {
    opacity: 0,
    height: 0,
    width: 0,
  },
  initial: {
    opacity: 1,
    height: 8,
    width: 8,
  },
};

const SPOTIFY_LISTENING_NOW_ANIMATION = {
  animate: {
    opacity: 1,
    height: "auto",
    width: "auto",
    y: 0,
  },
  initial: {
    opacity: 0,
    height: 0,
    width: 0,
    y: 20,
  },
};

const LONG_TRANSITION = {
  type: "spring",
  damping: 15,
  stiffness: 100,
  duration: 0.5,
};

const SHORT_TRANSITION = {
  ...LONG_TRANSITION,
  duration: 0.15,
};

const Spotify = () => {
  const data = useLanyardWS(DISCORD_ID);

  if (!data?.spotify) {
    return null;
  }

  return (
    <AnimatePresence>
      <Wrapper
        animate={WRAPPER_ANIMATION.animate}
        initial={WRAPPER_ANIMATION.initial}
        exit={WRAPPER_ANIMATION.initial}
        transition={SHORT_TRANSITION}
      >
        <Container layout whileHover="animate" exit="initial" initial="initial">
          <motion.img
            variants={ALBUM_ART_ANIMATION}
            src={data.spotify.album_art_url ?? ""}
            alt={`${data.spotify.song} by ${data.spotify.artist}`}
            transition={LONG_TRANSITION}
          />
          <motion.span
            variants={SPOTIFY_ICON_ANIMATION}
            transition={SHORT_TRANSITION}
          />
          <div>
            <motion.h2
              variants={SPOTIFY_LISTENING_NOW_ANIMATION}
              transition={SHORT_TRANSITION}
            >
              Listening now
            </motion.h2>
            <p>
              {data.spotify.song} - {data.spotify.artist}
            </p>
          </div>
        </Container>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Spotify;
