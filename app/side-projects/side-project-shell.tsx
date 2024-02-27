'use client'

import { AnimatedLetters, AnimatedText } from '@components/animated-text'
import { Combobox, ComboboxOption } from '@components/combobox'
import { SideProjectItem } from '@components/side-project-item'
import { Sideproject } from '@side-projects/actions'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'

export function SideProjectsShell({
  projects,
  filterOptions,
}: {
  projects: Sideproject[]
  filterOptions: ComboboxOption[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const activeCategories =
    searchParams
      .get('categories')
      ?.split(',')
      ?.filter(category =>
        filterOptions.some(option => option.value === category.replace(/\s/g, '-').toLowerCase())
      ) || []

  function onCategoriesChange(value: string[]) {
    const searchParams = new URLSearchParams()
    if (value.length) {
      searchParams.set('categories', encodeURI(value.join(',')))
      router.push(`/side-projects?${searchParams}`)
    } else {
      router.replace('/side-projects')
    }
  }

  return (
    <main className='container py-40'>
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
        <AnimatedLetters
          key='title'
          as='h1'
          text='Side Projects'
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
          text='This is where I keep my side projects. You will find stuff like web and mobile apps, automation projects and Neovim plugins.'
        />
      </motion.article>

      <Combobox
        options={filterOptions}
        initialValue={activeCategories}
        onChange={onCategoriesChange}
      />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        className='relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 mt-16'
      >
        <AnimatePresence>
          {projects.map(project => (
            <SideProjectItem key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.section>
    </main>
  )
}
