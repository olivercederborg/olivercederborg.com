import type { FC } from 'react'
import { forwardRef } from 'react'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { VscArrowRight } from 'react-icons/vsc'
import { useField } from 'remix-validated-form'

type InputProps = {
  name: string
  label: string
  placeholder: string
  required?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, placeholder, required = false }, ref) => {
    const { error, getInputProps, touched } = useField(name)
    return (
      <div>
        <motion.label
          htmlFor={name}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
          }}
          className={clsx(
            'relative inline-flex flex-col text-xl font-light text-dark-400 dark:text-dark-200',
            required && "after:absolute after:-right-4 after:text-dark-300 after:content-['*']"
          )}
        >
          {label}
        </motion.label>
        <motion.input
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
          }}
          ref={ref}
          {...getInputProps({ id: name, placeholder })}
          className={clsx(
            'focus-within:border-primary-brand mt-2 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500',
            error && 'border-red-500 dark:border-red-400',
            touched && !error && 'border-green-500 dark:border-green-400'
          )}
        />
        {error && (
          <span className='mt-4 block font-light text-red-500 dark:text-red-400'>{error}</span>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export const Textarea = ({ name, label, placeholder, required }: InputProps) => {
  const { error, getInputProps, touched } = useField(name)
  return (
    <div>
      <motion.label
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
        }}
        htmlFor={name}
        className={clsx(
          'relative inline-flex flex-col text-xl font-light text-dark-400 dark:text-dark-200 ',
          required && "after:absolute after:-right-4 after:text-dark-300 after:content-['*']"
        )}
      >
        {label}
      </motion.label>
      <motion.textarea
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
        }}
        {...getInputProps({ id: name, placeholder })}
        className={clsx(
          'focus-within:border-primary-brand mt-2 h-40 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500',
          error && 'border-red-500 dark:border-red-400',
          touched && !error && 'border-green-500 dark:border-green-400'
        )}
      />
      {error && (
        <span className='mt-4 block font-light text-red-500 dark:text-red-400'>{error}</span>
      )}
    </div>
  )
}
Textarea.displayName = 'Textarea'

export const SubmitButton: FC = ({ children, ...props }) => (
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
