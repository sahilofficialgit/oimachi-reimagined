import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const introRef = useRef(null);
  const founder1Ref = useRef(null);
  const founder2Ref = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  const number1Ref = useRef(null);
  const number2Ref = useRef(null);

  const finalRef = useRef(null);

  const creativeRef = useRef(null);
  const orbitRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 2.5,
          },
        });

        /* INITIAL STATES */

        gsap.set(founder1Ref.current, {
          opacity: 0,
          x: -100,
          scale: 0.92,
        });

        gsap.set(founder2Ref.current, {
          opacity: 0,
          x: 100,
          scale: 0.92,
        });

        gsap.set(image1Ref.current, {
          scale: 1.15,
          x: -30,
        });

        gsap.set(image2Ref.current, {
          scale: 1.15,
          x: 30,
        });

        gsap.set(number1Ref.current, {
          opacity: 0,
          y: 30,
        });

        gsap.set(number2Ref.current, {
          opacity: 0,
          y: 30,
        });

        gsap.set(finalRef.current, {
          opacity: 0,
          y: 100,
          scale: 0.92,
        });

        /* CREATIVE ART */

        gsap.set(creativeRef.current, {
          opacity: 0,
          left: "79%",
          top: "50%",
          scale: 0.7,
          rotation: -18,
        });

        gsap.set(orbitRef.current, {
          opacity: 0,
          left: "79%",
          top: "50%",
          scale: 0.65,
          rotation: 20,
        });

        gsap.set(innerRef.current, {
          rotation: 0,
        });

        /* INTRO */

        tl.to(introRef.current, {
          opacity: 0,
          y: -120,
          scale: 0.92,
          filter: "blur(8px)",
          duration: 1,
        });

        /* FOUNDER 01 ENTER */

        tl.to(founder1Ref.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        });

        tl.to(
          image1Ref.current,
          {
            scale: 1,
            x: 0,
            duration: 1.4,
            ease: "none",
          },
          "<"
        );

        tl.to(
          number1Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "<0.3"
        );

        /* CREATIVE ART ENTER — RIGHT */

        tl.to(
          creativeRef.current,
          {
            opacity: 1,
            left: "79%",
            top: "50%",
            scale: 1,
            rotation: 0,
            duration: 1.3,
            ease: "power3.out",
          },
          "<0.1"
        );

        tl.to(
          orbitRef.current,
          {
            opacity: 1,
            left: "79%",
            top: "50%",
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "<"
        );

        /* SUBTLE FLOAT */

        tl.to(
          innerRef.current,
          {
            rotation: 12,
            duration: 1,
            ease: "sine.inOut",
          },
          "<0.2"
        );

        /* HOLD */

        tl.to(
          {},
          {
            duration: 1,
          }
        );

        /* FOUNDER 01 EXIT */

        tl.to(founder1Ref.current, {
          opacity: 0,
          x: -140,
          scale: 0.94,
          filter: "blur(6px)",
          duration: 1.2,
        });

        /* ART RIGHT → LEFT */

        tl.to(
  creativeRef.current,
  {
    left: "14%",
    top: "50%",
    scale: 0.92,
    rotation: 18,
    duration: 4.5,
    ease: "power1.inOut",
  },
  "<0.05"
);

        tl.to(
  orbitRef.current,
  {
    left: "14%",
    top: "50%",
    scale: 0.88,
    rotation: -25,
    duration: 3.5,
    ease: "power1.inOut",
  },
  "<"
);

        tl.to(
          innerRef.current,
          {
            rotation: -15,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "<"
        );

        /* FOUNDER 02 ENTER */

        tl.to(founder2Ref.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        });

        tl.to(
          image2Ref.current,
          {
            scale: 1,
            x: 0,
            duration: 1.4,
            ease: "none",
          },
          "<"
        );

        tl.to(
          number2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "<0.3"
        );

        /* HOLD */

        tl.to(
          {},
          {
            duration: 1,
          }
        );

        /* FOUNDER 02 EXIT */

        tl.to(founder2Ref.current, {
          opacity: 0,
          x: 140,
          scale: 0.94,
          filter: "blur(6px)",
          duration: 1.2,
        });

        /* ART EXIT */

        tl.to(
          creativeRef.current,
          {
            opacity: 0,
            scale: 0.65,
            rotation: 35,
            duration: 0.8,
          },
          "<0.05"
        );

        tl.to(
          orbitRef.current,
          {
            opacity: 0,
            scale: 0.55,
            rotation: -40,
            duration: 0.8,
          },
          "<"
        );

        /* FINAL */

        tl.to(finalRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        });

        return () => tl.kill();
      });

      /* =====================================================
         MOBILE
      ===================================================== */

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        gsap.set(founder1Ref.current, {
          opacity: 0,
          y: 80,
        });

        gsap.set(founder2Ref.current, {
          opacity: 0,
          y: 80,
        });

        gsap.set(image1Ref.current, {
          scale: 1.15,
        });

        gsap.set(image2Ref.current, {
          scale: 1.15,
        });

        gsap.set(finalRef.current, {
          opacity: 0,
          y: 70,
        });

        /* MOBILE ART */

        gsap.set(creativeRef.current, {
          opacity: 0,
          left: "82%",
          top: "17%",
          scale: 0.48,
          rotation: -10,
        });

        gsap.set(orbitRef.current, {
          opacity: 0,
          left: "82%",
          top: "17%",
          scale: 0.42,
          rotation: 15,
        });

        /* INTRO */

        tl.to(introRef.current, {
          opacity: 0,
          y: -80,
          filter: "blur(6px)",
          duration: 1,
        });

        /* FOUNDER 01 */

        tl.to(founder1Ref.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
        });

        tl.to(
          image1Ref.current,
          {
            scale: 1,
            duration: 1.4,
          },
          "<"
        );

        /* ART ENTER */

        tl.to(
          creativeRef.current,
          {
            opacity: 1,
            left: "82%",
            top: "17%",
            scale: 0.48,
            rotation: 0,
            duration: 1,
          },
          "<0.2"
        );

        tl.to(
          orbitRef.current,
          {
            opacity: 1,
            left: "82%",
            top: "17%",
            scale: 0.42,
            rotation: 0,
            duration: 1.1,
          },
          "<"
        );

        /* HOLD */

        tl.to(
          {},
          {
            duration: 1,
          }
        );

        /* FOUNDER 01 EXIT */

        tl.to(founder1Ref.current, {
          opacity: 0,
          y: -80,
          filter: "blur(5px)",
          duration: 1,
        });

        /* ART RIGHT → LEFT */

        tl.to(
          creativeRef.current,
          {
            left: "18%",
            top: "82%",
            scale: 0.5,
            rotation: 18,
            duration: 1.3,
            ease: "power3.inOut",
          },
          "<0.05"
        );

        tl.to(
          orbitRef.current,
          {
            left: "18%",
            top: "82%",
            scale: 0.44,
            rotation: -25,
            duration: 1.4,
            ease: "power3.inOut",
          },
          "<"
        );

        /* FOUNDER 02 */

        tl.to(founder2Ref.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
        });

        tl.to(
          image2Ref.current,
          {
            scale: 1,
            duration: 1.4,
          },
          "<"
        );

        /* HOLD */

        tl.to(
          {},
          {
            duration: 1,
          }
        );

        /* EXIT */

        tl.to(founder2Ref.current, {
          opacity: 0,
          y: -80,
          filter: "blur(5px)",
          duration: 1,
        });

        tl.to(
          creativeRef.current,
          {
            opacity: 0,
            scale: 0.35,
            duration: 0.7,
          },
          "<0.05"
        );

        tl.to(
          orbitRef.current,
          {
            opacity: 0,
            scale: 0.3,
            duration: 0.7,
          },
          "<"
        );

        /* FINAL */

        tl.to(finalRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.4,
        });

        return () => tl.kill();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F0F0F0]"
    >
      <div className="h-[380vh] md:h-[360vh]">

        <div
          ref={stageRef}
          className="
            sticky
            top-0
            h-screen
            w-full
            overflow-hidden
            flex
            items-center
            justify-center
            px-4
            md:px-8
          "
        >

          {/* =================================================
              PREMIUM ABSTRACT CREATIVE OBJECT
          ================================================= */}

          <div className="absolute inset-0 pointer-events-none z-0">

            {/* MAIN 3D SCULPTURE */}

            <div
              ref={creativeRef}
              className="
                absolute
                -translate-x-1/2
                -translate-y-1/2
                w-[230px]
                h-[300px]
                md:w-[360px]
                md:h-[460px]
              "
            >
              <svg
                viewBox="0 0 360 460"
                className="w-full h-full overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>

                  {/* Main Gradient */}

                  <linearGradient
                    id="mainGradient"
                    x1="40"
                    y1="40"
                    x2="320"
                    y2="420"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#7C3AED" />
                    <stop offset="0.35" stopColor="#4F46E5" />
                    <stop offset="0.7" stopColor="#2563EB" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>

                  {/* Highlight */}

                  <linearGradient
                    id="highlightGradient"
                    x1="80"
                    y1="70"
                    x2="260"
                    y2="350"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="0.35" stopColor="#FFFFFF" stopOpacity="0.15" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>

                  {/* Glow */}

                  <filter
                    id="softGlow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur
                      stdDeviation="14"
                      result="blur"
                    />
                  </filter>

                  {/* Shadow */}

                  <filter
                    id="objectShadow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="20"
                      stdDeviation="18"
                      floodColor="#4F46E5"
                      floodOpacity="0.18"
                    />
                  </filter>
                </defs>

                {/* Soft glow behind object */}

                <ellipse
                  cx="190"
                  cy="240"
                  rx="105"
                  ry="150"
                  fill="#6366F1"
                  opacity="0.12"
                  filter="url(#softGlow)"
                />

                {/* Main futuristic sculpture */}

                <path
                  d="
                    M188 38
                    C246 47 299 91 307 151
                    C315 209 278 241 243 272
                    C205 305 221 352 257 381
                    C286 404 282 431 252 440
                    C211 452 164 420 145 383
                    C125 343 136 306 168 270
                    C196 238 215 212 198 177
                    C183 147 137 145 108 120
                    C79 95 93 58 128 45
                    C148 38 168 36 188 38Z
                  "
                  fill="url(#mainGradient)"
                  filter="url(#objectShadow)"
                />

                {/* Glass inner surface */}

                <path
                  d="
                    M169 58
                    C214 59 261 91 272 135
                    C282 176 256 206 221 235
                    C185 265 178 302 207 342
                    C224 365 250 384 247 402
                    C244 418 221 419 201 409
                    C164 390 151 352 160 317
                    C169 283 201 255 207 224
                    C214 190 194 163 158 149
                    C125 136 111 118 116 96
                    C122 72 143 58 169 58Z
                  "
                  fill="url(#highlightGradient)"
                  opacity="0.7"
                />

                {/* Sharp reflective edge */}

                <path
                  d="
                    M130 62
                    C102 77 97 105 118 126
                    C137 145 173 146 192 166
                  "
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                {/* Secondary reflection */}

                <path
                  d="
                    M268 128
                    C282 167 258 199 226 227
                    C201 249 192 276 194 301
                  "
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.35"
                />

                {/* Small cut / detail */}

                <path
                  d="
                    M246 377
                    C265 393 270 408 259 417
                  "
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.45"
                />

                {/* Floating sphere */}

                <circle
                  cx="306"
                  cy="118"
                  r="9"
                  fill="#F97316"
                />

                <circle
                  cx="306"
                  cy="118"
                  r="4"
                  fill="#FFFFFF"
                  opacity="0.8"
                />

                {/* Tiny blue particle */}

                <circle
                  cx="72"
                  cy="318"
                  r="5"
                  fill="#06B6D4"
                />

                {/* Tiny violet particle */}

                <circle
                  cx="278"
                  cy="345"
                  r="4"
                  fill="#8B5CF6"
                />
              </svg>
            </div>

            {/* ORBITAL SYSTEM */}

            <div
              ref={orbitRef}
              className="
                absolute
                -translate-x-1/2
                -translate-y-1/2
                w-[300px]
                h-[300px]
                md:w-[470px]
                md:h-[470px]
              "
            >
              <svg
                viewBox="0 0 470 470"
                className="w-full h-full overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer orbit */}

                <ellipse
                  cx="235"
                  cy="235"
                  rx="185"
                  ry="105"
                  transform="rotate(-25 235 235)"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="1.5"
                  strokeDasharray="4 12"
                  opacity="0.35"
                />

                {/* Second orbit */}

                <ellipse
                  cx="235"
                  cy="235"
                  rx="140"
                  ry="190"
                  transform="rotate(35 235 235)"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="1"
                  strokeDasharray="2 10"
                  opacity="0.3"
                />

                {/* Inner orbit */}

                <ellipse
                  cx="235"
                  cy="235"
                  rx="115"
                  ry="150"
                  transform="rotate(-50 235 235)"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="1"
                  opacity="0.2"
                />

                {/* Orbiting dots */}

                <circle
                  cx="411"
                  cy="172"
                  r="6"
                  fill="#4F46E5"
                />

                <circle
                  cx="92"
                  cy="337"
                  r="5"
                  fill="#06B6D4"
                />

                <circle
                  cx="306"
                  cy="58"
                  r="4"
                  fill="#F97316"
                />

                {/* Tiny cross */}

                <path
                  d="M73 150H89M81 142V158"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.5"
                />

                {/* Small square */}

                <rect
                  x="370"
                  y="315"
                  width="9"
                  height="9"
                  rx="2"
                  transform="rotate(20 370 315)"
                  fill="#7C3AED"
                  opacity="0.55"
                />
              </svg>
            </div>
          </div>

          {/* =================================================
              INTRO
          ================================================= */}

          <div
            ref={introRef}
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-5
              z-10
            "
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-500 mb-5">
              The People Behind The Work
            </p>

            <h2
              className="
                font-sans
                text-4xl
                sm:text-5xl
                md:text-7xl
                lg:text-8xl
                leading-[0.9]
                tracking-tight
                text-black
              "
            >
              Good work
              <br />
              starts with
              <br />
              <span className="italic text-orange-400">
                people.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-md
                text-sm
                sm:text-base
                text-gray-500
                leading-relaxed
              "
            >
              Different perspectives, shared ambition and a
              constant curiosity for what comes next.
            </p>

            <div className="mt-10 text-xs uppercase tracking-[0.2em] text-gray-400">
              Scroll to explore
            </div>
          </div>

          {/* =================================================
              FOUNDER 01
          ================================================= */}

          <div
            ref={founder1Ref}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              px-4
              md:px-12
              z-10
            "
          >
            <div
              className="
                relative
                w-full
                max-w-6xl
                flex
                flex-col
                md:flex-row
                items-center
                gap-8
                md:gap-16
              "
            >
              <div
                className="
                  w-[65vw]
                  sm:w-[55vw]
                  md:w-[32%]
                  max-w-[350px]
                  aspect-[9/16]
                  overflow-hidden
                  rounded-sm
                  shrink-0
                  flex
                  items-center
                "
              >
                <img
                  ref={image1Ref}
                  src="https://cdn.prod.website-files.com/68a1f1d118b11d82119e8540/6a33e27fd79e90d5cadd337e_home-about-daniel.avif"
                  alt="Founder 01"
                  className="
                    w-full
                    h-[60vh]
                    object-cover
                    rounded-xl
                  "
                />
              </div>

              <div className="w-full md:w-[42%]">
                <div
                  ref={number1Ref}
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-gray-600
                    mb-5
                  "
                >
                  01 / Founder
                </div>

                <h2
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    font-sans
                    leading-[0.95]
                    tracking-tight
                    text-black
                    font-semibold
                  "
                >
                  Daniel
                  <br />
                  Bech
                </h2>

                <p
                  className="
                    mt-6
                    text-sm
                    sm:text-base
                    leading-relaxed
                    text-gray-600
                    max-w-sm
                  "
                >
                  Building bold digital products from the ground up,
                  blending creative thinking, technology, and relentless
                  execution to turn ambitious ideas into meaningful
                  experiences.
                </p>

                <div className="mt-8 text-xs uppercase tracking-[0.18em] text-black">
                  Founder & Builder
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FOUNDER 02
          ================================================= */}

          <div
            ref={founder2Ref}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              px-4
              md:px-12
              z-10
            "
          >
            <div
              className="
                relative
                w-full
                max-w-6xl
                flex
                flex-col
                md:flex-row-reverse
                items-center
                gap-8
                md:gap-16
              "
            >
              <div
                className="
                  w-[65vw]
                  sm:w-[55vw]
                  md:w-[32%]
                  max-w-[350px]
                  aspect-[9/16]
                  overflow-hidden
                  rounded-sm
                  shrink-0
                  flex
                  items-center
                "
              >
                <img
                  ref={image2Ref}
                  src="https://cdn.prod.website-files.com/68a1f1d118b11d82119e8540/6a33e2872a33ee22444ef7c7_home-about-casper.avif"
                  alt="Founder 02"
                  className="
                    w-full
                    h-[60vh]
                    object-cover
                    rounded-xl
                  "
                />
              </div>

              <div className="w-full md:w-[42%]">
                <div
                  ref={number2Ref}
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-gray-600
                    mb-5
                  "
                >
                  02 / Founder
                </div>

                <h2
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    font-sans
                    leading-[1.1]
                    tracking-tight
                    text-black
                    font-semibold
                  "
                >
                  Casper
                  <br />
                  Nielsen
                </h2>

                <p
                  className="
                    mt-6
                    text-sm
                    sm:text-base
                    leading-relaxed
                    text-gray-600
                    max-w-sm
                  "
                >
                  Turning complex ideas into purposeful digital
                  experiences through strategic thinking, hands-on
                  building, and a constant drive to create what comes
                  next.
                </p>

                <div className="mt-8 text-xs uppercase tracking-[0.18em] text-black">
                  Founder & Builder
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FINAL STATEMENT
          ================================================= */}

          <div
            ref={finalRef}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-center
              px-5
              z-10
            "
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-7">
                One Direction
              </p>

              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  font-sans
                  leading-[0.9]
                  tracking-tight
                  text-black
                "
              >
                Different
                <br />
                perspectives.
                <br />
                <span className="italic text-orange-400">
                  One direction.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-lg
                  mx-auto
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-gray-500
                "
              >
                We believe the strongest digital experiences
                happen when creativity, technology and purpose
                move together.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Page3;