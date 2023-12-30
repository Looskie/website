import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import AnimatedText from "../components/AnimatedText";
import { cn } from "../utils/helpers";

export default function Home() {
  const horizontalBackgroundControls = useAnimation();
  const verticalBackgroundControls = useAnimation();
  const backgroundControls = useAnimation();
  const animationControls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      if (window.innerWidth < 480) {
        void animationControls.start({
          translateX: "0",
          translateY: "0",

          transition: {
            duration: 0,
            ease: [0.25, 0.1, 0.35, 0.96],
          },
        });

        void horizontalBackgroundControls.start({
          translateY: "-100%",

          transition: {
            duration: 0,
            ease: [0.25, 0.1, 0.35, 0.96],
          },
        });

        void verticalBackgroundControls.start({
          translateY: "-100%",

          transition: {
            duration: 0,
            ease: [0.25, 0.1, 0.35, 0.96],
          },
        });

        return;
      }

      await animationControls.start({
        translateX: "50%",
        translateY: "50%",

        transition: {
          duration: 1,
          ease: [0.785, 0.135, 0.15, 0.0],
        },
      });

      void horizontalBackgroundControls.start({
        translateY: "-100%",

        transition: {
          duration: 1,
          ease: [0.25, 0.1, 0.35, 0.96],
        },
      });

      await animationControls.start({
        translateX: "50%",
        translateY: "0",

        transition: {
          duration: 1.1,
          ease: [0.25, 0.1, 0.35, 0.96],
        },
      });

      void verticalBackgroundControls.start({
        translateX: "-100%",

        transition: {
          duration: 0.9,
          ease: [0.25, 0.1, 0.35, 0.96],
        },
      });

      await animationControls.start({
        translateX: "0",
        translateY: "0",

        transition: {
          duration: 1.1,
          ease: [0.25, 0.1, 0.35, 0.96],
        },
      });
    };

    void startAnimation();
  }, []);

  return (
    <>
      <Head>
        <title>cody</title>
        <meta
          name="description"
          content="im cody, a 18 year old software engineer and designer based in the United States."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div className="w-full h-full" animate={backgroundControls}>
        {["vertical", "horizontal"].map((direction) => (
          <motion.div
            key={direction}
            className={cn(
              "w-full h-full fixed top-0 left-0 bg-primary-800 z-50 hidden md:block",
              {
                "bg-primary-700": direction === "horizontal",
              }
            )}
            animate={
              direction === "horizontal"
                ? horizontalBackgroundControls
                : verticalBackgroundControls
            }
          />
        ))}

        <motion.div
          className="relative title__wrapper z-[51]"
          style={{
            translateX: "50%",
            translateY: "50%",
          }}
          animate={animationControls}
        >
          <AnimatedText element="h1" text="Cody" />
          <AnimatedText element="h1" text="Miller" />

          <AnimatedText
            element="span"
            text="Software Engineer"
            artificialDelay={2.5}
          />
          <AnimatedText element="span" text="Designer" artificialDelay={3.5} />
        </motion.div>
      </motion.div>
    </>
  );
}
