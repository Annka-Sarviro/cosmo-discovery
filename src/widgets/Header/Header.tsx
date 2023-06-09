import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Logo from '@/widgets/Logo/Logo';
import NavBar from '@/widgets/NavBar/ui/NavBar';
import ContactNavBar from '@/widgets/NavBar/ui/ContactNavBar';
import RoutNavBar from '../NavBar/ui/RoutNavBar';

const Header = () => {
  const { pathname } = useRouter();
  const [transparent, setTransparent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < (isMobile ? 120 : 70);
      setTransparent(isTop);
    };

    setIsMobile(window.innerWidth <= 768);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <header
      className={`py-4 fixed w-[100vw] z-20 top-0 left-0 right-0  ${
        transparent ? 'bg-transparent' : 'bg-darkBlue-90 bg-opacity-75'
      }`}
    >
      <div className={`containers flex justify-between items-center `}>
        <Logo />
        {pathname === '/rout/[id]' && <RoutNavBar />}
        {pathname === '/contact' && <ContactNavBar />}
        {pathname === '/' && <NavBar />}
      </div>
    </header>
  );
};

export default Header;
