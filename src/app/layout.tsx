import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialFixed from '@/components/SocialFixed/SocialFixed';

export const metadata: Metadata = {
  title: {
    default: 'FranchiseExpo – New York 2026',
    template: '%s | FranchiseExpo',
  },
  description:
    'Explore franchise ownership at the premier expo in the US. Meet 150+ brands, attend 40+ sessions, and connect in person with franchisors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SocialFixed />
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
