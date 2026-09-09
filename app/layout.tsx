import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Costra — AI Cost Intelligence for Modern Enterprises',
  description: 'See every AI cost. Know who owns it. Automatically find the savings.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
