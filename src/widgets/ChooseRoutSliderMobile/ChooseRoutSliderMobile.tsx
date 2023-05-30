import { SliderObject } from '@/pages/api/SliderObject';
import ChooseRoutCard from '@/entities/ChooseRoutCard/ui/ChooseRoutCard';

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
