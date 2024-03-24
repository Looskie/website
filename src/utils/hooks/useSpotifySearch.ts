import useSWR from "swr";
import {
  type ErrorSearchResponse,
  type SuccessSearchResponse,
} from "../../pages/api/spotify";

export default function useSpotifySearch(query: string) {
  const { data, error, isLoading } = useSWR<
    SuccessSearchResponse,
    ErrorSearchResponse
  >(`/api/spotify?q=${query}`);

  return {
    songs: data?.data?.songs,
    error,
    isLoading,
  };
}
