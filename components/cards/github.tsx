"use client"

import { getGithubContributions } from "@/app/actions"
import { getDailyContributionsColor } from "@/components/cards/utils"
import { defaultVariantsNoDelay } from "@/components/motion.variants"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"

export function GithubStatsCard({
   followers,
   stars,
   contributions,
}: {
   followers: number
   stars: number
   contributions: Awaited<ReturnType<typeof getGithubContributions>>
}) {
   const MotionLink = motion(Link)
   return (
      <MotionLink
         href="https://github.com/olivercederborg"
         target="_blank"
         variants={defaultVariantsNoDelay}
         whileHover={{ scale: 1.05 }}
         className="card-border relative col-span-4 row-span-2 overflow-hidden rounded-xl bg-white p-4 dark:bg-neutral-900 md:col-span-3 md:col-start-3 md:row-span-2 md:row-start-1"
      >
         <div className="relative z-10 flex h-full flex-col justify-between gap-2">
            <div className="flex items-center gap-2">
               <Github className="size-[18px]" />
               <h2 className="text-sm font-light">Github Stats</h2>
            </div>

            <div className="flex flex-wrap items-end gap-3">
               <GithubStatItem label="Followers" value={followers} />
               <GithubStatItem label="Stars" value={stars} />
               <GithubStatItem
                  label="Commits"
                  value={contributions.totalContributions}
               />
            </div>
         </div>

         <ContributionsGraph contributions={contributions} />
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

function ContributionsGraph({
   contributions,
}: {
   contributions: Awaited<ReturnType<typeof getGithubContributions>>
}) {
   return (
      <ul className="absolute inset-y-0 right-0 z-0 flex max-h-full gap-1 overflow-hidden opacity-50">
         <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/50 to-neutral-50/50 dark:from-neutral-950 dark:via-neutral-950/75 dark:to-transparent" />
         {contributions.latestContributions.map((week) => {
            if (week.contributionDays.length < 7) {
               // fill in the missing days
               const days = week.contributionDays.length
               const missingDays = 7 - days
               for (let i = 0; i < missingDays; i++) {
                  week.contributionDays.push({
                     contributionCount: 0,
                     date: "",
                  })
               }
            }
            return (
               <li
                  key={`${week.contributionDays[0].date}-${week.contributionDays.at(-1)?.date}`}
                  className="flex aspect-[1/8] size-full flex-col gap-1"
               >
                  {week.contributionDays.map((day) => {
                     const color = getDailyContributionsColor(
                        day.contributionCount,
                        contributions.maxContributionDay.contributionCount,
                     )
                     return (
                        <div
                           key={day.date}
                           className={cn("flex aspect-square rounded-[3px]", {
                              [color]: true,
                           })}
                        />
                     )
                  })}
               </li>
            )
         })}
      </ul>
   )
}
