import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page4Herovid from "../assets/videos/p4Hero-vid.mp4";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const pageRef = useRef(null);

  const textRef = useRef(null);
  const keywordsRef = useRef(null);

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const visualRef = useRef(null);
  const finalRef = useRef(null);

  const paragraph =
    "We believe meaningful digital experiences begin with curiosity. They grow through collaboration, thoughtful design, technology, and constant refinement turning simple ideas into purposeful experiences that feel clear, human, and built to last.";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const stripSvgs = keywordsRef.current.querySelectorAll(".strip-svg");

        gsap.to(stripSvgs, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
            trigger: keywordsRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        });

        const steps = [
  step1Ref.current,
  step2Ref.current,
  step3Ref.current,
];

gsap.fromTo(
  steps,
  {
    opacity: 0,
    y: 70,
    filter: "blur(10px)",
  },
  {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    stagger: 0.18,
    ease: "power3.out",
    scrollTrigger: {
      trigger: steps[0],
      start: "top 80%",
      end: "top 35%",
      scrub: 1.5,
    },
  }
);

      /* =========================
         DESKTOP
      ========================= */

      mm.add("(min-width: 768px)", () => {
        const letters = textRef.current.querySelectorAll(".letter");

        /* LETTER REVEAL */

        gsap.fromTo(
          letters,
          {
            color: "#B8B8B8",
          },
          {
            color: "#111111",
            stagger: 0.025,
            ease: "none",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
              end: "bottom 35%",
              scrub: 1.5,
            },
          }
        );

        /* HORIZONTAL STRIP */

        /* PROCESS */

        gsap.fromTo(
          [step1Ref.current, step2Ref.current, step3Ref.current],
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step1Ref.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1.5,
            },
          }
        );

        /* VISUAL */

        gsap.fromTo(
          visualRef.current,
          {
            scale: 0.88,
            y: 80,
          },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: visualRef.current,
              start: "top 85%",
              end: "top 30%",
              scrub: 2,
            },
          }
        );

        /* FINAL */

        gsap.fromTo(
          finalRef.current,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: finalRef.current,
              start: "top 80%",
              end: "top 45%",
              scrub: 1.5,
            },
          }
        );
      });

      /* =========================
         MOBILE
      ========================= */

      mm.add("(max-width: 767px)", () => {
        const letters = textRef.current.querySelectorAll(".letter");

        /* LETTER REVEAL */

        gsap.fromTo(
          letters,
          {
            color: "#B8B8B8",
          },
          {
            color: "#111111",
            stagger: 0.012,
            ease: "none",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              end: "bottom 40%",
              scrub: 1,
            },
          }
        );

        /* HORIZONTAL STRIP */


        /* PROCESS */

        gsap.fromTo(
          [step1Ref.current, step2Ref.current, step3Ref.current],
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step1Ref.current,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );

        /* VISUAL */

        gsap.fromTo(
          visualRef.current,
          {
            scale: 0.92,
            y: 50,
          },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: visualRef.current,
              start: "top 85%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );

        /* FINAL */

        gsap.fromTo(
          finalRef.current,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: finalRef.current,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={pageRef}
      className="w-full overflow-hidden bg-[#F0F0F0] text-[#111111]"
    >
      {/* =========================
    MAIN PHILOSOPHY
========================= */}

<div className="w-full min-h-[80vh] md:min-h-[100vh] px-5 md:px-10 py-20 md:py-32 flex items-center justify-center">
  <div
    ref={textRef}
    className="w-full max-w-[1250px] text-left text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[4.5vw] leading-[1.05] tracking-[-0.015em] font-medium"
  >
    {paragraph.split(" ").map((word, wordIndex) => (
      <span
        key={wordIndex}
        className="word inline-block whitespace-nowrap mr-[0.25em]"
      >
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className="letter"
          >
            {char}
          </span>
        ))}
      </span>
    ))}
  </div>
</div>

      {/* =========================
    HORIZONTAL STRIP
========================= */}

<div className="w-full overflow-hidden bg-[#111111] py-5 md:py-7">
  <div
    ref={keywordsRef}
    className="flex w-max items-center whitespace-nowrap text-[#F0F0F0]"
  >
    {/* GROUP 1 */}
    <div className="flex items-center gap-7 md:gap-12 px-4 animate-marquee">
      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        STRATEGY
      </span>

      {/* SVG */}
      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>

      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        DESIGN
      </span>

      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>

      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        TECHNOLOGY
      </span>

      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>

      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        MOTION
      </span>

      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>
    </div>

    {/* GROUP 2 — duplicate */}
    <div className="flex items-center gap-7 md:gap-12 px-4 animate-marquee">
      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        STRATEGY
      </span>

      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>

      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        DESIGN
      </span>

      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>

      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        TECHNOLOGY
      </span>

      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>

      <span className="text-[8vw] sm:text-[6vw] md:text-[3.8vw] leading-none font-medium tracking-[-0.04em]">
        MOTION
      </span>

      <svg
  className="strip-svg shrink-0 w-7 h-7 md:w-9 md:h-9"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
    stroke="#F0F0F0"
    strokeWidth="1.5"
  />
</svg>
    </div>
  </div>

  <style jsx>{`
    @keyframes marquee {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    .animate-marquee {
      animation: marquee 18s linear infinite;
    }

    .strip-svg {
      transition: transform 0.2s linear;
    }
  `}</style>
</div>

      {/* =========================
          PROCESS
      ========================= */}

      {/* =========================
    HOW WE THINK
========================= */}

<div className="w-full px-5 md:px-10 py-28 md:py-44">

  {/* SECTION INTRO */}

  <div className="w-full mb-24 md:mb-40">
    <div className="flex items-center gap-3 mb-6">
      <span className="w-2 h-2 rounded-full bg-[#111111]" />
      <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-gray-500">
        How we think
      </span>
    </div>

    <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] leading-[0.9] tracking-[-0.055em] font-medium max-w-[1000px]">
      Ideas are easy.
      <br />
      <span className="text-gray-400">
        Making them matter
      </span>
      <br />
      takes intention.
    </h2>
  </div>


  {/* PRINCIPLE 01 */}

  <div
    ref={step1Ref}
    className="w-full border-t border-[#111111]/15 py-6 md:py-8"
  >
    <div className="grid grid-cols-1 md:grid-cols-[90px_1fr_32%] gap-8 md:gap-10 items-start">

      <span className="text-xs md:text-sm text-gray-400">
        01
      </span>

      <div>
        <h3 className="text-[14vw] sm:text-[10vw] md:text-[7vw] leading-[0.85] tracking-[-0.06em] font-medium">
          OBSERVE
        </h3>

        <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-500 leading-[1.2] max-w-[500px]">
          Look closer before moving faster. Every strong idea
          starts by understanding what is already there.
        </p>
      </div>

      <div className="hidden md:flex justify-end">
        <span className="text-[10vw] leading-none tracking-[-0.08em] text-[#111111]/10">
          01
        </span>
      </div>

    </div>
  </div>


  {/* PRINCIPLE 02 */}

  <div
    ref={step2Ref}
    className="w-full border-t border-[#111111]/15 py-6 md:py-8"
  >
    <div className="grid grid-cols-1 md:grid-cols-[90px_1fr_32%] gap-8 md:gap-10 items-start">

      <span className="text-xs md:text-sm text-gray-400">
        02
      </span>

      <div>
        <h3 className="text-[14vw] sm:text-[10vw] md:text-[7vw] leading-[0.85] tracking-[-0.06em] font-medium">
          CONNECT
        </h3>

        <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-500 leading-[1.2] max-w-[500px]">
          Bring people, ideas, technology and motion together
          until they feel like one experience.
        </p>
      </div>

      <div className="hidden md:flex justify-end">
        <span className="text-[10vw] leading-none tracking-[-0.08em] text-[#111111]/10">
          02
        </span>
      </div>

    </div>
  </div>


  {/* PRINCIPLE 03 */}

  <div
    ref={step3Ref}
    className="w-full border-t border-[#111111]/15 border-b py-6 md:py-8"
  >
    <div className="grid grid-cols-1 md:grid-cols-[90px_1fr_32%] gap-8 md:gap-10 items-start">

      <span className="text-xs md:text-sm text-gray-400">
        03
      </span>

      <div>
        <h3 className="text-[14vw] sm:text-[10vw] md:text-[7vw] leading-[0.85] tracking-[-0.06em] font-medium">
          SHAPE
        </h3>

        <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-500 leading-[1.2] max-w-[500px]">
          Keep refining until everything unnecessary falls away
          and the idea becomes clear.
        </p>
      </div>

      <div className="hidden md:flex justify-end">
        <span className="text-[10vw] leading-none tracking-[-0.08em] text-[#111111]/10">
          03
        </span>
      </div>

    </div>
  </div>

</div>

      {/* =========================
          LARGE VISUAL
      ========================= */}

      <div className="w-full px-5 md:px-10 py-16 md:py-28">
        <div
            ref={visualRef}
            className="w-full h-[45vh] sm:h-[52vh] md:h-[100vh] bg-[#D8D8D8] overflow-hidden relative"
            >
            <video
                src={Page4Herovid}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
      </div>

      {/* =========================
          FINAL STATEMENT
      ========================= */}

      <div
        ref={finalRef}
        className="w-full min-h-[75vh] md:min-h-[90vh] px-5 md:px-10 py-24 md:py-40 flex flex-col justify-center"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] mb-8 md:mb-10">
          What comes next
        </span>

        <h2 className="text-[16vw] sm:text-[12vw] md:text-[9vw] leading-[0.86] tracking-[-0.06em] font-medium">
          Curiosity
          <br />
          becomes
          <br />
          direction.
        </h2>

        <p className="w-full md:w-[30%] md:ml-auto mt-12 md:mt-16 text-base md:text-xl text-gray-500 leading-[1.15]">
          Ideas become experiences when every decision moves in the
          same direction.
        </p>
      </div>
    </section>
  );
};

export default Page4;