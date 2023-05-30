import { InferGetStaticPropsType } from 'next';
import { request } from '@/lib/datocms';

import Home from './home/Home';
import { SliderObject } from './api/SliderObject';

const HOMEPAGE_QUERY = `query HomePage {
    allRouts {
    id
    title
    _status
    img {
      id
      url
      alt
      responsiveImage {
        src
        height
        width
        base64
        alt
        srcSet
        sizes
        webpSrcSet
        title
        bgColor
        aspectRatio
      }
    }
  }

}`;
export async function getStaticProps() {
  const data: SliderObject = await request({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: data,
  };
}

export default function HomePage(data: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Home {...data.allRouts} />;
}
