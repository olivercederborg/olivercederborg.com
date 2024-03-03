import { LinkedinIcon } from "lucide-react"
import Link from "next/link"

export function LinkedInCard() {
   return (
      <Link
         href={"https://linkedin.com/in/olivercederborg"}
         target="_blank"
         className="relative col-span-1 col-start-3 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-[#0077B5] transition-colors duration-200 ease-in-out hover:bg-[#00A0DC] dark:bg-[#0077B5] dark:hover:bg-[#00A0DC]"
      >
         <LinkedinIcon size={24} />
      </Link>
   )
}
