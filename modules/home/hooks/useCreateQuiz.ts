import { useEffect } from 'react';

import { GameConfig } from '@/helpers';
import useQuizStore from '@/store/quiz-store';

export const useCreateQuiz = (gameConfig: GameConfig) => {
  const { setGameConfig, initRewardList } = useQuizStore();

  useEffect(() => {
    setGameConfig(gameConfig);
    initRewardList();
  }, [gameConfig, setGameConfig]);
};
