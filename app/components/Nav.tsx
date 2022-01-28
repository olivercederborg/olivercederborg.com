import ScrollSpy from 'react-scrollspy'
import { Link } from 'remix'

export default function Nav() {
	return (
		<nav className='bg-primary-dark/90 fixed inset-x-0 top-0 z-50 w-full h-32'>
			<section className='container flex items-center justify-between h-full font-bold uppercase'>
				<Link to='/#hero' tabIndex={1}>
					<img src='/assets/logo.svg' alt='Oliver Cederborg logo' width='56' />
				</Link>
				<ScrollSpy
					items={['hero', 'projects', 'about', 'contact']}
					currentClassName='active-nav-link'
					className='gap-x-6 flex'
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
				</ScrollSpy>
			</section>
		</nav>
	)
}
