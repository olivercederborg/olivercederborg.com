import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import localFont from 'next/font/local'

import clsx from 'clsx'
import { age } from '@lib/age'

import { Footer } from '@components/footer'
import { MobileNav } from '@components/mobile-navigation'
import { Navigation } from '@components/navigation'

import './globals.css'
import { Providers } from '@providers'

const epilogue = localFont({
  src: [
    {
      path: '../public/assets/Epilogue-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/assets/Epilogue-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-epilogue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Oliver Cederborg - Frontend developer',
  description: `I'm a ${age()} year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-p-32 scroll-smooth' suppressHydrationWarning>
      <body
        className={clsx(
          'bg-dark-50 text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50',
          epilogue.className
        )}
      >
        <Providers>
          <Navigation />
          <MobileNav />
          {children}
          <Footer />
        </Providers>

        <Analytics />
      </body>
    </html>
  )
}
