'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navigation />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}
