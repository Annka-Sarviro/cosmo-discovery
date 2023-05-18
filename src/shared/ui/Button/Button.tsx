import { PropsWithChildren, FC } from 'react';
import Link from 'next/link';

interface ButtonProps {
  className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  return (
    <Link href="/contact" className={`btn ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default Button;
