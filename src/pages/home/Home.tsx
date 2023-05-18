import Layout from '@/app/baseLayout';
import { NextPage } from 'next';
import Hero from '@/widgets/Hero/Hero';

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="We like cosmo">
      <Hero />
    </Layout>
  );
};

export default Home;
