import backgroundStyles from '@/styles/backgrounds.module.css';

import { Routes } from './types';

export const mapBackgroundStylesByRoute = (pathname: string) => {
  const bgClassName =
    pathname === Routes.Home ? 'home' : pathname.replace('/', '');

  return backgroundStyles[bgClassName] || backgroundStyles.defaultBg;
};
