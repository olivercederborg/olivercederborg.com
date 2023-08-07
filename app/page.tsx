import { ContactForm } from '@components/contact-form'
import { About } from '@templates/about'
import { ContactShell } from '@templates/contact-shell'
import { Hero } from '@templates/hero'
import { Projects } from '@templates/projects'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <ContactShell>
        <ContactForm />
      </ContactShell>
    </main>
  )
}
