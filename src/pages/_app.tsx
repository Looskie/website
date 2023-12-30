import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { cn } from "@/utils/helpers";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import Spotify from "../components/Spotify";

const JetBrains = JetBrains_Mono({
  preload: true,
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn("w-full h-full", JetBrains.className)}>
      <Cursor />

      {/* 100vh - 15vh (subtract nav height) */}
      <div className="h-[85vh] p-default-window overflow-auto bg-grid-primary-800/50">
        <Component {...pageProps} />
      </div>
      <Spotify />

      <Navbar />
    </div>
  );
}
