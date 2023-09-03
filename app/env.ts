import { z } from 'zod'

let envSchema = z.object({
  GITHUB_TOKEN: z.string().nonempty(),
  RESEND_API_KEY: z.string().nonempty(),
})

export const env = envSchema.parse(process.env)
