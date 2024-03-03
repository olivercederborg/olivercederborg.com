import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Epilogue } from "next/font/google"
import "./globals.css"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { ComponentProps } from "react"
import { Header } from "@/components/layouts/header"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layouts/footer"

const epilogue = Epilogue({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Oliver Cederborg - Full-stack Developer",
   description: "Coming soon...",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body
            className={cn(
               "bg-neutral-100 dark:bg-neutral-950",
               epilogue.className,
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <div className="container max-w-2xl pt-40">
                  <Header />
                  {children}
                  <Footer />
               </div>
            </ThemeProvider>
            <div className="pointer-events-none fixed inset-0 z-[99] h-full w-full overflow-hidden bg-[url(/assets/noise.png)] opacity-[0.12]" />
         </body>
      </html>
   )
}
