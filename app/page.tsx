import { About } from '@templates/about'
import { Hero } from '@templates/hero'
import { Projects } from '@templates/projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      {/* <Contact /> */}
    </main>
  )
}
