import type { ComponentPropsWithoutRef } from 'react'
import { memo, useMemo } from 'react'

import clsx from 'clsx'
import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import useMedia from 'react-use/lib/useMedia'

/* import type { Sideproject } from '@routes/side-projects' */

import { AnimatedText } from '@components/animated-text'

type SideProjectItemProps = ComponentPropsWithoutRef<'a'> & {
  project: any
}

export const SideProjectItem = memo(({ project, ...props }: SideProjectItemProps) => {
  const { id, name, area, url, stars, image, imageAlt, color = '#ededed' } = project

  const isPhone = useMedia('(max-width: 768px)', true)

  const phoneMotionProps: MotionProps = useMemo(
    () => ({
      variants: { visible: { transition: { staggerChildren: 0.35 } } },
      viewport: { once: true },
      ...(isPhone ? { initial: 'hidden', whileInView: 'visible', exit: 'hidden' } : {}),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <a
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
          style={{ backgroundColor: color }}
          className='aspect-[4/3] w-full'
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
    </a>
  )
})
SideProjectItem.displayName = 'ProjectItem'
