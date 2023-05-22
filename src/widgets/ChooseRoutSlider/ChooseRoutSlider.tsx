import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { SliderObject } from '../../pages/api/SliderObject';
import ChooseRoutCard from '@/entities/ChooseRoutCard/ui/ChooseRoutCard';

const ChooseRoutSlider = (data: SliderObject) => {
  let sliderArr = Object.values(data).map(el => el);

  return (
    <Swiper rewind={true} navigation={true} modules={[Navigation]} watchOverflow={true}>
      {sliderArr.map(el => (
        <SwiperSlide className="text-center p-2" key={el.id}>
          <ChooseRoutCard {...el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ChooseRoutSlider;
