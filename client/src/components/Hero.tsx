import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [, setLocation] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div ref={textRef} className="container text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#61DAFB]">
          MERN Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building modern web applications with passion and precision
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => setLocation("/projects")}>
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => setLocation("/contact")}>
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
