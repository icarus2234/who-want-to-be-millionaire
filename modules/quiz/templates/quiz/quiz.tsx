'use client';
import { FC } from 'react';

import useMediaQuery from '@/helpers/hooks/useMediaQuery';
import { Typography } from '@/modules/layout';
import { AnswerOption } from '@/modules/quiz/components/answer-option';
import { RewardList } from '@/modules/quiz/components/reward-list';
import { useQuiz } from '@/modules/quiz/hooks/use-quiz';

import styles from './quiz.module.css';

export const QuizTemplate: FC = () => {
  const { handleAnswerSelect, currentQuestion, answers, rewardList } =
    useQuiz();
  const { isMobile } = useMediaQuery();

  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        <Typography className={styles.questionText}>
          {currentQuestion?.questionTitle}
        </Typography>
        <div className={styles.quizGridContainer}>
          {answers?.map(
            (
              { answerText, isCorrect, isSelected, isIncorrect },
              index: number
            ) => (
              <AnswerOption
                key={answerText}
                answerText={answerText}
                answerIndex={index}
                isCorrect={isCorrect}
                isSelected={isSelected}
                isIncorrect={isIncorrect}
                handleAnswerSelect={handleAnswerSelect}
              />
            )
          )}
        </div>
      </div>
      {!isMobile && <RewardList rewards={rewardList} />}
    </div>
  );
};
