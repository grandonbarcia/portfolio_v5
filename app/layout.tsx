import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = 'https://brandongarcia.dev';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Brandon Garcia | Front-End Software Developer',
    template: '%s | Brandon Garcia',
  },
  description:
    'Brandon Garcia is a front-end software developer from San Jose, CA specializing in React, Next.js, TypeScript, and Tailwind CSS. View projects and experience.',
  keywords: [
    'Brandon Garcia',
    'software developer',
    'front-end developer',
    'React developer',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'San Jose',
    'portfolio',
  ],
  authors: [{ name: 'Brandon Garcia', url: baseUrl }],
  creator: 'Brandon Garcia',
  publisher: 'Brandon Garcia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Brandon Garcia Portfolio',
    title: 'Brandon Garcia | Front-End Software Developer',
    description:
      'Front-end software developer from San Jose, CA specializing in React, Next.js, TypeScript, and Tailwind CSS.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brandon Garcia - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Garcia | Front-End Software Developer',
    description:
      'Front-end software developer from San Jose, CA specializing in React, Next.js, TypeScript, and Tailwind CSS.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
