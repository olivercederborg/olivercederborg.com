'use client'

import { motion } from 'framer-motion'
import { VscArrowRight } from 'react-icons/vsc'

import { AnimatedText } from '@components/animated-text'
import { MotionLinkButton } from '@components/link-button'
import { ProjectItem } from '@components/project-item'
import { SectionHeader } from '@components/section-header'
import { SectionShell } from '@components/section-shell'

import { projects } from '../../projects'

export const Projects = () => {
  return (
    <SectionShell id='projects'>
      <SectionHeader heading='Projects' />

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
          text='Check out a few of the main projects I have worked on, or some of my side projects on the left-hand side.'
        />

        <MotionLinkButton
          href='/projects'
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
          className='col-span-full md:col-start-7 xl:col-start-9'
        >
          All projects
        </MotionLinkButton>
      </motion.section>

      <motion.div
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='mt-24 flex'
      >
        <MotionLinkButton
          href='/side-projects'
          motionProps={{
            variants: {
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { ease: 'circOut', duration: 0.5 },
              },
            },
          }}
          className='group flex w-14 items-end gap-3 self-start text-2xl font-light text-dark-400 transition-colors duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200 md:w-24 md:text-3xl'
          style={{ writingMode: 'vertical-rl' }}
          icon={
            <VscArrowRight className='rotate-[135deg] text-3xl text-dark-200 transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400 md:text-4xl' />
          }
        >
          Side projects
        </MotionLinkButton>
        <motion.section
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          viewport={{ once: true }}
          className='relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16'
        >
          {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </motion.section>
      </motion.div>
    </SectionShell>
  )
}
