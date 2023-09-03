'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@utils/cn'
import { useForm } from 'react-hook-form'
import { Input, Label, SubmitButton, Textarea } from '@components/input'
import { useState } from 'react'
import { ContactFormData, contactSchema } from '@side-projects/schemas'
import { send } from '@actions'

export function ContactForm() {
  const [formResponse, setFormResponse] = useState<{
    status?: 'success' | 'error'
    message?: string
  }>()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function handleFormSubmit(data: ContactFormData) {
    const { message, ok } = await send(data)
    setFormResponse({
      status: ok ? 'success' : 'error',
      message,
    })
    ok && reset()
  }

  return (
    <form
      className='space-y-10'
      onSubmit={handleSubmit(handleFormSubmit, () => setFormResponse({}))}
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

      {formResponse?.status && (
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
