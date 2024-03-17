import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Epilogue } from "next/font/google"
import "./globals.css"

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
               "bg-neutral-100 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300",
               epilogue.className,
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <div className="container flex min-h-screen max-w-2xl flex-col">
                  <Header />
                  {children}
                  <Footer />
               </div>
            </ThemeProvider>
            <div className="pointer-events-none fixed inset-0 z-[99] h-full w-full overflow-hidden bg-[url(/assets/noise.png)] opacity-30 dark:opacity-[0.17]" />
         </body>
      </html>
   )
}
