import Layout from '@/app/baseLayout';
import Bookmark from '@/shared/ui/Bookmark/Bookmark';
import ContactUsForm from '@/features/ContactUsForm/ui/ContactUsForm';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';

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
      <section className="pt-52">
        <Bookmark className="">Contact With us</Bookmark>
        <ContactUsForm className="mt-32 flex justify-center" onComplete={onComplete} />
      </section>
    </Layout>
  );
};

export default Contact;
