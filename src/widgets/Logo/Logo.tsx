import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
const Logo: FC = () => {
  return (
    <Link href={'/'}>
      <div className="inline-flex items-center ">
        <Image
          src="/logo.svg"
          alt="logo image"
          width={0}
          height={97}
          className="drop-shadow-accentShadow w-auto"
        />
        <div className="flex items-center text-4xl text-transform: uppercase ml-5 before:content-[''] before:block before:bg-white before:mr-3  before:w-1 before:h-24 before:shadow-accentShadow">
          <span>
            <p>Challenger</p>
            <p>uncharted path</p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
