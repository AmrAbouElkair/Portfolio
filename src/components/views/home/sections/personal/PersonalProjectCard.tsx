import { memo } from "react";
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
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type PersonalProjectCardProps = {
  project: {
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
};

const PersonalProjectCard = ({ project }: PersonalProjectCardProps) => {
  return (
    <Card className="project-card flex h-full flex-col">
      <CardHeader>
        <Image
          src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={project.title}
          width={400}
          height={200}
          className="h-48 w-full rounded-xl object-cover"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="gradient-text mb-2">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description}
        </CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default memo(PersonalProjectCard);
