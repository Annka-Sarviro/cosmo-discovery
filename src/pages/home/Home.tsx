import Layout from '@/app/baseLayout';
import { SliderObject } from '../api/SliderObject';
import Hero from '@/widgets/Hero/Hero';
import ChooseRoutSection from '@/widgets/ChooseRoutSection/ChooseRoutSection';

function Home(data: SliderObject) {
  return (
    <Layout title="Home" description="We like cosmos">
      <Hero />
      <ChooseRoutSection {...data} />
    </Layout>
  );
}

export default Home;
