import { NextPage } from 'next';
import Button from '@/shared/ui/LinkButton/LinkButton';
import Image from 'next/image';

const Hero: NextPage = () => {
  return (
    <section id="hero" className="relative ">
      <div className="z-0 absolute h-[100vh] w-[100vw]">
        <Image
          src="/hero.png"
          alt="cosmos bakcground image"
          fill
          sizes="100vh"
          className="-z-50a  object-cover"
        />
      </div>
      <div className="containers h-[100vh] w-[100vw] flex flex-col items-end justify-between text-right max-md:text-base pt-[165px] pb-[88px]">
        <p className="max-w-[262px] md:max-w-[410px]">
          If you are up for that adventure, if you are realy free, discover new space routes with us
        </p>
        <h1 className="block text-4xl ml-auto mr-auto md:text-5xl text-transform: uppercase text-center">
          find <br />
          the <br /> courage
        </h1>
        <Button className="z-1 text-2xl max-md:ml-auto max-md:mr-auto">Register now</Button>
      </div>
    </section>
  );
};

export default Hero;
