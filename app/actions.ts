'use server'

import { ContactFormData } from '@components/contact-form'
import { env } from '@env'
import { Resend } from 'resend'
import { CreateEmailOptions } from 'resend/build/src/emails/interfaces'

const resend = new Resend(env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormData) {
  const { name, email, company, message } = data

  const content: CreateEmailOptions = {
    from: 'website@olivercederborg.com',
    to: 'hey@olivercederborg.com',
    reply_to: email,
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
    resend.emails.send(content)
  } catch (error: unknown) {
    throw new Error(error as unknown as string)
  }
}
