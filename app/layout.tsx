import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  variable: '--font-condensed',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Salman Ali Mohammed — Content Creator, Cinematographer, Director',
  description:
    'Portfolio of Salman Ali Mohammed, a UAE & India based content creator, cinematographer and director specializing in commercial advertisements, fashion photography and brand campaigns.',
  generator: 'v0.app',
  keywords: [
    'Salman Ali Mohammed',
    'Cinematographer',
    'Director',
    'Content Creator',
    'Fashion Photography',
    'Brand Campaigns',
    'UAE',
    'India',
  ],
  openGraph: {
    title: 'Salman Ali Mohammed — Content Creator, Cinematographer, Director',
    description:
      'Cinematic visual storytelling for brands and creators. Commercial advertisements, fashion photography, and brand campaigns.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} bg-background`}
    >
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
