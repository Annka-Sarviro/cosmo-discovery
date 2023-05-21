import { SliderObject } from '../../pages/api/SliderObject';
import ChooseRoutCard from '@/entities/ChooseRoutCard/ui/ChooseRoutCard';

const ChooseRoutSliderMobile = (data: SliderObject) => {
  let sliderArr = Object.values(data).map(el => el);

  return (
    <div>
      {sliderArr.map(el => (
        <div className="text-center p-2" key={el.id}>
          <ChooseRoutCard {...el} />
        </div>
      ))}
    </div>
  );
};

export default ChooseRoutSliderMobile;
