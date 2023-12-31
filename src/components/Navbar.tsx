import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import useTailwindBreakpoint from "../utils/hooks/useTailwindBreakpoint";

const LINK_ANIMATION = {
  animate: {
    opacity: 1,
    x: 0,
  },
  initial: {
    opacity: 0,
    x: -25,
  },
};

const TRANSITION = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
  duration: 0.25,
};

const LINKS = ["about", "work", "contact"];

function Navbar() {
  const router = useRouter();
  const twBreakpoint = useTailwindBreakpoint();

  return (
    <nav className="flex fixed bottom-0 items-center h-[15vh] w-full px-default-window-sm sm:px-default-window border-t border-primary-700 mt-auto overflow-x-auto bg-primary-900">
      <h2 className="grow pr-default-window-sm sm:pr-default-window">
        <Link className="capitalize text-2xl" href="/">
          <span>CM</span>
        </Link>
      </h2>
      <motion.ul
        className="flex items-center justify-between h-full list-none pl-default-window-sm sm:pl-default-window border-l border-primary-700 gap-[80px]"
        animate="animate"
        initial="initial"
        transition={TRANSITION}
      >
        {LINKS.map((link) => (
          <motion.li
            key={link}
            className="text-2xl"
            variants={LINK_ANIMATION}
            transition={{
              // Wait for index page animation to finish
              delay: router.pathname === "/" && twBreakpoint !== "sm" ? 2.5 : 0,
            }}
          >
            <Link href={`/${link}`}>{link}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default Navbar;
