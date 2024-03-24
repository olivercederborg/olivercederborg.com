"use client"

import { NavItem } from "@/components/layouts/header"
import { Button } from "@/components/ui/button"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Menu, MenuIcon, MenuSquare, MenuSquareIcon } from "lucide-react"
import Link from "next/link"

type MobileNavigationProps = {
   navItems: NavItem[]
}

export function MobileNavigation({ navItems }: MobileNavigationProps) {
   return (
      <Popover>
         <PopoverTrigger asChild className="m-0">
            <Button variant={"ghost"} size={"icon"}>
               <Menu className="size-[1.2rem]" />
            </Button>
         </PopoverTrigger>
         <PopoverContent
            align="start"
            className="flex flex-col gap-y-4 rounded-xl px-6 py-8 md:hidden"
            asChild
         >
            <nav>
               {navItems.map((item, idx) => (
                  <Link
                     key={`mobile-link=${idx}`}
                     href={item.link}
                     className={cn(
                        "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
                     )}
                  >
                     <span className="">{item.icon}</span>
                     <span className="text-xl">
                        <span className="mr-px text-neutral-400">/</span>
                        {item.name.toLowerCase()}
                     </span>
                     {/* {isActive && (
                        <motion.span
                           transition={{
                              ease: "backInOut",
                              duration: 0.35,
                           }}
                           layoutId="active-nav"
                           className="absolute -inset-x-4 inset-y-auto z-[-1] hidden h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 sm:flex"
                        />
                     )} */}
                  </Link>
               ))}
            </nav>
         </PopoverContent>
      </Popover>
   )
}
