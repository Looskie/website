/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
// Todo: this file is slightly messy, clean it up whenever i'm not lazy.

/* eslint-disable @next/next/no-img-element */
import { type Track } from "@spotify/web-api-ts-sdk";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { type KeyedMutator } from "swr";
import { useLanyardWS } from "use-lanyard";
import { type SuccessQueueResponse } from "../pages/api/spotify/queue";
import { DISCORD_ID } from "../utils/constants";
import useDebounce from "../utils/hooks/useDebouncedValue";
import useSpotifyQueue from "../utils/hooks/useSpotifyQueue";
import useSpotifySearch from "../utils/hooks/useSpotifySearch";

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
  const [expanded, setExpanded] = useState(false);

  const { queue, mutate } = useSpotifyQueue();
  const data = useLanyardWS(DISCORD_ID);

  useEffect(() => {
    if (data?.spotify?.track_id) {
      void mutate();
    }
  }, [data?.spotify?.track_id]);

  const sortedQueue = useMemo(() => {
    const filteredQueue =
      queue?.queue.filter((s) => s.id !== data?.spotify?.track_id) ?? [];

    const uniqueQueue = filteredQueue.filter(
      (track, index, self) => index === self.findIndex((t) => t.id === track.id)
    );

    return uniqueQueue;
  }, [queue?.queue]);

  return (
    <AnimatePresence>
      {data?.spotify ? (
        <motion.button
          className="absolute z-40 text-left bottom-[calc(15vh_+_4vh)] left-default-window-sm sm:right-default-window sm:left-auto outline-none"
          animate={WRAPPER_ANIMATION.animate}
          initial={WRAPPER_ANIMATION.initial}
          exit={WRAPPER_ANIMATION.initial}
          transition={SHORT_TRANSITION}
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          <motion.div
            layout
            whileHover="animate"
            exit="initial"
            animate={expanded ? "animate" : undefined}
            initial="initial"
            className="w-full max-w-[280px] md:max-w-[350px] flex flex-col items-center bg-primary-800 p-2 rounded-xl overflow-hidden whitespace-nowrap border border-primary-700"
          >
            <div className="flex w-full items-center gap-2 h-full">
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
            </div>
            <AnimatePresence>
              {expanded ? (
                <Queue queue={sortedQueue} refetchQuerys={mutate} />
              ) : null}
            </AnimatePresence>
          </motion.div>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

const QUEUE_ANIMATION = {
  animate: {
    height: "auto",
    opacity: 1,
  },
  initial: {
    height: 0,
    opacity: 0,
  },
  exit: {
    height: 0,
    opacity: 0,
    width: 0,
  },
};

const QUEUE_MODE_ANIMATION = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 10,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

function Queue({
  queue,
  refetchQuerys,
}: {
  queue: Track[];
  refetchQuerys: KeyedMutator<SuccessQueueResponse>;
}) {
  const [mode, setMode] = useState<"queue" | "search">("queue");
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 200);
  const { songs, isLoading } = useSpotifySearch(debouncedQuery);

  const addSongToQueue = async (trackId: string) => {
    await fetch(`/api/spotify/queue`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trackId }),
    })
      .then(
        async (req) =>
          req.json() as unknown as {
            success: boolean;
            error?: { message: string };
          }
      )
      .then((res) => {
        if (!res.success) {
          // eslint-disable-next-line no-alert
          alert(res.error?.message ?? "Failed to add song to queue");
          return;
        }

        setQuery("");
        setMode("queue");

        // Let the animation run a bit.
        setTimeout(() => {
          void refetchQuerys();
        }, 500);
      });
  };

  return (
    <motion.div
      exit={QUEUE_ANIMATION.exit}
      initial={QUEUE_ANIMATION.initial}
      animate={QUEUE_ANIMATION.animate}
      className="flex w-full cursor-default"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col mt-4 h-[300px] w-[280px] md:w-[350px] overflow-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{mode === "queue" ? "Queue" : "Search"}</h1>
          <button
            type="button"
            className="text-xs bg-primary-700 text-primary-300 px-2 py-1 rounded-lg border border-primary-600 transition-colors hover:bg-primary-600 hover:border-primary-400 hover:text-primary-200"
            onClick={(e) => {
              setMode((prev) => (prev === "queue" ? "search" : "queue"));
            }}
          >
            {mode === "queue" ? "Add to Queue" : "Back to Queue"}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {mode === "queue" ? (
            <motion.div
              key="queue"
              initial={QUEUE_MODE_ANIMATION.initial}
              animate={QUEUE_MODE_ANIMATION.animate}
              exit={QUEUE_MODE_ANIMATION.exit}
              className="flex flex-col gap-3 mt-4"
            >
              <AnimatePresence>
                {queue.map((song, i) => (
                  <IndividualTrack
                    key={song.id}
                    track={song}
                    queuePosition={i + 1}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="search"
              initial={QUEUE_MODE_ANIMATION.initial}
              animate={QUEUE_MODE_ANIMATION.animate}
              exit={QUEUE_MODE_ANIMATION.exit}
              className="flex flex-col gap-3 mt-4 overflow-auto h-full"
            >
              <input
                className="bg-primary-700 border border-primary-600 rounded-md px-2 py-1 text-sm outline-none focus:bg-primary-600/50 focus:border-primary-500 transition-colors"
                placeholder="Search for a song..."
                value={query}
                onChange={({ target: { value } }) => {
                  setQuery(value);
                }}
                onKeyUp={(e) => {
                  e.preventDefault();
                }}
              />
              <div className="flex flex-col w-full gap-3 flex-1">
                {isLoading ||
                query.length === 0 ||
                (songs?.tracks?.items?.length ?? 0) < 0 ? (
                  <div className="flex flex-1 items-center justify-center w-full h-full">
                    <div className="flex flex-col w-full text-center gap-1">
                      <h1 className="text-lg">Search</h1>
                      <p className="text-sm text-primary-400">
                        {isLoading ? (
                          "Loading results"
                        ) : (
                          <>
                            Have a sick song I should listen to?
                            <br />
                            add it to the queue.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                ) : (
                  songs?.tracks.items.map((t, i) => (
                    <IndividualTrack
                      key={i}
                      track={t}
                      onAdd={async () => {
                        await addSongToQueue(t.id);
                      }}
                    />
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const IndividualTrack = forwardRef<
  HTMLDivElement,
  {
    track: Track;
    queuePosition?: number;
    onAdd?: () => void;
  }
>(({ track, queuePosition, onAdd }, ref) => {
  const [adding, setAdding] = useState(false);

  const trackAlbumCover = track.album.images?.[0]?.url;
  const artists = track.artists.map((a) => a.name).join(", ");

  return (
    <motion.div
      ref={ref}
      layout
      className="flex gap-4 items-center w-full truncate origin-bottom-left"
    >
      {trackAlbumCover ? (
        <img
          src={trackAlbumCover}
          className="size-14 rounded-lg p-0 flex-shrink-0 bg-primary-700"
          alt={`${track.name} by ${artists}`}
        />
      ) : null}

      <div className="flex flex-col w-full truncate">
        <p className="truncate">{track.name}</p>
        <span className="text-sm text-primary-400">{artists}</span>
      </div>

      {queuePosition ? (
        <span className="font-mono text-sm text-primary-500 rounded-bl-lg rounded-tr-lg p-1 bg-primary-800/70 backdrop-blur-md">
          #{`${queuePosition}`.padStart(2, "0")}
        </span>
      ) : (
        <button
          type="button"
          className="text-xs bg-primary-700 text-primary-300 px-2 py-1 rounded-lg border border-primary-600 transition-colors hover:bg-primary-600 hover:border-primary-400 hover:text-primary-200 disabled:opacity-80"
          disabled={adding}
          onClick={async () => {
            setAdding(true);
            onAdd?.();
          }}
        >
          Add
        </button>
      )}
    </motion.div>
  );
});

IndividualTrack.displayName = "IndividualTrack";
