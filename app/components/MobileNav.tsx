import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import ScrollSpy from 'react-scrollspy'
import { Link, useLocation } from 'remix'
import Logo from '~/components/Logo'
import { ThemeToggleButton } from '~/components/ThemeToggleButton'
import { useClickOutside } from '~/hooks/useClickOutside'

const navVariants = {
	hidden: {
		x: '100%',
		transition: {
			duration: 0.3,
			ease: 'circOut',
			when: 'afterChildren',
			staggerChildren: 0.1
		}
	},
	visible: {
		x: 0,
		transition: {
			duration: 0.3,
			ease: 'circOut',
			when: 'beforeChildren',
			staggerChildren: 0.1
		}
	}
}

const linkVariants = {
	hidden: {
		opacity: 0,
		x: -20
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'circOut'
		}
	}
}

const MotionLink = motion(Link)

export default function MobileNav() {
	const navRef = useRef<HTMLElement>(null)
	const navToggleRef = useRef<HTMLButtonElement>(null)
	const [isOpen, setIsOpen] = useState(false)
	const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])
	useClickOutside([navRef, navToggleRef], () => setIsOpen(false))

	const location = useLocation()
	useEffect(() => setIsOpen(false), [location])

	useEffect(() => {
		if (isOpen) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'visible'
	}, [isOpen])
	return (
		<>
			<Link to='/#' className='top-8 left-4 fixed z-30'>
				<Logo height={36} />
			</Link>

			<button
				ref={navToggleRef}
				type='button'
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				onClick={toggle}
				className='md:hidden'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='top-8 right-4 fixed z-30 w-8 h-8'
				>
					<AnimatePresence exitBeforeEnter>
						{isOpen ? (
							<motion.path
								key='close'
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1, pathOffset: 0 }}
								exit={{ pathOffset: 1 }}
								transition={{ duration: 1, ease: 'circOut' }}
								strokeLinecap='square'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<motion.path
								key='open'
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1, pathOffset: 0 }}
								exit={{ pathOffset: 1 }}
								transition={{ duration: 0.5, ease: 'circOut' }}
								strokeLinecap='square'
								strokeWidth={2}
								d='M4 8h16M4 16h16'
							/>
						)}
					</AnimatePresence>
				</svg>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						ref={navRef}
						variants={navVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
						className='md:hidden bg-dark-200 dark:bg-dark-700 container fixed top-0 right-0 z-20 flex flex-col items-center justify-between w-9/12 h-full'
					>
						<ScrollSpy
							items={['intro', 'projects', 'about', 'contact']}
							currentClassName='active-nav-link'
							className='gap-y-14 flex flex-col items-center justify-center h-full'
							componentTag='div'
							offset={-256}
						>
							<MotionLink
								to='/#'
								variants={linkVariants}
								className='hover:text-primary-brand nav-link text-2xl'
							>
								Introduction
							</MotionLink>
							<MotionLink
								to='/#projects'
								variants={linkVariants}
								className='hover:text-primary-brand nav-link text-2xl'
							>
								Projects
							</MotionLink>
							<MotionLink
								to='/#about'
								variants={linkVariants}
								className='hover:text-primary-brand nav-link text-2xl'
							>
								About
							</MotionLink>
							<MotionLink
								to='/#contact'
								variants={linkVariants}
								className='hover:text-primary-brand nav-link text-2xl'
							>
								Contact
							</MotionLink>
							<motion.div variants={linkVariants}>
								<ThemeToggleButton />
							</motion.div>
						</ScrollSpy>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	)
}
