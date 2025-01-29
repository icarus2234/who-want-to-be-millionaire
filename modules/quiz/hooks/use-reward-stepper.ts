import { useCallback, useState } from 'react';

import { RewordStepStatus } from '@/helpers/types';
import useQuizStore from '@/store/quiz-store';

export const useRewardStepper = () => {
  const { gameConfig } = useQuizStore();

  const initialList =
    gameConfig?.questions.map(({ reward }, index) => {
      if (!index) {
        return {
          status: RewordStepStatus.Active,
          reward,
          currencySign: gameConfig.currency,
        };
      }
      return {
        status: RewordStepStatus.Upcoming,
        reward,
        currencySign: gameConfig.currency,
      };
    }) || [];

  const [rewardList, setRewardList] = useState(initialList);

  const nextRewardStep = useCallback(() => {
    setRewardList((prevList) => {
      const updatedList = [...prevList];

      const currentIndex = updatedList.findIndex(
        (item) => item.status === RewordStepStatus.Active
      );

      if (currentIndex !== -1) {
        updatedList[currentIndex].status = RewordStepStatus.Pass;

        if (currentIndex + 1 < updatedList.length) {
          updatedList[currentIndex + 1].status = RewordStepStatus.Active;
        }
      }

      return updatedList;
    });
  }, []);

  return { rewardList, nextRewardStep };
};
