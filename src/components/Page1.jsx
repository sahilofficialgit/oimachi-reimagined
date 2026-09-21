import HeroText from "./HeroText";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Page1 = () => {
  return (
    <div className="min-h-screen w-full box-border bg-[#F0F0F0] overflow-hidden">

      <div className="flex flex-col px-3 w-full pt-16 sm:pt-14 md:pt-8">

        {/* OREN HERO */}
        <div className="w-full flex flex-col">

          <div className="flex items-end justify-between">
            <h1
              className="
                font-sans
                text-[24vw]
                sm:text-[20vw]
                md:text-[16vw]
                leading-[0.72]
                tracking-[-0.08em]
                font-medium
              "
            >
              OREN
            </h1>
          </div>

          <div className="flex items-center justify-between mt-4 md:mt-3 px-1">
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

        {/* VIDEO + RIGHT PANEL */}
        <div className="w-full min-h-[auto] md:h-[55vh] gap-2 flex flex-col md:flex-row justify-between">

          <LeftHero />

          <RightHero />

        </div>

      </div>

    </div>
  );
};

export default Page1;