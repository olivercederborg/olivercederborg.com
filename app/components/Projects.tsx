import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'remix'
import { SectionHeader } from '~/components/SectionHeader'
import { SectionShell } from '~/components/SectionShell'

export default function Projects() {
	return (
		<SectionShell id='projects'>
			<SectionHeader heading='Projects' />

			<section className='relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16'>
				<p className='col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi maxime, nobis
					aperiam at ducimus id praesentium ut itaque eos, suscipit doloremque quaerat deleniti
					officia accusamus.
				</p>
				<Link
					to='/projects'
					className='group col-span-full flex items-center self-start text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200 md:col-start-7 xl:col-start-9'
				>
					All projects
					<VscArrowRight
						size={36}
						className='ml-3 rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400'
					/>
				</Link>
			</section>

			<div className='mt-24 flex'>
				<Link
					to='/side-projects'
					className='group flex w-14 items-end gap-3 self-start text-2xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200 md:w-24 md:text-3xl'
					style={{ writingMode: 'vertical-rl' }}
				>
					Side projects
					<VscArrowRight className='rotate-[135deg] text-3xl text-dark-200 transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400 md:text-4xl' />
				</Link>
				<section className='relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16'>
					{[...Array(3).keys()].map(t => (
						<Link
							to='/projects/miinto'
							key={t}
							className='col-span-12 flex flex-col md:col-span-6 xl:col-span-4'
						>
							<img
								src='https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png'
								alt='Miinto 2.0 app design'
								className='object-cover'
							/>
							<p className='mt-6 text-sm font-light text-dark-300 dark:text-dark-400'>
								Design and Development
							</p>
							<h3 className='mt-3 text-3xl text-dark-400 dark:text-dark-200'>Miinto 2.0</h3>
						</Link>
					))}
				</section>
			</div>
		</SectionShell>
	)
}
