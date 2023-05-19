import Layout from '@/app/baseLayout';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import ContactUsForm from '@/features/ContactUsForm/ui/ContactUsForm';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import CosmoImage from '../../../public/astronavt.svg';

const Contact: NextPage = () => {
  return (
    <Layout title="Contact" description="We like cosmo">
      <div className="z-0 ">
        <Image
          src="/shooseroute.png"
          alt="stars bacground image"
          layout="fill"
          objectFit="cover"
          object-position="50% 50%"
          className="-z-10 absolute "
        />
      </div>
      <section className="py-52 relative">
        <Bookmark className="">Contact With us</Bookmark>
        <ContactUsForm className="mt-32 flex justify-center" />
        <CosmoImage className="absolute bottom-7 scale-75 right-40" />
      </section>
    </Layout>
  );
};

export default Contact;
