"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import Link from "next/link";
import { BackgroundBeams, TypewriterEffectSmooth } from "@/components/custom";

const words = [
  {
    text: "Hi,",
  },
  {
    text: " I'm a",
  },
  {
    text: "Front End",
    className: "text-primary dark:text-primary",
  },
  {
    text: "Developer",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white py-20 bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2] md:py-32">
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
      <div className="main-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
            {" "}
            Hello, I&apos;m{" "}
            <span className="font-medium text-primary dark:text-primary">
              Amr Mahmoud
            </span>
            . A passionate Software Engineer.
          </p>
          <div className="flex w-full justify-center">
            <TypewriterEffectSmooth words={words} />
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="rounded-full px-8 text-white transition-transform hover:scale-105"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 transition-transform hover:scale-105 hover:bg-[#F9F9FB] hover:text-black dark:hover:bg-[#0B0D13] dark:hover:text-white"
              asChild
            >
              <Link href="#projects">Download CV</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
