import '../styles/globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'EternalGrowth - Brand Manual',
  description: 'Manual de marca completo para EternalGrowth - Identidad visual, tipografías, colores y aplicaciones.',
  keywords: ['EternalGrowth', 'brand manual', 'manual de marca', 'identidad visual', 'design system'],
  authors: [{ name: 'EternalGrowth Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-eternal-black text-eternal-white font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
