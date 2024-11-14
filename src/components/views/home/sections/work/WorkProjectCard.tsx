"use client";

import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface WorkProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

export function WorkProjectCard({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
  tags,
}: WorkProjectCardProps) {
  return (
    <div className="group relative h-[400px] w-full overflow-hidden rounded-xl">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 translate-y-6 transform p-6 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mb-4 line-clamp-2 text-gray-200">{description}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="rounded-full bg-white/10 px-2 py-1 text-sm text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              asChild
              variant="secondary"
              className="gap-2 transition-colors hover:bg-white hover:text-black"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 text-white transition-colors hover:bg-white hover:text-black"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
