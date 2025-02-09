import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-gradient-to-r from-[#1a1c2e] to-[#2a2c3e] shadow-lg backdrop-blur-md" 
        : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between">
        <button 
          onClick={() => scrollToSection("#home")}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity"
        >
          Fahad Amin
        </button>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8">
          {navItems.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className={cn(
                "relative text-sm font-medium transition-all hover:text-blue-400 py-2",
                activeSection === href.slice(1) 
                  ? "text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-600"
                  : "text-gray-300"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile menu dropdown */}
        <div className={cn(
          "absolute top-full left-0 w-full bg-gradient-to-r from-[#1a1c2e] to-[#2a2c3e] shadow-lg lg:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className={cn(
                  "text-left text-sm font-medium transition-all hover:text-blue-400 py-2",
                  activeSection === href.slice(1) 
                    ? "text-blue-400"
                    : "text-gray-300"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}