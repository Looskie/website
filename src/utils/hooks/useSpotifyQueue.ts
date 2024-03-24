import useSWR from "swr";
import {
  type ErrorQueueResponse,
  type SuccessQueueResponse,
} from "../../pages/api/spotify/queue";

export default function useSpotifyQueue() {
  const { data, error, isLoading, mutate } = useSWR<
    SuccessQueueResponse,
    ErrorQueueResponse
  >("/api/spotify/queue");

  return {
    queue: data?.data?.queue,
    error,
    isLoading,
    mutate,
  };
}
