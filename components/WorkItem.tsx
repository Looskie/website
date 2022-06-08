import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledImage = styled(motion.img)`
  position: absolute;
  width: auto;
  height: 250px;
  pointer-events: none;
  opacity: 0.95;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  z-index: 999;
  transform-origin: left;
  text-align: center;
`;

interface IWorkItemProps {
  text: string;
  image: string;
  alt: string;
}

/* please god forgive me for this component */

export const WorkItem = ({ image, alt, text }: IWorkItemProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const mouseMove = ({ clientX, clientY }: MouseEvent) => {
      setPos({ x: clientX, y: clientY });
    };

    const mouseLeave = () => setPos(null);

    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("mouseleave", mouseLeave);

    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, [ref]);

  return (
    <>
      <AnimatePresence>
        {pos ? (
          <StyledImage
            style={{
              top: pos?.y,
              left: pos?.x,
            }}
            alt={alt + "by DEVLOOSKIE"}
            src={image}
          />
        ) : null}
      </AnimatePresence>
      <li ref={ref}>{text}</li>
    </>
  );
};
