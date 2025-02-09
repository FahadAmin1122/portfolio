import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const featuredProjects = [
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
];

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div>
      <Hero />
      
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => setLocation("/projects")}>
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <SkillsGrid />
        </div>
      </section>
    </div>
  );
}
