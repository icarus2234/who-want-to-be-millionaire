import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import {
  GameConfig,
  Question,
  RewardStep,
  RewordStepStatus,
} from '@/helpers/types';

interface State {
  gameConfig: GameConfig | null;
  currentQuestion: Question | null;
  rewardList: RewardStep[];
  currentReward: number;
}

interface Actions {
  setGameConfig: (config: GameConfig) => void;
  setCurrentQuestion: (question: Question) => void;
  resetGame: () => void;
  initRewardList: () => void;
  nextRewardStep: () => void;
}

const useQuizStore = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        gameConfig: null,
        currentQuestion: null,
        rewardList: [],
        currentReward: 0,

        // Actions
        setGameConfig: (config) =>
          set((state) => ({ gameConfig: { ...state.gameConfig, ...config } })),
        setCurrentQuestion: (question) =>
          set(() => ({ currentQuestion: question })),

        resetGame: () =>
          set(() => ({
            gameConfig: null,
            currentQuestion: null,
            rewardList: [],
            currentReword: 0,
          })),
        initRewardList: () => {
          const { gameConfig } = get();
          if (!gameConfig?.questions) return;

          const initialList: RewardStep[] = gameConfig.questions.map(
            ({ reward }, index) => ({
              status:
                index === 0
                  ? RewordStepStatus.Active
                  : RewordStepStatus.Upcoming,
              reward,
              currencySign: gameConfig.currency,
            })
          );

          set(() => ({
            rewardList: initialList,
            currentReward: initialList[0].reward,
          }));
        },
        nextRewardStep: () => {
          set((state) => {
            const updatedList = [...state.rewardList];

            const currentIndex = updatedList.findIndex(
              (item) => item.status === RewordStepStatus.Active
            );

            if (currentIndex !== -1) {
              updatedList[currentIndex].status = RewordStepStatus.Pass;

              if (currentIndex + 1 < updatedList.length) {
                updatedList[currentIndex + 1].status = RewordStepStatus.Active;
              }
            }

            return {
              rewardList: updatedList,
              currentReward: updatedList[currentIndex + 1].reward,
            };
          });
        },
      }),
      {
        name: 'quiz-store',
      }
    ),
    { name: 'quiz-store' }
  )
);

export default useQuizStore;
