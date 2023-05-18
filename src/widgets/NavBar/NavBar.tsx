import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div>
      <Link
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="hover:text-shadow-accentHoverShadow transition-shadow cursor-pointer"
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="shooseRoute"
        spy={true}
        smooth={true}
        // offset={-100}
        duration={500}
        className="ml-10 hover:text-shadow-accentHoverShadow transition-shadow cursor-pointer"
      >
        Choose route
      </Link>
    </div>
  );
};

export default NavBar;
