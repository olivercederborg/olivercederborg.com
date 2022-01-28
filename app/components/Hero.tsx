export default function Hero() {
	return (
		<header id='hero' className='pt-72 container flex flex-col justify-center px-4 pb-64'>
			<article>
				<h1>
					<div className='text-primary-brand text-3xl font-semibold uppercase'>Hi, I&apos;m Oliver </div>
					<div className='uppercase md:text-5xl lg:text-6xl font-extrabold mt-10 text-4xl break-words !leading-[1.25]'>
						I design and develop applications.
					</div>
				</h1>
				<p className='text-stone-400 mt-14 text-3xl'>
					I&apos;m a full-time front-end developer with a passion for great design.
				</p>
			</article>
			<a
				href='#projects'
				className='hover:translate-x-4 mt-32 text-4xl font-semibold uppercase transition-transform duration-150 ease-in-out'
			>
				See my projects <span className='ml-6'>&rarr;</span>
			</a>
		</header>
	)
}
