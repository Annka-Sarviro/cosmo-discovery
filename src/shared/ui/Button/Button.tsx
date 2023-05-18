import { PropsWithChildren, FC } from 'react';
import Link from 'next/link';

// interface ButtonProps {
//   className?: string;
//   type?: string;
// }

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  name?: string | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  return (
    <button type={props.type} className={`btn ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
