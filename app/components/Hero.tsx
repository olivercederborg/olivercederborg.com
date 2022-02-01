import { Link } from 'remix'

export default function Hero() {
	return (
		<header id='hero' className='pt-72 container flex flex-col justify-center px-4 pb-64'>
			<article>
				<h1 className='md:text-5xl lg:text-7xl mt-10 text-4xl font-semibold !leading-snug break-words'>
					<div className='text-primary-brand mb-8 text-4xl font-medium'>Hi, I&apos;m Oliver </div>I design and
					develop applications.
				</h1>
				<p className='text-stone-400 mt-10 text-2xl font-light'>
					I&apos;m a full-time front-end developer with a passion for great design.
				</p>
			</article>

			<Link
				to='#projects'
				className='hover:translate-x-4 self-start mt-32 text-4xl font-medium transition-transform duration-150 ease-in-out'
			>
				See my projects
			</Link>
		</header>
	)
}
