import { InferGetStaticPropsType } from 'next';
import { request } from '@/lib/datocms';

import Home from './home/Home';
// import { SliderObject } from './api/SliderObject';

const HOMEPAGE_QUERY = `query HomePage {
  rout {
    id, img { responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
        sizes
        src
        width
        height
        alt
        title
        base64
      }}, title,  description,alt
  }
}`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function HomePage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(data);
  return <Home {...data} />;
}

// export const getStaticProps = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/getSlide`);
//     const data: SliderObject = await res.json();

//     return {
//       props: {
//         data,
//       },
//     };
//   } catch {
//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// };
