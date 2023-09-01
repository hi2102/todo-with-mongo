import NavBar from './components/navBar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MONGO CRUD',
  description: 'LJY',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
