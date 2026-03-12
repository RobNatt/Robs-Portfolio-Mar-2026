"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { sendContactEmail } from "@/app/actions/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await sendContactEmail(formData);

    if (result.error) {
      setStatus("idle");
      toast.error("Error: please try again");
      return;
    }

    setStatus("idle");
    form.reset();
    toast.success("Message Sent");
  };

  const socials = [
    {
      title: "github",
      href: "https://github.com/RobNatt",
      icon: (
        <IconBrandGithub className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
      ),
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/robert-nattrass-iii",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
      ),
    },
  ];

  return (
    <div className="bg-transparent dark:bg-neutral-900 w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="mx-auto w-full max-w-lg bg-white dark:bg-neutral-950 px-4 md:px-10 py-8 shadow-input rounded-3xl">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Contact Me
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400  text-sm max-w-sm">
              Please reach out to me and I will get back to you at the speed of
              light.
            </p>
          </div>

          <div className="py-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Full Name
                </label>

                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Email address
                </label>

                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Company
                </label>

                <div className="mt-2">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Name"
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Message
                </label>

                <div className="mt-2">
                  <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your message here"
                    required
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-black relative z-10 cursor-pointer hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center w-full dark:text-black dark:bg-white dark:hover:bg-neutral-100 dark:hover:shadow-xl"
                  >
                    {status === "sending" ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 py-4">
            {socials.map((social) => (
              <Link href={social.href} key={social.title} className="cursor-pointer">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
