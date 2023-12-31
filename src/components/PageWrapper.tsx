import { motion } from "framer-motion";
import { type ReactNode } from "react";

const PAGE_ANIMATION = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedPage = ({ children }: { children?: ReactNode | undefined }) => (
  <motion.div
    className="p-default-window-sm sm:p-default-window"
    animate={PAGE_ANIMATION.animate}
    initial={PAGE_ANIMATION.initial}
  >
    {children}
  </motion.div>
);

export default AnimatedPage;
