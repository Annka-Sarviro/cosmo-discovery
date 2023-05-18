import Layout from '@/app/baseLayout';
import { NextPage } from 'next';
import Hero from '@/widgets/Hero/Hero';
import ShooseRoutSection from '@/widgets/ShooseRoutSection/ShooseRoutSection';

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="We like cosmo">
      <Hero />
      <ShooseRoutSection />
    </Layout>
  );
};

export default Home;
