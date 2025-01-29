import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Routes, validateAnswers } from '@/helpers';
import useQuizStore from '@/store/quiz-store';

export const useQuiz = () => {
  const { replace } = useRouter();

  const { gameConfig, rewardList, nextRewardStep } = useQuizStore();
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!gameConfig) {
    throw new Error('Game configuration is missing');
  }

  const currentQuestion = gameConfig?.questions[currentQuestionIndex];

  const answers = currentQuestion?.answers.map((answerText, index) => ({
    answerText,
    isSelected: selectedAnswers.includes(index),
    isCorrect:
      selectedAnswers.includes(index) &&
      currentQuestion.correctAnswers.includes(index),
    isIncorrect:
      selectedAnswers.includes(index) &&
      !currentQuestion.correctAnswers.includes(index),
  }));

  const goToNextQuestion = () => {
    setSelectedAnswers([]);
    if (currentQuestionIndex < gameConfig?.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      nextRewardStep();
    } else {
      replace(Routes.EndGame);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      if (prevSelectedAnswers.includes(answerIndex)) {
        return prevSelectedAnswers.filter((index) => index !== answerIndex);
      } else {
        return [...prevSelectedAnswers, answerIndex];
      }
    });
  };

  useEffect(() => {
    if (currentQuestion?.correctAnswers.length === selectedAnswers.length) {
      if (validateAnswers(currentQuestion?.correctAnswers, selectedAnswers)) {
        setTimeout(() => {
          goToNextQuestion();
        }, 300); // 300ms delay to increase user experience
      } else {
        setTimeout(() => {
          replace(Routes.EndGame);
        }, 300); // 300ms delay to increase user experience
      }
    }
  }, [selectedAnswers]);

  return {
    handleAnswerSelect,
    currentQuestionIndex,
    answers,
    rewardList,
    currentQuestion,
  };
};
