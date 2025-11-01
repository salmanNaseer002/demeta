// "use client";

// import { useRef, useEffect } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import { FlipWords } from "../ui/flip-words";
// import gsap from "gsap";
// import { cn } from "@/lib/utils";

// export default function Hero() {
//   const heroRef = useRef<HTMLElement>(null);
//   const words = [
//     "AI Billing",
//     "Automation",
//     "Analytics",
//     "EHR Integration",
//     "Denial Management",
//   ];

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     if (heroRef.current) {
//       const heroContent = heroRef.current.querySelectorAll(".animate-item");
//       gsap.from(heroContent, {
//         opacity: 0,
//         y: 50,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power3.out",
//       });
//     }
//   }, []);

//   return (
//     <section ref={heroRef} className="w-full">
//       <div className="relative flex h-[45rem] w-full items-center justify-center bg-white dark:bg-black">
//         <div className={cn("absolute inset-0")} />
//         <div className="w-full px-6 md:px-10 lg:px-24">
//           <div className="grid gap-6 md:gap-20 lg:grid-cols-2 lg:gap-12 items-center">
//             <div className="space-y-4">
//               <div className="inline-block rounded-lg bg-[#c5ddca] px-3 py-1 text-sm text-[#172737] animate-item">
//                 End‑to‑End Medical Services
//               </div>
//               <h1 className="text-2xl sm:text-3xl! xl:text-4xl! 2xl:text-5xl! font-semibold text-[#172737] animate-item">
//                 Transform Your Practice with Modern Medical Billing
//                 <FlipWords words={words} duration={2000} /> <br />
//               </h1>
//               <p className="text-lg text-[#848b94] animate-item">
//                 Modern medical billing, coding, and reimbursement solutions —
//                 powered by experts who streamline your revenue cycle and
//                 maximize collections.
//               </p>
//               <div className="flex flex-col gap-2 min-[400px]:flex-row animate-item">
//                 <a href="#contact" className="contents">
//                   <Button
//                     size="lg"
//                     className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer"
//                     aria-label="Get started — contact our team"
//                   >
//                     Get Started
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </a>
//                 <a href="#services" className="contents">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-[#5ebc66] text-[#5ebc66] hover:bg-[#c5ddca] hover:cursor-pointer"
//                     aria-label="Learn more about our services"
//                   >
//                     Learn More
//                   </Button>
//                 </a>
//               </div>
//             </div>
//             <div className="flex justify-center animate-item rounded-xl">
//               <Image
//                 src="/medical-hello.png"
//                 width={550}
//                 height={550}
//                 alt="IT Services"
//                 className="rounded-lg object-contain shadow-xl"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation"; // <-- add this
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const pathname = usePathname(); // <-- re-trigger animation on route change
  const words = [
    "AI Billing",
    "Automation",
    "Analytics",
    "EHR Integration",
    "Denial Management",
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (heroRef.current) {
      const heroContent = heroRef.current.querySelectorAll(".animate-item");
      gsap.fromTo(
        heroContent,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [pathname]); // <-- rerun animation when user comes back

  return (
    <section ref={heroRef} className="w-full">
      <div className="relative flex h-[45rem] w-full items-center justify-center bg-white dark:bg-black">
        <div className={cn("absolute inset-0")} />
        <div className="w-full px-6 md:px-10 lg:px-24">
          <div className="grid gap-6 md:gap-20 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#c5ddca] px-3 py-1 text-sm text-[#172737] animate-item">
                End-to-End Medical Services
              </div>
              <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#172737] animate-item">
                Transform Your Practice with Modern Medical Billing{" "}
                <FlipWords words={words} duration={2000} /> <br />
              </h1>
              <p className="text-lg text-[#848b94] animate-item">
                Modern medical billing, coding, and reimbursement solutions —
                powered by experts who streamline your revenue cycle and
                maximize collections.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-item">
                <a href="#contact" className="contents">
                  <Button
                    size="lg"
                    className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer"
                    aria-label="Get started — contact our team"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#services" className="contents">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#5ebc66] text-[#5ebc66] hover:bg-[#c5ddca] hover:cursor-pointer"
                    aria-label="Learn more about our services"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-item rounded-xl">
              <Image
                src="/medical-hello.png"
                width={550}
                height={550}
                alt="IT Services"
                className="rounded-lg object-contain shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
