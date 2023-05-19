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
    <div>
      <Image
        src={data.src}
        alt={data.description}
        height={522}
        width={836}
        className="mx-auto mb-8 rounded-rad16 shadow-slideShadow"
      />
      <div className="flex justify-center items-center">
        <LeftDots />
        <Link className="mx-4" href={`/${encodeURIComponent(data.id)}`}>
          {data.title}
        </Link>
        <RightDots />
      </div>
    </div>
  );
};

export default ChooseRoutCard;
