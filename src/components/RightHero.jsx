import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RightHero = () => {
  const panelRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);
  const exploreRef = useRef(null);

  const services = [
    "Strategy",
    "Design",
    "Motion",
    "Development",
  ];

  useGSAP(() => {
    const serviceItems = servicesRef.current.children;

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.fromTo(
      panelRef.current,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
      }
    )
      .fromTo(
        numberRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.45"
      )
      .fromTo(
        titleRef.current,
        {
          y: 35,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
        },
        "-=0.25"
      )
      .fromTo(
        serviceItems,
        {
          x: 25,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.45,
        },
        "-=0.35"
      )
      .fromTo(
        exploreRef.current,
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.2"
      );

    Array.from(serviceItems).forEach((item) => {
      const arrow = item.querySelector(".service-arrow");

      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          x: 8,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(arrow, {
          x: 5,
          opacity: 1,
          duration: 0.25,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(arrow, {
          x: 0,
          opacity: 0.35,
          duration: 0.25,
        });
      });
    });

    return () => {
      Array.from(serviceItems).forEach((item) => {
        item.replaceWith(item.cloneNode(true));
      });
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className="
        w-full
        md:w-[27%]
        h-auto
        md:h-full
        min-h-[62vh]
        md:min-h-0
        border border-black/10
        px-5
        py-5
        md:px-[1.4vw]
        md:py-[1.4vw]
        flex
        flex-col
        justify-between
        overflow-hidden
        font-sans
      "
    >
      {/* TOP */}
      <div>
        <div className="flex items-center justify-between">
          <span
            ref={numberRef}
            className="
              text-[11px]
              md:text-[0.7vw]
              tracking-[0.12em]
              font-medium
            "
          >
            01
          </span>

          <span className="text-[10px] md:text-[0.65vw] tracking-[0.12em] uppercase opacity-50">
            Studio Signal
          </span>
        </div>

        {/* TITLE */}
        <div
          ref={titleRef}
          className="mt-8 md:mt-[3vw]"
        >
          <h3 className="text-[9vw] md:text-[4vw] leading-[0.82] tracking-[-0.07em] font-medium">
            Digital
          </h3>

          <h3 className="text-[9vw] md:text-[4vw] leading-[0.82] tracking-[-0.07em] font-medium">
            Experiences
          </h3>
        </div>
      </div>

      {/* SERVICES */}
      <div
        ref={servicesRef}
        className="mt-10 md:mt-0"
      >
        {services.map((service, index) => (
          <div
            key={service}
            className="
              service-item
              group
              flex
              items-center
              justify-between
              border-t
              border-black/15
              py-3
              md:py-[0.55vw]
              cursor-pointer
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-[9px] md:text-[0.55vw] opacity-35">
                0{index + 1}
              </span>

              <span className="text-sm md:text-[0.85vw]">
                {service}
              </span>
            </div>

            <span className="service-arrow text-sm opacity-35">
              ↗
            </span>
          </div>
        ))}
      </div>

      {/* BOTTOM / EXPLORE */}
      <div
        ref={exploreRef}
        className="
          flex
          items-center
          justify-between
          border-t
          border-black/15
          pt-4
          mt-10
          md:pt-[0.7vw]
          md:mt-0
          text-[10px]
          md:text-[0.65vw]
          tracking-[0.12em]
          uppercase
        "
      >
        <span className="opacity-45">
          Oren Studio
        </span>

        <span className="flex items-center gap-2">
          Explore
          <span className="text-sm">↗</span>
        </span>
      </div>
    </div>
  );
};

export default RightHero;