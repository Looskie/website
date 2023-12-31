/* eslint-disable react/no-array-index-key */
import { motion } from "framer-motion";
import React from "react";

const characterAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

type IAnimatedTextProps = {
  text: string;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  artificialDelay?: number;
};

const AnimatedText = ({
  element,
  className,
  text,
  artificialDelay,
}: IAnimatedTextProps) => {
  const Children = text.split(" ").map((word, index) => (
    <motion.span
      key={index}
      className="inline-block mr-[0.25em] whitespace-nowrap"
      aria-hidden="true"
      initial="initial"
      animate="animate"
      transition={{
        delayChildren: index * 0.25 + (artificialDelay ?? 0),
        staggerChildren: 0.05,
      }}
    >
      {[...word].map((character, index) => (
        <motion.span
          key={index}
          className="inline-block"
          aria-hidden="true"
          variants={characterAnimation}
        >
          {character}
        </motion.span>
      ))}
    </motion.span>
  ));

  return React.createElement(element, { className }, Children);
};

export default AnimatedText;
