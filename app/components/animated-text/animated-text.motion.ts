import type { Variants } from 'framer-motion'

export const defaultTextVariants: Variants = {
  visible: {},
}

export const defaultLetterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'circOut', duration: 0.5 },
  },
}
