import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'remix'
import { SectionHeader } from '~/components/SectionHeader'
import { IoLogoFigma } from 'react-icons/io5'
import { SiVim, SiTailwindcss, SiTypescript, SiReact, SiVuedotjs, SiNextdotjs } from 'react-icons/si'

export default function About() {
	return (
		<section id='about' className='container pb-56'>
			<SectionHeader heading='About' />

			<section className='md:gap-x-8 lg:gap-x-16 gap-y-10 relative grid grid-cols-12 mt-16 ml-24'>
				<p className='text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8 col-span-full text-lg font-light leading-relaxed'>
					Get a brief look at who I am and what I do. <br />
					If you would like to know more about me and my interests, you can.
				</p>
				<Link
					to='/projects'
					className='text-dark-400 dark:text-dark-200 hover:text-dark-500 group md:col-start-7 xl:col-start-9 col-span-full flex items-center self-start text-3xl font-light transition duration-300 ease-in-out'
				>
					Dig deeper
					<VscArrowRight
						size={36}
						className='text-dark-200 dark:text-dark-400 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 ml-3 transition duration-300 ease-in-out rotate-45'
					/>
				</Link>
			</section>

			<section className='md:gap-x-8 lg:gap-x-16 gap-y-10 md:grid relative flex flex-col-reverse grid-cols-12 mt-24 ml-24'>
				<section className='md:col-span-6 xl:col-span-8 col-span-full'>
					<article>
						<h3 className='text-dark-200 dark:text-dark-400 w-24 text-sm tracking-wider uppercase'>
							Who am I
						</h3>
						<p className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'>
							My name is Oliver Cederborg. I am 24 years old, I live in Copenhagen, Denmark, and I’m a
							self-taught designer and developer.
							<br />
							<br />
							Digital design has been my main focus for many years, specifically UI/UX, but I have the
							past years shifted my focus to front-end development, which I have developed a great passion
							for.
							<br />
							<br />
							I enjoy the constant change in the technologies used in the area and love diving into new
							frameworks and technologies.
							<br />
							<br />I try to challenge myself by diving head-first into the unknown, and learning the
							skills along the way, needed to complete the task.
						</p>
					</article>

					<section className='md:col-span-6 xl:col-span-8 col-span-full mt-14'>
						<h3 className='text-dark-200 dark:text-dark-400 w-24 text-sm tracking-wider uppercase'>
							Tech I enjoy
						</h3>
						<div className='text-dark-300 flex flex-wrap gap-6 mt-6'>
							<IoLogoFigma size={28} title='Figma' />
							<SiVim size={28} title='Vim' />
							<SiTailwindcss size={28} title='TailwindCSS' />
							<SiTypescript size={28} title='TypeScript' />
							<SiReact size={28} title='React.js' />
							<SiVuedotjs size={28} title='Vue.js' />
							<SiNextdotjs size={28} title='Next.js' />
						</div>
					</section>
				</section>

				<img
					src='/assets/olivercederborg-portrait.jpg'
					alt='Portrait of Oliver Cederborg'
					className='md:col-start-7 xl:col-start-9 md:col-span-full md:w-full w-2/3'
				/>
			</section>
		</section>
	)
}
