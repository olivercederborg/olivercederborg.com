'use server'

import { ContactFormData } from '@components/contact-form'
import sgMail from '@sendgrid/mail'

export async function sendEmail(data: ContactFormData) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

  const { name, email, company, message } = data

  const emailToFrom = {
    to: 'hey@olivercederborg.com',
    from: 'hey@olivercederborg.com',
  }

  const content = {
    to: emailToFrom.to,
    from: emailToFrom.from,
    replyTo: email,
    subject: `New Message From: ${name}`,
    text: message,
    html: `<p><strong>Name: ${name}<br>
          Email: ${email}</strong>
          <br><br>
          Message: ${message}
          </p>`,
  }

  try {
    if (company) throw new Error('I see you like honey... Try again if you are human.')
    await sgMail.send(content)
  } catch (error: unknown) {
    throw new Error(error as unknown as string)
  }
}
export type Sideproject = {
  id: number
  name: string
  area: string
  url: string
  image: string
  imageAlt: string
  color?: string
  repo?: string
  stars?: number
}
