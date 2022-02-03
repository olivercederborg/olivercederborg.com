import { ComponentPropsWithoutRef, FC } from 'react'

type SectionShellProps = ComponentPropsWithoutRef<'section'>

export const SectionShell: FC<SectionShellProps> = ({ children, ...props }) => (
	<section className='md:pb-64 container pb-40' {...props}>
		{children}
	</section>
)
