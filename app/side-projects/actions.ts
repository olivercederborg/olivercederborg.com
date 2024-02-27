'use server'

import { Octokit } from 'octokit'

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

export async function getProjects(categories: string[] = []) {
  const sideProjects: Sideproject[] = [
    {
      id: 0,
      name: 'Poimandres.nvim',
      area: 'Neovim Plugins',
      image:
        'https://user-images.githubusercontent.com/47901349/180445055-92480553-0652-4155-8d41-835fec27245b.png',
      imageAlt: 'Poimandres Neovim color scheme by Oliver Cederborg',
      repo: 'olivercederborg/poimandres.nvim',
      url: 'https://github.com/olivercederborg/poimandres.nvim',
      color: '#23393D',
    },
    {
      id: 1,
      name: 'use-scrollspy',
      area: 'React Hooks',
      image: 'https://mj-gallery.com/6c010f60-f86b-4a99-84b0-b98177497205/grid_0.png',
      imageAlt: 'scrollspy hook by Oliver Cederborg',
      repo: 'olivercederborg/use-scrollspy',
      url: 'https://github.com/olivercederborg/use-scrollspy',
      color: '#4D4E52',
    },
  ]

  const projects = await Promise.allSettled(
    sideProjects.map(async project => {
      if (project.repo) {
        const octokit = new Octokit({
          auth: process.env.GITHUB_TOKEN,
        })

        const {
          data: { stargazers_count: stars },
        } = await octokit.request('GET /repos/{owner}/{repo}', {
          owner: project.repo.split('/')[0],
          repo: project.repo.split('/')[1],
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })

        return {
          ...project,
          stars,
        }
      } else {
        return project
      }
    })
  )
  const successfulProjects = projects.filter(
    project => project.status === 'fulfilled'
  ) as PromiseFulfilledResult<Sideproject>[]

  if (categories.length) {
    return successfulProjects
      .filter(project => categories.includes(project.value.area.replace(/\s/g, '-').toLowerCase()))
      .map(project => project.value)
  }

  return successfulProjects.map(project => project.value)
}
