'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@utils/cn'
import { useForm } from 'react-hook-form'
import { Input, Label, SubmitButton, Textarea } from '@components/input'
import * as z from 'zod'
import { sendEmail } from '@actions'
import { useRef, useState } from 'react'
import { getErrorMessage } from '@utils/get-error-message'

const schema = z.object({
  name: z.string().nonempty('I need to know your name').min(2, 'Your name is too short'),
  email: z
    .string()
    .nonempty('I need to know where to reach you!')
    .email("Uh oh, that doesn't look like an email address..."),
  company: z.string(),
  message: z.string().nonempty('You need to send me a message!'),
})

export type ContactFormData = z.infer<typeof schema>

export function ContactForm() {
  const [formResponse, setFormResponse] = useState<{
    status: 'success' | 'error' | null
    message?: string
  }>({ status: null })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  async function handleFormSubmit(data: ContactFormData) {
    const { name } = data

    try {
      await sendEmail(data)
      setFormResponse({
        status: 'success',
        message: `Thank you for reaching out, ${name}. I will get back to you asap!`,
      })
      reset()
    } catch (error: unknown) {
      setFormResponse({
        status: 'error',
        message:
          getErrorMessage(error) ?? `Sorry ${name}, something went wrong. Please try again. 😢`,
      })
    }
  }

  return (
    <form
      className='space-y-10'
      onSubmit={handleSubmit(handleFormSubmit, () => setFormResponse({ status: null }))}
    >
      <Label required>
        What&apos;s your name?
        <Input
          {...register('name')}
          name='name'
          placeholder='Oliver Cederborg'
          className={cn({
            'border-red-500 dark:border-red-400': errors.name?.message,
            'border-green-500 dark:border-green-400': isValid && !errors.name?.message,
          })}
        />
        {errors.name && (
          <span className='mt-4 block font-light text-red-500 dark:text-red-400'>
            {errors.name.message}
          </span>
        )}
      </Label>

      <Label required>
        Where can I reach you?
        <Input
          {...register('email')}
          name='email'
          placeholder='hey@olivercederborg.com'
          className={cn({
            'border-red-500 dark:border-red-400': errors.email?.message,
            'border-green-500 dark:border-green-400': isValid && !errors.email?.message,
          })}
        />
        {errors.email && (
          <span className='mt-4 block font-light text-red-500 dark:text-red-400'>
            {errors.email.message}
          </span>
        )}
      </Label>

      {/* Prevent bots from auto-filling and spamming. */}
      <label htmlFor='company' className='hidden'>
        What company do you work for?
        <input
          {...register('company')}
          type='text'
          id='company'
          name='company'
          placeholder='No need to give me this information'
        />
      </label>

      <Label required>
        What&apos;s your message?
        <Textarea
          {...register('message')}
          name='message'
          placeholder="Hi Oliver, let's work!"
          className={cn({
            'border-red-500 dark:border-red-400': errors.message?.message,
            'border-green-500 dark:border-green-400': isValid && !errors.message?.message,
          })}
        />
        {errors.message && (
          <span className='mt-4 block font-light text-red-500 dark:text-red-400'>
            {errors.message.message}
          </span>
        )}
      </Label>

      <SubmitButton>{isSubmitting ? 'Sending...' : 'Send it'}</SubmitButton>

      {formResponse.status && (
        <p
          className={cn({
            'text-green-500': formResponse.status === 'success' && isSubmitSuccessful,
            'text-red-500': formResponse.status === 'error',
          })}
        >
          {formResponse.message}
        </p>
      )}
    </form>
  )
}
