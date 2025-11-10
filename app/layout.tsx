// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

// Load Inter with bold weights for crisp headings/numbers
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CloudQor',
  description: 'CloudQor — Projects, Portfolio & Contact',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Use Inter everywhere + antialias for smoother numerals */}
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container-page py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
