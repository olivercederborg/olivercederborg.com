import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
   server: {
      GITHUB_TOKEN: z.string().startsWith("github_pat"),
      AUTH_GITHUB_ID: z.string(),
      AUTH_GITHUB_SECRET: z.string(),
      POSTGRES_DATABASE: z.string(),
      POSTGRES_HOST: z.string(),
      POSTGRES_PASSWORD: z.string(),
      POSTGRES_URL: z.string().url(),
   },
   experimental__runtimeEnv: {
      // GITHUB_TOKEN: process.env.GITHUB_TOKEN,
   },
})
