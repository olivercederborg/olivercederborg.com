"use client"

import { SelectGuestbook } from "@/app/db/schema"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, stagger } from "framer-motion"

type EntriesProps = {
   entries: SelectGuestbook[]
}

export function Entries({ entries }: EntriesProps) {
   return (
      <AnimatePresence>
         <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
               hidden: { opacity: 0 },
               visible: {
                  opacity: 1,
                  transition: {
                     delayChildren: 0.15,
                     staggerChildren: 0.15,
                  },
               },
            }}
            className="mt-16 flex flex-col space-y-3 border-t border-white/5 py-8"
         >
            {entries.map((entry, i) => (
               <Entry key={entry.id} entry={entry} />
            ))}
         </motion.div>
      </AnimatePresence>
   )
}

type EntryProps = {
   entry: SelectGuestbook
   className?: string
}

export function Entry({ entry, className }: EntryProps) {
   const isAuthor = entry.email === "hey@olivercederborg.com"

   return (
      <motion.div
         variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
         }}
         className={cn(
            "flex flex-col flex-wrap items-start self-start text-pretty break-all rounded-xl border bg-neutral-200/10 px-3 py-2 text-sm leading-6 dark:border-white/5 dark:bg-neutral-900/10",
            {
               "items-end self-end bg-neutral-700/10 dark:bg-neutral-400/10":
                  isAuthor,
            },
            className,
         )}
      >
         <p className="flex flex-col">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
               {entry.createdBy}
            </span>
            <span>{entry.body}</span>
         </p>
      </motion.div>
   )
}
