import classNames from 'classnames';
import { FC } from 'react';

import styles from './answer.module.css';

interface AnswerOptionProps {
  option: string;
  isSelected: boolean;
  isCorrect: boolean;
  onSelect: (option: string) => void;
}

export const AnswerOption: FC<AnswerOptionProps> = ({
  option,
  isSelected,
  isCorrect,
  onSelect,
}) => {
  return (
    <button
      className={classNames(styles.button)}
      onClick={() => onSelect(option)}
    >
      {option}
    </button>
  );
};
