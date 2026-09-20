import React, { useEffect, useRef, useState } from "react";

const Page2Herotxt = () => {
  const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.65,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-[35vh] md:h-[40vh] w-full pt-20 pb-8 flex items-center justify-center px-2 sm:px-3">
      <h1
        ref={headingRef}
        className={`
          text-[#000000]
          font-sans
          text-2xl
          sm:text-3xl
          md:text-4xl
          leading-[1.05]
          text-center

          transition-all
          duration-[1500ms]
          ease-out

          ${
            headingVisible
              ? "opacity-100 blur-0 translate-x-0 skew-x-0 scale-100"
              : "opacity-0 blur-[12px] translate-x-[-18px] skew-x-[12deg] scale-[1.03]"
          }
        `}
        style={{
          transitionDelay: "300ms",
        }}
      >
        Partnering with
        <span className="italic font-bold text-orange-400"> ambitious</span> teams to
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