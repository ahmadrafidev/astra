import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { AppProvider } from '@/context/AppContext';
import { ThemeProvider } from '@/components/ThemeProvider';
import { NotificationProvider } from '@/components/Notification/NotificationProvider';

import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font display
  variable: '--font-inter'
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'AstraUI',
    template: '%s - AstraUI',
  },
  description: 'The building blocks of modern UI',
  robots: {
    index: true, 
    follow: true,
  },
  metadataBase: new URL('https://astra-ui.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://astra-ui.org',
    title: 'AstraUI',
    description: 'The building blocks of modern UI',
    siteName: 'AstraUI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AstraUI',
    description: 'The building blocks of modern UI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <NotificationProvider />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
