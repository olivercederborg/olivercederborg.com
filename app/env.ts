import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
   server: {
      GITHUB_TOKEN: z.string().startsWith("github_pat"),
      AUTH_GITHUB_ID: z.string(),
      AUTH_GITHUB_SECRET: z.string(),
   },
   experimental__runtimeEnv: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
      AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
      AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
   },
})
