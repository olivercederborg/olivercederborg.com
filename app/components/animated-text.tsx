/* eslint-disable react/no-array-index-key */
import type { HTMLProps } from 'react'

import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

const textVariantsDefault: Variants = {
	visible: {},
}
const letterVariantsDefault: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { ease: 'circOut', duration: 0.5 },
	},
}

type AnimatedTextProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
	text: string
	variants?: Variants
} & HTMLProps<HTMLHeadingElement>

export const AnimatedText = ({
	as: Tag = 'div',
	text,
	variants = letterVariantsDefault,
	...rest
}: AnimatedTextProps) => {
	// Split the text into words and add a space after each word.
	const words = text.split(' ').map(word => `${word}\u00A0`)
	return (
		<Tag {...rest}>
			<motion.span variants={variants}>
				{words.map((word, index) => (
					<span key={index} className='inline-block overflow-hidden'>
						<motion.span variants={variants} className='inline-block'>
							{word}
						</motion.span>
					</span>
				))}
			</motion.span>
		</Tag>
	)
}

type AnimatedLettersProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
	text: string
	textVariants?: Variants
	letterVariants?: Variants
} & HTMLProps<HTMLHeadingElement>

export const AnimatedLetters = ({
	as: Tag = 'div',
	text,
	textVariants = textVariantsDefault,
	letterVariants = letterVariantsDefault,
	...rest
}: AnimatedLettersProps) => {
	// Split the text into words and add a space after each word.
	const words = text.split(' ').map(word => `${word}\u00A0`)
	return (
		<Tag {...rest}>
			<motion.span variants={textVariants}>
				{words.map((_, index) => (
					<span key={index} className='inline-block whitespace-nowrap'>
						{[...words[index]].flat().map((letter, letterIndex) => (
							<span key={letterIndex} className='inline-block overflow-hidden'>
								<motion.span variants={letterVariants} className='inline-block'>
									{letter}
								</motion.span>
							</span>
						))}
					</span>
				))}
			</motion.span>
		</Tag>
	)
}
