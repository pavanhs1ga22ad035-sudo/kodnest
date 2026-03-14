import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import MainLayout from '../components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'KodNest LMS',
  description: 'KodNest Learning Management System'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
