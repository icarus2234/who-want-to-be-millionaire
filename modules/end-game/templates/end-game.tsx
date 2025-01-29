'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Routes } from '@/helpers';
import { Button, Typography } from '@/modules/layout';
import useQuizStore from '@/store/quiz-store';
import styles from './end-game.module.css';

export const EndGameTemplate = () => {
  const router = useRouter();

  const { resetGame, currentReward } = useQuizStore();

  const handleEndGame = () => {
    resetGame();
    router.push(Routes.Home);
  };

  return (
    <div className={styles.endGameContainer}>
      <Image
        className={styles.endGameImage}
        width={624}
        height={367}
        src="/images/home-page-hand.png"
        alt="thumb up"
      />
      <div className={styles.endGameText}>
        <Typography
          variant="body"
          style={{
            fontWeight: 600,
            color: 'var(--black-40)',
          }}
        >
          Total score:
        </Typography>
        <Typography
          variant="heading1"
          style={{
            marginBottom: '40px',
          }}
        >
          ${currentReward} earned
        </Typography>
        <Button onClick={handleEndGame}>Try again</Button>
      </div>
    </div>
  );
};
