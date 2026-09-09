import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Costra — AI Cost Intelligence',
  description: 'Enterprise AI spend visibility and optimization.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}