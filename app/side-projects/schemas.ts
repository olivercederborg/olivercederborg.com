import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().nonempty('I need to know your name').min(2, 'Your name is too short'),
  email: z
    .string()
    .nonempty('I need to know where to reach you!')
    .email("Uh oh, that doesn't look like an email address..."),
  company: z.string().optional(),
  message: z.string().nonempty('You need to send me a message!'),
})

export type ContactFormData = z.infer<typeof contactSchema>
