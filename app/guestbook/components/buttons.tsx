"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { signIn, signOut } from "next-auth/react"

export function SignIn() {
   return (
      <Button onClick={async () => signIn("github")}>
         <Github className="mr-2 h-4 w-4" /> log in with github
      </Button>
   )
}

export function SignOut() {
   return (
      <Button variant={"outline"} onClick={async () => signOut()}>
         log out
      </Button>
   )
}
