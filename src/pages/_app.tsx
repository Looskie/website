import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { cn, fetcher } from "@/utils/helpers";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { JetBrains_Mono as jetBrainsMono } from "next/font/google";
import Spotify from "../components/Spotify";
import { SWRConfig } from "swr";

const JetBrains = jetBrainsMono({
  preload: true,
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnMount: false,
      }}
    >
      <div className={cn("w-full h-full", JetBrains.className)}>
        <Analytics />
        <Cursor />

        {/* 100vh - 15vh (subtract nav height) */}
        <div className="w-full h-[85vh] overflow-x-hidden bg-grid-primary-800/50">
          <Component {...pageProps} />
        </div>

        <Spotify />
        <Navbar />
      </div>
    </SWRConfig>
  );
}
