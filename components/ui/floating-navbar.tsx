"use client"

import { type NavItem } from "@/components/layouts/header"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const FloatingNav = ({
   navItems,
   className,
}: {
   navItems: NavItem[]
   className?: string
}) => {
   const pathname = usePathname()

   return (
      <motion.div
         initial={{
            opacity: 0,
            y: -20,
         }}
         animate={{
            y: 0,
            opacity: 1,
         }}
         transition={{
            duration: 0.35,
            delay: 0.25,
            ease: "backOut",
         }}
         className={cn(
            "fixed inset-x-4 top-5 z-[49] mx-auto flex max-w-2xl items-center justify-between rounded-full border border-neutral-950 border-opacity-[0.03] bg-neutral-50/75 px-8 py-3 filter backdrop-blur-sm dark:border-white/5 dark:bg-neutral-900/75",
            className,
         )}
      >
         <div className="hidden space-x-6 md:flex">
            {navItems.map((navItem, idx: number) => {
               const isActive = pathname === navItem.link
               return (
                  <Link
                     key={`link=${idx}`}
                     href={navItem.link}
                     className={cn(
                        "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
                     )}
                  >
                     <span className="block sm:hidden">{navItem.icon}</span>
                     <span className="hidden text-sm sm:block">
                        <span className="text-neutral-400">/</span>
                        {navItem.name.toLowerCase()}
                     </span>
                     {isActive && (
                        <motion.span
                           transition={{
                              ease: "backInOut",
                              duration: 0.35,
                           }}
                           layoutId="active-nav"
                           className="absolute -inset-x-4 inset-y-auto z-[-1] hidden h-9 rounded-full bg-neutral-200/50 dark:bg-neutral-800 sm:flex"
                        />
                     )}
                  </Link>
               )
            })}
         </div>
         <div className="md:hidden">
            <MobileNavigation navItems={navItems} />
         </div>

         <ThemeToggle />
      </motion.div>
   )
}
