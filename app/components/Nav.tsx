import { Link } from 'remix'
import ScrollSpy from 'react-scrollspy'
import { createRef } from 'react'

export default function Nav() {
	return (
		<nav className='w-full h-32 top-0 inset-x-0 z-50 fixed bg-primary-dark/90'>
			<section className='container flex justify-between items-center h-full font-bold uppercase'>
				<Link to='/#hero'>
					<img src='/assets/logo.svg' alt='Oliver Cederborg logo' width='56' />
				</Link>
				<ScrollSpy
					items={['hero', 'projects', 'about', 'contact']}
					currentClassName='text-primary-brand underline underline-offset-8'
					className='flex gap-x-6'
					offset={-256}
				>
					<li className='hover:text-primary-brand hidden'>
						<Link to='/#hero'>Hero</Link>
					</li>
					<li className='hover:text-primary-brand'>
						<Link to='/#projects'>Projects</Link>
					</li>
					<li className='hover:text-primary-brand'>
						<Link to='/#about'>About</Link>
					</li>
					<li className='hover:text-primary-brand'>
						<Link to='/#contact'>Contact</Link>
					</li>
				</ScrollSpy>
			</section>
		</nav>
	)
}
