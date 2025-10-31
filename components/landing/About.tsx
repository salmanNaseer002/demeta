"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import {
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Zap,
  Users,
  Package,
  HeartPulse,
} from "lucide-react";

// Define the component using forwardRef to allow external ref attachment
const AboutDemeta = forwardRef<HTMLElement>((props, ref) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Combine the forwarded ref with our local ref
  const setRefs = (element: HTMLElement | null) => {
    // Update our local ref
    if (sectionRef.current !== element) {
      sectionRef.current = element;
    }

    // Forward the ref
    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLElement | null>).current = element;
    }
  };

  // The useEffect hook retains the structure intended for scroll-based animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sectionRef.current) {
      const aboutItems = sectionRef.current.querySelectorAll(".about-item");

      // NOTE: External GSAP/ScrollTrigger library calls are commented out
      // as they cannot be imported/initialized in this single-file environment,
      // but the structural logic is preserved as requested.

      // gsap.from(aboutItems, { ... });

      if (aboutItems.length > 0) {
        console.log(
          "Demeta About section initialized. Ready for external animation logic."
        );
      }
    }
  }, []);

  // Professional image URL to represent comprehensive medical finance/RCM
  const medicalImage =
    "https://placehold.co/450x450/10b981/ffffff?text=Demeta+RCM+Platform";

  // Array of key value propositions focusing on ALL services
  const valuePropositions = [
    {
      text: "Full-Spectrum RCM: From Patient Intake to Final Collection",
      icon: Package,
    },
    {
      text: "Zero Disruption: Expert Coverage for All Medical Specialties",
      icon: HeartPulse,
    },
    { text: "Dedicated Credentialing & Payer Enrollment Experts", icon: Users },
    {
      text: "Guaranteed HIPAA and Regulatory Compliance & Audits",
      icon: ShieldCheck,
    },
    { text: "99% Accuracy and Optimized Cash Flow (A/R)", icon: TrendingUp },
    { text: "Cutting-Edge Technology & Seamless EHR Integration", icon: Zap },
  ];

  return (
    <section
      ref={setRefs}
      id="about-medical"
      className="w-full py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image/Visual Section */}
          <div className="flex justify-center order-2 lg:order-1 about-item">
            <div className="w-full max-w-md h-96 relative">
              <img
                src={medicalImage}
                alt="Demeta's comprehensive Revenue Cycle Management (RCM) platform."
                className="rounded-xl object-cover shadow-2xl transition duration-500 ease-in-out hover:shadow-green-400/50"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null; // Prevents infinite loop
                  e.currentTarget.src =
                    "https://placehold.co/450x450/10b981/ffffff?text=Demeta+RCM+Platform";
                }}
              />
              {/* Optional: Add an icon overlay for visual appeal */}
              <div className="absolute top-5 left-5 p-3 rounded-full bg-white shadow-xl text-green-600">
                <DollarSign className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-left order-1 lg:order-2">
            <div className="inline-block rounded-full bg-green-200 px-4 py-1 text-sm font-bold tracking-wider text-green-800 about-item">
              Meet Demeta: Your RCM Partner
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight about-item">
              Demeta: Comprehensive Billing Solutions for Every Aspect of Your
              Practice
            </h2>

            <p className="text-lg text-gray-700 max-w-xl about-item">
              Demeta offers a complete, wall-to-wall suite of services—from
              initial patient verification and detailed Medical Coding to
              aggressive Denial Management and final Collections. We handle
              everything so your team can focus entirely on patient care.
            </p>

            <ul className="space-y-4 pt-2">
              {valuePropositions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start about-item">
                    <Icon className="mr-3 mt-1 h-6 w-6 text-green-700 flex-shrink-0" />
                    <span className="text-lg text-gray-800 font-medium">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutDemeta.displayName = "AboutDemeta";

export default AboutDemeta;
