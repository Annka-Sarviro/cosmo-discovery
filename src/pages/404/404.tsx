import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cosmo Dyscovery</title>
      </Head>
      <h2>Page not found</h2>
      <Image src="/404_1.png" alt="page not found" width={400} height={400} />
    </>
  );
};

export default NotFound;
