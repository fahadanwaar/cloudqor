import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from  '@/components/Footer';

export const metadata: Metadata = {
  title: 'CloudQor',
  description: 'CloudQor — Projects, Portfolio & Contact',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/cloudqor-icon.png',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container-page py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
