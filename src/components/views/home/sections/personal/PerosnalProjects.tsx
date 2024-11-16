"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import CustomSectionHeader from "@/components/custom/CustomSectionHeader";
import PersonalProjectCard from "./PersonalProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2 and its key features.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3 and its key features.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4 and its key features.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://project4.com",
    githubUrl: "https://github.com/yourusername/project4",
  },
  {
    title: "Project 5",
    description: "A brief description of Project 5 and its key features.",
    image: "/placeholder.svg",
    technologies: ["Angular", "NestJS", "MySQL"],
    liveUrl: "https://project5.com",
    githubUrl: "https://github.com/yourusername/project5",
  },
  {
    title: "Project 6",
    description: "A brief description of Project 6 and its key features.",
    image: "/placeholder.svg",
    technologies: ["Svelte", "Sapper", "GraphQL"],
    liveUrl: "https://project6.com",
    githubUrl: "https://github.com/yourusername/project6",
  },
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-secondary/50 py-20">
      <div className="main-container">
        <CustomSectionHeader title="Personal Projects" />
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <PersonalProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleProjects.slice(3).map(
              (project) =>
                isExpanded && (
                  <motion.div
                    key={project.title}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="overflow-hidden"
                  >
                    <PersonalProjectCard project={project} />
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mx-auto mt-8 flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3 font-medium text-white transition-colors hover:from-blue-600 hover:to-indigo-600"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{isExpanded ? "Show Less" : "Show More"}</span>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </motion.button>
        )}
      </div>
    </section>
  );
}
