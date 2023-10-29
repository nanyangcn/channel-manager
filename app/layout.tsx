import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

import TopBar from 'components/TopBar';
import Divider from 'components/Divider';
import Main from 'components/Main';

import QueryProvider from 'providers/QueryProvider';
import ThemeProvider from 'providers/ThemeProvider';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Channel Manager',
  description: 'This is a page for the user to control the visibility of each hotel on each channel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider>
          <QueryProvider>
            <Main>
              <TopBar />
              <Divider />
              {children}
            </Main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
