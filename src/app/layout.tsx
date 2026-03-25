import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: "Sathvik Poreddy — AI & Cloud Engineer",
  description:
    'Senior software engineer crafting AI-powered distributed systems, scalable cloud-native platforms, and research-grade insights.',
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
