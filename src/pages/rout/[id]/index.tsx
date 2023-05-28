import { NextPage } from 'next';
import Image from 'next/image';
import { Image as DatoImage } from 'react-datocms';
import { request } from '@/lib/datocms';
import { GetStaticPaths } from 'next';

import Layout from '@/app/baseLayout';

interface RoutData {
  id: number | undefined;
  title: string;
  src: string | undefined;
  description: string;
  alt: string;
}

const Rout: NextPage = data => {
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
        <h1 className="text-3xl mb-8">{data.rout?.title}</h1>
        <DatoImage
          data={data?.rout.img.responsiveImage}
          alt={data.rout?.alt || 'no img'}
          height={522}
          width={836}
          className="mx-auto mb-14 rounded-rad16 shadow-slideShadow"
        />
        <div className="before:w-[260px] before:h-1 before:contents'' before:bg-white before:block before:mx-auto before:mb-8 before:shadow-accentShadow">
          {data.rout?.description}
        </div>
      </section>
    </Layout>
  );
};

export default Rout;

const PATH_QUERY = `query MyQuery {
  allRouts {
    id
  }
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const routs = await request({
      query: PATH_QUERY,
    });

    const paths = routs.allRouts.map(rout => ({
      params: {
        id: rout.id,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { paths: [{ params: { id: '' } }], fallback: false };
  }
};

export async function getStaticProps({ params }) {
  const data: SliderObject = await request({
    query: ROUT_QUERY,
    variables: { id: params.id },
  });
  console.log(params);
  console.log(data);
  return {
    props: data,
  };
}

const ROUT_QUERY = `query MyQuery($id: ItemId) {
  rout(filter: {id: {eq: $id}}) {
    id
    alt
    description
    title
    img {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        width
      }
    }
  }
}`;
