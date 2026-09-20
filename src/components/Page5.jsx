import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
  const footerRef = useRef(null);
  const statementRef = useRef(null);
  const contactRef = useRef(null);
  const magneticRef = useRef(null);
  const previewRef = useRef(null);
  const previewImageRef = useRef(null);
  const wordmarkRef = useRef(null);

  const [activeProject, setActiveProject] = useState(null);
  const [openMobile, setOpenMobile] = useState(null);

  const projects = [
    {
      number: "01",
      name: "Novera",
      category: "Fintech",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      number: "02",
      name: "Aurelis",
      category: "Maritime",
      image:
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop",
    },
    {
      number: "03",
      name: "Veyronix",
      category: "Networks",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      number: "04",
      name: "Mediora",
      category: "Pharma",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      number: "05",
      name: "Axevia",
      category: "Sports Tech",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const services = [
    "Strategy",
    "Creative Direction",
    "Digital Design",
    "Development",
    "Motion",
    "AI Integration",
  ];

  const products = [
    "Digital Products",
    "Web Experiences",
    "Design Systems",
    "AI Tools",
    "Interactive Systems",
  ];

  /* ---------------------------------------------------------
     MAIN SCROLL ANIMATION
  --------------------------------------------------------- */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO STATEMENT */

      const statementWords = gsap.utils.toArray(
        ".footer-statement-word"
      );

      gsap.fromTo(
        statementWords,
        {
          y: 100,
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* COLUMNS */

      gsap.fromTo(
        ".footer-column",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-columns",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* CONTACT */

      gsap.fromTo(
        contactRef.current,
        {
          y: 100,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* WORDMARK */

      gsap.fromTo(
        wordmarkRef.current,
        {
          scaleX: 0.3,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wordmarkRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 1.5,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  /* ---------------------------------------------------------
     MAGNETIC CONTACT BUTTON
  --------------------------------------------------------- */

  useEffect(() => {
    const button = magneticRef.current;

    if (!button) return;

    const moveButton = (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.18,
        y: y * 0.18,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const resetButton = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.35)",
      });
    };

    button.addEventListener("mousemove", moveButton);
    button.addEventListener("mouseleave", resetButton);

    return () => {
      button.removeEventListener("mousemove", moveButton);
      button.removeEventListener("mouseleave", resetButton);
    };
  }, []);

  /* ---------------------------------------------------------
     PROJECT PREVIEW
  --------------------------------------------------------- */

  useEffect(() => {
    const preview = previewRef.current;

    if (!preview) return;

    const movePreview = (e) => {
      gsap.to(preview, {
        x: e.clientX + 25,
        y: e.clientY + 25,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", movePreview);

    return () => {
      window.removeEventListener("mousemove", movePreview);
    };
  }, []);

  useEffect(() => {
    if (!previewImageRef.current || !activeProject) return;

    gsap.fromTo(
      previewImageRef.current,
      {
        scale: 1.15,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, [activeProject]);

  /* ---------------------------------------------------------
     MOBILE ACCORDION
  --------------------------------------------------------- */

  const toggleMobile = (section) => {
    setOpenMobile(openMobile === section ? null : section);
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#0A0A0A] text-[#F2F2F2] overflow-hidden"
    >
      {/* =====================================================
          TOP STATEMENT
      ===================================================== */}

      <section
        ref={statementRef}
        className="relative min-h-[90vh] px-5 md:px-10 pt-28 md:pt-40 pb-32 flex items-end"
      >
        <div className="w-full">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/40 mb-10">
            Let's create something meaningful
          </p>

          <h2 className="uppercase font-semibold leading-[0.8] tracking-[-0.075em] text-[16vw] md:text-[13vw] overflow-hidden">
            <span className="footer-statement-word inline-block">
              Let's
            </span>{" "}
            <span className="footer-statement-word inline-block">
              make
            </span>
            <br />
            <span className="footer-statement-word inline-block">
              something
            </span>
            <br />
            <span className="footer-statement-word inline-block">
              matter.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="w-full px-5 md:px-10">
        <div className="w-full h-px bg-white/15" />
      </div>

      {/* =====================================================
          THREE COLUMNS
      ===================================================== */}

      <section className="footer-columns px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* ================= WORK ================= */}

          <div className="footer-column">
            <div className="flex items-center justify-between mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Work
              </p>

              <span className="text-xs text-white/30">05</span>
            </div>

            <div className="border-t border-white/15">
              {projects.map((project) => (
                <div
                  key={project.name}
                  onMouseEnter={() => setActiveProject(project)}
                  onMouseLeave={() => setActiveProject(null)}
                  className="group border-b border-white/15 py-5 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="text-[10px] text-white/30 group-hover:text-white transition-colors">
                        {project.number}
                      </span>

                      <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {project.name}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SERVICES ================= */}

          <div className="footer-column">
            <div className="flex items-center justify-between mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Services
              </p>

              <span className="text-xs text-white/30">06</span>
            </div>

            <div className="border-t border-white/15">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group border-b border-white/15 py-5 cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] text-white/30 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}

          <div className="footer-column">
            <div className="flex items-center justify-between mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Products
              </p>

              <span className="text-xs text-white/30">05</span>
            </div>

            <div className="border-t border-white/15">
              {products.map((product, index) => (
                <div
                  key={product}
                  className="group border-b border-white/15 py-5 cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] text-white/30 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {product}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT PREVIEW
      ===================================================== */}

      <div
        ref={previewRef}
        className={`fixed z-[100] pointer-events-none hidden md:block w-[320px] h-[220px] overflow-hidden transition-opacity duration-300 ${
          activeProject ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: 0,
          top: 0,
        }}
      >
        {activeProject && (
          <img
            ref={previewImageRef}
            src={activeProject.image}
            alt={activeProject.name}
            className="w-full h-full object-cover"
          />
        )}

        {activeProject && (
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/50 backdrop-blur-md">
            <p className="text-xs uppercase tracking-widest">
              {activeProject.name}
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        ref={contactRef}
        className="px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40"
      >
        <div className="w-full h-px bg-white/15 mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* LEFT */}

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
              Have an idea?
            </p>

            <h3 className="text-[18vw] md:text-[10vw] font-semibold leading-[0.78] tracking-[-0.08em] uppercase">
              Let's
              <br />
              Talk
            </h3>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col justify-end">
            <div className="mb-14">
              <p className="text-sm text-white/40 mb-3">Start a conversation</p>

              <a
                href="mailto:hello@studio.com"
                className="text-2xl md:text-4xl font-medium tracking-tight hover:text-white/50 transition-colors"
              >
                hello@studio.com
              </a>
            </div>

            {/* MAGNETIC BUTTON */}

            <div className="flex justify-start md:justify-end">
              <a
                ref={magneticRef}
                href="mailto:hello@studio.com"
                className="group relative w-40 h-40 md:w-52 md:h-52 rounded-full border border-white/25 flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 text-sm uppercase tracking-[0.15em] group-hover:text-black transition-colors duration-500">
                  Talk →
                </span>

                <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]" />
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT DETAILS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-28">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">
              Email
            </p>

            <a
              href="mailto:hello@studio.com"
              className="text-sm hover:text-white/50 transition-colors"
            >
              hello@studio.com
            </a>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">
              Phone
            </p>

            <a
              href="tel:+910000000000"
              className="text-sm hover:text-white/50 transition-colors"
            >
              +91 00000 00000
            </a>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">
              Location
            </p>

            <p className="text-sm">Pune, India</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">
              Social
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm hover:text-white/50 transition-colors"
              >
                Instagram ↗
              </a>

              <a
                href="#"
                className="text-sm hover:text-white/50 transition-colors"
              >
                LinkedIn ↗
              </a>

              <a
                href="#"
                className="text-sm hover:text-white/50 transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GIANT WORDMARK
      ===================================================== */}

      <section className="px-5 md:px-10 overflow-hidden">
        <div className="w-full h-px bg-white/15 mb-10" />

        <div
          ref={wordmarkRef}
          className="origin-center whitespace-nowrap"
        >
          <h2 className="text-[22vw] md:text-[18vw] font-semibold leading-none tracking-[-0.09em] text-center">
            STUDIO
          </h2>
        </div>

        <div className="w-full h-px bg-white/15 mt-10" />
      </section>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <section className="px-5 md:px-10 py-7">
        <div className="flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.15em] text-white/35">
          <p>© 2026 Studio</p>

          <p>Built with curiosity & intent</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left md:text-right hover:text-white transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Page5;