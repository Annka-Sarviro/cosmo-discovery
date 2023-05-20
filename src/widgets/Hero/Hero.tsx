import { NextPage } from 'next';
import Button from '@/shared/ui/LinkButton/LinkButton';
import Image from 'next/image';

const Hero: NextPage = () => {
  return (
    <section id="hero" className="relative h-[100vh]">
      <div className="z-0 absolute  w-[100vw] h-[auto] overflow-hidden">
        <Image
          src="/hero.png"
          alt="cosmos bakcground image"
          width={1280}
          height={1000}
          className="-z-50 w-[100vw] "
        />
      </div>
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
    </section>
  );
};

export default Hero;
