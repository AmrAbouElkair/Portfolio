"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui";
import { WorkProjectCard } from "./WorkProjectCard";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import SectionHeader from "@/components/custom/SectionHeader";

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

export default function WorkProjects() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <section id="projects" className="py-20">
      <div className="main-container">
        <SectionHeader title="Work Projects" />
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <WorkProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute -left-16 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20"
            variant="ghost"
          />
          <CarouselNext
            className="absolute -right-16 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20"
            variant="ghost"
          />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}
