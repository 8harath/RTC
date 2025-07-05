import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'RTC Constructions - Premium Construction Company in Bangalore',
  description: 'Leading construction company in Bangalore specializing in residential, industrial, and hospitality projects since 2021. Quality construction solutions with timely delivery.',
  keywords: 'construction, bangalore, real estate, residential, industrial, hospitality, interior design, RTC constructions',
  authors: [{ name: 'RTC Constructions' }],
  openGraph: {
    title: 'RTC Constructions - Premium Construction Company',
    description: 'Quality construction solutions in Bangalore since 2021',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTC Constructions',
    description: 'Premium construction solutions in Bangalore',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
