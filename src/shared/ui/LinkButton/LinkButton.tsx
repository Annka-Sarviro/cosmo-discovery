import { PropsWithChildren, FC } from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  className?: string;
}

const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = props => {
  return (
    <Link href="/contact" className={`btn ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default LinkButton;
