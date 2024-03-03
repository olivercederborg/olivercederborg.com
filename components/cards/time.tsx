"use client"

import { Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function TimeCard() {
   const [time, setTime] = useState(new Date())

   useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000)

      return () => clearInterval(interval)
   }, [])

   return (
      <div className="row-span-0 card-border relative col-span-2 col-start-4 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-200 ease-in-out hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
         <h2 className="text-xl font-medium text-neutral-700 dark:text-white">
            {time.toLocaleTimeString("da-DK", {
               hour: "2-digit",
               minute: "2-digit",
               hour12: true,
            })}
         </h2>
      </div>
   )
}
