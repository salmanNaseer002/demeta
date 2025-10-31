"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";

const DemetaLogoSVG = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 60"
    fill="none"
    {...props}
    // Added classes h-10 w-auto object-contain here for easy size control
    className={`h-10 w-auto object-contain ${props?.className || ""}`}
  >
    {/* Visual Icon (D and leaf/arrow motif) */}
    <g transform="translate(10, 5)">
      {/* Dark Blue shape part */}
      <path
        d="M42 42V18H31.5C21.375 18 13 26.375 13 36.5S21.375 55 31.5 55H36C45.9375 55 54 46.9375 54 37V31.5H48V37C48 43.6875 42.6875 49 36 49H31.5C24.6562 49 19.5 43.8438 19.5 37S24.6562 25 31.5 25H42V18H31.5C21.375 18 13 26.375 13 36.5S21.375 55 31.5 55H36C45.9375 55 54 46.9375 54 37V31.5H48V37C48 43.6875 42.6875 49 36 49H31.5C24.6562 49 19.5 43.8438 19.5 37S24.6562 25 31.5 25H42V18Z"
        fill="#204F75"
      />

      {/* Light Blue/Teal part - Simplified leaf/arrow (Upward movement) */}
      <path
        d="M43.5 13.5L47.5 17.5L43.5 21.5L39.5 17.5L43.5 13.5Z"
        fill="#00A79D"
      />
      <path
        d="M37.5 7.5L41.5 11.5L37.5 15.5L33.5 11.5L37.5 7.5Z"
        fill="#5ebc66"
      />
    </g>

    {/* Vertical Separator Line */}
    <rect x="75" y="10" width="2" height="40" fill="#E5E7EB" />

    {/* Text - DEMETA */}
    <text
      x="85"
      y="30"
      fontFamily="Inter, sans-serif"
      fontSize="20"
      fontWeight="700"
      fill="#204F75"
    >
      DEMETA
    </text>

    {/* Text - PRECISION RCM FOR HEALTHCARE */}
    <text
      x="85"
      y="45"
      fontFamily="Inter, sans-serif"
      fontSize="10"
      fontWeight="500"
      fill="#5ebc66"
    >
      PRECISION RCM FOR HEALTHCARE
    </text>
  </svg>
);

interface HeaderProps {
  scrollToSection: (elementRef: React.RefObject<HTMLElement | null>) => void;
  servicesRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  teamRef: React.RefObject<HTMLElement | null>;
  testimonialsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

export default function Header({
  scrollToSection,
  servicesRef,
  aboutRef,
  teamRef,
  testimonialsRef,
  contactRef,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleLogoClick = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 50) {
        window.location.reload();
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Services", ref: servicesRef },
    { name: "About", ref: aboutRef },
    { name: "Testimonials", ref: testimonialsRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="w-full px-6 md:px-12 lg:px-20 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="w-32 md:w-64 pt-1 cursor-pointer"
            onClick={handleLogoClick}
            aria-label="Go to top"
          >
            <DemetaLogoSVG />
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`block h-0.5 w-full bg-[#172737] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-[#172737] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-[#172737] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer font-medium nav-item"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <Button
            className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer"
            onClick={() => scrollToSection(contactRef)}
            aria-label="Get started by contacting sales"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white p-4 shadow-md">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.ref);
                  setMobileMenuOpen(false);
                }}
                className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer py-2 text-left nav-item"
              >
                {item.name}
              </button>
            ))}
            <Button
              className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer mt-2"
              onClick={() => {
                scrollToSection(contactRef);
                setMobileMenuOpen(false);
              }}
              aria-label="Get started by contacting sales"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
