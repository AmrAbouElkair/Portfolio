"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Badge,
} from "@/components/ui";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

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
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="gradient-text mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Personal Projects
        </motion.h2>
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="project-card flex h-full flex-col">
                  <CardHeader>
                    <Image
                      src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={project.title}
                      width={400}
                      height={200}
                      className="h-48 rounded-xl object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="gradient-text mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
          {!showAll && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary/50 to-transparent" />
          )}
        </div>
        <div className="mt-12 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="group rounded-full px-8"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                View More
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
