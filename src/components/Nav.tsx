import Link from "next/link";
import { styled } from "../../stitches.config";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Wrapper = styled("nav", {
  display: "flex",
  position: "fixed",
  bottom: 0,
  alignItems: "center",
  height: "15vh",
  width: "100%",
  padding: "0 $window-padding 0 $window-padding",
  borderTop: "1px solid $primary700",
  marginTop: "auto",
  overflowX: "auto",
  background: "$primary900",

  h2: {
    flexGrow: 1,
    paddingRight: "$window-padding",

    "> a": {
      textTransform: "capitalize!important",
    },
  },

  ul: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    listStyle: "none",
    paddingLeft: "$window-padding",
    borderLeft: "1px solid $primary700",
    gap: 80,
    fontSize: "$medium",
  },
});

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

const Nav = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <h2>
        <Link href="/">
          <span>CM</span>
        </Link>
      </h2>
      <motion.ul animate="animate" initial="initial" transition={TRANSITION}>
        {LINKS.map((link) => (
          <motion.li
            key={link}
            variants={LINK_ANIMATION}
            transition={{
              // Wait for index page animation to finish
              delay: router.pathname === "/" ? 2.5 : 0,
            }}
          >
            <Link href={`/${link}`}>{link}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </Wrapper>
  );
};

export default Nav;
