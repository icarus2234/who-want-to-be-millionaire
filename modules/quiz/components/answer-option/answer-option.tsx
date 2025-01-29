import classNames from 'classnames';
import { FC } from 'react';

import styles from './answer.module.css';

interface AnswerOptionProps {
  answerText: string;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  answerIndex: number;
  handleAnswerSelect: (index: number) => void;
}

export const AnswerOption: FC<AnswerOptionProps> = ({
  answerText,
  answerIndex,
  isSelected,
  isCorrect,
  isIncorrect,
  handleAnswerSelect,
}) => {
  const answerStyles = classNames(styles.answerOption, {
    [styles.selected]: isSelected,
    [styles.correct]: isCorrect && isSelected,
    [styles.incorrect]: isIncorrect && isSelected,
  });

  const onSelect = () => {
    handleAnswerSelect(answerIndex);
  };

  return (
    <div className={styles.answerOptionContainer}>
      <button className={answerStyles} onClick={onSelect}>
        <span className={styles.answerLetter}>
          {String.fromCharCode(65 + answerIndex)}
        </span>
        {answerText}
      </button>
    </div>
  );
};
