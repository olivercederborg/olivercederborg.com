import { motion } from 'framer-motion'
import { IoLogoFigma } from 'react-icons/io5'
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVim,
  SiVuedotjs,
} from 'react-icons/si'

import { AnimatedText } from '~/components/animated-text'
import { MotionLinkButton } from '~/components/link-button'
import { SectionHeader } from '~/components/section-header'
import { SectionShell } from '~/components/section-shell'

export const About = () => {
  return (
    <SectionShell id='about'>
      <SectionHeader heading='About' />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16'
      >
        <AnimatedText
          as='p'
          className='col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8'
          text='Get a brief look at who I am and what I do. If you would like to know more about me and my interests, you can.'
        />
        <MotionLinkButton
          to='/about'
          motionProps={{
            variants: {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
            },
          }}
          className='col-span-full md:col-start-7 xl:col-start-9'
        >
          More about me
        </MotionLinkButton>
      </motion.section>

      <section className='relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16'>
        <section className='col-span-full md:col-span-6 xl:col-span-8'>
          <motion.article
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
          >
            <AnimatedText
              as='h3'
              text='Who am I'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <AnimatedText
              as='p'
              text="My name is Oliver Cederborg. I am 24 years old, I live in Copenhagen, Denmark, and I'm a self-taught designer and developer."
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='Digital design has been my main focus for many years, specifically UI/UX, but I have the past years shifted my focus to front-end development, which I have developed a great passion for.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='I try to challenge myself by diving head-first into the unknown, learning the skills along the way, needed to complete the task.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
          </motion.article>

          <motion.section
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
            className='col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8'
          >
            <AnimatedText
              as='h3'
              text='Tech I enjoy'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: 'circOut' },
                },
              }}
              className='mt-6 flex flex-wrap gap-6 text-dark-300'
            >
              <IoLogoFigma size={28} title='Figma' />
              <SiVim size={28} title='Vim' />
              <SiTailwindcss size={28} title='TailwindCSS' />
              <SiTypescript size={28} title='TypeScript' />
              <SiReact size={28} title='React.js' />
              <SiVuedotjs size={28} title='Vue.js' />
              <SiNextdotjs size={28} title='Next.js' />
            </motion.div>
          </motion.section>
        </section>

        <motion.figure
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: 'beforeChildren',
                delayChildren: 0.15,
                delay: 0.25,
              },
            },
          }}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          viewport={{ once: true }}
          style={{ backgroundColor: '#d4d4d4' }}
          className='mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9'
        >
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
              },
            }}
            src='/assets/olivercederborg-portrait.jpg'
            alt='Portrait of Oliver Cederborg'
          />
        </motion.figure>
      </section>
    </SectionShell>
  )
}
