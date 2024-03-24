import {
  SpotifyApi,
  type AccessToken,
  type PartialSearchResult,
} from "@spotify/web-api-ts-sdk";
import { type NextApiRequest, type NextApiResponse } from "next";
import { redis } from "../../../utils/redis";

const clientId = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

export async function spotifyClient() {
  const token = await redis.get<AccessToken>("spotify:access_token");
  if (token) {
    return SpotifyApi.withAccessToken(clientId, token);
  }

  const req = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  }).then(async (t) => t.json() as Promise<AccessToken>);

  await redis.set("spotify:access_token", JSON.stringify(req), {
    ex: req.expires_in,
  });

  return SpotifyApi.withAccessToken(clientId, req);
}

export type SuccessSearchResponse = {
  success: true;
  data?: { songs: Required<Pick<PartialSearchResult, "tracks">> };
};

export type ErrorSearchResponse = {
  success: false;
  error: {
    message: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessSearchResponse | ErrorSearchResponse>
) {
  if (req.query.q === "") {
    res.status(400).json({
      success: false,
      error: {
        message: "Missing query parameter",
      },
    });

    return;
  }

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
    const getSearchQuery = req.query.q as string;
    const searchedSongs = await spotify.search(
      getSearchQuery,
      ["track"],
      undefined,
      10
    );

    res.status(200).json({ success: true, data: { songs: searchedSongs } });
  }
}
