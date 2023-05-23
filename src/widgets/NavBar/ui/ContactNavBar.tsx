import Link from 'next/link';

import navApi from '../api/navApi';

const ContactNavBar = () => {
  return (
    <nav className="max-md:invisible">
      {navApi.map((el, ind) => (
        <Link
          key={ind}
          href={el.link}
          className="relative transition-all duration-1000 hover:text-shadow-accentHoverShadow cursor-pointer last:ml-10 hover:after:inline-block  hover:after:bg-white hover:after:absolute hover:after:h-1 hover:after:w-[100%] hover:after:px-2 hover:after:content(' ') rounded-full hover:after:-bottom-2  hover:after:left-0 hover:after:shadow-accentHoverShadow"
        >
          <span>{el.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default ContactNavBar;
