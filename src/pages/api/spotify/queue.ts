import { type Track } from "@spotify/web-api-ts-sdk";
import { type NextApiRequest, type NextApiResponse } from "next";
import { spotifyClient } from ".";

export type SuccessQueueResponse = {
  success: true;
  data?: {
    queue: {
      currently_playing: Track | null;
      queue: Track[];
    };
  };
};

export type ErrorQueueResponse = {
  success: false;
  error: {
    message: string;
  };
};

const TEN_MINUTES_IN_MS = 600000;

function imcrying(text: string) {
  return (
    text.toLowerCase().includes("noise") ||
    text.toLowerCase().includes("alarm") ||
    text.toLowerCase().includes("effects") ||
    text.toLowerCase().includes("fart") ||
    text.toLowerCase().includes("silence") ||
    text.toLowerCase().includes("peace") ||
    text.toLowerCase().includes("relax") ||
    text.toLowerCase().includes("sleep") ||
    text.toLowerCase().includes("shutdown") ||
    text.toLowerCase().includes("breathing") ||
    text.toLowerCase().includes("sex") ||
    text.toLowerCase().includes("orgasm") ||
    text.toLowerCase().includes("sound")
  );
}

const ADD_TO_QUEUE_ENABLED = true;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessQueueResponse | ErrorQueueResponse>
) {
  const spotify = await spotifyClient();
  if (!spotify) {
    res.status(500).json({
      success: false,
      error: {
        message: "Failed to authenticate with Spotify",
      },
    });

    return;
  }

  if (req.method === "GET") {
    const getQueue = (await spotify.player.getUsersQueue()) as NonNullable<
      SuccessQueueResponse["data"]
    >["queue"];

    res.status(200).json({ success: true, data: { queue: getQueue } });
  }

  if (req.method === "PUT") {
    if (!ADD_TO_QUEUE_ENABLED) {
      res.status(400).json({
        success: false,
        error: {
          message: "too many people are abusing this, im disabling for now :<",
        },
      });

      return;
    }

    const { trackId } = req.body as { trackId: string };

    // Check if the track id is already inside the queue
    const queue = await spotify.player.getUsersQueue();
    if (queue.queue.find((track) => track.id === trackId)) {
      res.status(200).json({ success: true });
      return;
    }

    // BAN ALL WHITE NOISE TRACKS
    const track = await spotify.tracks.get(trackId);
    if (imcrying(track.name) || imcrying(track.artists[0].name)) {
      res.status(400).json({
        success: false,
        error: {
          message: "NO MORE SONGS WITH noise :(",
        },
      });

      return;
    }

    if (track.duration_ms > TEN_MINUTES_IN_MS) {
      res.status(400).json({
        success: false,
        error: {
          message: "track is too long (under 10m please)",
        },
      });

      return;
    }

    await spotify.player.addItemToPlaybackQueue(track.uri);
    res.status(200).json({ success: true });
  }
}
