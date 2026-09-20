import React from 'react'
import video from "../assets/videos/Hero-video.mp4";

const LeftHero = () => {
  return (
    <div className="h-[35vh] md:h-full w-full md:w-[73%]">
      <video
        className="h-full w-full object-cover rounded-sm"
        autoPlay
        muted
        loop
        playsInline
        src={video}
      />
    </div>
  )
}

export default LeftHero;