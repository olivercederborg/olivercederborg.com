import { env } from "@/app/env"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {
   handlers: { GET, POST },
   auth,
   signIn,
   signOut,
} = NextAuth({
   providers: [
      GitHub({
         clientId: env.GITHUB_CLIENT_ID,
         clientSecret: env.GITHUB_CLIENT_SECRET,
      }),
   ],
})
