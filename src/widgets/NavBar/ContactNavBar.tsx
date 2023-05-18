import Link from 'next/link';

const ContactNavBar = () => {
  return (
    <div>
      <Link
        href={'/'}
        className="hover:text-shadow-accentHoverShadow transition-shadow cursor-pointer"
      >
        Home
      </Link>
      <Link
        href={'/#shooseRoute'}
        className="ml-10 hover:text-shadow-accentHoverShadow transition-shadow cursor-pointer"
      >
        Choose route
      </Link>
    </div>
  );
};

export default ContactNavBar;
