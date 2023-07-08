import './globals.css'
import { Navbar } from '@/components'
import {Footer} from '@/components'


export const metadata = {
  title: 'Auto World',
  description: 'Explore out cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
