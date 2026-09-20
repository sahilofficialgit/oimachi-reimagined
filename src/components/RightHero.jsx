import React from "react";
import image1 from "../assets/images/card-img1.jpg";
import image2 from "../assets/images/card-img2.jpg";
import image3 from "../assets/images/card-img3.avif";
import image4 from "../assets/images/card-img4.avif";
import image5 from "../assets/images/card-img5.avif";

const RightHero = () => {
  return (
    <div className="h-auto md:h-full w-full md:w-[27%] flex flex-col gap-2 rounded-sm overflow-y-auto hide-scrollbar cursor-pointer">

      <div className="group flex flex-row md:flex-col gap-2 md:gap-1 hover:bg-white transition-colors duration-200 px-2 py-2 rounded-sm">
        
        <img
          className="rounded-xl h-[120px] md:h-[33vh] w-[40%] md:w-full object-cover transition-transform duration-300 md:group-hover:scale-95"
          src={image1}
          alt=""
        />

        <div className="w-[60%] md:w-full flex flex-col gap-1">
          <h3 className="font-semibold text-sm">About Oimachi</h3>

          <p className="text-gray-600 font-semibold text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sapiente veritatis facere suscipit quis ea corporis dicta optio, totam
            nihil?
          </p>
        </div>

      </div>

      <div className="group flex flex-row md:flex-col gap-2 md:gap-1 hover:bg-white transition-colors duration-200 px-2 py-2 rounded-sm">
        
        <img
          className="rounded-xl h-[120px] md:h-[33vh] w-[40%] md:w-full object-cover transition-transform duration-300 md:group-hover:scale-95"
          src={image2}
          alt=""
        />

        <div className="w-[60%] md:w-full flex flex-col gap-1">
          <h3 className="font-semibold text-sm">About oimachi</h3>

          <p className="text-gray-600 font-semibold text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sapiente veritatis facere suscipit quis ea corporis dicta optio, totam
            nihil?
          </p>
        </div>

      </div>

      <div className="group flex flex-row md:flex-col gap-2 md:gap-1 hover:bg-white transition-colors duration-200 px-2 py-2 rounded-sm">
        
        <img
          className="rounded-xl h-[120px] md:h-[33vh] w-[40%] md:w-full object-cover transition-transform duration-300 md:group-hover:scale-95"
          src={image3}
          alt=""
        />

        <div className="w-[60%] md:w-full flex flex-col gap-1">
          <h3 className="font-semibold text-sm">About oimachi</h3>

          <p className="text-gray-600 font-semibold text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sapiente veritatis facere suscipit quis ea corporis dicta optio, totam
            nihil?
          </p>
        </div>

      </div>

      <div className="group flex flex-row md:flex-col gap-2 md:gap-1 hover:bg-white transition-colors duration-200 px-2 py-2 rounded-sm">
        
        <img
          className="rounded-xl h-[120px] md:h-[33vh] w-[40%] md:w-full object-cover transition-transform duration-300 md:group-hover:scale-95"
          src={image4}
          alt=""
        />

        <div className="w-[60%] md:w-full flex flex-col gap-1">
          <h3 className="font-semibold text-sm">About oimachi</h3>

          <p className="text-gray-600 font-semibold text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sapiente veritatis facere suscipit quis ea corporis dicta optio, totam
            nihil?
          </p>
        </div>

      </div>

      <div className="group flex flex-row md:flex-col gap-2 md:gap-1 hover:bg-white transition-colors duration-200 px-2 py-2 rounded-sm">
        
        <img
          className="rounded-xl h-[120px] md:h-[33vh] w-[40%] md:w-full object-cover transition-transform duration-300 md:group-hover:scale-95"
          src={image5}
          alt=""
        />

        <div className="w-[60%] md:w-full flex flex-col gap-1">
          <h3 className="font-semibold text-sm">About oimachi</h3>

          <p className="text-gray-600 font-semibold text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sapiente veritatis facere suscipit quis ea corporis dicta optio, totam
            nihil?
          </p>
        </div>

      </div>

    </div>
  );
};

export default RightHero;