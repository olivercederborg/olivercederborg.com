import { HTMLMotionProps, motion } from 'framer-motion'
import { ComponentPropsWithRef, forwardRef } from 'react'

const lineVariants = {
	hidden: {
		originX: 0,
		scaleX: 0
	},
	visible: {
		scaleX: 1,
		transition: {
			duration: 0.75,
			ease: 'circOut'
		}
	}
}

const headerVariants = {
	hidden: {
		opacity: 0,
		x: -20
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.75,
			ease: 'circOut'
		}
	}
}

const parentVariants = {
	visible: {
		opacity: 1,
		transition: {
			// when: 'beforeChildren',
			staggerChildren: 0.25
		}
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren'
		}
	}
}

type Props = {
	heading: string
} & ComponentPropsWithRef<'header'> &
	HTMLMotionProps<'header'>

export const SectionHeader = forwardRef<HTMLElement, Props>(({ heading, ...props }, ref) => (
	<motion.header
		ref={ref}
		{...props}
		className='flex items-center'
		variants={parentVariants}
		initial='hidden'
		whileInView='visible'
		viewport={{ once: true }}
	>
		<motion.h2
			variants={headerVariants}
			className='text-dark-200 dark:text-dark-400 w-24 text-sm tracking-wider uppercase'
		>
			{heading}
		</motion.h2>
		<motion.div
			variants={lineVariants}
			className='flex-1 h-[1px] bg-dark-100 dark:bg-dark-700 transition-colors duration-150 ease-in-out'
		/>
	</motion.header>
))

SectionHeader.displayName = 'SectionHeader'
