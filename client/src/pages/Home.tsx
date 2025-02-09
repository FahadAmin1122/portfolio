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

    // Animate sections on scroll
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        const children = sectionRef.current.children;

        // Animate section title
        gsap.from(children[0], {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // Animate section content with stagger
        gsap.from(Array.from(children).slice(1), {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-20"> {/* Add top padding to prevent content from hiding under navbar */}
      <section id="home" className="min-h-[calc(100vh-5rem)]">
        <Hero />
      </section>

      <section id="projects" ref={projectsRef} className="py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#61DAFB]">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#61DAFB]">
              About Me
            </h2>
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
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-12 text-center">Skills & Technologies</h3>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="py-32 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#61DAFB]">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <a href="mailto:fahad.amin@example.com" className="text-muted-foreground hover:text-primary">
                  fahad.amin@example.com
                </a>
              </Card>

              <Card className="p-6 hover:border-primary transition-colors">
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