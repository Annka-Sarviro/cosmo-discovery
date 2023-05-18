import Layout from '@/app/baseLayout';
import { SliderObject } from '../api/SliderObject';
import Hero from '@/widgets/Hero/Hero';
import ShooseRoutSection from '@/widgets/ShooseRoutSection/ShooseRoutSection';

function Home(data: SliderObject) {
  return (
    <Layout title="Home" description="We like cosmo">
      <Hero />
      <ShooseRoutSection {...data} />
    </Layout>
  );
}

export default Home;
