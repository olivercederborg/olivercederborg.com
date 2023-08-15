'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { memo, useMemo } from 'react'

import clsx from 'clsx'
import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import useMedia from 'react-use/lib/useMedia'

import { AnimatedText } from '@components/animated-text'
import Link from 'next/link'
import { cn } from '@utils/cn'
import { useTheme } from '@hooks/use-theme'
import { useMounted } from '@hooks/use-mounted'

type SideProjectItemProps = ComponentPropsWithoutRef<'a'> & {
  project: any
}

export const SideProjectItem = memo(function SideProjectItem({
  project,
  ...props
}: SideProjectItemProps) {
  const { theme } = useTheme()
  const mounted = useMounted()

  const { id, name, area, url, stars, image, imageAlt } = project

  const isPhone = useMedia('(max-width: 768px)', false)

  const phoneMotionProps: MotionProps = useMemo(
    () => ({
      variants: { visible: { transition: { staggerChildren: 0.35 } } },
      viewport: { once: true },
      ...(isPhone ? { initial: 'hidden', whileInView: 'visible', exit: 'hidden' } : {}),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  if (!mounted) return

  return (
    <Link
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={clsx('col-span-12 flex flex-col md:col-span-6 xl:col-span-3', props.className)}
    >
      <motion.article key={id} {...phoneMotionProps}>
        <motion.figure
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              originX: [0, 0, 0, 0, 0, 0, 0.5],
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: 'beforeChildren',
                delayChildren: 0.15,
              },
            },
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: 'circOut' } }}
          whileTap={{ scale: 0.95 }}
          className={cn('aspect-[4/3] w-full', {
            'bg-dark-100': theme === 'light',
            'bg-dark-700': theme === 'dark',
          })}
        >
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
              },
            }}
            src={image}
            alt={imageAlt}
            className='object-cover w-full h-full'
          />
        </motion.figure>
        <section className='flex justify-between items-center mt-6'>
          <AnimatedText
            text={area}
            className='text-sm font-light text-dark-300 dark:text-dark-400'
          />
          {!!stars && (
            <AnimatedText
              as='span'
              text={`★ ${stars}`}
              className='text-sm font-light text-dark-300 dark:text-dark-400'
            />
          )}
        </section>
        <AnimatedText
          as='h3'
          text={name || 'Untitled'}
          className='mt-3 text-3xl text-dark-400 dark:text-dark-200'
        />
      </motion.article>
    </Link>
  )
})
