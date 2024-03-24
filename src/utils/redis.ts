import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-new-poodle-40714.upstash.io",
  token: process.env.UPSTASH_TOKEN!,
});
