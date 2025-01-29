'use client';

import '@/styles/reset.css';
import '@/styles/global.css';

import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { MainContainer } from '@/modules/layout/main-container';
import { mapBackgroundStylesByRoute } from '@/helpers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={classNames(
          inter.variable,
          mapBackgroundStylesByRoute(pathname)
        )}
      >
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
