'use client'

import { AnimatedLetters, AnimatedText } from '@components/animated-text'
import { MotionLinkButton } from '@components/link-button'
import { motion, AnimatePresence } from 'framer-motion'

export default function NotFound() {
  return (
    <main className='container py-40 md:py-80'>
      <motion.article
        variants={{
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
      >
        <AnimatePresence>
          <AnimatedLetters
            key='title'
            as='h2'
            text="That's awkward... I couldn't find that page."
            className='text-4xl font-medium lg:text-5xl'
            textVariants={{
              hidden: { transition: { staggerChildren: 0.015 } },
              visible: { transition: { staggerChildren: 0.015 } },
            }}
            letterVariants={{
              hidden: { opacity: 0, y: 75 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
              },
            }}
          />
          <AnimatedText
            key='text'
            as='p'
            className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:w-3/5'
            text="Maybe this page used to exist, is under development or maybe you typed in the wrong URL. Either way, I'm sorry for the inconvenience."
          />

          <MotionLinkButton
            href='/'
            motionProps={{
              variants: {
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: 'circOut', duration: 0.5 },
                },
              },
            }}
            className='mt-8 inline-block md:mt-12'
          >
            Go back home
          </MotionLinkButton>
        </AnimatePresence>
      </motion.article>
    </main>
  )
}
