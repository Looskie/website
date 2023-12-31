import { AnimatePresence, motion } from "framer-motion";
import { useLanyardWS } from "use-lanyard";
import { DISCORD_ID } from "../utils/constants";

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
    margin: 0,
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

export default function Spotify() {
  const data = useLanyardWS(DISCORD_ID);

  return (
    <AnimatePresence>
      {data?.spotify ? (
        <motion.div
          className="absolute bottom-[calc(15vh_+_4vh)] left-default-window-sm sm:right-default-window sm:left-auto"
          animate={WRAPPER_ANIMATION.animate}
          initial={WRAPPER_ANIMATION.initial}
          exit={WRAPPER_ANIMATION.initial}
          transition={SHORT_TRANSITION}
        >
          <motion.div
            layout
            whileHover="animate"
            exit="initial"
            initial="initial"
            className="max-w-[280px] md:max-w-[350px] flex gap-2 items-center bg-primary-800 p-2 rounded-xl overflow-hidden whitespace-nowrap border border-primary-700"
          >
            {data.spotify.album_art_url ? (
              <motion.img
                className="size-[90px] rounded-lg border border-primary-700"
                variants={ALBUM_ART_ANIMATION}
                src={data.spotify.album_art_url}
                alt={`${data.spotify.song} by ${data.spotify.artist}`}
                transition={LONG_TRANSITION}
              />
            ) : null}
            <motion.span
              className="relative min-w-[8px] min-h-[8px] rounded-full bg-green-500 mr-2"
              variants={SPOTIFY_ICON_ANIMATION}
              transition={SHORT_TRANSITION}
            />
            <div className="overflow-hidden">
              <motion.h2
                className="overflow-hidden text-ellipsis text-green-500 font-bold"
                variants={SPOTIFY_LISTENING_NOW_ANIMATION}
                transition={SHORT_TRANSITION}
              >
                Listening now
              </motion.h2>
              <p className="font-light overflow-hidden text-ellipsis text-[1em] mr-3">
                {data.spotify.song} - {data.spotify.artist}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
