export default function About() {
	return (
		<section id='about' className='md:flex-row lg:py-32 container flex flex-col-reverse gap-32 px-4 py-16 mb-32'>
			<article className='md:w-2/4'>
				<p className='text-primary-brand text-xl font-semibold uppercase'>About</p>
				<h2 className='uppercase md:text-4xl lg:text-5xl font-extrabold mt-6 text-3xl break-words !leading-[1.25]'>
					Who am I
				</h2>
				<p className='text-stone-400 mt-10 text-2xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint velit dolorem magni veritatis
					recusandae consectetur soluta reprehenderit non provident fuga dolores, numquam, hic alias sed
					asperiores assumenda minus laborum tempora.
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum, at dolorum, beatae adipisci
					libero dolores reiciendis velit nobis architecto soluta asperiores praesentium dignissimos repellat
					quia voluptatum molestias totam aliquid!
				</p>
			</article>
			<figure className='shadow-[8px_8px_0_#987760] w-3/5 md:w-2/4 xl:w-1/4 block self-start'>
				<img
					src='/assets/olivercederborg-portrait.jpg'
					alt='Portrait of Oliver Cederborg'
					className='mix-blend-difference'
				/>
			</figure>
		</section>
	)
}
