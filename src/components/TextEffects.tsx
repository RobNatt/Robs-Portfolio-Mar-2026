"use client";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useState, useEffect } from "react";
import { HeroPhoto } from "./HeroPhoto";

export function TextAnimationTypewriterEffect() {
  return (
    <div className="p-4 w-full max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="flex-1 min-w-0 justify-items-center">
          <h1 className="text-center text-2xl md:text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200">
            Front End Development <br /> with
            <TypewriterEffect
              words={["Next.js", "Tailwind CSS", "Typescript", "React"]}
              typingSpeed={80}
              duration={800}
              deletingSpeed={75}
            />
          </h1>
          <div className="w-full max-w-lg mt-4 x-auto lg:mx-0 lg:shrink-0 justify-items-center">
          <HeroPhoto />
        </div>
          <p className="mt-4 max-w-2xl text-lg text-neutral-700 dark:text-neutral-700 bg-white p-4 rounded-lg">
            I'm a front end developer with full stack experience and a passion for creating beautiful and functional websites and apps. 
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Contact Me
          <motion.span
            className="ml-2 inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-lg border bg-white p-2 rounded-lg border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition-colors hover:bg-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-300"
        >
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            ✨
          </motion.span>
          <span className="ml-2 ">View My Work</span>
        </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TypewriterEffect({
  words,
  className,
  typingSpeed = 50,
  duration = 800,
  deletingSpeed = 75,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  duration?: number;
  deletingSpeed?: number;
}) {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  useEffect(() => {
    if (!words?.length) return;

    const word = words[currentIndex];
    if (word == null) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // If word is complete, pause then start deleting
        if (charIndex >= word.length) {
          setIsDeleting(true);
          setCurrentSpeed(duration); // Pause before deleting
        }
      } else {
        // Deleting
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setCurrentSpeed(deletingSpeed); // Delete faster than typing

        // If word is deleted, move to next word
        if (charIndex <= 1) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % words.length);
          setCurrentSpeed(typingSpeed); // Reset typing speed
        }
      }
    }, currentSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentWord,
    charIndex,
    currentIndex,
    isDeleting,
    currentSpeed,
    words,
    typingSpeed,
    duration,
    deletingSpeed,
  ]);

  return (
    <span
      className={cn(
        "relative inline-block [perspective:1000px] [transform-style:preserve-3d]",
        className,
      )}
    >
      &nbsp;
      <span>
        {currentWord.split("").map((char, index) => (
          <motion.span
            layout
            key={`${index}-${char}`}
            initial={{
              opacity: 0,
              y: 20,
              rotateY: 90,
              rotateX: 10,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateY: 0,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>
      &nbsp;
      <motion.span
        layoutId="cursor"
        className="absolute inline-block w-[3px] rounded-full bg-gradient-to-b from-neutral-700 via-neutral-900 to-neutral-700 dark:from-neutral-400 dark:via-neutral-100 dark:to-neutral-400"
        style={{
          height: "1em",
          bottom: "0.05em",
          marginLeft: "0.1em",
        }}
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 0.1,
          opacity: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      />
    </span>
  );
}

export function TextAnimationBlurFadeIn() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <Text className="mb-4 text-center text-2xl font-bold tracking-tight md:text-7xl">
      Front end development, design, and implementation.
      </Text>
      <Text
        className="mx-auto max-w-2xl bg-white p-4 rounded-lg text-center text-xl font-normal text-neutral-600 dark:text-neutral-600"
        delay={0.2}
      >
        Each of these apps is built with a focus on user experience and performance.
      </Text>
    </div>
  );
}
 
const Text = ({
  children,
  className,
  delay = 0,
  ...animationProps
}: {
  children: string;
  className?: string;
  delay?: number;
} & MotionProps) => {
  return (
    <motion.p
      {...animationProps}
      className={cn("text-4xl font-medium", className)}
    >
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`word-${index}-${word}`}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.2,
            delay: delay + index * 0.02,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};
