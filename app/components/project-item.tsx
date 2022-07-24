import type { ComponentPropsWithoutRef } from 'react'
import { memo, useMemo } from 'react'
import { Link } from 'remix'

import clsx from 'clsx'
import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { useMedia } from 'react-use'

import { AnimatedText } from '~/components/animated-text'

import type { Project } from '../../projects'

type ProjectItemProps = ComponentPropsWithoutRef<'a'> & {
  project: Project
}

export const ProjectItem = memo(({ project, ...props }: ProjectItemProps) => {
  const { id, name, area, link, image, imageAlt, color = '#ededed' } = project

  const isPhone = useMedia('(max-width: 768px)')

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
    <Link
      to={link}
      className={clsx(
        'col-span-12 flex flex-col md:col-span-6 xl:col-span-4',
        props.className && props.className
      )}
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
            className='object-cover'
          />
        </motion.figure>
        <AnimatedText
          text={area}
          className='mt-6 text-sm font-light text-dark-300 dark:text-dark-400'
        />
        <AnimatedText
          as='h3'
          text={name}
          className='mt-3 text-3xl text-dark-400 dark:text-dark-200'
        />
      </motion.article>
    </Link>
  )
})
ProjectItem.displayName = 'ProjectItem'
