"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import synctaskImg from "../../public/synctask.png";
import roofTrackImg from "../../public/RoofTrack.png";
import collabPlannerImg from "../../public/Collab-Planner.png";
import websiteAuditImg from "../../public/Websiteaudittool.png";

export function Projects() {
  const items = [
    {
      title: "SyncTask",
      description: "Agnostic workflow engine with strict, role-based orchestration.",
      src: synctaskImg.src,
      link: "https://sync-task-qjro.vercel.app",
      content: (
        <div>
          <p>Realtime, multi-actor project sync</p>
          <p>Config-driven stages and dependencies</p>
          <p>Type-safe Next.js 15 backend</p>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border bg-white mt-4 rounded-lg border-neutral-300 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          <span onClick={() => window.open("https://sync-task-qjro.vercel.app", "_blank")}>View Project</span>
        </motion.button>
        </div>
      ),
    },
    {
      title: "RoofTrack",
      description: "App-like roofing CRM with rich GSAP animations",
      src: roofTrackImg.src,
      link: "https://roof-track-mvp.vercel.app",
      content: (
        <div>
          <p>Apple-feel dashboard for roofing teams</p>
          <p>Smooth, high-frictionless lead workflows</p>
          <p>Built with React, GSAP, Tailwind</p>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border bg-white mt-4 rounded-lg border-neutral-300 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          <span onClick={() => window.open("https://roof-track-mvp.vercel.app", "_blank")}>View Project</span>
        </motion.button>
        </div>
      ),
    },
    {
      title: "Collab Planner",
      description: "Collaborative trip planner SaaS with Stripe billing.",
      src: collabPlannerImg.src,
      link: "https://collab-planner.vercel.app",
      content: (
        <div>
          <p>Real-time shared itineraries and notes</p>
          <p>Lifetime-deal onboarding live today</p>
          <p>Next.js, Supabase, TypeScript stack</p>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border bg-white mt-4 rounded-lg border-neutral-300 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          <span onClick={() => window.open("https://collab-planner.vercel.app", "_blank")}>View Project</span>
        </motion.button>
        </div>
      ),
    },
    {
      title: "Website Audit Tool",
      description: "Lighthouse-powered website audits that turn into leads",
      src: websiteAuditImg.src,
      link: "https://website-audit-tool-eta.vercel.app",
      content: (
        <div>
          <p>Runs live Lighthouse performance tests</p>
          <p>Instant UX, speed, and SEO insights</p>
          <p>Captures high-intent leads from audits</p>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border bg-white mt-4 rounded-lg border-neutral-300 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          <span onClick={() => window.open("https://website-audit-tool-eta.vercel.app", "_blank")}>View Project</span>
        </motion.button>
        </div>
      ),
    },
  ];
  const [active, setActive] = useState<null | (typeof items)[number]>(null);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => {
    setActive(null);
  });

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative h-full w-full">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:px-8 md:py-20">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 z-10 h-full w-full bg-black/50"
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && (
            <motion.div
              key="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] grid place-items-center"
            >
            <motion.div
              layoutId={`card-${active.title}`}
              ref={ref}
              key={active.title}
              className="max-w-sm rounded-2xl bg-white shadow-md dark:bg-neutral-900"
            >
              <motion.div layoutId={`image-${active.title}`} className="overflow-hidden rounded-t-2xl">
                <div className="mx-auto flex h-60 w-full items-center justify-center bg-neutral-100 p-4 dark:bg-neutral-800">
                  <img
                    src={active.src}
                    alt={active.title}
                    width={500}
                    height={500}
                    className="max-h-full max-w-full rounded-lg object-contain"
                  />
                </div>
              </motion.div>
              <div className="flex flex-col items-start p-6">
                <motion.p
                  layoutId={`title-${active.title}`}
                  className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
                >
                  {active.title}
                </motion.p>
                <motion.p
                  layoutId={`description-${active.title}`}
                  className="text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-600 dark:text-neutral-400"
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}`}
            onClick={() => setActive(item)}
            key={item.title}
            className="cursor-pointer rounded-2xl bg-white shadow-md dark:bg-neutral-900"
          >
            <motion.div layoutId={`image-${item.title}`} className="overflow-hidden rounded-t-2xl">
              <div className="mx-auto flex h-60 w-full items-center justify-center bg-neutral-100 p-4 dark:bg-neutral-800">
                <img
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
            </motion.div>
            <div className="flex flex-col items-start p-6">
              <motion.p
                layoutId={`title-${item.title}`}
                className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
              >
                {item.title}
              </motion.p>
              <motion.p
                layoutId={`description-${item.title}`}
                className="text-sm text-neutral-500 dark:text-neutral-300"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
