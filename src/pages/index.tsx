import Home from './home/Home';
import { InferGetStaticPropsType } from 'next';
import { SliderObject } from './api/SliderObject';

export default function HomePage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Home {...data} />;
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/getSlide');
  const data: SliderObject = await res.json();

  return {
    props: {
      data,
    },
  };
};
