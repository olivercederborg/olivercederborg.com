import Image from 'next/image'
import type { Project } from '../../projects'

type ProjectHeaderProps = {
  project: Project
}

export const ProjectHeaderMDX = ({ project }: ProjectHeaderProps) => (
  <header className='flex-col-reverse flex lg:flex-row container mt-40 lg:items-center mb-20'>
    <section className='w-full lg:w-1/2 z-10 break-words'>
      <div className='mb-6 text-xl font-light leading-relaxed text-dark-400 dark:text-dark-200'>
        Coming soon...
      </div>

      <h2 className='text-4xl font-medium !leading-tight md:text-5xl lg:text-6xl'>
        {project.name}
      </h2>

      <h4 className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'>
        {project.area}
      </h4>
    </section>

    <figure className='h-full w-full mb-8 lg:mt-0 lg:w-1/2 aspect-[4/3]'>
      <Image src={project.image} alt={project.imageAlt} className='w-full h-full object-cover' />
    </figure>
  </header>
)
