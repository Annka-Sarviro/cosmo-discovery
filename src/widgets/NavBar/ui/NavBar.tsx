import { Link } from 'react-scroll';
import navApi from '../api/navApi';

const NavBar = () => {
  return (
    <nav className="flex w-[max-content] max-[630px]:absolute max-[630px]:text-base max-[630px]:right-1/2 max-[630px]:translate-x-1/2 max-md:top-[120px]">
      {navApi.map((el, ind) => (
        <Link
          key={ind}
          activeClass="active"
          to={el.toId}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" relative  after:transition-left after:duration-1000 hover:text-shadow-accentHoverShadow cursor-pointer last:ml-10 hover:after:inline-block  hover:after:bg-white hover:after:absolute hover:after:h-1 hover:after:rounded-full hover:after:w-[100%]  hover:after:content(' ')  hover:after:-bottom-2  hover:after:left-0 hover:after:shadow-accentHoverShadow"
        >
          <p>{el.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
