import Home from './home/Home';
import { InferGetStaticPropsType } from 'next';
import { SliderObject } from './api/SliderObject';

export default function HomePage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Home {...data} />;
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/getSlide`);
    const data: SliderObject = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch {
    return {
      props: {
        data: null,
      },
    };
  }
};
