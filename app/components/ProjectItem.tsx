import { motion } from 'framer-motion'
import { Link } from 'remix'
import { AnimatedText } from '~/components/AnimatedText'
import { Project } from '../../projects'

type ProjectItemProps = {
	project: Project
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
	const { name, area, link, image, imageAlt, color = '#EDEBE6' } = project
	return (
		<Link to={link} className='col-span-12 flex flex-col md:col-span-6 xl:col-span-4'>
			<motion.article
				variants={{ visible: { transition: { staggerChildren: 0.35 } } }}
				viewport={{ once: true }}
			>
				<motion.figure
					variants={{
						hidden: { scaleX: 0, originX: 0 },
						visible: {
							scaleX: 1,
							opacity: 1,
							transition: {
								duration: 0.75,
								ease: [0.9, 0.1, 0.3, 0.96],
								when: 'beforeChildren',
								delayChildren: 0.15,
							},
						},
					}}
					style={{ backgroundColor: color }}
				>
					<motion.img
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
							},
						}}
						src={image}
						alt={imageAlt}
						className='object-cover'
					/>
				</motion.figure>
				<AnimatedText
					as='p'
					text={area}
					className='mt-6 text-sm font-light text-dark-300 dark:text-dark-400'
				/>
				<AnimatedText
					as='h3'
					text={name}
					className='mt-3 text-3xl text-dark-400 dark:text-dark-200'
				/>
			</motion.article>
		</Link>
	)
}
