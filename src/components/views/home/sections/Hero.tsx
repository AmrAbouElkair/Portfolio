"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/custom/background-beams";
import { TypewriterEffectSmooth } from "@/components/custom/typewriter-effect";
import { useEffect, useState } from "react";

const words = [
  {
    text: "Hi,",
  },
  {
    text: " I'm a",
  },
  {
    text: "Front End",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Developer",
  },
];

export default function Hero() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 md:py-32">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
            {" "}
            Hello, I&apos;m{" "}
            <span className="font-medium text-blue-500 dark:text-blue-500">
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
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[-1]",
          isDark ? "bg-doted-dark" : "bg-doted-light",
        )}
      />
      <BackgroundBeams />
    </section>
  );
}
