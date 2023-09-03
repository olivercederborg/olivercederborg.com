import { getAge } from '@utils/get-age'
import { Metadata } from 'next'
import { SideProjectsShell } from './side-project-shell'

export const metadata: Metadata = {
  title: 'Side Projects - Oliver Cederborg',
  description: `I'm a ${getAge()} year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies.`,
}

export default function SideProjectLayout({ children }: { children: React.ReactNode }) {
  return <SideProjectsShell>{children}</SideProjectsShell>
}
