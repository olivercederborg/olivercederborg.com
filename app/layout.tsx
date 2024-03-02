import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { ComponentProps } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Full-stack Developer - Oliver Cederborg",
   description: "Coming soon...",
}

const navItems: ComponentProps<typeof FloatingNav>["navItems"] = [
   { name: "Home", link: "/" },
   { name: "Work", link: "/work" },
   { name: "Guestbook", link: "/guestbook" },
]

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <FloatingNav navItems={navItems} />
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}
