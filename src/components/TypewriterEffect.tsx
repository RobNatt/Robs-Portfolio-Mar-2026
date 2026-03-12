"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
      {
        text: "Lets",
        className: "text-2xl md:text-4xl font-bold",
      },
      {
        text: "Turn",
        className: "text-2xl md:text-4xl font-bold",
      },
      {
        text: "Your",
        className: "text-2xl md:text-4xl font-bold",
      },
      {
        text: "Ideas",
        className: "text-2xl md:text-4xl font-bold",
      },
      {
        text: "into",
        className: "text-2xl md:text-4xl font-bold",
      },
      {
        text: "Reality.",
        className: "text-2xl md:text-4xl font-bold text-blue-500 dark:text-blue-500",
      },
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[12rem] ">
        <p className="text-neutral-600 text-2xl md:text-4xl dark:text-neutral-200 bg-white dark:bg-black p-4 rounded-xl mb-5">
          From Consultation to Deployment.
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5">
        </div>
      </div>
    );
  }