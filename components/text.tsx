"use client"

import { defaultVariants } from "@/app/guestbook/components/motion.variants"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { MotionProps, motion } from "framer-motion"

type TextProps = {
   children: React.ReactNode
   className?: string
   asChild?: boolean
   hasMotion?: boolean
} & MotionProps

export function Text({
   children,
   className,
   asChild,
   hasMotion = true,
   ...props
}: TextProps) {
   const BaseComp = asChild ? Slot : "p"
   const Comp = hasMotion ? motion(BaseComp) : BaseComp
   return (
      <Comp
         initial="hidden"
         animate="visible"
         exit="hidden"
         variants={defaultVariants}
         className={cn(
            "text-base font-normal leading-relaxed dark:text-white",
            className,
         )}
      >
         {children}
      </Comp>
   )
}
