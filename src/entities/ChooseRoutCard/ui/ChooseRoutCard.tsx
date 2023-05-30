import { Image, ResponsiveImageType } from 'react-datocms';
import Link from 'next/link';
import { useState } from 'react';

import Slide from '../model/Slide';
import LeftDots from '../../../../public/leftDots.svg';
import RightDots from '../../../../public/rightDots.svg';
import Spinner from '../../../../public/spinner.svg';

const ChooseRoutCard = (el: Slide) => {
  console.log(el);
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute left-[50%] right-0 top-[44%] ">
          <Spinner />
        </div>
      )}
      <Image
        data={el.img.responsiveImage}
        className="mx-auto max-md:mb-6 rounded-rad16 shadow-slideShadow"
        onLoadingComplete={handleLoadingComplete}
      />
      <div className="flex justify-center items-center ">
        <LeftDots className="max-[570px]:invisible" />
        <Link className="mx-4 max-md:text-base" href={`/rout/${encodeURIComponent(el.id)}`}>
          {el.title}
        </Link>
        <RightDots className="max-[570px]:invisible" />
      </div>
    </div>
  );
};

export default ChooseRoutCard;
