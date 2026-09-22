import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroText = () => {
  const heroRef = useRef(null);
  const wordRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(
    () => {
      const words = [
        "Experiences",
        "Creativity",
        "Strategy",
        "Impact",
      ];

      let index = 0;

      // -----------------------------------------
      // INITIAL STATE
      // -----------------------------------------

      gsap.set(headingRef.current, {
        y: 70,
        opacity: 0,
        filter: "blur(12px)",
      });

      // -----------------------------------------
      // SCROLL REVEAL
      // -----------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 82%",
          end: "top 42%",
          scrub: 1.8,
        },
      });

      tl.to(
        headingRef.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
        },
        0
      );

      // -----------------------------------------
      // WORD ROTATION
      // -----------------------------------------

      const changeWord = () => {
        if (!wordRef.current) return;

        gsap.to(wordRef.current, {
          y: -35,
          opacity: 0,
          scale: 0.94,
          filter: "blur(8px)",
          duration: 0.45,
          ease: "power3.in",

          onComplete: () => {
            index = (index + 1) % words.length;

            wordRef.current.textContent = words[index];

            gsap.fromTo(
              wordRef.current,
              {
                y: 35,
                opacity: 0,
                scale: 1.05,
                filter: "blur(8px)",
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.6,
                ease: "power4.out",
              }
            );
          },
        });
      };

      const interval = setInterval(changeWord, 2300);

      return () => clearInterval(interval);
    },
    {
      scope: heroRef,
    }
  );

  return (
    <div
      ref={heroRef}
      className="
        min-h-[20vh]
        md:h-[30vh]
        flex
        flex-col
        justify-center
        gap-2
        py-6
        md:py-5
        overflow-hidden
      "
    >
      {/* MAIN HEADING */}

      <div ref={headingRef}>
        <h2
          className="
            font-sans
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[4.2rem]
            leading-[0.95]
            tracking-[-0.04em]
            text-black
          "
        >
          We Create Digital
        </h2>

        <h2
          className="
            font-sans
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[4.2rem]
            leading-[0.95]
            tracking-[-0.04em]
            text-black
          "
        >
          <span className="inline-block align-bottom">
            <span
              ref={wordRef}
              className="
                inline-block
                italic
                text-orange-400
                font-bold
                min-w-[145px]
                sm:min-w-[210px]
                md:min-w-[235px]
              "
            >
              Experiences
            </span>
          </span>

          {" "}That Matter
        </h2>
      </div>
    </div>
  );
};

export default HeroText;