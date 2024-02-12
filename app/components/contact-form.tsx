'use client'

import { send } from '@actions'
import { Input, Label, SubmitButton, Textarea } from '@components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormData, contactSchema } from '@side-projects/schemas'
import { cn } from '@utils/cn'
import { HTMLMotionProps, MotionProps, Variants, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const errorVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'circOut', duration: 0.5 },
  },
}

const defaultValues = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export function ContactForm() {
  const [formResponse, setFormResponse] = useState<{
    ok?: boolean
    message?: string
  }>()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  })

  async function handleFormSubmit(data: ContactFormData) {
    setFormResponse(undefined)
    const { message, ok } = await send(data)
    setFormResponse({ ok, message })
    if (ok) {
      reset()
    }
  }

  function handleInvalidSubmit() {
    setFormResponse(undefined)
  }

  return (
    <motion.form
      className='space-y-10'
      onSubmit={handleSubmit(handleFormSubmit, handleInvalidSubmit)}
      variants={{
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
      }}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
      viewport={{ once: true }}
    >
      <Label required>
        What&apos;s your name?
        <Input
          {...register('name')}
          name='name'
          type='text'
          placeholder='Oliver Cederborg'
          className={cn({
            'border-red-500 dark:border-red-400': errors.name?.message,
            'border-green-500 dark:border-green-400': isValid && !errors.name?.message,
          })}
        />
        {errors.name && (
          <motion.span
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='mt-4 block font-light text-red-500 dark:text-red-400'
            variants={errorVariants}
          >
            {errors.name.message}
          </motion.span>
        )}
      </Label>

      <Label required>
        Where can I reach you?
        <Input
          {...register('email')}
          name='email'
          type='text'
          placeholder='hey@olivercederborg.com'
          className={cn({
            'border-red-500 dark:border-red-400': errors.email?.message,
            'border-green-500 dark:border-green-400': isValid && !errors.email?.message,
          })}
        />
        {errors.email && (
          <motion.span
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='mt-4 block font-light text-red-500 dark:text-red-400'
            variants={errorVariants}
          >
            {errors.email.message}
          </motion.span>
        )}
      </Label>

      {/* Honeypot */}
      <Label className='hidden'>
        What company do you work for?
        <Input
          {...register('company')}
          name='company'
          type='text'
          placeholder='No need to give me this information'
        />
      </Label>

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
          <motion.span
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='mt-4 block font-light text-red-500 dark:text-red-400'
            variants={errorVariants}
          >
            {errors.message.message}
          </motion.span>
        )}
      </Label>

      <SubmitButton>{isSubmitting ? 'Sending...' : 'Send it'}</SubmitButton>

      {formResponse?.message && (
        <motion.p
          initial='hidden'
          animate='visible'
          exit='hidden'
          className={cn({
            'text-green-500 dark:text-green-400': formResponse.ok && isSubmitSuccessful,
            'text-red-500 dark:text-red-400': !formResponse.ok,
          })}
          variants={errorVariants}
        >
          {formResponse.message}
        </motion.p>
      )}
    </motion.form>
  )
}
