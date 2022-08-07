import type { HeadersFunction, LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'

import { AnimatePresence, motion } from 'framer-motion'

import { AnimatedLetters, AnimatedText } from '~/components/animated-text'
import { SideProjectItem } from '~/components/side-project-item'

export const meta: MetaFunction = () => ({
  title: 'Side Projects - Oliver Cederborg',
  description:
    "I'm a 25 year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies.",
})

export const headers: HeadersFunction = () => ({
  'Cache-Control': 'max-age=600, s-maxage=3600',
})

export type Sideproject = {
  id: number
  name: string
  area: string
  url: string
  image: string
  imageAlt: string
  color?: string
  repo?: string
  stars?: number
}

export type LoaderData = {
  projects: Required<Sideproject[]>
}

export const loader: LoaderFunction = async () => {
  const sideProjects: Sideproject[] = [
    {
      id: 0,
      name: 'Poimandres.nvim',
      area: 'Neovim Plugin',
      image:
        'https://user-images.githubusercontent.com/47901349/180445055-92480553-0652-4155-8d41-835fec27245b.png',
      imageAlt: 'Poimandres Neovim color scheme by Oliver Cederborg',
      repo: 'olivercederborg/poimandres.nvim',
      url: 'https://github.com/olivercederborg/poimandres.nvim',
      color: '#23393D',
    },
    {
      id: 1,
      name: 'Poimandres-wezterm',
      area: 'WezTerm Color Scheme',
      image:
        'https://user-images.githubusercontent.com/47901349/179416018-ba8e24a6-3590-4eff-93cb-806d41378a0d.png',
      imageAlt: 'Poimandres WezTerm color scheme by Oliver Cederborg',
      repo: 'olivercederborg/poimandres-wezterm',
      url: 'https://github.com/olivercederborg/poimandres-wezterm',
      color: '#23393D',
    },
    {
      id: 2,
      name: 'Modern Monokai',
      area: 'VSCode Color Scheme',
      image: 'https://github.com/olivercederborg/modern-monokai/raw/master/assets/screen1.png',
      imageAlt: 'Modern Monokai color scheme by Oliver Cederborg',
      repo: 'olivercederborg/modern-monokai',
      url: 'https://marketplace.visualstudio.com/items?itemName=OliverCederborg.modern-monokai',
      color: '#292E36',
    },
  ]

  const projects: Sideproject[] = []

  for await (const project of sideProjects) {
    if (project.repo) {
      const data = await fetch(`https://api.github.com/repos/${project.repo}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      })
      const { stargazers_count: stars } = (await data.json()) as unknown as {
        stargazers_count: number
      }

      projects.push({
        ...project,
        stars,
      })
    } else {
      projects.push(project)
    }
  }

  return {
    projects,
  }
}

export default function Sideprojects() {
  const { projects } = useLoaderData<LoaderData>()

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
        <AnimatePresence>
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
        </AnimatePresence>
      </motion.article>

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 mt-16'
      >
        {projects.map(project => (
          <SideProjectItem key={project.id} project={project} />
        ))}
      </motion.section>
    </main>
  )
}
