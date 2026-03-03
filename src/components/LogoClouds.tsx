"use client";
import Marquee from "react-fast-marquee";

export function LogoClouds() {
  const logos = [
    {
      name: "HTML5",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS3",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "React",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Next.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
        name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "TypeScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "Prisma",
      src: "https://img.icons8.com/fluent/1200/prisma-orm.jpg",
    },
    {
      name: "Vercel",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_Z0sAKt_yG_H4KJnBf6ia1xt_gYWL5GkahxnWvNXLA&s",
    },
    {
      name: "Supabase",
      src: "https://opensourcealternatives.org/images/supabase.webp",
    },
  ];

  return (
    <div className="relative z-20 px-4 py-10 md:px-8 md:py-40">
      <h2 className="bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-5xl dark:from-white dark:to-neutral-600">
        The Tech
      </h2>
      <p className="mt-4 text-center font-sans bg-white p-4 rounded-lg text-base text-neutral-700 dark:text-neutral-300">
        When creating websites and apps, I use a combination of the following technologies.
      </p>

      <div className="relative mx-auto mt-20 flex h-full w-full max-w-7xl flex-wrap justify-center gap-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="right">
          {logos.map((logo, idx) => (
            <img
              key={logo.name + "logo-marquee" + idx}
              src={logo.src}
              alt={logo.name}
              width="50"
              height="50"
              className="mx-4 w-16 object-contain filter md:mx-12 md:w-20 dark:invert"
            />
          ))}
        </Marquee>
      </div>
      <div className="relative mx-auto mt-4 flex h-full w-full max-w-7xl flex-wrap justify-center gap-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] md:mt-20 md:gap-40">
        <Marquee pauseOnHover direction="left" speed={20}>
          {logos.map((logo, idx) => (
            <img
              key={logo.name + "logo-marquee-second" + idx}
              src={logo.src}
              alt={logo.name}
              width="50"
              height="50"
              className="mx-4 w-16 object-contain filter md:mx-12 md:w-20 dark:invert"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
