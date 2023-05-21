import ChooseRoutSlider from '@/widgets/ChooseRoutSlider/ChooseRoutSlider';
import ChooseRoutSliderMobile from '../ChooseRoutSliderMobile/ChooseRoutSliderMobile';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import { SliderObject } from '../../pages/api/SliderObject';
import Image from 'next/image';
import Phone from '../../../public/phone.svg';

const ShooseRoutSection = (data: SliderObject) => {
  return (
    <section id="shooseRoute" className="bg-darkBloue.90 relative ">
      <div className="z-0 absolute h-[100vh] w-[100vw]">
        <Image
          src="/shooseroute.png"
          alt="stars bacground image"
          fill
          sizes="100vh"
          className="-z-10 object-cover"
        />
      </div>
      <Bookmark className="mt-[68px]">Choose you route</Bookmark>
      <div className="containers pt-[68px] pb-[68px]">
        <div className="max-md:hidden">
          <ChooseRoutSlider {...data} />
        </div>

        <div className="md:hidden">
          <ChooseRoutSliderMobile {...data} />
        </div>
        <div className="flex items-center justify-center">
          <a href="tel:+00000000" className="flex">
            <p className="text-center mr-scale-110">
              Not finding what you&apos;re looking for? - just give us a call!
            </p>
            <Phone className="max-[730px]:invisible" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShooseRoutSection;
