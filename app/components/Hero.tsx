import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'remix'

export default function Hero() {
	return (
		<header
			id='intro'
			className='lg:pt-48 pt-48 pb-80 bg-light-hero dark:bg-dark-hero xl:py-80 lg:pb-64 px-4 md:bg-[right_-12rem_bottom_-16rem] lg:bg-[right_-6rem_center] xl:bg-[right_-4rem_top_15rem] 2xl:bg-[right_20%_top_15rem] bg-[right_-5rem_bottom_-12rem] dark:shadow-[inset_0_-40px_15px_-10px_#171717] shadow-[inset_0_-40px_15px_-10px_#efefef] bg-no-repeat bg-[length:512px] md:bg-auto transition duration-300 ease-in-out'
		>
			<div className='container'>
				<article className='lg:max-w-[60%]'>
					<h1 className='lg:text-7xl md:text-6xl text-5xl font-medium !leading-tight'>
						I design and develop applications.
					</h1>
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
			</div>
		</header>
	)
}
