
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { DM_Sans } from 'next/font/google'

const DMS = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Rafli Malik',
    default: 'Rafli Malik',
  },
  description: 'Personal Portoflio Website',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFF5F6' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={"mx-6 md:mx-8 lg:mx-12 xl:mx-14 transition-all duration-300 ease-out scroll-smooth " + (DMS.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
