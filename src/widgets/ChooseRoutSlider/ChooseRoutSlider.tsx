import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// import { SliderObject } from '@/pages/api/SliderObject';
import ChooseRoutCard from '@/entities/ChooseRoutCard/ui/ChooseRoutCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderObject {
  [key: string]: {
    id: string;
    title: string;
    _status: string;
    img: {
      id: string;
      url: string;
      alt: string;
      responsiveImage: {
        src: string;
        height: number;
        width: number;
        base64: string;
        alt: string;
        srcSet: string;
        sizes: string;
        webpSrcSet: string;
        title: string | null;
        bgColor: string;
        aspectRatio: number;
      };
    };
  };
}

const ChooseRoutSlider = (data: SliderObject) => {
  let sliderArr = Object.values(data).map(el => el);

  return (
    <Swiper navigation={true} modules={[Navigation]} watchOverflow={true}>
      {sliderArr.map(el => (
        <SwiperSlide className="text-center p-2" key={el.id}>
          <ChooseRoutCard {...el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ChooseRoutSlider;
