import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alpha Wings Research - Strategic Research Planning for Christian Academics',
  description: 'Transform scattered research into a God-honoring 10-year career strategy. Get a personalized research roadmap in just 2 weeks.',
  keywords: 'Christian research, academic strategy, research planning, theological research, Christian scholar, academic career planning',
  authors: [{ name: 'Alpha Wings Research' }],
  creator: 'Alpha Wings Research',
  publisher: 'Alpha Wings Research',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.alphawingsresearch.com',
    title: 'Alpha Wings Research - Strategic Research Planning for Christian Academics',
    description: 'Transform scattered research into a God-honoring 10-year career strategy. Get a personalized research roadmap in just 2 weeks.',
    siteName: 'Alpha Wings Research',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Wings Research Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Wings Research - Strategic Research Planning',
    description: 'Transform scattered research into a God-honoring 10-year career strategy.',
    images: ['/logo.png'],
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
