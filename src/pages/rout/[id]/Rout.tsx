import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/app/baseLayout';

interface RoutData {
  id: number | undefined;
  title: string;
  src: string | undefined;
  description: string;
  alt: string;
}

const Rout: NextPage = () => {
  const [rout, setRout] = useState<RoutData | undefined>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getData() {
      const staticData = await fetch(`${process.env.API_HOST}/api/getSlideById/${id}`);
      const data = await staticData.json();
      console.log(data);
      if (!data) {
        return;
      }
      setRout(data);
    }
    getData();
  }, [id]);

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
      <section className="containers py-52 relative text-center">
        <h1 className="text-3xl mb-8">{rout?.title}</h1>
        <Image
          src={rout?.src || '/noImage.png'}
          alt={rout?.alt || 'no img'}
          height={522}
          width={836}
          className="mx-auto mb-14 rounded-rad16 shadow-slideShadow"
        />
        <div className="before:w-[260px] before:h-1 before:contents'' before:bg-white before:block before:mx-auto before:mb-8 before:shadow-accentShadow">
          {rout?.description}
        </div>
      </section>
    </Layout>
  );
};

export default Rout;
