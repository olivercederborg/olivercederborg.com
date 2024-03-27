"use client"

import { defaultVariantsNoDelay } from "@/app/guestbook/components/motion.variants"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"

export function GithubStatsCard({
   followers,
   stars,
}: {
   followers: number
   stars: number
}) {
   const MotionLink = motion(Link)
   return (
      <MotionLink
         href="https://github.com/olivercederborg"
         target="_blank"
         variants={defaultVariantsNoDelay}
         className="card-border relative col-span-4 row-span-2 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-200 ease-in-out hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 md:col-span-3 md:col-start-3 md:row-span-2 md:row-start-1"
      >
         <div className="flex h-full flex-col justify-between gap-2">
            <div className="flex items-center gap-2">
               <Github className="size-[18px]" />
               <h2 className="text-sm font-light">Github Stats</h2>
            </div>

            <div className="flex flex-wrap items-end gap-3">
               <GithubStatItem label="Followers" value={followers} />
               <GithubStatItem label="Stars" value={stars} />
            </div>
         </div>
      </MotionLink>
   )
}

function GithubStatItem({ label, value }: { label: string; value: number }) {
   return (
      <div className="col-span-1 flex flex-col justify-center">
         <p className="text-xl font-semibold text-neutral-700 dark:text-white">
            {value}
         </p>
         <p className="text-sm text-neutral-400 dark:text-neutral-400">
            {label}
         </p>
      </div>
   )
}
