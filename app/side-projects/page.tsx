import { SideProjectItem } from '@components/side-project-item'
import { getProjects } from './actions'
import { SideProjectsShell } from '@side-projects/side-project-shell'
import { type Metadata } from 'next'
import { getAge } from '@utils/get-age'

export const metadata: Metadata = {
  title: 'Side Projects - Oliver Cederborg',
  description: `I'm a ${getAge()} year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies.`,
}

export default async function Page({
  searchParams,
}: {
  searchParams: {
    categories?: string
  }
}) {
  const allProjects = await getProjects()
  const filteredProjects = await getProjects(searchParams.categories?.split(','))

  const filterOptions = allProjects.map(project => ({
    label: project.area,
    value: project.area.replace(/\s/g, '-').toLowerCase(),
  }))

  return <SideProjectsShell projects={filteredProjects} filterOptions={filterOptions} />
}

export const revalidate = 3600
