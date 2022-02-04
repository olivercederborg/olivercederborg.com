import { motion } from 'framer-motion'
import ScrollSpy from 'react-scrollspy'
import { Link } from 'remix'
import Logo from '~/components/Logo'
import { ThemeToggleButton } from '~/components/ThemeToggleButton'

const navVariants = {
	hidden: {
		opacity: 0,
		y: -100
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.25,
			duration: 0.5,
			ease: 'backOut'
		}
	}
}

export default function Nav() {
	return (
		<motion.nav
			variants={navVariants}
			initial='hidden'
			animate='visible'
			className='container fixed inset-x-0 top-0 z-50 flex items-center justify-between w-full h-32'
		>
			<Link to='/#' tabIndex={0}>
				<Logo height={36} />
			</Link>

			<ScrollSpy
				items={['intro', 'projects', 'about', 'contact']}
				currentClassName='active-nav-link'
				className='gap-x-14 flex items-center justify-center text-lg'
				componentTag='div'
				offset={-256}
			>
				<Link to='/#' className='hover:text-primary-brand nav-link'>
					Introduction
				</Link>
				<Link to='/#projects' className='hover:text-primary-brand nav-link'>
					Projects
				</Link>
				<Link to='/#about' className='hover:text-primary-brand nav-link'>
					About
				</Link>
				<Link to='/#contact' className='hover:text-primary-brand nav-link'>
					Contact
				</Link>

				<ThemeToggleButton />
			</ScrollSpy>
		</motion.nav>
	)
}
