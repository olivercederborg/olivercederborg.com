"use client"

import { signIn, signOut } from "next-auth/react"

export function SignIn() {
   return <button onClick={async () => signIn("github")}>Sign In</button>
}

export function SignOut() {
   return <button onClick={async () => signOut()}>Sign Out</button>
}
