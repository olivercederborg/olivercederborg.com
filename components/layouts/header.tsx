import { FloatingNav } from "@/components/ui/floating-navbar"

export type NavItem = {
   name: string
   link: string
   icon?: JSX.Element
}

const navItems: NavItem[] = [
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
