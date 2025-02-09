import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = [projectsRef, aboutRef, contactRef];

    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        gsap.from(sectionRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="projects" ref={projectsRef} className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToProjects}>
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="prose prose-lg">
              <p>
                I'm Fahad Amin, a passionate MERN stack developer with a focus on building
                scalable web applications. With expertise in modern web technologies,
                I create efficient and user-friendly solutions for complex problems.
              </p>
              <p>
                My journey in web development started with a deep curiosity for creating
                interactive user experiences. Over the years, I've honed my skills in
                the MERN stack (MongoDB, Express.js, React, and Node.js) and various
                modern development tools and practices.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <a href="mailto:fahad.amin@example.com" className="text-muted-foreground hover:text-primary">
                  fahad.amin@example.com
                </a>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">LinkedIn</h3>
                </div>
                <a
                  href="https://linkedin.com/in/fahadamin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  linkedin.com/in/fahadamin
                </a>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}