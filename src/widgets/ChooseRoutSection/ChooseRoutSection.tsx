import Image from 'next/image';

import ChooseRoutSlider from '@/widgets/ChooseRoutSlider/ChooseRoutSlider';
import ChooseRoutSliderMobile from '@/widgets/ChooseRoutSliderMobile/ChooseRoutSliderMobile';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import { SliderObject } from '@/pages/api/SliderObject';
import Phone from '../../../public/phone.svg';

const ChooseRoutSection = (data: SliderObject) => {
  return (
    <section id="chooseRoute" className="bg-darkBlue.90 relative ">
      <div className="z-0 absolute h-[100vh] w-[100vw]">
        <Image
          src="/chooseRoute.png"
          alt="stars background image"
          fill
          sizes="100vh"
          className="-z-10 object-cover"
        />
      </div>
      <Bookmark className="mt-[68px]">Choose you route</Bookmark>
      <div className="containers pt-[68px] pb-[68px]">
        <ul className="max-md:hidden">
          <ChooseRoutSlider {...data} />
        </ul>

        <ul className="md:hidden">
          <ChooseRoutSliderMobile {...data} />
        </ul>
        <div className="mt-10 before:w-[260px] before:h-1 before:contents'' before:bg-white before:block before:mx-auto before:mb-8 before:shadow-accentShadow">
          <div className="flex items-center justify-center">
            <a href="tel:+00000000" className="flex">
              <p className="text-center mr-scale-110">
                Not finding what you&apos;re looking for? - just give us a call!
              </p>
              <Phone className="max-[730px]:invisible" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseRoutSection;
