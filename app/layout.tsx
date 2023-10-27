import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

import TopBar from 'components/TopBar';
import Divider from 'components/Divider';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="flex h-screen w-screen items-center justify-center bg-slate-500">
          <main className="flex h-[730px] w-[920px] flex-col rounded-2xl bg-white">
            <TopBar />
            <Divider />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
