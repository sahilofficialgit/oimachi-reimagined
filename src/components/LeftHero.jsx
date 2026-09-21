import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import video from "../assets/videos/Hero-video.mp4";

gsap.registerPlugin(ScrollTrigger);

const LeftHero = () => {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const curtainRef = useRef(null);
  const labelRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------------------
      // INITIAL STATES
      // -----------------------------------------

      gsap.set(mediaRef.current, {
        scale: 1.08,
      });

      gsap.set(curtainRef.current, {
        scaleX: 1,
        transformOrigin: "left center",
      });

      gsap.set(labelRef.current, {
        opacity: 0,
        y: 12,
      });

      // -----------------------------------------
      // SCROLL REVEAL
      // -----------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          end: "top 48%",
          scrub: 1.5,
        },
      });

      tl.to(
        curtainRef.current,
        {
          scaleX: 0,
          duration: 1.2,
          ease: "power4.inOut",
        },
        0
      );

      tl.to(
        mediaRef.current,
        {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        0
      );

      tl.to(
        labelRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.45
      );

      // -----------------------------------------
      // VERY SUBTLE PARALLAX
      // -----------------------------------------

      gsap.to(mediaRef.current, {
        yPercent: -2.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        h-[42vh]
        sm:h-[48vh]
        md:h-[55vh]
        overflow-hidden
        rounded-sm
        bg-[#D8D8D8]
      "
    >
      {/* VIDEO */}

      <video
        ref={mediaRef}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          will-change-transform
        "
        autoPlay
        muted
        loop
        playsInline
        src={video}
      />

      {/* REVEAL CURTAIN */}

      <div
        ref={curtainRef}
        className="
          absolute
          inset-0
          z-10
          bg-[#F0F0F0]
          will-change-transform
        "
      />

      {/* MINIMAL LABEL */}

      <div
        ref={labelRef}
        className="
          absolute
          z-20
          left-3
          bottom-3
          flex
          items-center
          gap-2
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-white/80
        "
      >
        <span className="w-5 h-px bg-white/70" />
        <span>01 / Motion</span>
      </div>
    </div>
  );
};

export default LeftHero;