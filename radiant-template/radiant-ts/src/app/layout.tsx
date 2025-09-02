import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Brian Fidler',
    default: 'Brian Fidler - Marketing Strategy & Web Development',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <div className="pt-12 sm:pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
