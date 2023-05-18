import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <Link href="/" className="hover:text-shadow-accentHoverShadow transition-shadow">
        Home
      </Link>
      <Link href="/" className="ml-10 hover:text-shadow-accentHoverShadow">
        Choose route
      </Link>
    </div>
  );
};

export default NavBar;
