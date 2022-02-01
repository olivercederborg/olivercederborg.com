import { ComponentPropsWithRef, forwardRef } from 'react'

type Props = {
	subHeading: string
	heading: string
	description: string
} & ComponentPropsWithRef<'article'>

export const SectionHeader = forwardRef<HTMLElement, Props>(({ heading, subHeading, description, ...props }, ref) => {
	return (
		<article ref={ref} {...props}>
			<div>
				<div className='' />
				<p className='text-primary-brand text-xl font-medium'>{subHeading}</p>
			</div>
			<h2 className='md:text-4xl lg:text-5xl mt-10 text-3xl font-semibold break-words'>{heading}</h2>
			<p className='text-stone-400 mt-10 text-2xl font-light'>{description}</p>
		</article>
	)
})

SectionHeader.displayName = 'SectionHeader'
