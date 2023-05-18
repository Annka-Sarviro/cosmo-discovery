import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import ContactNavBar from '../NavBar/ContactNavBar';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className=" flex justify-between items-center py-4 fixed px-10 w-[100%] z-20">
      <Logo />
      {pathname === '/' ? <NavBar /> : <ContactNavBar />}
    </header>
  );
};

export default Header;
