import type { ComponentPropsWithRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import clsx from 'clsx'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { VscArrowRight } from 'react-icons/vsc'
import Link from 'next/link'

type LinkButtonProps = ComponentPropsWithRef<typeof Link> & {
  children?: ReactNode
  icon?: ReactNode
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(function LinkButton(
  { children = 'Button', icon: Icon, ...rest },
  ref
) {
  return (
    <Link
      ref={ref}
      {...rest}
      className={clsx(
        'group flex gap-3 text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200',
        rest.className
      )}
    >
      {children}
      {Icon ?? (
        <VscArrowRight
          size={36}
          className='rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400'
        />
      )}
    </Link>
  )
})

type MotionLinkButtonProps = LinkButtonProps & {
  motionProps?: HTMLMotionProps<'div'>
}

export const MotionLinkButton = forwardRef<HTMLDivElement, MotionLinkButtonProps>(
  function MotionLinkButton({ children, motionProps, ...rest }, ref) {
    return (
      <motion.div {...motionProps} ref={ref} className={rest.className} style={rest.style}>
        <LinkButton {...rest}>{children}</LinkButton>
      </motion.div>
    )
  }
)
