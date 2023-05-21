import { Link } from 'react-scroll';
import navApi from '../api/navApi';

const NavBar = () => {
  return (
    <div className="max-md:invisible">
      {navApi.map((el, ind) => (
        <Link
          key={ind}
          activeClass="active"
          to={el.toId}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="relative transition-all duration-1000 hover:text-shadow-accentHoverShadow cursor-pointer last:ml-10 hover:after:inline-block  hover:after:bg-white hover:after:absolute hover:after:h-1 rounded-full hover:after:w-[100%] hover:after:px-2 hover:after:content(' ')  hover:after:-bottom-2  hover:after:left-0 hover:after:shadow-accentHoverShadow"
        >
          <span>{el.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
