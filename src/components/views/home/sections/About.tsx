"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-lg mb-4 text-muted-foreground">
              I&apos;m a passionate web developer with a keen eye for design and
              a love for creating seamless user experiences. With expertise in
              modern web technologies, I bring ideas to life through clean,
              efficient code and intuitive interfaces.
            </p>
            <p className="text-lg mb-4 text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good cup of coffee while brainstorming my next big idea.
            </p>
          </div>
          <div className="relative h-64 md:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-2xl shadow-primary/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
