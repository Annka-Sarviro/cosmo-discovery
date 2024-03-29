import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import Meta from '@/shared/api/Meta';
import { IMeta } from '@/shared/api/meta.interface';

const inter = Inter({ subsets: ['cyrillic'], weight: ['400', '700'], display: 'swap' });

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main style={inter.style}>{children}
      <Analytics />
      </main>
      <Footer />
    </Meta>
  );
};

export default Layout;
