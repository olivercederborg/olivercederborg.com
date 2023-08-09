import { getProjects } from '@actions'
import { SideProjectItem } from '@components/side-project-item'

export default async function Page() {
  const projects = await getProjects()

  return (
    <>
      {projects.map(project => (
        <SideProjectItem key={project.id} project={project} />
      ))}
    </>
  )
}
