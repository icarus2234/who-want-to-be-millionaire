import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './typography.module.css';

type TypographyVariants = 'heading1' | 'heading2' | 'body' | 'body2';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariants;
  children: ReactNode;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
  ...props
}) => {
  const Tag =
    variant === 'heading1' ? 'h1' : variant === 'heading2' ? 'h2' : 'p';

  return (
    <Tag className={classNames(styles[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
