import { FC } from 'react';

import { RewardStep } from '@/modules/quiz/components/reward-step';

import styles from './reward-list.module.css';

interface RewardListProps {
  rewards: any;
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
