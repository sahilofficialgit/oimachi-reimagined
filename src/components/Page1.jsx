import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import HeroText from "./HeroText";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Page1 = () => {
  const orenRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      orenRef.current,
      {
        x: "100vw",
        rotation: 540,
        opacity: 0,
      },
      {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power4.out",
      }
    );
  });

  return (
    <div className="min-h-screen w-full box-border bg-[#F0F0F0] overflow-hidden">

      <div className="flex flex-col px-3 w-full pt-16 sm:pt-14 md:pt-8">

        {/* OREN HERO */}
        <div className="w-full flex flex-col">

          {/* OREN */}
          <div className="flex items-end overflow-visible">
            <h1
              className="
                font-sans
                text-[24vw]
                sm:text-[20vw]
                md:text-[16vw]
                leading-[0.82]
                tracking-[-0.08em]
                font-medium
                whitespace-nowrap
                overflow-visible
              "
            >
              <span
                ref={orenRef}
                className="inline-block origin-center will-change-transform text-purple-600"
              >
                O
              </span>

              <span className="inline-block">
                REN
              </span>
            </h1>
          </div>

          {/* STUDIO INFO */}
          <div className="flex items-center justify-between mt-5 md:mt-4 px-1 hidden md:flex">

            <span className="font-sans text-[11px] md:text-[0.7vw] tracking-[0.12em] uppercase">
              Oren Studio
            </span>

            <span className="font-sans text-[11px] md:text-[0.7vw] tracking-[0.12em] uppercase opacity-50">
              Digital / Design / Motion
            </span>

          </div>

        </div>

        {/* HERO TEXT */}
        <HeroText />

        {/* VIDEO + RIGHT HERO */}
        <div className="w-full min-h-[auto] md:h-[55vh] gap-2 flex flex-col md:flex-row justify-between">

          <LeftHero />

          <RightHero />

        </div>

      </div>

    </div>
  );
};

export default Page1;