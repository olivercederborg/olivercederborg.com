"use client"

import { NavItem } from "@/components/layouts/header"
import { Button } from "@/components/ui/button"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"

type MobileNavigationProps = {
   navItems: NavItem[]
}

export function MobileNavigation({ navItems }: MobileNavigationProps) {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild className="m-0" aria-label="Menu">
            <Button variant={"ghost"} size={"icon"}>
               <Menu className="size-[1.2rem]" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            align="start"
            className="flex w-screen max-w-[calc(100vw_-_6rem)] flex-col gap-y-4 rounded-xl p-4 py-6 md:hidden"
            asChild
         >
            <nav>
               {navItems.map((item, idx) => (
                  <DropdownMenuItem
                     asChild
                     key={`mobile-link=${idx}`}
                     className={cn(
                        "relative flex items-center space-x-1 px-4 py-2 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
                     )}
                  >
                     <Link href={item.link}>
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
                  </DropdownMenuItem>
               ))}
            </nav>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
