export default function Hero() {
	return (
		<header id='hero' className='container flex flex-col justify-center pb-64 pt-72 px-4'>
			<article>
				<h1>
					<div className='text-primary-brand text-3xl font-semibold uppercase'>Hi, I'm Oliver </div>
					<div className='uppercase md:text-5xl lg:text-6xl font-extrabold mt-10 text-4xl break-words !leading-[1.25]'>
						I design and develop applications.
					</div>
				</h1>
				<p className='text-stone-400 mt-14 text-3xl'>
					I'm a full-time front-end developer with a passion for great design.
				</p>
			</article>
			<a
				href='#projects'
				className='uppercase hover:translate-x-4 transition-transform duration-150 font-semibold text-4xl mt-32 ease-in-out'
			>
				See my projects <span className='ml-6'>&rarr;</span>
			</a>
		</header>
	)
}
