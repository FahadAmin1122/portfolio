import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Initial animation
    gsap.from(textRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Scroll animation
    tl.to(textRef.current, {
      y: -50,
      opacity: 0.8,
      duration: 1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      const navHeight = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const navHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e]">
      <div ref={textRef} className="container text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          MERN Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building modern web applications with passion and precision
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-90 transition-opacity"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToContact}
            className="border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}