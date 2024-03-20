"use client"

import { defaultVariants } from "@/app/guestbook/components/motion.variants"
import { motion } from "framer-motion"

export function Heading({ children }: { children: React.ReactNode }) {
   return (
      <motion.h1
         initial="hidden"
         animate="visible"
         exit="hidden"
         variants={defaultVariants}
         className="text-xl"
      >
         {children}
      </motion.h1>
   )
}
