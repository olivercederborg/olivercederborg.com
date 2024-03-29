"use client"

import { cn } from "@/lib/utils"
import {
   HTMLMotionProps,
   MotionAdvancedProps,
   MotionProps,
   motion,
} from "framer-motion"

type WorkShellProps = {
   children: React.ReactNode
} & HTMLMotionProps<"div">

export function WorkShell({ children, className, ...props }: WorkShellProps) {
   return (
      <motion.div
         className={cn(
            "prose prose-neutral mt-8 max-w-full text-pretty dark:prose-invert",
            className,
         )}
         {...props}
      >
         {children}
      </motion.div>
   )
}
