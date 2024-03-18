import { SelectGuestbook } from "@/app/db/schema"
import { cn } from "@/lib/utils"

type EntryProps = {
   entry: SelectGuestbook
   className?: string
}

export function Entry({ entry, className }: EntryProps) {
   const isAuthor = entry.email === "hey@olivercederborg.com"

   return (
      <div
         className={cn(
            "flex flex-col flex-wrap items-start self-start text-pretty break-all rounded-xl border border-white/5 bg-neutral-900/10 px-3 py-2 text-sm leading-6",
            {
               "items-end self-end bg-neutral-400/10": isAuthor,
            },
            className,
         )}
      >
         <p className="flex flex-col">
            <span className="text-xs text-neutral-400">{entry.createdBy}</span>
            <span>{entry.body}</span>
         </p>
      </div>
   )
}
