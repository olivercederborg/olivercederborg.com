import { AnimatePresence, motion } from 'framer-motion'

import { AnimatedLetters, AnimatedText } from '~/components/animated-text'
import { MotionLinkButton } from '~/components/link-button'

export const Hero = () => {
  return (
    <header
      id='intro'
      className='bg-light-hero bg-[length:512px] bg-[right_-5rem_bottom_-12rem] bg-no-repeat pt-40 pb-80 shadow-[inset_0_-40px_15px_-10px_#ededed] transition duration-300 ease-in-out dark:bg-dark-hero dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto md:bg-[right_-12rem_bottom_-16rem] lg:bg-[right_-6rem_center] lg:pt-48 lg:pb-64 xl:bg-[right_-4rem_top_15rem] xl:py-80 2xl:bg-[right_20%_top_15rem]'
    >
      <motion.div
        variants={{
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='container'
      >
        <AnimatePresence>
          <article className='lg:max-w-[60%]'>
            <AnimatedLetters
              as='h1'
              text='I design and develop applications.'
              className='text-5xl font-medium md:text-6xl lg:text-7xl'
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
              as='p'
              className='mt-10 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
              text="I'm a full-time frontend developer with a passion for great design and user
							experiences."
            />
          </article>
        </AnimatePresence>

        <MotionLinkButton
          to='#projects'
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
          className='mt-8 inline-block md:mt-16'
        >
          Explore my projects
        </MotionLinkButton>
      </motion.div>
    </header>
  )
}
