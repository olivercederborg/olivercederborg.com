import { ComponentPropsWithRef, forwardRef } from 'react'

type Props = {
	heading: string
} & ComponentPropsWithRef<'header'>

export const SectionHeader = forwardRef<HTMLElement, Props>(({ heading, ...props }, ref) => {
	return (
		<header ref={ref} {...props} className='flex items-center'>
			<h2 className='text-dark-200 dark:text-dark-400 w-24 text-sm tracking-wider uppercase'>{heading}</h2>
			<div className='flex-1 h-[1px] bg-dark-100 dark:bg-dark-700 transition-colors duration-150 ease-in-out' />
		</header>
	)
})

SectionHeader.displayName = 'SectionHeader'
