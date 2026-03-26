import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' })
const previewImage = '/social-preview.png'

export const metadata: Metadata = {
  title: 'Sathvik Poreddy — AI & Cloud Engineer',
  description:
    'Senior software engineer crafting AI-powered distributed systems, scalable cloud-native platforms, and research-grade insights.',
  metadataBase: new URL('https://sathvikporeddy.netlify.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Sathvik Poreddy — AI & Cloud Engineer',
    description:
      'Senior software engineer crafting AI-powered distributed systems, scalable cloud-native platforms, and research-grade insights.',
    url: 'https://sathvikporeddy.netlify.app',
    siteName: 'Sathvik Poreddy',
    type: 'website',
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: 'Sathvik Poreddy portfolio highlight',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sathvik Poreddy — AI & Cloud Engineer',
    description:
      'Senior software engineer crafting AI-powered distributed systems, scalable cloud-native platforms, and research-grade insights.',
    images: [previewImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-[#020617] text-white antialiased">
        <div className="bg-gradient-to-b from-[#040c1f] via-[#020617] to-[#000000]">
          <div className="min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
