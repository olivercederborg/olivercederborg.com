import ScrollSpy from 'react-scrollspy'
import { Link } from 'remix'
import { useTheme } from '~/hooks/useTheme'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Logo } from '~/components/Logo'

export default function Nav() {
	const { isDarkMode, toggleTheme } = useTheme()
	return (
		<nav className='fixed inset-x-0 top-0 z-50 w-full h-32'>
			<section className='container flex items-center justify-between h-full'>
				<Link to='/#hero' tabIndex={1}>
					<Logo height={36} />
				</Link>
				<ScrollSpy
					items={['hero', 'projects', 'about', 'contact']}
					currentClassName='active-nav-link'
					className='gap-x-14 flex items-center justify-center text-lg'
					offset={-256}
				>
					<li className='hover:text-primary-brand hidden'>
						<Link to='/#hero'>Hero</Link>
					</li>
					<li className='hover:text-primary-brand nav-link'>
						<Link to='/#projects' tabIndex={0}>
							Projects
						</Link>
					</li>
					<li className='hover:text-primary-brand nav-link'>
						<Link to='/#about' tabIndex={0}>
							About
						</Link>
					</li>
					<li className='hover:text-primary-brand nav-link'>
						<Link to='/#contact' tabIndex={0}>
							Contact
						</Link>
					</li>
					<li className='hover:text-primary-brand nav-link'>
						<button onClick={toggleTheme}>
							{isDarkMode ? (
								<MdOutlineLightMode title='Light mode' size={24} />
							) : (
								<MdOutlineDarkMode title='Dark mode' size={24} />
							)}
						</button>
					</li>
				</ScrollSpy>
			</section>
		</nav>
	)
}
