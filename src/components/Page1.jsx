import HeroText from './HeroText';
import LeftHero from './LeftHero';
import RightHero from './RightHero';

const Page1 = () => {
  return (
    <div className="min-h-screen w-full box-border bg-[#F0F0F0]">
      <div className="flex flex-col px-3 w-full">

        <HeroText />

        <div className="w-full min-h-[auto] md:h-[55vh] gap-2 flex flex-col md:flex-row justify-between">
          <LeftHero />
          <RightHero />
        </div>

      </div>
    </div>
  )
}

export default Page1;