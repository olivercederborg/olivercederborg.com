"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import {
   AnimatePresence,
   motion,
   useMotionValueEvent,
   useScroll,
} from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export const FloatingNav = ({
   navItems,
   className,
}: {
   navItems: {
      name: string
      link: string
      icon?: JSX.Element
   }[]
   className?: string
}) => {
   const { scrollYProgress } = useScroll()

   const [visible, setVisible] = useState(true)

   useMotionValueEvent(scrollYProgress, "change", (current) => {
      // Check if current is not undefined and is a number
      if (typeof current === "number") {
         let direction = current! - scrollYProgress.getPrevious()!

         //  if (scrollYProgress.get() < 0.05) {
         //     setVisible(false)
         //  } else {
         //     if (direction < 0) {
         //        setVisible(true)
         //     } else {
         //        setVisible(false)
         //     }
         //  }
      }
   })

   return (
      <AnimatePresence mode="wait">
         <motion.div
            initial={{
               opacity: 1,
               y: -100,
            }}
            animate={{
               y: visible ? 0 : -100,
               opacity: visible ? 1 : 0,
            }}
            transition={{
               duration: 0.2,
            }}
            className={cn(
               "fixed inset-x-0 top-5 z-[49] mx-auto flex max-w-2xl items-center justify-between space-x-4 rounded-full border border-neutral-950 border-opacity-[0.03] bg-neutral-100 bg-opacity-75 px-8 py-3 filter backdrop-blur-sm dark:border-white dark:border-opacity-[0.03] dark:bg-neutral-950/[0.9]",
               className,
            )}
         >
            <div className="flex space-x-4">
               {/* <Link href="/">
                  <Logo className="mr-4" />
               </Link> */}
               {navItems.map((navItem, idx: number) => (
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
                  </Link>
               ))}
            </div>

            <ThemeToggle />
         </motion.div>
      </AnimatePresence>
   )
}
