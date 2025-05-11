
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className={cn(
          "text-sm text-white/80 mb-4 line-clamp-2 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-80"
        )}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-white/10 text-white border-white/20">
              {tag}
            </Badge>
          ))}
        </div>
        <div className={cn(
          "flex gap-3 transition-all duration-300",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          {project.demoUrl && (
            <Button variant="secondary" size="sm" asChild>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {project.caseStudyUrl && (
            <Button variant="outline" size="sm" asChild className="text-white border-white/20 hover:bg-white/20">
              <a href={project.caseStudyUrl} target="_blank" rel="noreferrer">
                Case Study
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
