"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application with AI-driven prioritization and natural language processing capabilities.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/username/project",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "AI/ML"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2032&auto=format&fit=crop",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/username/project",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive analytics dashboard for social media management and performance tracking.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/username/project",
    tags: ["Vue.js", "Firebase", "Analytics", "Charts"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2032&auto=format&fit=crop",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/username/project",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive analytics dashboard for social media management and performance tracking.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/username/project",
    tags: ["Vue.js", "Firebase", "Analytics", "Charts"],
  },
  {
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application with AI-driven prioritization and natural language processing capabilities.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/username/project",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "AI/ML"],
  },
];

export default function Projects() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute -left-16 rounded-full top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
            variant="ghost"
          />
          <CarouselNext
            className="absolute -right-16 top-1/2 rounded-full -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
            variant="ghost"
          />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}
