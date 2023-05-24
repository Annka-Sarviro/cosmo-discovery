import Image from 'next/image';
import Link from 'next/link';

import Slide from '../model/Slide';
import LeftDots from '../../../../public/leftDots.svg';
import RightDots from '../../../../public/rightDots.svg';

const ChooseRoutCard = (data: Slide) => {
  return (
    <li>
      <Image
        src={data.src}
        alt={data.alt}
        height={522}
        width={836}
        className="mx-auto max-md:mb-6 rounded-rad16 shadow-slideShadow"
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
