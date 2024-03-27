"use client"

import { defaultVariants } from "@/app/guestbook/components/motion.variants"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { motion } from "framer-motion"

type HeadingProps = {
   children: React.ReactNode
   className?: string
   asChild?: boolean
   hasMotion?: boolean
}

export function Heading({
   children,
   className,
   asChild,
   hasMotion = true,
   ...props
}: HeadingProps) {
   const BaseComp = asChild ? Slot : "h1"
   const Comp = hasMotion ? motion(BaseComp) : BaseComp
   return (
      <Comp
         initial="hidden"
         animate="visible"
         exit="hidden"
         variants={defaultVariants}
         className={cn(
            "text-2xl font-medium leading-relaxed dark:text-white",
            className,
         )}
         {...props}
      >
         {children}
      </Comp>
   )
}
