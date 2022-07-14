import { useEffect, useRef } from 'react'
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix'
import { json, useActionData, useLoaderData, useTransition } from 'remix'

import { withZod } from '@remix-validated-form/with-zod'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { z } from 'zod'

import { getErrorMessage } from '~/utils/get-error-message'
import { sendEmail } from '~/utils/send-email'

import { Input, SubmitButton, Textarea } from '~/components/input'

import { About } from '~/templates/about'
import { Contact } from '~/templates/contact'
import { Hero } from '~/templates/hero'
import { Projects } from '~/templates/projects'

export const validator = withZod(
  z.object({
    name: z.string().nonempty('Please enter your name'),
    email: z
      .string()
      .nonempty('I need to know where to reach you!')
      .email("Uh oh, that doesn't look like an email address..."),
    company: z.string(),
    message: z.string().nonempty('You need to send me a message!'),
  })
)

type LoaderData = {
  defaultValues: {
    name: string
    email: string
    company: string
    message: string
  }
}

export const loader: LoaderFunction = () =>
  json({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  })

type ActionData = {
  status: 'success' | 'error'
  fields: {
    name?: string | null
    email?: string | null
    company?: string | null
    message?: string | null
  }
  errors: {
    sendError?: string | null
  }
}

export const action: ActionFunction = async ({ request }) => {
  const fieldValues = validator.validate(await request.formData())
  if (fieldValues.error) return validationError(fieldValues.error)
  const { ...fields } = fieldValues.data

  try {
    await sendEmail(fieldValues.data)
    return json<ActionData>({
      fields,
      status: 'success',
      errors: {},
    })
  } catch (error: unknown) {
    return json<ActionData>({
      fields,
      status: 'error',
      errors: {
        sendError:
          getErrorMessage(error) ??
          `Sorry ${fields.name}, something went wrong. Please try again. 😢`,
      },
    })
  }
}

export const meta: MetaFunction = () => ({
  title: 'Oliver Cederborg - Front-end developer',
  description: "Hi, I'm Oliver Cederborg, a front-end developer from Denmark.",
})

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const { defaultValues } = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const transition = useTransition()

  const formRef = useRef<HTMLFormElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  const emailSent = transition.state === 'loading' && transition.type === 'actionReload'

  useEffect(() => {
    if (emailSent) {
      formRef.current?.reset()
      nameInputRef.current?.focus()
    }
  }, [emailSent])

  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact>
        <ValidatedForm
          formRef={formRef}
          validator={validator}
          replace
          method='post'
          defaultValues={defaultValues}
          resetAfterSubmit
          className='space-y-10'
        >
          <Input
            ref={nameInputRef}
            name='name'
            label="What's your name?"
            placeholder='Elon Musk'
            required
          />
          <Input
            name='email'
            label='Where can I reach you?'
            placeholder='elon@tesla.com'
            required
          />
          {/* Prevent bots from auto-filling and spamming. */}
          <label htmlFor='company' className='hidden'>
            What company do you work for?
            <input
              type='text'
              id='company'
              name='company'
              placeholder='No need to give me this information'
            />
          </label>
          <Textarea
            name='message'
            label="What's your message?"
            placeholder="Hi Oliver, let's work!"
            required
          />
          <SubmitButton>
            {transition.state === 'submitting' ? 'Sending...' : 'Send it'}
          </SubmitButton>

          {actionData?.status === 'success' && (
            <p className='text-green-500'>
              Thank you for reaching out, {actionData.fields.name}. I will get back to you asap!
            </p>
          )}
          {actionData?.status === 'error' && (
            <p className='text-red-500'>{actionData?.errors?.sendError}</p>
          )}
        </ValidatedForm>
      </Contact>
    </main>
  )
}
