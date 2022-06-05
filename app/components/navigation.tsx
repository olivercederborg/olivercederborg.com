import { Link } from 'remix'

import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

import { useScrollspy } from '~/hooks/use-scrollspy'

import { Logo } from '~/components/logo'
import { ThemeToggleButton } from '~/components/theme-toggle-button'

const navVariants: Variants = {
	visible: {
		transition: {
			staggerChildren: 0.05,
			delayChildren: 1,
		},
	},
}
const linkVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
}

const AnimatedLink = motion(Link)

export const Navigation = () => {
	useScrollspy({
		ids: ['intro', 'projects', 'about', 'contact'],
		hrefs: ['/#intro', '/#projects', '/#about', '/#contact'],
		offset: 'topCenter',
		activeClass: 'active-nav-link',
	})

	return (
		<motion.nav
			variants={navVariants}
			initial='hidden'
			animate='visible'
			className='container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex'
		>
			<AnimatedLink to='/#' variants={linkVariants}>
				<Logo height={36} />
			</AnimatedLink>

			<div className='flex items-center justify-center gap-x-14 text-lg'>
				<AnimatedLink
					to='/#intro'
					variants={linkVariants}
					className='hover:text-primary-brand nav-link'
				>
					Introduction
				</AnimatedLink>
				<AnimatedLink
					to='/#projects'
					variants={linkVariants}
					className='hover:text-primary-brand nav-link'
				>
					Projects
				</AnimatedLink>
				<AnimatedLink
					to='/#about'
					variants={linkVariants}
					className='hover:text-primary-brand nav-link'
				>
					About
				</AnimatedLink>
				<AnimatedLink
					to='/#contact'
					variants={linkVariants}
					className='hover:text-primary-brand nav-link'
				>
					Contact
				</AnimatedLink>

				<motion.div variants={linkVariants}>
					<ThemeToggleButton />
				</motion.div>
			</div>
		</motion.nav>
	)
}
