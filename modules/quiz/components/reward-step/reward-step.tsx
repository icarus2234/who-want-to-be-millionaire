import classNames from 'classnames';

import { RewordStepStatus } from '@/helpers';
import { Typography } from '@/modules/layout';

import styles from './reward-step.module.css';

export interface RewordStepProps {
  rewardAmount: number;
  currencySign: string;
  status: RewordStepStatus;
}

export const RewardStep = ({
  rewardAmount,
  currencySign,
  status = RewordStepStatus.Upcoming,
}: RewordStepProps) => {
  const statusClass = classNames({
    [styles.pass]: status === RewordStepStatus.Pass,
    [styles.active]: status === RewordStepStatus.Active,
    [styles.upcoming]: status === RewordStepStatus.Upcoming,
  });

  return (
    <div className={styles.rewordStepContainer}>
      <div className={classNames(styles.rewordStepBox, statusClass)}>
        <Typography
          variant="body2"
          style={{
            textAlign: 'center',
            lineHeight: '32px',
          }}
        >
          {currencySign}
          {rewardAmount}
        </Typography>
      </div>
    </div>
  );
};
