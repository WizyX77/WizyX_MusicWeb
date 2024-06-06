import type { Metadata } from 'next'
import { Montserrat as FontMontserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import ActiveSectionContextProvider from '@/store/active-section-context'
import './globals.css'
import { ThemeProvider } from '@/shared/theme/theme-provider'
import Header from '@/components/header'
import { ModeToggle } from '@/shared/theme/mode-toggler'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Wizyx Music 🌙',
  description:
    '🌙 7/24 Kesintisiz, Tamamen Türkçe Arayüzü, Kolay Erişebilirliği, Çeşitli Müzik Modları ve Ses Kalitesiyle Sunucunuzun En Kaliteli Müzik Botu!',
    icons: 'https://cdn.discordapp.com/attachments/1241419174908137572/1243941927380979774/WizyxMusicPp.png?ex=666277f2&is=66612672&hm=0f39387f2f15aba041a39b1b6885831f183e8fc2229a9c55e1960a56558ab761&'
}

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'flex justify-center items-center relative',
          fontMontserrat.className
        )}
      >
        <div className="flex flex-col min-h-screen w-full">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed sm:left-0 sm:bottom-0 sm:top-auto sm:right-auto top-0 right-0 sm:m-8 m-4 z-[99]">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  )
}
