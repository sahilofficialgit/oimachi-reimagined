import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import video from "../assets/videos/Hero-video.mp4";

const LeftHero = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      videoRef.current,
      {
        scale: 1.08,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  });

  return (
    <div className="h-[35vh] md:h-full w-full md:w-[73%] overflow-hidden relative">

      <video
        ref={videoRef}
        className="h-full w-full object-cover rounded-sm will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        src={video}
      />

      <div className="absolute bottom-3 left-3 md:bottom-[0.8vw] md:left-[0.8vw] text-white mix-blend-difference">
        <span className="text-[10px] md:text-[0.65vw] tracking-[0.12em] uppercase">
          01 / Motion
        </span>
      </div>

    </div>
  );
};

export default LeftHero;