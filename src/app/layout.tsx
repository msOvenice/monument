
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { Providers } from '@/redux/provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import '../styles/global.scss'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '500', '600'],
  variable: '--font-inter' 
})

const fixelBold = localFont({ 
  src: './fonts/FixelDisplay-Bold.woff2',
  variable: '--font-fixel-bold' 
})

const fixelBlack = localFont({ 
  src: './fonts/FixelDisplay-Black.woff2',
  variable: '--font-fixel-black' 
})

const fixelMedium = localFont({ 
  src: './fonts/FixelText-Medium.woff2',
  variable: '--font-fixel-medium' 
})

export const metadata: Metadata = {
  title: 'PastQR',
  description: 'Кращий спосіб зберегти спогади',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua,en">
      <body className={`${inter.variable} ${fixelBlack.variable} ${fixelBold.variable} ${fixelMedium.variable}`}>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
