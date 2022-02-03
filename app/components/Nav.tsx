import ScrollSpy from 'react-scrollspy'
import { useTheme } from '~/hooks/useTheme'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Logo } from '~/components/Logo'
import { Link } from 'remix'

export default function Nav() {
	const { theme, toggleTheme } = useTheme()
	return (
		<nav className='container fixed inset-x-0 top-0 z-50 flex items-center justify-between w-full h-32'>
			<Link to='/#hero' tabIndex={0}>
				<Logo height={36} />
			</Link>

			<ScrollSpy
				items={['intro', 'projects', 'about', 'contact']}
				currentClassName='active-nav-link'
				className='gap-x-14 flex items-center justify-center text-lg'
				componentTag='div'
				offset={-256}
			>
				<Link to='/#intro' className='hover:text-primary-brand nav-link'>
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

				<button
					className='hover:text-primary-brand text-dark-400 dark:text-dark-300 hover:text-dark-500 dark:hover:text-dark-200'
					onClick={toggleTheme}
				>
					{theme === 'dark' ? (
						<MdOutlineLightMode title='Light mode' size={24} />
					) : (
						<MdOutlineDarkMode title='Dark mode' size={24} />
					)}
				</button>
			</ScrollSpy>
		</nav>
	)
}
