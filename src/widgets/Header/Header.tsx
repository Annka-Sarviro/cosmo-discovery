import { useRouter } from 'next/router';

import Logo from '@/widgets/Logo/Logo';
import NavBar from '@/widgets/NavBar/ui/NavBar';
import ContactNavBar from '@/widgets/NavBar/ui/ContactNavBar';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="containers flex justify-between items-center py-4 fixed w-[100%] z-20 top-0 left-0 right-0">
      <Logo />
      {pathname === '/' ? <NavBar /> : <ContactNavBar />}
    </header>
  );
};

export default Header;
