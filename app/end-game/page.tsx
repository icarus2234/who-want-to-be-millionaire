import type { Metadata } from 'next';

import { endGamePageMetaDataContent } from '@/helpers';
import { EndGameTemplate } from '@/modules/end-game/templates/end-game';

export const metadata: Metadata = endGamePageMetaDataContent;

export default function EndGamePage() {
  return <EndGameTemplate />;
}
