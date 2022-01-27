import React, { forwardRef, ReactNode } from 'react'
import { useField } from 'remix-validated-form'
import { useFormContext, useIsSubmitting } from 'remix-validated-form'

type InputProps = {
	name: string
	label: string
	placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, label, placeholder }, ref) => {
	const { error, getInputProps, touched } = useField(name)
	return (
		<div>
			<label htmlFor={name} className='flex flex-col text-xl text-primary-brand'>
				{label}
			</label>
			<input
				ref={ref}
				{...getInputProps({ id: name, placeholder })}
				className={`py-4 px-3 bg-transparent text-2xl text-white mt-2 border-b-[3px] border-stone-100/10 placeholder:text-stone-500 w-full focus-within:border-primary-brand outline-none ${
					error && 'border-red-400'
				} ${touched && !error && 'border-green-400'}`}
			/>
			{error && <span className='my-error-class mt-4 text-red-400 block'>{error}</span>}
		</div>
	)
})

export const Textarea = ({ name, label, placeholder }: InputProps) => {
	const { error, getInputProps, touched } = useField(name)
	return (
		<div>
			<label htmlFor={name} className='flex flex-col text-xl text-primary-brand'>
				{label}
			</label>
			<textarea
				{...getInputProps({ id: name, placeholder })}
				className={`py-4 px-3 bg-transparent text-2xl text-white mt-2 border-b-[3px] border-stone-100/10 placeholder:text-stone-500 w-full focus-within:border-primary-brand outline-none min-h-[10rem] ${
					error && 'border-red-400'
				} ${touched && !error && 'border-green-400'}`}
			></textarea>
			{error && <span className='my-error-class mt-4 text-red-400 block'>{error}</span>}
		</div>
	)
}

export const SubmitButton = ({ children, ...props }: { children: ReactNode }) => {
	return (
		<button
			type='submit'
			className='disabled:text-stone-500 text-2xl uppercase font-semibold hover:text-primary-brand'
			{...props}
		>
			{children}
		</button>
	)
}
