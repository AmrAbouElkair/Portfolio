"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I m{" "}
            <span className="gradient-text inline-block">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            A passionate web developer creating amazing digital experiences
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="rounded-full px-8 hover:scale-105 transition-transform"
              asChild
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 hover:scale-105 transition-transform"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-50"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 Q50,50 100,0 V100 H0 Z"
            fill="currentColor"
            className="text-primary/5"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}
