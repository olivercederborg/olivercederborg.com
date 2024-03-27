"use client"

import { defaultVariants } from "@/app/guestbook/components/motion.variants"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import {
   ForwardRefComponent,
   HTMLMotionProps,
   MotionProps,
   motion,
} from "framer-motion"

type BaseMotionProps = {
   children: React.ReactNode
   className?: string
   asChild?: boolean
} & MotionProps

export function Motion({
   children,
   className,
   asChild,
   initial,
   animate,
   exit,
   variants,
   ...props
}: BaseMotionProps) {
   const Comp = asChild
      ? (motion(Slot) as ForwardRefComponent<
           HTMLDivElement,
           HTMLMotionProps<"div">
        >)
      : motion.div

   const defaultProps: Partial<BaseMotionProps> = {
      initial: initial || "hidden",
      animate: animate || "visible",
      exit: exit || "hidden",
      variants: variants || defaultVariants,
   }
   return (
      <Comp
         {...defaultProps}
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
