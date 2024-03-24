import { useEffect, useRef } from "react";
import { loadCursor } from "../utils/cursor";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) {
      return;
    }

    return loadCursor(cursorRef.current);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:flex items-center justify-center fixed w-[30px] h-[30px] opacity-0 rounded-full pointer-events-none border-2 border-primary-400 mix-blend-difference transition-[opacity,transform,background] z-50"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible opacity-0 w-[35px] h-[35px] transition-opacity animate-cursor"
      >
        <path
          id="curve"
          d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z"
          fill="#181818"
          fillOpacity="0"
        />

        <text fill="white" className="text-[0.5em]">
          <textPath xlinkHref="#curve">VISIT</textPath>
        </text>
      </svg>
    </div>
  );
}
