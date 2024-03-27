import { Dribbble } from "@/components/icons/dribbble"
import { DribbbleType } from "@/components/icons/dribbble-type"
import Link from "next/link"

export function DribbbleCard() {
   return (
      <Link
         href={"https://dribbble.com/oliver"}
         target="_blank"
         title="Dribbble profile"
         className="card-border relative col-span-2 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-[#FF8EDD] text-white transition-colors duration-200 ease-in-out hover:bg-[#FFABE7] md:col-span-2 md:col-start-4 md:row-span-1"
      >
         <Dribbble className="h-6 text-white md:hidden" />
         <DribbbleType className="hidden md:block" />
      </Link>
   )
}
