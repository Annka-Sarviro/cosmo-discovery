import Layout from '@/app/baseLayout';
// import { SliderObject } from '../api/SliderObject';
import Hero from '@/widgets/Hero/Hero';
import ChooseRoutSection from '@/widgets/ChooseRoutSection/ChooseRoutSection';

interface SliderObject {
  [key: string]: {
    id: string;
    title: string;
    _status: string;
    img: {
      id: string;
      url: string;
      alt: string;
      responsiveImage: {
        src: string;
        height: number;
        width: number;
        base64: string;
        alt: string;
        srcSet: string;
        sizes: string;
        webpSrcSet: string;
        title: string | null;
        bgColor: string;
        aspectRatio: number;
      };
    };
  };
}

function Home(data: SliderObject) {
  return (
    <Layout title="Home" description="We like cosmo">
      <Hero />
      <ChooseRoutSection {...data} />
    </Layout>
  );
}

export default Home;
