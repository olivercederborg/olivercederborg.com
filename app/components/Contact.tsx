import { FC } from 'react'
import { SectionHeader } from '~/components/SectionHeader'

export const Contact: FC = ({ children }) => {
	return (
		<section id='contact' className='container pb-56'>
			<SectionHeader heading='Contact' />

			<section className='flex flex-1 mt-16 ml-24'>
				<div className='w-1/2'>
					<p className='text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8 col-span-full text-lg font-light leading-relaxed'>
						Do not hesitate to contact me through the form here or by direct email on{' '}
						<a
							href='mailto:hey@olivercederborg.com'
							className='underline-offset-[6px] decoration-dark-200 hover:decoration-dark-300 dark:decoration-dark-500 dark:hover:decoration-dark-400 underline'
						>
							hey@olivercederborg.com
						</a>{' '}
						regardless of the subject.
					</p>
				</div>
				<div className='w-1/2'>{children}</div>
			</section>
		</section>
	)
}
