import 'normalize.css';
import '@/styles/global.css';

import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { homePageMetaDataContent } from '@/helpers';
import { MainContainer } from '@/modules/layout/main-container';
import backgroundStyles from '@/styles/backgrounds.module.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  // metadataBase: new URL(`https://${baseURL}`),
  title: homePageMetaDataContent.title,
  description: homePageMetaDataContent.description,
  openGraph: homePageMetaDataContent.openGraph,
  robots: homePageMetaDataContent.robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.variable, backgroundStyles.home)}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
