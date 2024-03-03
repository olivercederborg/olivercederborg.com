import { Dribbble } from "@/components/icons/dribbble"
import Link from "next/link"

export function DribbbleCard() {
   return (
      <Link
         href={"https://dribbble.com/oliver"}
         target="_blank"
         className="relative col-span-2 col-start-6 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-[#FFABE7] text-white transition-colors duration-200 ease-in-out hover:bg-[#ffbbea] dark:bg-[#FFABE7] dark:hover:bg-[#FF8EDD]"
      >
         <Dribbble />
      </Link>
   )
}
