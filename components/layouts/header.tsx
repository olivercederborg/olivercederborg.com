import * as React from "react"
import { FloatingNav } from "@/components/ui/floating-navbar"

const navItems: React.ComponentProps<typeof FloatingNav>["navItems"] = [
   { name: "Home", link: "/" },
   { name: "Work", link: "/work" },
   { name: "Guestbook", link: "/guestbook" },
]

export function Header() {
   return (
      <header className="flex">
         <FloatingNav navItems={navItems} />
      </header>
   )
}
