import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'remix'
import { SectionHeader } from '~/components/SectionHeader'
import { SectionShell } from '~/components/SectionShell'

export default function Projects() {
	return (
		<SectionShell id='projects'>
			<SectionHeader heading='Projects' />

			<section className='md:gap-x-8 lg:gap-x-16 gap-y-10 md:ml-24 relative grid grid-cols-12 mt-16'>
				<p className='text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8 col-span-full text-lg font-light leading-relaxed'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi maxime, nobis aperiam at
					ducimus id praesentium ut itaque eos, suscipit doloremque quaerat deleniti officia accusamus.
				</p>
				<Link
					to='/projects'
					className='text-dark-400 dark:text-dark-200 hover:text-dark-500 group md:col-start-7 xl:col-start-9 col-span-full flex items-center self-start text-3xl font-light transition duration-300 ease-in-out'
				>
					All projects
					<VscArrowRight
						size={36}
						className='text-dark-200 dark:text-dark-400 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 ml-3 transition duration-300 ease-in-out rotate-45'
					/>
				</Link>
			</section>

			<div className='flex mt-24'>
				<Link
					to='/side-projects'
					className='text-dark-400 dark:text-dark-200 hover:text-dark-500 group md:w-24 md:text-3xl w-14 flex items-end self-start gap-3 text-2xl font-light transition duration-300 ease-in-out'
					style={{ writingMode: 'vertical-rl' }}
				>
					Side projects
					<VscArrowRight className='text-dark-200 text-3xl md:text-4xl dark:text-dark-400 group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 transition duration-300 ease-in-out rotate-[135deg]' />
				</Link>
				<section className='md:gap-x-8 lg:gap-x-16 gap-y-12 md:gap-y-16 relative grid flex-1 grid-cols-12'>
					{[...Array(3).keys()].map(t => (
						<Link
							to='/projects/miinto'
							key={t}
							className='md:col-span-6 xl:col-span-4 flex flex-col col-span-12'
						>
							<img
								src='https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png'
								alt='Miinto 2.0 app design'
								className='object-cover'
							/>
							<p className='text-dark-300 dark:text-dark-400 mt-6 text-sm font-light'>
								Design and Development
							</p>
							<h3 className='text-dark-400 dark:text-dark-200 mt-3 text-3xl'>Miinto 2.0</h3>
						</Link>
					))}
				</section>
			</div>
		</SectionShell>
	)
}
