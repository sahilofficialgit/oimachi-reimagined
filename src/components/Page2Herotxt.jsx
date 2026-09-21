import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2Herotxt = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const labelRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------------------
      // INITIAL STATES
      // -----------------------------------------

      gsap.set(labelRef.current, {
        y: 25,
        opacity: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(headingRef.current, {
        y: 70,
        x: -20,
        opacity: 0,
        filter: "blur(14px)",
        skewX: 4,
        scale: 1.02,
      });

      // -----------------------------------------
      // SCROLL TRIGGER
      // -----------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 78%",
          end: "center 42%",
          scrub: 1.8,
        },
      });

      // Label
      tl.to(
        labelRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0
      );

      // Line
      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power4.inOut",
        },
        0.08
      );

      // Heading
      tl.to(
        headingRef.current,
        {
          y: 0,
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          skewX: 0,
          scale: 1,
          duration: 1.7,
          ease: "power4.out",
        },
        0.15
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="
        min-h-[35vh]
        md:h-[40vh]
        w-full
        pt-20
        pb-8
        flex
        flex-col
        items-center
        justify-center
        px-2
        sm:px-3
        font-sans
      "
    >
      {/* TOP LABEL */}

      <div
        ref={labelRef}
        className="
          w-full
          max-w-5xl
          flex
          items-center
          justify-between
          mb-7
          px-1
        "
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-black/40">
          Selected Work
        </span>

        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-black/40">
          05 Projects
        </span>
      </div>

      {/* LINE */}

      <div
        ref={lineRef}
        className="w-full max-w-5xl h-px bg-black/15 mb-8"
      />

      {/* HEADING */}

      <h1
        ref={headingRef}
        className="
          text-[#000000]
          font-sans
          text-2xl
          sm:text-3xl
          md:text-4xl
          leading-[1.05]
          text-center
          tracking-[-0.025em]
        "
      >
        Partnering with
        <span className="italic font-bold text-orange-400">
          {" "}ambitious
        </span>{" "}
        teams to
        <br className="hidden md:block" />
        <span className="md:hidden"> </span>
        build relevant digital experiences in
        <br className="hidden md:block" />
        <span className="md:hidden"> </span>
        the age of prompting.
      </h1>
    </div>
  );
};

export default Page2Herotxt;