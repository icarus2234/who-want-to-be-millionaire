import { FC } from 'react';

export interface ButtonProps {
  onClick: () => void;
  title: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({
  onClick,
  title,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700"
    >
      {title}
    </button>
  );
};
