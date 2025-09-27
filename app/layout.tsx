import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Nalandai - Sovereign Code Generation Engine',
  description: 'Self-reliant, customizable, and secure AI for code generation. Break free from vendor dependencies and take control of your development future.',
  keywords: ['AI', 'code generation', 'sovereign AI', 'development', 'automation'],
  authors: [{ name: 'Nalandai Team' }],
  openGraph: {
    title: 'Nalandai - Sovereign Code Generation Engine',
    description: 'Self-reliant, customizable, and secure AI for code generation. Break free from vendor dependencies and take control of your development future.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nalandai - Sovereign Code Generation Engine',
    description: 'Self-reliant, customizable, and secure AI for code generation. Break free from vendor dependencies and take control of your development future.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
