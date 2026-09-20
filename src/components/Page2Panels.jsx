
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import novera1 from "../assets/videos/novera-vid1.mp4";
import novera2 from "../assets/images/evooq-img2.avif";
import novera3 from "../assets/images/evooq-img3.avif";

import aurelis1 from "../assets/videos/aurelis-vid1.mp4";
import aurelis2 from "../assets/images/danelec-img2.avif";
import aurelis3 from "../assets/images/danelec-img3.avif";

import Veyronix1 from "../assets/images/bequant-img1.avif";
import Veyronix2 from "../assets/images/bequant-img2.avif";
import Veyronix3 from "../assets/images/bequant-img3.avif";

import Mediora1 from "../assets/videos/anthill-vid1.mp4";
import Mediora2 from "../assets/images/anthill-img2.avif";
import Mediora3 from "../assets/images/anthill-img3.avif";

import Axevia1 from "../assets/images/veo-img1.avif";
import Axevia2 from "../assets/images/veo-img2.avif";
import Axevia3 from "../assets/videos/veo-vid1.mp4";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Novera",
    category: "Fintech",
    description:
      "A modern fintech platform simplifying payments, financial management, and personalized insights through a seamless digital experience.",
    icon:
      "https://i.pinimg.com/736x/03/fb/fa/03fbfa56a53a66e00f80dab3cc5f390f.jpg",
    media: [
      { type: "video", src: novera1 },
      { type: "image", src: novera2 },
      { type: "image", src: novera3 },
    ],
  },

  {
    name: "Aurelis",
    category: "Maritime",
    description:
      "A future-facing maritime technology brand advancing safer, smarter, and more sustainable vessel operations through connected digital solutions.",
    icon:
      "https://i.pinimg.com/736x/29/cb/75/29cb7569d596a58e33ff54576f9b25cd.jpg",
    media: [
      { type: "video", src: aurelis1 },
      { type: "image", src: aurelis2 },
      { type: "image", src: aurelis3 },
    ],
  },

  {
    name: "Veyronix",
    category: "Networks",
    description:
      "A next-generation network technology brand optimizing global connectivity through faster, smarter, and more reliable digital infrastructure.",
    icon:
      "https://i.pinimg.com/736x/ef/c8/3d/efc83d26c305afdf8859c1e2d58fdb22.jpg",
    media: [
      { type: "image", src: Veyronix1 },
      { type: "image", src: Veyronix2 },
      { type: "image", src: Veyronix3 },
    ],
  },

  {
    name: "Mediora",
    category: "Pharma",
    description:
      "A modern pharmaceutical brand platform connecting healthcare products with smarter digital experiences designed to improve engagement and patient outcomes.",
    icon:
      "https://i.pinimg.com/1200x/9e/7d/57/9e7d57281fc22b9482706507d439a557.jpg",
    media: [
      { type: "video", src: Mediora1 },
      { type: "image", src: Mediora2 },
      { type: "image", src: Mediora3 },
    ],
  },

  {
    name: "Axevia",
    category: "Sports Tech",
    description:
      "A performance-driven sports tech brand connecting athletes, data, and intelligent technology to redefine modern sports experiences.",
    icon:
      "https://i.pinimg.com/1200x/3f/35/00/3f35002d10155f8b803eecdf2867c923.jpg",
    media: [
      { type: "video", src: Axevia3 },
      { type: "image", src: Axevia1 },
      { type: "image", src: Axevia2 },
    ],
  },
];

const Page2Panels = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".project-row");

      rows.forEach((row, rowIndex) => {
        const info = row.querySelector(".project-info");
        const logo = row.querySelector(".project-logo");
        const description = row.querySelector(".project-description");

        const mediaItems = row.querySelectorAll(".project-media-item");
        const curtains = row.querySelectorAll(".media-curtain");
        const mediaContent = row.querySelectorAll(
          ".project-media-item img, .project-media-item video"
        );

        /*
          Initial state
        */

        // Text starts slightly to the left
        gsap.set(info, {
          x: -35,
          opacity: 0,
        });

        gsap.set(logo, {
          x: -20,
          opacity: 0,
        });

        gsap.set(description, {
          x: -25,
          opacity: 0,
        });

        // Images start slightly zoomed
        gsap.set(mediaContent, {
          scale: 1.12,
        });

        // Curtain covers the entire media
        gsap.set(curtains, {
          scaleX: 1,
          transformOrigin: "left center",
        });

        /*
          Main timeline
        */

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            end: "top 38%",
            scrub: 1.3,
          },
        });

        // Text reveal
        tl.to(
          info,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          0
        );

        tl.to(
          logo,
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          0.05
        );

        tl.to(
          description,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.2
        );

        /*
          Curtain reveal

          Each image opens one after another.
        */

        tl.to(
          curtains,
          {
            scaleX: 0,
            duration: 1.2,
            stagger: 0.16,
            ease: "power4.inOut",
          },
          0
        );

        /*
          Image zoom settles while curtain opens
        */

        tl.to(
          mediaContent,
          {
            scale: 1,
            duration: 1.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          0
        );

        /*
          Subtle horizontal image movement
          while scrolling through the row.
        */

        mediaContent.forEach((media, index) => {
          gsap.fromTo(
            media,
            {
              xPercent: index === 0 ? 2 : -2,
            },
            {
              xPercent: index === 0 ? -2 : 2,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full pt-5 md:pt-10 box-border bg-[#OAOAOA]"
    >
      {projects.map((project) => (
        <div
          key={project.name}
          className="project-row w-full border-t border-gray-300 py-3 md:py-2 flex flex-col md:flex-row justify-between gap-4 md:gap-2"
        >
          {/* LEFT INFO */}
          <div className="project-info w-full md:w-[35%] min-h-[24vh] md:h-[35vh] flex flex-col justify-evenly">
            {/* Logo + Name */}
            <div className="project-logo flex items-center gap-2">
              <div className="h-12 w-12 md:h-[6vh] md:w-[3vw] min-w-12 bg-gray-300 flex items-center justify-center rounded-xs overflow-hidden">
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-full h-full object-contain p-1"
                />
              </div>

              <div>
                <h4 className="text-xs font-medium">
                  {project.name}
                </h4>

                <h6 className="text-xs font-semibold text-gray-500">
                  {project.category}
                </h6>
              </div>
            </div>

            {/* Description */}
            <div className="project-description w-full flex items-end font-semibold text-sm text-gray-400 p-1 md:p-2">
              <p className="max-w-[95%]">
                {project.description}
              </p>
            </div>
          </div>

          {/* RIGHT MEDIA */}
          <div className="w-full md:w-[65%] h-[55vh] md:h-[35vh] grid grid-cols-2 grid-rows-2 md:flex md:items-center gap-2 py-1">
            {project.media.map((item, index) => (
              <div
                key={index}
                className={`
                  project-media-item
                  relative
                  overflow-hidden
                  rounded-sm
                  ${index === 0 ? "col-span-2" : "col-span-1"}
                  md:w-1/3 md:h-full md:flex-1
                `}
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[0.97]"
                    src={item.src}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`${project.name} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[0.97]"
                  />
                )}

                {/* CURTAIN */}
                <div
                  className="media-curtain absolute inset-0 z-10 bg-[#F0F0F0]"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page2Panels;