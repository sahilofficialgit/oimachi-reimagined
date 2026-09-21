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

      rows.forEach((row) => {
        const number = row.querySelector(".project-number");
        const info = row.querySelector(".project-info");
        const logo = row.querySelector(".project-logo");
        const projectName = row.querySelector(".project-name");
        const category = row.querySelector(".project-category");
        const description = row.querySelector(".project-description");

        const mediaItems = row.querySelectorAll(".project-media-item");
        const curtains = row.querySelectorAll(".media-curtain");

        const mediaContent = row.querySelectorAll(
          ".project-media-item img, .project-media-item video"
        );

        const divider = row.querySelector(".project-divider");

        // -----------------------------------------
        // INITIAL STATES
        // -----------------------------------------

        gsap.set(number, {
          y: 25,
          opacity: 0,
        });

        gsap.set(info, {
          x: -45,
          opacity: 0,
          filter: "blur(8px)",
        });

        gsap.set(logo, {
          x: -20,
          opacity: 0,
        });

        gsap.set(projectName, {
          y: 15,
          opacity: 0,
        });

        gsap.set(category, {
          y: 10,
          opacity: 0,
        });

        gsap.set(description, {
          y: 25,
          opacity: 0,
          filter: "blur(8px)",
        });

        gsap.set(mediaContent, {
          scale: 1.13,
          yPercent: 3,
        });

        gsap.set(curtains, {
          scaleX: 1,
          transformOrigin: "left center",
        });

        gsap.set(divider, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        // -----------------------------------------
        // MAIN SCROLL TIMELINE
        // -----------------------------------------

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 84%",
            end: "top 35%",
            scrub: 1.6,
          },
        });

        // Divider
        tl.to(
          divider,
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        );

        // Number
        tl.to(
          number,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          0
        );

        // Main information
        tl.to(
          info,
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power4.out",
          },
          0.05
        );

        // Logo
        tl.to(
          logo,
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          0.1
        );

        // Project name
        tl.to(
          projectName,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          0.15
        );

        // Category
        tl.to(
          category,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.22
        );

        // Description
        tl.to(
          description,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          },
          0.28
        );

        // -----------------------------------------
        // CURTAIN REVEAL
        // -----------------------------------------

        tl.to(
          curtains,
          {
            scaleX: 0,
            duration: 1.35,
            stagger: 0.14,
            ease: "power4.inOut",
          },
          0.02
        );

        // -----------------------------------------
        // MEDIA ZOOM
        // -----------------------------------------

        tl.to(
          mediaContent,
          {
            scale: 1,
            yPercent: 0,
            duration: 1.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          0
        );

        // -----------------------------------------
        // CONTINUOUS PARALLAX
        // -----------------------------------------

        mediaContent.forEach((media, index) => {
          gsap.fromTo(
            media,
            {
              yPercent: index === 0 ? 4 : -3,
              xPercent: index === 0 ? 1.5 : -1.5,
            },
            {
              yPercent: index === 0 ? -4 : 3,
              xPercent: index === 0 ? -1.5 : 1.5,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
              },
            }
          );
        });

        // -----------------------------------------
        // HOVER ANIMATION
        // -----------------------------------------

        const hoverIn = () => {
          gsap.to(mediaItems, {
            scale: 0.985,
            duration: 0.7,
            stagger: 0.04,
            ease: "power3.out",
          });

          gsap.to(projectName, {
            x: 8,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 5,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(logo, {
            scale: 1.06,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        const hoverOut = () => {
          gsap.to(mediaItems, {
            scale: 1,
            duration: 0.8,
            stagger: 0.04,
            ease: "power3.out",
          });

          gsap.to(projectName, {
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(logo, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        row.addEventListener("mouseenter", hoverIn);
        row.addEventListener("mouseleave", hoverOut);

        row._hoverIn = hoverIn;
        row._hoverOut = hoverOut;
      });
    }, sectionRef);

    return () => {
      const rows = sectionRef.current?.querySelectorAll(".project-row");

      rows?.forEach((row) => {
        if (row._hoverIn) {
          row.removeEventListener("mouseenter", row._hoverIn);
        }

        if (row._hoverOut) {
          row.removeEventListener("mouseleave", row._hoverOut);
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full pt-5 md:pt-10 box-border bg-[#F0F0F0] font-sans"
    >
      {projects.map((project, projectIndex) => (
        <div
          key={project.name}
          className="
            project-row
            relative
            w-full
            py-4
            md:py-3
            flex
            flex-col
            md:flex-row
            justify-between
            gap-5
            md:gap-2
            cursor-default
          "
        >
          {/* TOP DIVIDER */}

          <div className="project-divider absolute top-0 left-0 w-full h-px bg-black/20" />

          {/* LEFT INFO */}

          <div
            className="
              project-info
              w-full
              md:w-[35%]
              min-h-[24vh]
              md:h-[35vh]
              flex
              flex-col
              justify-between
              py-2
              md:py-3
            "
          >
            {/* TOP */}

            <div className="flex items-start gap-4">
              {/* NUMBER */}

              <span className="project-number text-[10px] font-medium text-black/35 pt-1 min-w-5">
                {String(projectIndex + 1).padStart(2, "0")}
              </span>

              {/* LOGO + INFO */}

              <div className="project-logo flex items-center gap-2">
                {/* ONLY LOGO — NO GREY BACKGROUND */}

                <div className="h-12 w-12 md:h-[6vh] md:w-[3vw] min-w-12 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.icon}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="project-name text-xs font-medium">
                    {project.name}
                  </h4>

                  <h6 className="project-category text-xs font-semibold text-gray-500">
                    {project.category}
                  </h6>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="project-description w-full flex items-end font-semibold text-sm text-gray-400 p-1 md:p-2">
              <p className="max-w-[95%]">
                {project.description}
              </p>
            </div>
          </div>

          {/* RIGHT MEDIA */}

          <div
            className="
              w-full
              md:w-[65%]
              h-[55vh]
              md:h-[35vh]
              grid
              grid-cols-2
              grid-rows-2
              md:flex
              md:items-center
              gap-2
              py-1
            "
          >
            {project.media.map((item, index) => (
              <div
                key={index}
                className={`
                  project-media-item
                  relative
                  overflow-hidden
                  rounded-sm
                  will-change-transform
                  ${
                    index === 0
                      ? "col-span-2"
                      : "col-span-1"
                  }
                  md:w-1/3
                  md:h-full
                  md:flex-1
                `}
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                      w-full
                      h-full
                      object-cover
                      will-change-transform
                    "
                    src={item.src}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`${project.name} ${index + 1}`}
                    className="
                      w-full
                      h-full
                      object-cover
                      will-change-transform
                    "
                  />
                )}

                {/* CURTAIN */}

                <div className="media-curtain absolute inset-0 z-10 bg-[#F0F0F0]" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page2Panels;