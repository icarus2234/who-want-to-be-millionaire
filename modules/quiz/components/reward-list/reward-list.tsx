import { FC } from 'react';

import { RewardStep as RewardStepType } from '@/helpers';
import { RewardStep } from '@/modules/quiz/components/reward-step';

import styles from './reward-list.module.css';

interface RewardListProps {
  rewards: RewardStepType[];
}

export const RewardList: FC<RewardListProps> = ({ rewards }) => {
  return (
    <div className={styles.rewardListContainer}>
      <div className={styles.rewardList}>
        {[...rewards].reverse().map(({ reward, status, currencySign }) => (
          <RewardStep
            key={reward}
            rewardAmount={reward}
            status={status}
            currencySign={currencySign}
          />
        ))}
      </div>
    </div>
  );
};
