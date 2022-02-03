import clsx from 'clsx'
import { FC, forwardRef } from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import { useField } from 'remix-validated-form'

type InputProps = {
	name: string
	label: string
	placeholder: string
	required?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, label, placeholder, required = false }, ref) => {
	const { error, getInputProps, touched } = useField(name)
	return (
		<div>
			<label
				htmlFor={name}
				className={clsx(
					'text-dark-400 dark:text-dark-200 inline-flex flex-col text-xl font-light relative ',
					required && "after:content-['*'] after:absolute after:-right-4 after:text-dark-300"
				)}
			>
				{label}
			</label>
			<input
				ref={ref}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...getInputProps({ id: name, placeholder })}
				className={clsx(
					'py-4 px-3 bg-transparent text-2xl text-dark-400 dark:text-dark-200 dark:placeholder:text-dark-500 font-light mt-2 border-b-[1px] border-dark-200 dark:border-dark-600 placeholder:text-dark-200 w-full focus-within:border-primary-brand outline-none',
					error && 'border-red-500 dark:border-red-400',
					touched && !error && 'border-green-500 dark:border-green-400'
				)}
			/>
			{error && <span className='dark:text-red-400 block mt-4 font-light text-red-500'>{error}</span>}
		</div>
	)
})
Input.displayName = 'Input'

export const Textarea = ({ name, label, placeholder, required }: InputProps) => {
	const { error, getInputProps, touched } = useField(name)
	return (
		<div>
			<label
				htmlFor={name}
				className={clsx(
					'text-dark-400 dark:text-dark-200 inline-flex flex-col text-xl font-light relative ',
					required && "after:content-['*'] after:absolute after:-right-4 after:text-dark-300"
				)}
			>
				{label}
			</label>
			<textarea
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...getInputProps({ id: name, placeholder })}
				className={clsx(
					'py-4 px-3 h-40 bg-transparent text-2xl text-dark-400 dark:text-dark-200 dark:placeholder:text-dark-500 font-light mt-2 border-b-[1px] border-dark-200 dark:border-dark-600 placeholder:text-dark-200 w-full focus-within:border-primary-brand outline-none',
					error && 'border-red-500 dark:border-red-400',
					touched && !error && 'border-green-500 dark:border-green-400'
				)}
			/>
			{error && <span className='dark:text-red-400 block mt-4 font-light text-red-500'>{error}</span>}
		</div>
	)
}
Textarea.displayName = 'Textarea'

export const SubmitButton: FC = ({ children, ...props }) => (
	<button
		type='submit'
		className='text-dark-400 dark:text-dark-200 hover:text-dark-500 group gap-x-2 flex items-center text-3xl font-light transition duration-300 ease-in-out'
		// eslint-disable-next-line react/jsx-props-no-spreading
		{...props}
	>
		{children}
		<VscArrowRight
			size={36}
			className='text-dark-200 dark:text-dark-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-dark-300 block mb-1 transition duration-300 ease-in-out -rotate-45'
		/>
	</button>
)
