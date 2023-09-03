'use server'

import { env } from '@env'
import { ContactFormData, contactSchema } from '@side-projects/schemas'
import { getErrorMessage } from '@utils/get-error-message'
import { Resend } from 'resend'
import { CreateEmailOptions } from 'resend/build/src/emails/interfaces'

const resend = new Resend(env.RESEND_API_KEY)

export async function send(formData: ContactFormData) {
  const { name, email, company, message } = contactSchema.parse(formData)

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
    // honey pot :)))
    if (company) {
      return { message: 'I see you like honey 🍯 Try again if you are a human.', ok: false }
    }

    await resend.emails.send(content)
    return {
      ok: true,
      message: `Thank you for reaching out, ${name}. I will get back to you asap!`,
    }
  } catch (error: unknown) {
    return {
      message: 'Something went wrong, please try again later',
      error: getErrorMessage(error),
      ok: false,
    }
  }
}
