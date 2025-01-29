'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { GameConfig, Routes } from '@/helpers';
import { Button, Typography } from '@/modules/layout';

import { useCreateQuiz } from '../../hooks/useCreateQuiz';
import styles from './home-template.module.css';

interface HomeTemplateProps {
  gameConfig: GameConfig;
}

export const HomeTemplate: FC<HomeTemplateProps> = ({ gameConfig }) => {
  const { push } = useRouter();

  useCreateQuiz(gameConfig);

  const handleStart = () => {
    push(Routes.Quiz);
  };

  return (
    <div className={styles.homeContainer}>
      <Image
        className={styles.homeImage}
        src="/images/home-page-hand.png"
        alt="Who wants to be a millionaire?"
        priority
        width={624}
        height={367}
      />
      <div>
        <Typography
          variant="heading1"
          style={{
            marginBottom: '40px',
          }}
        >
          Who wants to be a millionaire?
        </Typography>
        <Button onClick={handleStart}>Start</Button>
      </div>
    </div>
  );
};
