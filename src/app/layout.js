import './globals.scss'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'
export const metadata = {
  title: 'Kshitij Thareja',
  description: 'Welcome to Kshitij Thareja\'s personal portfolio',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        </body>
    </html>
  )
}
