export default function Footer() {
	return (
		<footer className='container flex justify-between py-16'>
			<section className='flex w-1/2 gap-12 text-xl'>
				<a
					href='https://dribbble.com/oliver'
					target='_blank'
					rel='noreferrer'
					className='nav-link text-xl text-dark-500'
				>
					Dribbble
				</a>
				<a
					href='https://www.linkedin.com/in/olivercederborg/'
					target='_blank'
					rel='noreferrer'
					className='nav-link text-xl text-dark-500'
				>
					Linkedin
				</a>
			</section>
			<p className='font-light text-dark-300 dark:text-dark-400'>&copy; Oliver Cederborg</p>
		</footer>
	)
}
