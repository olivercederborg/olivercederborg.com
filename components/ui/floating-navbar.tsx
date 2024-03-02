"use client"

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
               "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-screen-md items-center justify-between space-x-4 rounded-3xl border border-white border-opacity-[0.03] bg-white bg-opacity-75 px-8 py-4 filter backdrop-blur-sm dark:bg-neutral-950/[0.9]",
               className,
            )}
         >
            <div>OC</div>
            <div className="flex space-x-4">
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
         </motion.div>
      </AnimatePresence>
   )
}
