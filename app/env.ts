import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
   server: {
      GITHUB_TOKEN: z.string().startsWith("github_pat"),
      GITHUB_CLIENT_ID: z.string(),
      GITHUB_CLIENT_SECRET: z.string(),
   },
   experimental__runtimeEnv: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
      OAUTH_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      OAUTH_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
   },
})
