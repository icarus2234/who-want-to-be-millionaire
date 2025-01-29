import { useEffect } from 'react';

import useQuizStore from '@/store/quiz-store';
import { GameConfig } from '@/helpers';

export const useCreateQuiz = (gameConfig: GameConfig) => {
  const { setGameConfig, initRewardList } = useQuizStore();

  useEffect(() => {
    setGameConfig(gameConfig);
    initRewardList();
  }, [gameConfig, setGameConfig]);
};
