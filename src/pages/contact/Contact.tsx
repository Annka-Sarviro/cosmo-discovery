import { NextPage } from 'next';
import Image from 'next/image';

import Layout from '@/app/baseLayout';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import ContactUsForm from '@/features/ContactUsForm/ui/ContactUsForm';
import CosmoImage from '../../../public/astronavt.svg';

const Contact: NextPage = () => {
  return (
    <Layout title="Contact" description="We like cosmo">
      <div className="z-0 absolute h-[100vh] w-[100vw]">
        <Image
          src="/shooseroute.png"
          alt="stars bacground image"
          fill
          sizes="100vh"
          className="-z-10"
        />
      </div>
      <section className="py-52 relative">
        <Bookmark>Contact With us</Bookmark>
        <ContactUsForm className="mt-32 flex justify-center" />
        <CosmoImage className="absolute bottom-[-80px] left-[73px] scale-50 xl:bottom-7 xl:scale-75 xl:left-40" />
      </section>
    </Layout>
  );
};

export default Contact;
