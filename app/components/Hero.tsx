import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'remix'

export default function Hero() {
	return (
		<header
			id='intro'
			className='pt-96 bg-light-hero dark:bg-dark-hero pb-80 container flex flex-col justify-center px-4 bg-[105%_20vh] bg-no-repeat'
		>
			<article className='xl:max-w-[50%]'>
				<h1 className='text-7xl font-medium leading-tight'>I design and develop applications.</h1>
				<p className='text-dark-400 dark:text-dark-200 mt-10 text-lg font-light leading-relaxed'>
					I&apos;m a full-time front-end developer with a passion for great design and user experiences.
				</p>
			</article>

			<Link
				to='#projects'
				className='text-dark-400 dark:text-dark-200 hover:text-dark-500 group flex items-center mt-24 text-3xl font-light transition duration-300 ease-in-out'
			>
				Explore my projects
				<VscArrowRight
					size={36}
					className='text-dark-200 dark:text-dark-400 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 ml-3 transition duration-300 ease-in-out rotate-45'
				/>
			</Link>
		</header>
	)
}
