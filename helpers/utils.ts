import backgroundStyles from '@/styles/backgrounds.module.css';

import { Routes } from './types';

export const mapBackgroundStylesByRoute = (pathname: string) => {
  const bgClassName =
    pathname === Routes.Home ? 'home' : pathname.replace('/', '');

  return backgroundStyles[bgClassName] || backgroundStyles.defaultBg;
};

export const validateAnswers = (
  correctAnswers: number[],
  selectedAnswers: number[]
): boolean => {
  if (correctAnswers.length !== selectedAnswers.length) {
    return false;
  }

  const sortedCorrectAnswers = [...correctAnswers].sort();
  const sortedSelectedAnswers = [...selectedAnswers].sort();

  return sortedCorrectAnswers.every(
    (value, index) => value === sortedSelectedAnswers[index]
  );
};
