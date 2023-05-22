import Layout from '@/app/baseLayout';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import CosmoImage from '../../../public/astronavt.svg';
import { useRouter } from 'next/router';

const Rout: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <Layout title="Rout" description="what route do you like?">
      <div className="z-0 absolute h-[100vh] w-[100vw]">
        <Image
          src="/shooseroute.png"
          alt="stars bacground image"
          fill
          sizes="100vh"
          className="-z-10"
        />
      </div>
      <section className="py-52 relative">
        <h1>Rout page</h1>
      </section>
    </Layout>
  );
};

export default Rout;
