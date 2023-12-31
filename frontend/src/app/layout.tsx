import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@picocss/pico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quizler',
  description: 'Create and share quizzes with ease',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
