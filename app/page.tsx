"use client";

import { useRef } from "react";
import {
  Header,
  Hero,
  Services,
  Expertise,
  CoreTechnologies,
  About,
  Stats,
  Team,
  Testimonials,
  Contact,
  CTA,
  Footer,
} from "@/components/landing";
export default function LandingPage() {
  // Refs for scroll sections
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Function to handle smooth scrolling
  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
    if (elementRef.current) {
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;

      // Calculate the element's position relative to the viewport
      const elementPosition = elementRef.current.getBoundingClientRect().top;

      // Get the current scroll position
      const offsetPosition =
        elementPosition + window.scrollY - headerHeight - 16; // 16px extra padding

      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        scrollToSection={scrollToSection}
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        teamRef={teamRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />
      <main className="flex-1">
        <Hero />
        <Services ref={servicesRef} />
        <Expertise />
        <CoreTechnologies />
        <About ref={aboutRef} />
        <Stats />
        <Testimonials ref={testimonialsRef} />
        <Contact ref={contactRef} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
