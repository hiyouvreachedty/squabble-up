import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Squabble-Up | Boxing Studio + Portfolio | Kelowna, BC',
  description:
    'Squabble-Up is a boxing studio and creative portfolio based in Kelowna, BC. Real boxing classes, real technique, and a design-forward brand built by Terrell Pelletier.',
  keywords: ['boxing Kelowna', 'boxing classes BC', 'boxing studio Kelowna', 'web designer Kelowna'],
  openGraph: {
    title: 'Squabble-Up | Boxing Studio + Portfolio',
    description: 'Real boxing. Real technique. No fluff. Kelowna, BC.',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-bg text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
