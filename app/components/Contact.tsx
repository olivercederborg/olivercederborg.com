export default function Contact({ children }: { children: React.ReactNode }) {
	return (
		<section id='contact' className='lg:py-32 bg-primary-darker px-4 py-16'>
			<article className='container'>
				<p className='text-primary-brand text-xl font-semibold uppercase'>Contact</p>
				<h2 className='uppercase md:text-4xl lg:text-5xl font-extrabold mt-6 text-3xl break-words !leading-[1.25]'>
					Get in touch
				</h2>
			</article>

			<div className='container flex gap-16 mt-12'>
				<section className='w-1/2'>
					<p className='text-stone-400 text-2xl'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint velit dolorem magni veritatis
						recusandae.
					</p>
				</section>
				<section className='w-1/2'>{children}</section>
			</div>
		</section>
	)
}
