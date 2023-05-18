import Layout from '@/app/baseLayout';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import ContactUsForm from '@/features/ContactUsForm/ui/ContactUsForm';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Contact: NextPage = () => {
  const navigate = usePathname;

  // const onComplete = useCallback(() => {
  //   navigate(location.state?.returnUrl ?? '/');
  // }, [navigate]);

  const onComplete: () => void = () => {
    console.log(navigate);
  };

  return (
    <Layout title="Contact" description="We like cosmo">
      <div className="z-0">
        <Image
          src="/shooseroute.png"
          alt="stars bacground image"
          layout="fill"
          objectFit="cover"
          object-position="50% 50%"
          className="-z-10 absolute "
        />
      </div>
      <section className="pt-52 ">
        <Bookmark className="">Contact With us</Bookmark>
        <ContactUsForm className="mt-32 flex justify-center" onComplete={onComplete} />
      </section>
    </Layout>
  );
};

export default Contact;
