"use client";

import React, { useRef, useState, useEffect, forwardRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
// NOTE: GSAP and ScrollTrigger imports/registrations are omitted for single-file environment compatibility,
// but the structural logic for refs and useEffect remains for external animation setup if needed.

// Testimonial data specific to medical billing for Demeta (using fictional names)
const medicalTestimonials = [
  {
    name: "Dr. Anya Sharma",
    position: "Practice Owner, Willow Creek Pediatrics",
    text: "Demeta's comprehensive billing services transformed our practice's financial health. Their high first-pass claim rate significantly boosted our collections, allowing us to invest more in patient care. The visibility they provide into our RCM is unmatched!",
  },
  {
    name: "Robert Miller",
    position: "Practice Manager, Summit Orthopaedics",
    text: "Switching to Demeta was the best decision we made. Their expert denial management and diligent A/R follow-up drastically reduced our outstanding claims by 30%. The team is incredibly responsive and knowledgeable across all specialty codes.",
  },
  {
    name: "Dr. Ben Carter",
    position: "CFO, Horizon Health Group",
    text: "The vaccine management system is quite flexible and includes billing automation, greatly reducing the burden of data entry. Demeta seamlessly integrated their solutions with our existing EHR, making everything efficient and compliant.",
  },
  {
    name: "Emily Davis",
    position: "Billing Specialist, Unity Internal Medicine",
    text: "Demeta handles the complexity of credentialing and payer enrollment flawlessly. Their support team ensures zero disruption to our patient intake process, giving us confidence that we meet all regulatory standards.",
  },
  {
    name: "Thomas Wilson",
    position: "Administrator, Apex Dermatology Clinic",
    text: "We now have unparalleled transparency into our revenue cycle thanks to Demeta’s detailed reporting and analytics. This clarity helps us make informed financial decisions and keeps our cash flow steady.",
  },
];

const Testimonials = forwardRef<HTMLElement>((props, ref) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Combine the forwarded ref with our local ref
  const setRefs = (element: HTMLElement | null) => {
    if (sectionRef.current !== element) {
      sectionRef.current = element;
    }
    // Forward the ref, handling both function and object ref types
    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLElement | null>).current = element;
    }
  };

  // Carousel navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === medicalTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? medicalTestimonials.length - 1 : prev - 1
    );
  };

  // Auto-rotate testimonials and setup animation trigger structure
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Structural logic for external animation setup
    if (sectionRef.current) {
      const testimonialContent = sectionRef.current.querySelector(
        ".testimonial-content"
      );
      if (testimonialContent) {
        // Placeholder for external GSAP/ScrollTrigger logic
      }
    }

    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Auto-rotate every 8 seconds

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <section
      ref={setRefs}
      id="demeta-testimonials"
      className="w-full py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Section Heading */}
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold tracking-wider text-blue-700">
              Hear From Our Valued Partners
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              What Healthcare Leaders Say About Demeta
            </h2>
            <p className="max-w-3xl text-lg text-gray-700 mx-auto">
              See how Demeta's precision billing and RCM solutions empower
              healthcare providers to thrive financially and focus on patient
              care.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative w-full max-w-4xl pt-8 pb-12">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500 ease-in-out testimonial-content">
              {/* Main Testimonial Text */}
              <p className="text-xl md:text-2xl italic text-gray-800 mb-8 leading-relaxed font-serif">
                "{medicalTestimonials[currentTestimonial].text}"
              </p>

              {/* Author Information */}
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-4">
                  {medicalTestimonials[currentTestimonial].name}
                </h4>
                <p className="text-base text-gray-600">
                  {medicalTestimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform -translate-x-1/2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform translate-x-1/2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {medicalTestimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
                  currentTestimonial === index
                    ? "w-8 bg-blue-600"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "DemetaTestimonials";

export default Testimonials;
