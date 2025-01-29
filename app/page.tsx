import type { Metadata } from 'next';

import { homePageMetaDataContent } from '@/helpers';
import { gameConfig } from '@/helpers';
import { HomeTemplate } from '@/modules/home/templates/home-template';

export const metadata: Metadata = homePageMetaDataContent;

export default async function HomePage() {
  // const gameConfig = await getGameConfig(); example of request

  return <HomeTemplate gameConfig={gameConfig} />;
}
