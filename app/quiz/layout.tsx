'use client';

import { useState, ReactNode } from 'react';
import useMediaQuery from '@/helpers/hooks/useMediaQuery';
import { RewardList } from '@/modules/quiz/components';
import useQuizStore from '@/store/quiz-store';
import styles from './layout.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  const { isMobile } = useMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { rewardList } = useQuizStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.layoutContainer}>
      {isMobile && (
        <div className={styles.burgerMenu}>
          <button onClick={toggleMenu} className={styles.burgerButton}>
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      )}
      {isMenuOpen ? <RewardList rewards={rewardList} /> : children}
    </div>
  );
}
