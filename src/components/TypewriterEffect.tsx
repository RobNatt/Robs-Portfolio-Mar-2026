"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
      {
        text: "Lets",
      },
      {
        text: "Turn",
      },
      {
        text: "Your",
      },
      {
        text: "Ideas",
      },
      {
        text: "into",
      },
      {
        text: "Reality.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[12rem] ">
        <p className="text-neutral-600 dark:text-neutral-200 text-base bg-white dark:bg-black p-4 rounded-xl mb-5">
          From Consultation to Deployment.
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5">
        </div>
      </div>
    );
  }