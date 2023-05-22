import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: FC = () => {
  return (
    <Link href={'/'}>
      <div className="inline-flex items-center ">
        <Image
          src="/logo.svg"
          alt="logo image"
          width={56}
          height={97}
          priority
          className="drop-shadow-accentShadow w-auto"
        />
        <div className="flex items-center font-bold  uppercase ml-5 before:content-[''] before:block before:bg-white before:mr-3  before:w-1 before:h-24 before:shadow-accentShadow">
          <span>
            <p className="text-2xl md:text-4xl">Challenger</p>
            <p className="text-base tracking-[0.05em] md:tracking-[0.14em] md:text-lg">
              uncharted path
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
