import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'remix'

export default function Hero() {
	return (
		<header
			id='intro'
			className='bg-light-hero bg-[length:512px] bg-[right_-5rem_bottom_-12rem] bg-no-repeat pt-48 pb-80 shadow-[inset_0_-40px_15px_-10px_#ededed] transition duration-300 ease-in-out dark:bg-dark-hero dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto md:bg-[right_-12rem_bottom_-16rem] lg:bg-[right_-6rem_center] lg:pt-48 lg:pb-64 xl:bg-[right_-4rem_top_15rem] xl:py-80 2xl:bg-[right_20%_top_15rem]'
		>
			<div className='container'>
				<article className='lg:max-w-[60%]'>
					<h1 className='text-5xl font-medium !leading-tight md:text-6xl lg:text-7xl'>
						I design and develop applications.
					</h1>
					<p className='mt-10 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'>
						I&apos;m a full-time front-end developer with a passion for great design and user
						experiences.
					</p>
				</article>

				<Link
					to='#projects'
					className='group mt-24 flex items-center text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200'
				>
					Explore my projects
					<VscArrowRight
						size={36}
						className='ml-3 rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400'
					/>
				</Link>
			</div>
		</header>
	)
}
