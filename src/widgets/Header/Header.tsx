import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className=" flex justify-between items-center py-4 fixed px-10 w-[100%] z-20">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
