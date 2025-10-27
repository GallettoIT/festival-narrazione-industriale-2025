import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Festival Narrazione Industriale',
  description: 'Festival Narrazione Industriale - Parma 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        <div className="pt-20 md:pt-24">
          {children}
        </div>
      </body>
    </html>
  )
}
