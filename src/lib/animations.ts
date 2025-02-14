import gsap from "gsap";

export const fadeInUp = (element: HTMLElement) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
};

export const staggerChildren = (parent: HTMLElement, children: string) => {
  return gsap.from(parent.querySelectorAll(children), {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
};

export const revealOnScroll = (element: HTMLElement) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
};
