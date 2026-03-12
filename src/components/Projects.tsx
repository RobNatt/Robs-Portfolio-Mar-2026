"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

import synctaskImg from "../../public/synctask.png";
import roofTrackImg from "../../public/RoofTrack.png";
import collabPlannerImg from "../../public/Collab-Planner.png";
import websiteAuditImg from "../../public/Websiteaudittool.png";

const items = [
  {
    title: "SyncTask",
    description: "Agnostic workflow engine with strict, role-based orchestration.",
    src: synctaskImg.src,
    demoLink: "https://sync-task-qjro.vercel.app",
    githubLink: "https://github.com/RobNatt/sync-task",
  },
  {
    title: "RoofTrack",
    description: "App-like roofing CRM with rich GSAP animations",
    src: roofTrackImg.src,
    demoLink: "https://roof-track-mvp.vercel.app",
    githubLink: "https://github.com/RobNatt/roof-track-mvp",
  },
  {
    title: "Collab Planner",
    description: "Collaborative trip planner SaaS with Stripe billing.",
    src: collabPlannerImg.src,
    demoLink: "https://collab-planner.vercel.app",
    githubLink: "https://github.com/RobNatt/collab-planner",
  },
  {
    title: "Website Audit Tool",
    description: "Lighthouse-powered website audits that turn into leads",
    src: websiteAuditImg.src,
    demoLink: "https://website-audit-tool-eta.vercel.app",
    githubLink: "https://github.com/RobNatt/website-audit-tool",
  },
];

export function Projects() {
  return (
    <div className="relative h-full w-full">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:px-8 md:py-20">
        {items.map((item) => (
          <CardContainer
            key={item.title}
            containerClassName="w-full py-0"
            className="w-full rounded-2xl bg-white shadow-md dark:bg-neutral-900 [transform-style:preserve-3d]"
          >
            <CardBody className="h-auto w-full min-h-0 [transform-style:preserve-3d]">
              <CardItem translateZ={20} className="w-full">
                <div className="overflow-hidden rounded-t-2xl">
                  <div className="mx-auto flex h-60 w-full items-center justify-center bg-neutral-100 p-4 dark:bg-neutral-800">
                    <img
                      src={item.src}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="max-h-full max-w-full rounded-lg object-contain"
                    />
                  </div>
                </div>
              </CardItem>
              <div className="flex flex-col items-start gap-3 p-6">
                <p className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                  {item.title}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  {item.description}
                </p>
                <div className="mt-2 flex w-full flex-wrap gap-3">
                  <Link href={item.demoLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                    >
                      View Demo
                    </motion.button>
                  </Link>
                  <Link href={item.githubLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                      aria-label="View on GitHub"
                    >
                      &lt;&gt;
                    </motion.button>
                  </Link>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
