export type Project = {
  id: number
  name: string
  area: string
  link: string
  image: string
  imageAlt: string
  color?: string
}

export const projects: Project[] = [
  {
    id: 0,
    name: 'Poimandres.nvim',
    area: 'Neovim Plugin',
    image:
      'https://user-images.githubusercontent.com/47901349/180445055-92480553-0652-4155-8d41-835fec27245b.png',
    imageAlt: 'Poimandres Neovim color scheme by Oliver Cederborg',
    link: 'https://github.com/olivercederborg/poimandres.nvim',
    color: '#23393D',
  },
  {
    id: 1,
    name: 'Poimandres-wezterm',
    area: 'WezTerm Color Scheme',
    image:
      'https://user-images.githubusercontent.com/47901349/179416018-ba8e24a6-3590-4eff-93cb-806d41378a0d.png',
    imageAlt: 'Poimandres WezTerm color scheme by Oliver Cederborg',
    link: 'https://github.com/olivercederborg/poimandres-wezterm',
    color: '#23393D',
  },
  {
    id: 2,
    name: 'Modern Monokai',
    area: 'VSCode Color Scheme',
    image: 'https://github.com/olivercederborg/modern-monokai/raw/master/assets/screen1.png',
    imageAlt: 'Modern Monokai color scheme by Oliver Cederborg',
    link: 'https://marketplace.visualstudio.com/items?itemName=OliverCederborg.modern-monokai',
    color: '#292E36',
  },
]
