"use client"

import {
   defaultVariants,
   defaultVariantsNoDelay,
} from "@/app/guestbook/components/motion.variants"
import { motion } from "framer-motion"
import Image from "next/image"

export function MeCard() {
   return (
      <motion.div
         variants={defaultVariantsNoDelay}
         className="card-border relative col-span-4 row-span-3 overflow-hidden rounded-xl md:col-span-2 md:row-span-3"
      >
         <Image
            alt="Oliver Cederborg"
            src="/assets/oliver-cederborg-portrait.jpg"
            height={300}
            width={300}
            className="h-full object-cover"
            priority
         />
      </motion.div>
   )
}
