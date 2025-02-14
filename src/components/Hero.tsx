import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !textRef.current) return;

      const elements = textRef.current.children;
      if (!elements.length) return; // Ensure there are elements inside textRef

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Initial animation
      gsap.from(elements, {
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
    }, containerRef); // Ensure animations are only scoped to this component

    return () => ctx.revert(); // Cleanup animations properly
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
      <div ref={textRef} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px] text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          MERN Stack Developer
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto text-[#ededed]">
          Building modern web applications with passion and precision
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-90 transition-opacity text-lg"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors text-lg"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Button } from "../components/ui/button";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current || !textRef.current) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//       },
//     });

//     // Initial animation
//     gsap.from(textRef.current.children, {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });

//     // Scroll animation
//     tl.to(textRef.current, {
//       y: -50,
//       opacity: 0.8,
//       duration: 1,
//     });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   const scrollToProjects = () => {
//     const projectsSection = document.querySelector("#projects");
//     if (projectsSection) {
//       const navHeight = 80;
//       const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
//       window.scrollTo({
//         top: elementPosition - navHeight,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollToContact = () => {
//     const contactSection = document.querySelector("#contact");
//     if (contactSection) {
//       const navHeight = 80;
//       const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
//       window.scrollTo({
//         top: elementPosition - navHeight,
//         behavior: "smooth",
//       });
//     }
//   };

// return (
//   <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e] px-4">
//     <div ref={textRef} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px] text-center">
//       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//         MERN Stack Developer
//       </h1>
//       <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto">
//         Building modern web applications with passion and precision
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
//         <Button 
//           size="lg" 
//           onClick={scrollToProjects}
//           className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-90 transition-opacity text-lg"
//         >
//           View Projects
//         </Button>
//         <Button 
//           size="lg" 
//           variant="outline" 
//           onClick={scrollToContact}
//           className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors text-lg"
//         >
//           Get in Touch
//         </Button>
//       </div>
//     </div>
//   </div>
// );

// }