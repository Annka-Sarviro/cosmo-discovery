import { NextPage } from 'next';
import Button from '@/shared/ui/Button/Button';
import Image from 'next/image';

const Hero: NextPage = () => {
  return (
    <div className="relative">
      <div className="container h-[100vh] flex flex-col items-end justify-between text-right pt-[165px] pb-[88px] max-w-[410px] ml-auto mr-0 ">
        <p>
          If you are up for that adventure, if you are realy free, discover new space routes with us
        </p>
        <h1 className="block absolute  inset-x-1/3 inset-y-1/2 text-5xl text-transform: uppercase text-center">
          find <br />
          the <br />
          courage
        </h1>
        <Button className="z-1">Register now</Button>
      </div>
      <div className="z-0">
        <Image
          src="/hero.png"
          alt="cosmos bakcground image"
          layout="fill"
          objectFit="cover"
          object-position="50% 50%"
          className="-z-50 absolute "
        />
      </div>
    </div>
  );
};

export default Hero;
