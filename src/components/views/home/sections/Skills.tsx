"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui";
import SectionHeader from "@/components/custom/SectionHeader";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "Jest",
  "Cypress",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="main-container">
        <SectionHeader title="My Skills" className="pb-16 md:text-[2.5rem]" />
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="secondary"
                className="rounded-full px-6 py-2 text-lg transition-colors hover:bg-primary hover:text-white"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
