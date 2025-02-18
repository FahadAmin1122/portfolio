import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SkillsGrid from "../components/SkillsGrid";
import ContactForm from "../components/ContactForm";
import { Card } from "../components/ui/card";
// import { Button } from "../components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import picture from "../assets/picture-min.jpg"
import mananVideo from "../assets/Media1.mp4"
import sfspic from "../assets/Student_Facility_System.jpg"
import flourpic from "../assets/flourpic.jpeg"
import fdms_media from "../assets/flourmedia.mp4"
import dms_pic from '../assets/Khidmat Presentation.png'
import dms_media from '../assets/Khidmat.mp4'
import MyFood_media from '../assets/myFood.mp4'
import MySkooper from "../assets/myskooper.mp4"
import EStore from "../assets/E commerence store.mp4"
import FoodOnline from "../assets/food online order.jpg"
import e_com_store from "../assets/e store.jpg"
import e_com_website from "../assets/e commerece.jpg"

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: "Student Faculity System",
    description: "A full-stack website designed to address the common challanges faced by student to fond hostels adn Accessing Homemade Food",
    image: sfspic,
    tags: ["React", "Node.js", "MongoDB", "Express", "MongoDB", "Socket.io", "Chat Bot", "Nodemailer", "TypeScript","Tailwind CSS"],
    liveUrl:mananVideo ,
    githubUrl: "https://github.com",
  },
  {
    title: "Flour Distribution Managment System",
    description: "Centralized platform for managing flour distribution operations,creation,monitering on distribution Centers",
    image: flourpic,
    tags: ["React","Twillo","Node.js","Express.js","MongoDB","Tailwind CSS"],
    liveUrl: fdms_media,
    githubUrl: "https://github.com",
  },
  {
    title: "Khidmat Food Distribution Managment System",
    // description: "Khidmat is an innovative platform designed to address the challanges of food wastage and hunger and maintaining Food Collection,food distribution as well as Monetary Donations",
    description: "Khidmat is an innovative platform tackling food wastage, hunger, and managing food collection, distribution, and monetary donations.",
    image: dms_pic,
    tags: ["React", "Node.js", "Express.js", "MongoDB","nodemailer","Tailwind CSS","BootStrap"],
    liveUrl: dms_media,
    githubUrl: "https://github.com",
  },
  {
    title: "Food Ordering Website",
    description: "Build a sleek Food Ordering Website with user authentication,autherizatation add-to-cart, remove-from-cart, combined with modern styling for an enhanced user experience",
    image: FoodOnline,  
    tags: ["React", "Tailwind CSS", "BootStrap","javaScript","GSAP"],
    liveUrl: MyFood_media,
    githubUrl: "https://github.com",
  },
  {
    title: "E Commerce Store",
    description: "Build a modern E-commerce store frontend using React, Tailwind CSS, and GSAP for smooth animations. Features include dynamic UI, interactive product display, and seamless user experience.",
    image: e_com_store,
    tags: ["React","BootStrap","javascript"],
    liveUrl: EStore,
    githubUrl: "https://github.com",
  },
  {
    title: "E Commerce Website",
    description: "Create a sleek E- commerce store with HTML, CSS, and JavaScript, featuring smooth animations and a user - friendly design.",
    image: e_com_website,
    tags: ["html","CSS","JavaScript","BootStrap"],
    liveUrl: MySkooper,
    githubUrl: "https://github.com",
  },
];

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const projectCardsRef = useRef<HTMLDivElement>(null);



 
  useEffect(() => {
    const sections = [projectsRef, aboutRef, contactRef];

    sections.forEach((sectionRef) => {
      if (sectionRef.current && sectionRef.current.children.length > 0) {
        const children = sectionRef.current.children;

        // console.log("Animating Section:", sectionRef.current);
        // console.log("Children:", children);

        // Animate section title
        if (children.length > 0) {
          
          gsap.fromTo(
            children[0],
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                // markers:true,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            }
          );
        }

        // Animate section content
        if (children.length > 1) {
          gsap.fromTo(
            Array.from(children).slice(1),
            { y: 60, opacity: 0 },
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                // markers: true,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
            }
          );
        }
      }
    });

    // Animate project cards separately
    if (projectCardsRef.current && projectCardsRef.current.children.length > 0) {
      const cards = projectCardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              // markers: true,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power3.out",
          }
        );
      });
    }

    return () => {
      // Instead of killing all animations, just disable ScrollTrigger
      ScrollTrigger.refresh();
    };
  }, []);


  return (
    <div className="pt-20">
      {/* hero */}
      <section id="home" className="min-h-[calc(100vh-5rem)]">
        <Hero />
      </section>
        {/* Projects  */}
      <section id="projects" ref={projectsRef} className="py-16 md:py-32 bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Projects
          </h2>
          {/* <div ref={projectCardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="project-card text-[#ededed] gap-2">
                <ProjectCard {...project} />
              </div>
            ))}
          </div> */}
          
          <div ref={projectCardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="project-card text-[#ededed] flex flex-col h-full">
                <ProjectCard {...project} className="flex flex-col h-full" />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-16 md:py-32 bg-[#FCFCFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl w-full max-w-2xl mx-auto lg:mx-0">
                <img
                  // src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04"
                  src={picture}
                  alt="Fahad Amin"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg lg:text-xl">
                  I’m <b>Fahad Amin</b>,  I recently graduated from <b>Government College University
                    Lahore</b> with a <b>BS in Computer Science (2024)</b>, achieving a <b>3.02 CGPA</b> .
                </p>
                <br />
                <p className="text-lg lg:text-xl">
                  As a passionate <b>MERN stack developer</b>, I am dedicated to building scalable, high-performance web applications.
                  With a strong foundation in modern web technologies
                  , I specialize in crafting efficient, user-friendly solutions that tackle complex challenges.
                </p>
                <br />
                <p className="text-lg lg:text-xl">
                  My journey into web development started with a deep curiosity for creating interactive and dynamic user experiences.
                  Over time, I have refined my expertise in the MERN stack <b>(MongoDB, Express.js, React.js, Node.js)</b> along with various cutting-edge development
                  tools and frameworks to deliver robust, optimized, and seamless applications.
                </p>
                <br />
                <p className="text-lg lg:text-xl">
                  <em>I’m always eager to learn, build, and collaborate on projects that push the boundaries of modern web development.
                    Let’s create something amazing together! 🚀</em>
                </p>
                <br />
              </div>
            </div>

            <div className="mt-16 lg:mt-32">
              <h3 className="text-xl md:text-2xl font-bold mb-8 lg:mb-12 text-center">Skills & Technologies</h3>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="py-16 md:py-32 bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
              <Card className="p-6 hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <h3 className="font-semibold text-[#ededed]">Email</h3>
                </div>
                <a href="mailto:famin7733@gmail.com" className="text-muted-foreground text-[#ededed] hover:text-blue-500">
                  famin7733@gmail.com
                </a>
              </Card>

              <Card className="p-6 hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <h3 className="font-semibold text-[#ededed]">LinkedIn</h3>
                </div>
                <a
                  // href="https://linkedin.com/in/fahadamin"
                  href="https://linkedin.com/in/mefahadamin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-500  text-[#ededed]"
                >
                  linkedin.com/in/mefahadamin
                </a>
              </Card>
            </div>

            <Card className="p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#ededed]">Send a Message</h3>
              <ContactForm />
            </Card> 
          </div>
        </div>
      </section>
    </div>
  );
}