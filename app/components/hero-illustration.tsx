import { useLoaderData } from 'remix'

import { motion } from 'framer-motion'

import { useTheme } from '~/hooks/use-theme'
import type { LoaderData } from '~/routes'

const widgetVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const HeroIllustration = () => {
  const { heroImages } = useLoaderData<LoaderData>()
  const { theme } = useTheme()
  const image = heroImages[theme ?? 'light']

  return (
    <figure className='z-[-10] absolute scale-[0.6] -bottom-[18rem] right-[50%] translate-x-[50%] md:translate-x-0 md:scale-[0.8] md:-bottom-60 md:-right-32 lg:-right-28 xl:-right-6 2xl:right-[5%] lg:inset-y-[20%] lg:scale-100'>
      <motion.img
        variants={widgetVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{
          duration: 1,
          ease: [0.455, 0.03, 0.515, 0.955],
          delay: 1,
        }}
        src={image.base}
        loading='lazy'
        width={700}
        height={700}
        alt='Hero illustration'
        className='object-cover w-full min-w-[700px]'
      />
      <motion.img
        variants={widgetVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{
          duration: 1,
          ease: [0.455, 0.03, 0.515, 0.955],
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          repeatDelay: 8,
        }}
        src={image.notification}
        loading='lazy'
        height={82}
        alt='Hero illustration'
        className='absolute right-96 top-24'
      />
      <motion.img
        variants={widgetVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{
          duration: 1,
          ease: [0.455, 0.03, 0.515, 0.955],
          delay: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          repeatDelay: 8,
        }}
        src={image.bigWidget}
        loading='lazy'
        height={154}
        alt='Hero illustration'
        className='absolute right-[28rem] top-[19rem]'
      />
      <motion.img
        variants={widgetVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{
          duration: 1,
          ease: [0.455, 0.03, 0.515, 0.955],
          delay: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          repeatDelay: 8,
        }}
        src={image.bigWidget}
        loading='lazy'
        height={154}
        alt='Hero illustration'
        className='absolute right-[8rem] top-[9rem]'
      />
      <motion.img
        variants={widgetVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{
          duration: 1,
          ease: [0.455, 0.03, 0.515, 0.955],
          delay: 14,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          repeatDelay: 8,
        }}
        src={image.heart}
        loading='lazy'
        height={82}
        alt='Hero illustration'
        className='absolute right-[5.5rem] top-[25.5rem]'
      />
    </figure>
  )
}
