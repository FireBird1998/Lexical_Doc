import { ClerkProvider } from '@clerk/nextjs'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { dark } from '@clerk/themes'
import Provider from './Provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const meta: Metadata = {
  title: 'Docs',
  description: 'this is a google docs clone',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#3371ff',
          fontSize: '16px',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
