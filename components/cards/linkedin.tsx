"use client"

import { defaultVariantsNoDelay } from "@/components/motion.variants"
import { motion } from "framer-motion"
import { LinkedinIcon } from "lucide-react"
import Link from "next/link"

export function LinkedInCard() {
   const MotionLink = motion(Link)
   return (
      <MotionLink
         href={"https://linkedin.com/in/olivercederborg"}
         target="_blank"
         title="Linkedin profile"
         variants={defaultVariantsNoDelay}
         className="card-border relative col-span-2 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-[#0077B5] text-white transition-colors duration-200 ease-in-out hover:bg-[#00A0DC] dark:bg-[#0077B5] dark:hover:bg-[#00A0DC] md:col-span-1 md:col-start-3 md:row-span-1 md:row-start-3"
      >
         <LinkedinIcon size={24} />
      </MotionLink>
   )
}
