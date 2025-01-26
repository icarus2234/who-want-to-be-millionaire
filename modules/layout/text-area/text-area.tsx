import { ChangeEvent, FC } from 'react';

export interface TextAreaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  classNames?: string;
}

export const TextArea: FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  classNames,
}) => {
  return (
    <textarea
      className={`${classNames} w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
