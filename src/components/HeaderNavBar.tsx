"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export function SimpleNavbarWithHoverEffects() {
  return (
    <div className="relative z-[60] w-full px-2 py-10">
      <Navbar />
    </div>
  );
}

const Navbar = () => {
  const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#consultation-metrics" },
    { name: "Pricing", link: "#prices" },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-white px-4 py-2 lg:flex dark:bg-neutral-950",
        "sticky inset-x-0 top-40",
      )}
    >
      <Logo />
      <div className="hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className="relative cursor-pointer px-4 py-2 text-neutral-600 dark:text-neutral-300"
            key={`link=${idx}`}
            href={navItem.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <div className="hidden flex-row items-center gap-1 md:flex">
        <ThemeToggle />
      </div>
      <Link
        href="#contact"
        className="hidden cursor-pointer rounded-full bg-black px-8 py-2 text-sm font-bold text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] md:block dark:bg-white dark:text-black"
      >
        Hire Me
      </Link>
    </motion.div>
  );
};

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{ borderRadius: open ? "4px" : "2rem" }}
        key={String(open)}
        className="relative z-[60] mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-white px-4 py-2 lg:hidden dark:bg-neutral-950"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {open ? (
              <IconX
                className="cursor-pointer text-black dark:text-white"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <IconMenu2
                className="cursor-pointer text-black dark:text-white"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 dark:bg-neutral-950"
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  onClick={() => setOpen(false)}
                  className="relative cursor-pointer text-neutral-600 dark:text-neutral-300"
                >
                  <motion.span className="block">{navItem.name} </motion.span>
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full cursor-pointer rounded-lg bg-black px-8 py-2 text-center font-medium text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] dark:bg-white dark:text-black"
              >
                Book a call
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme only after mount to avoid server/client mismatch
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          "rounded-full p-1.5 transition-colors",
          !isDark
            ? "bg-white text-amber-500 shadow-sm dark:text-amber-400"
            : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
        )}
        aria-label="Switch to light mode"
      >
        <IconSun className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "cursor-pointer rounded-full p-1.5 transition-colors",
          isDark
            ? "bg-neutral-700 text-sky-400 shadow-sm dark:bg-neutral-600"
            : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
        )}
        aria-label="Switch to dark mode"
      >
        <IconMoon className="h-4 w-4" />
      </button>
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex cursor-pointer items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Robert Nattrass</span>
    </Link>
  );
};
