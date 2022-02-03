import { FC } from 'react'
import { SectionHeader } from '~/components/SectionHeader'
import { SectionShell } from '~/components/SectionShell'

const Contact: FC = ({ children }) => (
	<SectionShell id='contact'>
		<SectionHeader heading='Contact' />

		<section className='gap-x-16 md:flex-row md:ml-24 gap-y-24 flex flex-col flex-1 mt-16'>
			<div className='md:w-1/2'>
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
			<div className='md:w-1/2'>{children}</div>
		</section>
	</SectionShell>
)
export default Contact
