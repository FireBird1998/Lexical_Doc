import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Metadata } from 'next'

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

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	)
}
