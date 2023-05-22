import Image from 'next/image';
import Link from 'next/link';
import LeftDots from '../../../../public/leftDots.svg';
import RightDots from '../../../../public/rightDots.svg';

type Slide = {
  id: number;
  title: string;
  src: string;
  description: string;
};

const ChooseRoutCard = (data: Slide) => {
  return (
    <div className="mb-8">
      <Image
        src={data.src}
        alt={data.description}
        height={522}
        width={836}
        className="mx-auto max-md:mb-6 mb-8 rounded-rad16 shadow-slideShadow"
      />
      <div className="flex justify-center items-center">
        <LeftDots className="max-[570px]:invisible" />
        <Link className="mx-4 max-md:text-base" href={`/rout/${encodeURIComponent(data.id)}`}>
          {data.title}
        </Link>
        <RightDots className="max-[570px]:invisible" />
      </div>
    </div>
  );
};

export default ChooseRoutCard;
