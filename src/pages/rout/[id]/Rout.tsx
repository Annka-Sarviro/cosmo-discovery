import { NextPage } from 'next';
import Image from 'next/image';

import Layout from '@/app/baseLayout';

const Rout: NextPage = () => {
  return (
    <Layout title="Rout" description="what route do you like?">
      <div className="z-0 absolute h-[100vh] w-[100vw]">
        <Image
          src="/chooseRoute.png"
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
