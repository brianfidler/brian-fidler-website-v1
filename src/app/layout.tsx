import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brian Fidler - Marketing Strategy & Web Development',
  description: 'Transform your digital presence with expert marketing strategies and custom web development. No corporate jargon, just real results.',
  keywords: 'Brian Fidler, marketing strategy, web development, lead generation, brand development',
  authors: [{ name: 'Brian Fidler' }],
  openGraph: {
    title: 'Brian Fidler - Marketing Strategy & Web Development',
    description: 'Transform your digital presence with expert marketing strategies and custom web development.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


