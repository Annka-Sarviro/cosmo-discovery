import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Slide from '../model/Slide';
import LeftDots from '../../../../public/leftDots.svg';
import RightDots from '../../../../public/rightDots.svg';
import Spinner from '../../../../public/spinner.svg';

const ChooseRoutCard = (data: Slide) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <li className="relative">
      {isLoading && (
        <div className="absolute left-[50%] right-0 top-[44%] ">
          <Spinner />
        </div>
      )}
      <Image
        src={data.src}
        alt={data.alt}
        height={522}
        width={836}
        className="mx-auto max-md:mb-6 rounded-rad16 shadow-slideShadow"
        onLoadingComplete={handleLoadingComplete}
      />
      <div className="flex justify-center items-center ">
        <LeftDots className="max-[570px]:invisible" />
        <Link className="mx-4 max-md:text-base" href={`/rout/${encodeURIComponent(data.id)}`}>
          {data.title}
        </Link>
        <RightDots className="max-[570px]:invisible" />
      </div>
    </li>
  );
};

export default ChooseRoutCard;
