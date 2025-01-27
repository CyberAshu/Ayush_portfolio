import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { LoadingScreen } from "@/components/loading-screen"
import { InteractiveBackground } from "@/components/interactive-background"
import { Chatbot } from "@/components/chatbot"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ayush Sen - Portfolio",
  description: "Professional portfolio of Ayush Sen, Python Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LoadingScreen />
          <InteractiveBackground />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'