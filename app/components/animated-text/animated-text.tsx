'use client'

/* eslint-disable react/no-array-index-key */
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { useId, useMemo } from 'react'

import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

import { defaultLetterVariants, defaultTextVariants } from '@components/animated-text'

type AnimatedTextOwnProps<C extends ElementType> = {
  as?: C | ElementType
  text: string
  variants?: Variants
}

type AnimatedTextProps<C extends ElementType> = AnimatedTextOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof AnimatedTextOwnProps<C>>

export const AnimatedText = <C extends ElementType = 'p'>({
  as: Tag = 'p',
  text,
  variants = defaultLetterVariants,
  ...rest
}: AnimatedTextProps<C>) => {
  // Split the text into words and add a space after each word.
  const words = text.split(' ').map(word => `${word}\u00A0`)

  const renderWords = useMemo(
    () =>
      words.map((word, index) => (
        <span key={index} className='inline-block overflow-hidden'>
          <motion.span variants={variants} className='inline-block'>
            {word}
          </motion.span>
        </span>
      )),
    [variants, words]
  )

  return (
    <Tag {...rest}>
      <motion.span variants={variants}>{renderWords}</motion.span>
    </Tag>
  )
}

export type AnimatedLettersOwnProps<C extends ElementType> = {
  as?: C | ElementType
  text: string
  textVariants?: Variants
  letterVariants?: Variants
}

type AnimatedLettersProps<C extends ElementType> = AnimatedLettersOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof AnimatedLettersOwnProps<C>>

export const AnimatedLetters = <C extends ElementType = 'div'>({
  as: Tag = 'div',
  text,
  textVariants = defaultTextVariants,
  letterVariants = defaultLetterVariants,
  ...rest
}: AnimatedLettersProps<C>) => {
  // Split the text into words and add a space after each word.
  const words = text.split(' ').map(word => `${word}\u00A0`)

  const id = useId()

  return (
    <Tag {...rest}>
      <motion.span variants={textVariants}>
        {words.map((word, index) => (
          <span key={`${word}-${id}-${index}`} className='inline-block whitespace-nowrap'>
            {Array.from(word)
              .flat()
              .map((letter, letterIndex) => (
                <span
                  key={`${letter}-${id}-${letterIndex}`}
                  className='inline-block overflow-hidden'
                >
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
