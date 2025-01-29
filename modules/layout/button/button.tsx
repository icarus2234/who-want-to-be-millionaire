import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const buttonClasses = classNames(styles.button);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
