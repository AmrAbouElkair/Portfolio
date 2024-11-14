"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

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
      <div className="container mx-auto px-4">
        <motion.h2
          className="gradient-text mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
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
                className="rounded-full px-6 py-2 text-lg transition-colors hover:bg-primary hover:text-primary-foreground"
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
