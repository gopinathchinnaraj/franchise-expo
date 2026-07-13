'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialFixed from '@/components/SocialFixed/SocialFixed';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Exclude dashboard, admin, and auth-specific portal pages from main public layout elements
  const isPortalRoute = 
    pathname.startsWith('/dashboard') || 
    pathname.startsWith('/admin') || 
    pathname.startsWith('/login');

  if (isPortalRoute) {
    return <main>{children}</main>;
  }

  return (
    <>
      <SocialFixed />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
