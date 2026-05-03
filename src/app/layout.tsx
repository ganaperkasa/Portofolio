import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Gana Perkasa — Full Stack Developer',
  description: 'Portfolio Muhamad Saifulloh Bahroin Gana Perkasa — Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
