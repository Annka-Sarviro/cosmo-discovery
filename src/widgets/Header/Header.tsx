import { useRouter } from 'next/router';

import Logo from '../Logo/Logo';
import NavBar from '../NavBar/ui/NavBar';
import ContactNavBar from '../NavBar/ui/ContactNavBar';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="containers flex justify-between items-center py-4 fixed w-[100%] z-20">
      <Logo />
      {pathname === '/' ? <NavBar /> : <ContactNavBar />}
    </header>
  );
};

export default Header;
