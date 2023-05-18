import { PropsWithChildren, FC } from 'react';

interface ButtonProps {
  className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  return (
    <button className={`btn ${props.className}`} type="button">
      {props.children}
    </button>
  );
};

export default Button;
