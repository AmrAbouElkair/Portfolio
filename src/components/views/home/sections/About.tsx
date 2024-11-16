"use client";

import SectionHeader from "@/components/custom/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="main-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div>
            <SectionHeader title="About Me" className="pb-6 sm:text-start" />
            <p className="mb-4 text-center text-base text-muted-foreground sm:text-start md:text-lg">
              I&apos;m a passionate web developer with a keen eye for design and
              a love for creating seamless user experiences. With expertise in
              modern web technologies, I bring ideas to life through clean,
              efficient code and intuitive interfaces.
            </p>
            <p className="mb-4 text-center text-base text-muted-foreground sm:text-start md:text-lg">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good cup of coffee while brainstorming my next big idea.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Your Name"
              width={1260}
              height={750}
              className="rounded-2xl shadow-2xl shadow-primary/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
