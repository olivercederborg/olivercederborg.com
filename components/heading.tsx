"use client"

import { defaultVariants } from "@/app/guestbook/components/motion.variants"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type HeadingProps = {
   children: React.ReactNode
   className?: string
}

export function Heading({ children, className, ...props }: HeadingProps) {
   return (
      <motion.h1
         initial="hidden"
         animate="visible"
         exit="hidden"
         variants={defaultVariants}
         className={cn(
            "text-2xl font-medium leading-relaxed dark:text-white",
            className,
         )}
      >
         {children}
      </motion.h1>
   )
}
