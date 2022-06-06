import { Link } from 'remix'

import { motion } from 'framer-motion'

import { useScrollspy } from '~/hooks/use-scrollspy'

import { Logo } from '~/components/logo'
import { linkVariants, navVariants } from '~/components/navigation'
import { ThemeToggleButton } from '~/components/theme-toggle-button'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: 'hover:text-primary-brand nav-link' }

export const Navigation = () => {
	useScrollspy({
		ids: ['intro', 'projects', 'about', 'contact'],
		hrefs: ['/#intro', '/#projects', '/#about', '/#contact'],
		offset: 'topCenter',
		activeClass: 'active-nav-link',
	})

	return (
		<motion.header
			variants={navVariants}
			initial='hidden'
			animate='visible'
			className='container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex'
		>
			<AnimatedLink to='/#' variants={linkVariants} className=''>
				<Logo height={36} />
			</AnimatedLink>

			<nav className='flex items-center justify-center gap-x-14 text-lg'>
				<AnimatedLink to='/#intro' variants={linkVariants}>
					Introduction
				</AnimatedLink>
				<AnimatedLink to='/#projects' variants={linkVariants}>
					Projects
				</AnimatedLink>
				<AnimatedLink to='/#about' variants={linkVariants}>
					About
				</AnimatedLink>
				<AnimatedLink to='/#contact' variants={linkVariants}>
					Contact
				</AnimatedLink>

				<motion.div variants={linkVariants}>
					<ThemeToggleButton />
				</motion.div>
			</nav>
		</motion.header>
	)
}
