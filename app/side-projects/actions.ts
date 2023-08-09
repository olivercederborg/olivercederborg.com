'use server'

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

export async function getProjects() {
  const sideProjects: Sideproject[] = [
    {
      id: 0,
      name: 'use-scrollspy',
      area: 'React Hook',
      image: 'https://mj-gallery.com/6c010f60-f86b-4a99-84b0-b98177497205/grid_0.png',
      imageAlt: 'scrollspy hook by Oliver Cederborg',
      repo: 'olivercederborg/use-scrollspy',
      url: 'https://github.com/olivercederborg/use-scrollspy',
      color: '#4D4E52',
    },
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      name: 'Modern Monokai',
      area: 'VSCode Color Scheme',
      image: 'https://github.com/olivercederborg/modern-monokai/raw/master/assets/screen1.png',
      imageAlt: 'Modern Monokai color scheme by Oliver Cederborg',
      repo: 'olivercederborg/modern-monokai',
      url: 'https://marketplace.visualstudio.com/items?itemName=OliverCederborg.modern-monokai',
      color: '#292E36',
    },
  ]

  // Optimized project fetching with Promise.all
  const projects = await Promise.all(
    sideProjects.map(async project => {
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

        return {
          ...project,
          stars,
        }
      } else {
        return project
      }
    })
  )

  // Sequential project fetching
  /* for await (const project of sideProjects) { */
  /*   if (project.repo) { */
  /*     const data = await fetch(`https://api.github.com/repos/${project.repo}`, { */
  /*       headers: { */
  /*         Accept: 'application/vnd.github.v3+json', */
  /*         Authorization: `token ${process.env.GITHUB_TOKEN}`, */
  /*       }, */
  /*     }) */
  /*     const { stargazers_count: stars } = (await data.json()) as unknown as { */
  /*       stargazers_count: number */
  /*     } */
  /**/
  /*     projects.push({ */
  /*       ...project, */
  /*       stars, */
  /*     }) */
  /*   } else { */
  /*     projects.push(project) */
  /*   } */
  /* } */

  return projects
}
