import { useEffect, useRef } from "react";
import SkillsGrid from "@/components/SkillsGrid";
import { fadeInUp, revealOnScroll } from "@/lib/animations";

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      fadeInUp(contentRef.current);
    }
    if (skillsRef.current) {
      revealOnScroll(skillsRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        <div ref={contentRef} className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
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
            <h2 className="text-2xl font-bold mt-12 mb-6">Experience</h2>
            <ul>
              <li>5+ years of experience in full-stack development</li>
              <li>Expertise in React.js and Node.js ecosystems</li>
              <li>Strong background in database design and optimization</li>
              <li>Experience with modern development workflows and tools</li>
            </ul>
          </div>
        </div>

        <div ref={skillsRef} className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
}
