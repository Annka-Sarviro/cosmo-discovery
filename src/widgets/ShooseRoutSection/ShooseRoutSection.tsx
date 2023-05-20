import ChooseRoutSlider from '@/widgets/ChooseRoutSlider/ChooseRoutSlider';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import { SliderObject } from '../../pages/api/SliderObject';
import Image from 'next/image';
import Phone from '../../../public/phone.svg';

const ShooseRoutSection = (data: SliderObject) => {
  return (
    <section id="shooseRoute" className="bg-darkBloue.90 relative">
      <div className="absolute z-0 w-[100vw] h-[100vh] overflow-hidden">
        <Image
          src="/shooseroute.png"
          alt="stars bacground image"
          width={1280}
          height={1000}
          className="-z-10 absolute w-[100vw] h-[auto]"
        />
      </div>
      <Bookmark className="mt-[68px]">Choose you route</Bookmark>
      <div className="container pt-[68px] pb-[90px]">
        <ChooseRoutSlider {...data} />
        <div className="flex items-center justify-center">
          <p className="text-center mr-scale-110">
            Not finding what you&apos;re looking for? - just give us a call!
          </p>
          <Phone />
        </div>
      </div>
    </section>
  );
};

export default ShooseRoutSection;
