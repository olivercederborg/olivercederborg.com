'use client'

import type { FC, ReactNode } from 'react'
import { forwardRef } from 'react'

import { HTMLMotionProps, motion } from 'framer-motion'
import { VscArrowRight } from 'react-icons/vsc'
import { cn } from '@utils/cn'

export type LabelProps = HTMLMotionProps<'label'> & {
  required?: boolean
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, className, required, ...props },
  ref
) {
  return (
    <motion.label
      {...props}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
      }}
      className={cn(
        'relative block flex-col text-xl font-light text-dark-400 dark:text-dark-200',
        className
      )}
    >
      {children}
    </motion.label>
  )
})

export type InputProps = HTMLMotionProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <>
      <motion.input
        {...props}
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
        }}
        className={cn(
          'focus-within:border-primary-brand mt-2 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500',
          className
        )}
      />
    </>
  )
})

export type TextareaProps = HTMLMotionProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <motion.textarea
      {...props}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
      }}
      className={cn(
        'focus-within:border-primary-brand mt-2 h-40 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500',
        className
      )}
    />
  )
})

export const SubmitButton: FC<{ children: ReactNode }> = ({ children, ...props }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
    }}
  >
    <button
      type='submit'
      className='group flex items-center gap-x-2 text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200'
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
      <VscArrowRight
        size={36}
        className='mb-1 block -rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-dark-300 dark:text-dark-400'
      />
    </button>
  </motion.div>
)
