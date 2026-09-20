import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroText = () => {
  const wordRef = useRef(null);

  useGSAP(() => {
    const words = [
      "Experiences",
      "Creativity",
      "Strategy",
      "Impact"
    ];

    let index = 0;

    const changeWord = () => {
      gsap.to(wordRef.current, {
        y: -40,
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)",
        duration: 0.45,
        ease: "power3.in",

        onComplete: () => {
          index = (index + 1) % words.length;

          wordRef.current.textContent = words[index];

          gsap.fromTo(
            wordRef.current,
            {
              y: 40,
              opacity: 0,
              scale: 1.05,
              filter: "blur(8px)"
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.55,
              ease: "power3.out"
            }
          );
        }
      });
    };

    const interval = setInterval(changeWord, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="herotext min-h-[32vh] md:h-[42vh] flex flex-col justify-end gap-1.5 py-5">

      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl">
        We Create Digital
      </h2>

      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl">

        <span className="inline-block align-bottom">
          <span
            ref={wordRef}
            className="inline-block italic text-orange-400 font-bold min-w-[140px] sm:min-w-[210px] md:min-w-[230px]"
          >
            Experiences
          </span>
        </span>

        {" "}That Matter

      </h2>

    </div>
  );
};

export default HeroText;