import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import { NavBar } from '../components/nav/navbar';
import { ResponsiveContainer } from '../components/responsive-container';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ben McLean | Full Stack Developer',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" className={'dark'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-900 mb-48`}
      >
        <header>
          <NavBar />
        </header>
        <div className="my-2">
          <ResponsiveContainer>{props.children}</ResponsiveContainer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
