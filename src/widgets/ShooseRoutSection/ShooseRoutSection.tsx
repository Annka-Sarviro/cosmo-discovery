import ChooseRoutSlider from '@/entities/ChooseRoutSlider/ChooseRoutSlider';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import Image from 'next/image';

const ShooseRoutSection = () => {
  return (
    <section id="shooseRoute" className="bg-darkBloue.90 relative">
      <div className="z-0">
        <Image
          src="/shooseroute.png"
          alt="stars bacground image"
          layout="fill"
          objectFit="cover"
          object-position="50% 50%"
          className="-z-10 absolute "
        />
      </div>
      <Bookmark className="mt-[68px]">Choose you route</Bookmark>
      <div className="container pt-[68px] pb-[90px]">
        <ChooseRoutSlider />
        <p className="text-center before:content-[''] before:block before:bg-white before:mb-9  before:w-[260px] before:h-1 before:shadow-accentShadow before:mx-auto">
          Not finding what you&apos;re looking for? - just give us a call!
        </p>
      </div>
    </section>
  );
};

export default ShooseRoutSection;
