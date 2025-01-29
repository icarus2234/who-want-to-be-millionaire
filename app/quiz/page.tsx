import type { Metadata } from 'next';

import { gamePageMetaDataContent } from '@/helpers/metadata-content';
import { QuizTemplate } from '@/modules/quiz/templates';

export const metadata: Metadata = gamePageMetaDataContent;

export default function QuizPage() {
  return <QuizTemplate />;
}
