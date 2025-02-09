import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;

      // Update navbar background
      setIsScrolled(scrollPosition > 50);

      // Update active section
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar on mount
    gsap.from("nav", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Increased navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center">
        <button 
          onClick={() => scrollToSection("#home")}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#61DAFB] hover:opacity-80 transition-opacity"
        >
          Fahad Amin
        </button>
        <div className="ml-auto flex gap-8">
          {navItems.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary py-2",
                activeSection === href.slice(1) 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-muted-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}