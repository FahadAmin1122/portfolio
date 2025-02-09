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
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e] px-4">
      <div ref={textRef} className="container text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          MERN Stack Developer
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Building modern web applications with passion and precision
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-90 transition-opacity text-base sm:text-lg px-8"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToContact}
            className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors text-base sm:text-lg px-8"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}