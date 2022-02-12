import { motion } from 'framer-motion'
import type { FC } from 'react'
import { SectionHeader } from '~/components/SectionHeader'
import { SectionShell } from '~/components/SectionShell'

const Contact: FC = ({ children }) => (
	<SectionShell id='contact'>
		<SectionHeader heading='Contact' />

		<motion.section
			variants={{
				visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
			}}
			initial='hidden'
			whileInView='visible'
			exit='hidden'
			viewport={{ once: true }}
			className='mt-16 flex flex-1 flex-col gap-x-16 gap-y-24 md:ml-24 md:flex-row'
		>
			<div className='md:w-1/2'>
				<p className='col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8'>
					Do not hesitate to contact me through the form here or by direct email on{' '}
					<a
						href='mailto:hey@olivercederborg.com'
						className='underline decoration-dark-200 underline-offset-[6px] hover:decoration-dark-300 dark:decoration-dark-500 dark:hover:decoration-dark-400'
					>
						hey@olivercederborg.com
					</a>{' '}
					regardless of the subject.
				</p>
			</div>
			<motion.div
				variants={{
					visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
				}}
				initial='hidden'
				whileInView='visible'
				exit='hidden'
				viewport={{ once: true }}
				className='md:w-1/2'
			>
				{children}
			</motion.div>
		</motion.section>
	</SectionShell>
)
export default Contact
