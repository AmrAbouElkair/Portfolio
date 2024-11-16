"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <motion.h2
      className={cn(
        "gradient-text pb-12 text-center text-3xl font-bold md:text-4xl",
        className,
      )}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}
