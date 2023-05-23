import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/app/baseLayout';

const NotFound: NextPage = () => {
  return (
    <>
      <Layout title="404" description="Page not found">
        <div className="containers h-[100wh] py-36">
          <Image src="/404_1.png" alt="page not found" width={400} height={400} />
          <h2>Page not found</h2>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
