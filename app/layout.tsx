import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cart Application',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  authors: [{ name: 'Renuga', url: '' }],
  creator: 'Renuga Krishnan',
  publisher: 'Renuga Krishnan',
  openGraph: {
    title: 'Cart Application',
    description: 'A simple cart application built with Next.js, React, and Tailwind CSS.',
    siteName: 'Cart Application',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cart Application OG Image',
      },
    ],
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
