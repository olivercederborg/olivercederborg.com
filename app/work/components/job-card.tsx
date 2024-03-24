"use client"

import { type Job } from "@/app/work/jobs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import * as React from "react"

type JobCardProps = {
   job: Job
}

export function JobCard({ job }: JobCardProps) {
   const [open, setOpen] = React.useState(false)
   const currentJob = job.to === "now"
   return (
      <motion.div
         className={cn(
            "card-border relative flex flex-col rounded-xl bg-white p-6 py-8 transition-colors duration-200 ease-in-out dark:bg-neutral-900",
            {
               "ring-1 ring-white/50 ring-offset-8 ring-offset-neutral-100 dark:ring-neutral-500/20 dark:ring-offset-neutral-950":
                  currentJob,
            },
         )}
      >
         <h2 className="m-0 mb-1 flex justify-between text-lg font-normal dark:text-white">
            {job.company}{" "}
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
               {job.from} — {job.to}
            </span>
         </h2>
         <p className="m-0 text-sm text-neutral-500 dark:text-neutral-400">
            {job.position}
         </p>
         <p className="mb-0 mt-4">{job.introDescription}</p>

         {!open && job.description && (
            <Button
               className="self-center"
               variant="ghost"
               onClick={() => setOpen(true)}
            >
               Show more
            </Button>
         )}

         <p
            className={cn("m-0 hidden transition duration-300", {
               block: open,
            })}
         >
            {job.description}
         </p>
      </motion.div>
   )
}
