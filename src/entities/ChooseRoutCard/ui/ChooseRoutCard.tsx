import Image from 'next/image';
import Link from 'next/link';

type Slide = {
  id: number;
  title: string;
  src: string;
  description: string;
};

const ChooseRoutCard = (data: Slide) => {
  return (
    <>
      <Link href={`/${encodeURIComponent(data.id)}`}>
        <Image
          src={data.src}
          alt={data.description}
          height={522}
          width={836}
          className="mx-auto mb-8 rounded-rad16 shadow-slideShadow"
        />
      </Link>
      <Link href={`/${encodeURIComponent(data.id)}`}>{data.title}</Link>
    </>
  );
};

export default ChooseRoutCard;