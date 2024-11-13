"use client";

import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div className="relative group h-[400px] w-full overflow-hidden rounded-xl">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 mb-4 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-2 py-1 text-sm bg-white/10 rounded-full text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              asChild
              variant="secondary"
              className="gap-2 hover:bg-white hover:text-black transition-colors"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 text-white hover:bg-white hover:text-black transition-colors"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
