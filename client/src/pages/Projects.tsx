import { useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { staggerChildren } from "@/lib/animations";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["React", "TypeScript", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Real-time Chat Application",
    description: "Instant messaging platform with multimedia support",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    tags: ["React", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      staggerChildren(gridRef.current, ".project-card");
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
