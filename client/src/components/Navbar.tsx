import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
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

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center">
        <button 
          onClick={() => scrollToSection("#home")}
          className="font-bold text-2xl text-primary cursor-pointer"
        >
          Fahad Amin
        </button>
        <div className="ml-auto flex gap-6">
          {navItems.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                activeSection === href.slice(1) ? "text-primary" : "text-muted-foreground"
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